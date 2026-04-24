import type {NextFunction, Request, Response} from "express";
import jwt from "jsonwebtoken";

export default function authenticate(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({message: 'Unauthorized'});
    }

    const token = authHeader.slice(7);
    if (!token) {
        return res.status(401).json({message: "Authorization token missing"});
    }

    const secret = process.env.JWT_SECRET;
    if (!secret) {
        return res.status(500).json({ message: "Server configuration error" });
    }

    try {
        req.user = jwt.verify(token, secret);
        next();
    } catch (error) {
        return res.status(401).json({message: "Invalid token"});
    }
}