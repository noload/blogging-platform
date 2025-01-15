import { Response,Request,NextFunction } from "express"

export const roleMiddleware =async (roles:string[]):Promise<any> => {
    return (req:Request,res:Response,next:NextFunction)=>{
        if (!req.user) {
            return res.status(400).json({message:"user not authenticated"})
        }

        if (!roles.includes(req.user.role)) {
            return res.status(400).json({message:"Forbidden:You do not have permission"})
        }
        return next();
    }
}