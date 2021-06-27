import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"

class ListUserReceiveComplimentsService {
    async execute(user_id: string){
        const complimentRepository = getCustomRepository(ComplimentsRepositories)

        const compliment = await complimentRepository.find({
            where : {
                user_receiver: user_id
            }
        })
        return compliment;
    }
}

export { ListUserReceiveComplimentsService }