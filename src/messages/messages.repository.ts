import { Injectable } from "@nestjs/common";
import { readFile, writeFile } from "fs/promises";

@Injectable()
export class MessagesRepository {
    async findAll() {
        const contents = await readFile('messages.json', 'utf8');
        const messages = JSON.parse(contents);
        return messages;
    }
    
    async findOne(id: string) {
        const contents = await readFile('messages.json', 'utf8');
        const messages = JSON.parse(contents);
        return messages[id];
    }

    async create(messagePayload: string) {
        const contents = await readFile('messages.json', 'utf8');
        const messages = JSON.parse(contents);
        const id = await this.generateRandomId()
        messages[id] = {
            id,
            content: messagePayload
        }
        await writeFile('messages.json', JSON.stringify(messages));
    }

    async generateRandomId() {
        const id = Math.floor(Math.random() * 999);
        const contents = await readFile('messages.json', 'utf8');
        const messages = JSON.parse(contents);
        let idAlreadyUsed = messages[id];
        if(!idAlreadyUsed) {
            return id;
        } else {
            return this.generateRandomId();
        }
    }
}
