import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload{
    sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction){
    
    const authToken = request.headers.authorization
    if(!authToken){
        return response.status(401).end();
    }

    const [, token] = authToken.split(" ");

    try{
        const {sub} = verify(token, "94dde074eff065a4ea4980d5798632f7") as IPayload
        request.user_id = sub;

        return next();
    }catch (err){
        return response.status(401).end();
    }

}