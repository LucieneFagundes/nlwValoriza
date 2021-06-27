import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories";

class ListTagsService{
    async execute(){
        const tagsRepository = getCustomRepository(UsersRepositories);
        const tags = await tagsRepository.find();

        return classToPlain(tags);
    }
}

export {ListTagsService}