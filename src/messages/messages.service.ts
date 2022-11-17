import { MessagesRepository } from "./messages.repository";

export class MessagesService {
    private messagesRepo: MessagesRepository;

    constructor() {
        this.messagesRepo = new MessagesRepository();
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