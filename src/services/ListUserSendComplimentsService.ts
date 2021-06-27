import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";

class ListUserSendComplimentsService {
    async execute(user_id: string){
        const complimentRepository = getCustomRepository(ComplimentsRepositories)

        const compliment = await complimentRepository.find({
            where : {
                user_sender: user_id
            }
        })
        return compliment;
    }
}

export { ListUserSendComplimentsService}