import { NextFunction, Request, Response } from "express";
import jwt  from 'jsonwebtoken';
import UserModel from "../models/User";
import { JwtPayloadWithUserId } from "../dtos/jwt.dto";

export interface AuthRequest extends Request{
    user?:any;
}

export const authMiddleware=async(req:Request,res:Response,next:NextFunction)=>{

    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(400).json({
            message:"Please provide token!!!"
        })
    }
    try {
        const decode = jwt.verify(token,process.env.JWT_SECRETE as string) as JwtPayloadWithUserId;
        const user = await UserModel.findById(decode.userId);

        if (!user) {
            return res.status(404).json({message:'User not found'})
        }

        req.user = user;
        next();
        
    } catch (error) {
        console.log("auth middleware error",error);
        return res.status(500).json({message:"Invalid token"})
        
    }

}