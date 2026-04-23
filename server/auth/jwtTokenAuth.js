import jwt from 'jsonwebtoken';
import {config} from 'dotenv';
import fx from '../shared/fx.js'
config();

const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';


// ✅ Function to generate (encode) a JWT
export const encodeToken = (payload, expiresIn = '50d') => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn });
};

// ✅ Function to verify (decode) a JWT
export const decodeToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return null; // Or throw error
  }
};

// ✅ Helper function to get Authorization header data
export const getAuthHeader = (req) => {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith('Bearer ')) return null;
  return authHeader.split(' ')[1]; // returns token only
};

// ✅ Middleware to protect routes
const authMiddleware = (req, res, next) => {

  const authHeader = req.headers.authorization;

  if(authHeader === 'Bearer null'){
    fx.sendResponse(res , {status:false , message: 'Token is not there' , statusCode: 401})
  }

  if (!authHeader?.startsWith('Bearer ')) {
    fx.sendResponse(res, {status:false , message: 'Token is missing or invalid', statusCode:401})
  }

  const token = authHeader.split(' ')[1];
  const decoded = decodeToken(token);

try{
  if(decoded.status == 0){
    fx.sendResponse(res, {status:false, message: 'Inactive client have no permissions' , statusCode:403})
  }
}catch(err){
  fx.sendResponse(res,{status:false, statusCode:403 , message:"Token is not valid"})
}

  if (!decoded) {
    fx.sendResponse(res, {status:false , message: 'Invalid token' , statusCode: 403})
  }

  req.user = decoded;
  next();
};

export default authMiddleware;
