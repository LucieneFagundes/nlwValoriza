import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IComplimentRequest{
    user_sender: string;
    user_receiver: string;
    tag_id: string;
    message: string;
}

class CreateComplimentService {
    async execute({user_sender, user_receiver, tag_id, message}: IComplimentRequest){

        const complimentsRepository = getCustomRepository(ComplimentsRepositories);
        const usersRepository = getCustomRepository(UsersRepositories);

        if(user_sender === user_receiver){
            throw new Error("You can not compliment youself!")
        }

        const userReceiverExists = await usersRepository.findOne(user_receiver);

        if(!userReceiverExists){
            throw new Error("User receiver does not exists!");
        }

        const compliment = complimentsRepository.create({
            tag_id,
            user_receiver,
            user_sender,
            message
        });

        await complimentsRepository.save(compliment);

        return compliment;
    }
}

export {CreateComplimentService}