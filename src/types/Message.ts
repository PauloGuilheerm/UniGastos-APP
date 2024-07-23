export default class Message {
    _id: string;
    id: string;
    chatId: string;
    name: string;
    user: UserMessage;
    content?: string;
    createdAt: Date;
    system: boolean;
    text?: string;
    timestamp: number;
    type: string;
    userId: string;

    constructor(
        _id: string,
        id: string,
        chatId: string,
        createdAt: Date,
        name: string,
        system: boolean,
        timestamp: number,
        type: string,
        userId: string,
        user: UserMessage,
        text?: string,
        content?: string,
    ){
        this._id = _id;
        this.id = id;
        this.chatId = chatId;
        this.content = content;
        this.createdAt = createdAt;
        this.name = name;
        this.system = system;
        this.text = text;
        this.timestamp = timestamp;
        this.type = type;
        this.userId = userId;
        this.user = user;
    }
};

export class UserMessage {
    _id: string;
    name?: string;

    constructor(id: string, name?: string) {
        this._id = id;
        this.name = name;
    }
}