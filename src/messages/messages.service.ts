import { MessagesRepository } from "./messages.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MessagesService {
    messagesRepo: MessagesRepository;

    constructor(messagesRepo: MessagesRepository) {
        this.messagesRepo = messagesRepo;
    }

    findAll() {
        return this.messagesRepo.findAll();
    }

    findOne(id: string) {
        return this.messagesRepo.findOne(id);
    }

    create(content: string) {
        return this.messagesRepo.create(content);
    }
}