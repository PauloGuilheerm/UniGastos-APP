export class Chat {
    id: string;
    roomId: string;
    roomName: string;

    constructor(id: string, roomId: string, roomName: string){
        this.id = id;
        this.roomId = roomId;
        this.roomName = roomName;
    }
}