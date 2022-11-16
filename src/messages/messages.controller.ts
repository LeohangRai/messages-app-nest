import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {

    @Get()
    getMessages() {
        // get all messages
    }

    @Post()
    createMessage(@Body() body: CreateMessageDto) {
        // create message
        console.log("body:", body);
    }

    @Get('/:id')
    getMessageById(@Param('id') id: string) {
        // get message by ID
        console.log("id:", id);
    }

}
