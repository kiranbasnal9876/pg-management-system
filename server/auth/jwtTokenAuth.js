import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
import fx from '../shared/fx.js';

config();

const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';

// Function to generate (encode) a JWT
export const encodeToken = (payload, expiresIn = '50d') => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn });
};

// Function to verify (decode) a JWT
export const decodeToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return null;
  }
};

// Helper function to get Authorization header data
export const getAuthHeader = (req) => {
  const authHeader = req.headers?.authorization;
  if (!authHeader || typeof authHeader !== 'string' || !authHeader.startsWith('Bearer ')) return null;
  const token = authHeader.split(' ')[1];
  if (!token || token === 'null' || token === 'undefined') return null;
  return token;
};

// Middleware to protect routes
const authMiddleware = (req, res, next) => {
  const token = getAuthHeader(req);

  if (!token) {
    return fx.sendResponse(res, { status: false, message: 'Authentication token is missing or invalid', statusCode: 401 });
  }

  const decoded = decodeToken(token);
  if (!decoded) {
    return fx.sendResponse(res, { status: false, message: 'Invalid or expired token', statusCode: 401 });
  }

  if (decoded.status === 0) {
    return fx.sendResponse(res, { status: false, message: 'Inactive account does not have access permissions', statusCode: 403 });
  }

  req.user = decoded;
  next();
};

export default authMiddleware;

