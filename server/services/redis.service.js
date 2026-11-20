import Redis from 'ioredis';
import { config } from 'dotenv';

config();

class RedisService {
    constructor() {
        this.isConnected = false;
        const host = process.env.REDIS_HOST || '127.0.0.1';
        const port = Number(process.env.REDIS_PORT) || 6379;

        try {
            this.client = new Redis({
                host,
                port,
                lazyConnect: false,
                maxRetriesPerRequest: 1,
                enableOfflineQueue: false,
                retryStrategy: (times) => {
                    if (times > 5) {
                        return null; // Stop retrying after 5 attempts to prevent log flood
                    }
                    return Math.min(times * 150, 2000);
                }
            });

            this.client.on('connect', () => {
                this.isConnected = true;
                console.log(`[Redis] Connected successfully to ${host}:${port}`);
            });

            this.client.on('ready', () => {
                this.isConnected = true;
            });

            this.client.on('error', (err) => {
                this.isConnected = false;
                console.warn('[Redis] Connection warning:', err.message);
            });

            this.client.on('close', () => {
                this.isConnected = false;
            });

        } catch (err) {
            this.isConnected = false;
            console.warn('[Redis] Initialization error (continuing without cache):', err.message);
        }
    }

    isReady() {
        return this.isConnected || this.client?.status === 'ready';
    }

    /**
     * Get parsed value from Redis. Returns null on cache-miss or error.
     */
    async get(key) {
        if (!this.isReady()) return null;
        try {
            const data = await this.client.get(key);
            if (!data) return null;
            return JSON.parse(data);
        } catch (err) {
            console.warn(`[Redis] Get failed for key "${key}":`, err.message);
            return null;
        }
    }

    /**
     * Store key-value in Redis with TTL in seconds (default: 300s / 5 mins).
     */
    async set(key, value, ttlSeconds = 300) {
        if (!this.isReady()) return false;
        try {
            const payload = JSON.stringify(value);
            if (ttlSeconds && ttlSeconds > 0) {
                await this.client.set(key, payload, 'EX', ttlSeconds);
            } else {
                await this.client.set(key, payload);
            }
            return true;
        } catch (err) {
            console.warn(`[Redis] Set failed for key "${key}":`, err.message);
            return false;
        }
    }

    /**
     * Delete a single key.
     */
    async del(key) {
        if (!this.isReady()) return false;
        try {
            await this.client.del(key);
            return true;
        } catch (err) {
            console.warn(`[Redis] Del failed for key "${key}":`, err.message);
            return false;
        }
    }

    /**
     * Delete keys matching a wildcard pattern (e.g. 'cache:dashboard:*').
     */
    async delByPattern(pattern) {
        if (!this.isReady()) return false;
        try {
            const keys = await this.client.keys(pattern);
            if (keys && keys.length > 0) {
                await this.client.del(...keys);
            }
            return true;
        } catch (err) {
            console.warn(`[Redis] DelByPattern failed for pattern "${pattern}":`, err.message);
            return false;
        }
    }

    /**
     * Return status and stats for health monitoring.
     */
    async getStatus() {
        if (!this.isReady()) {
            return {
                status: 'Offline',
                connected: false,
                memory_used: 'N/A'
            };
        }
        try {
            const info = await this.client.info('memory');
            const match = info.match(/used_memory_human:(.+)/);
            const memoryUsed = match ? match[1].trim() : 'Active';

            return {
                status: 'Online',
                connected: true,
                memory_used: memoryUsed
            };
        } catch {
            return {
                status: 'Online',
                connected: true,
                memory_used: 'Active'
            };
        }
    }
}

export default new RedisService();
