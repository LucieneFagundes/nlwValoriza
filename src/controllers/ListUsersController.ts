import { Request, Response } from "express";
import { ListTagsService } from "../services/ListTagsService";

class ListUsersController{
    async handle(request: Request, response: Response){
        const listUsersService = new ListTagsService();
        const users = await listUsersService.execute();

        return response.json(users);
    }
}

export {ListUsersController}