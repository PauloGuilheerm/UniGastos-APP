import Costs from "./Costs";
import Message from "./Message";
import Participants from "./Participants";
import User from "./User";

export default class Room {
    id: string;
    roomId: string;
    roomName: string;
    costs: Costs;
    messages?: Message[];
    User?: User | null | undefined;
    Participants: Participants;
  
    constructor(
      id: string,
      roomId: string,
      roomName: string,
      costs: Costs,
      participants: Participants,
      user?: User | null | undefined,
      messages?: Message[],
    ) {
      this.id = id;
      this.roomId = roomId;
      this.roomName = roomName;
      this.costs = costs;
      this.Participants = participants;
      this.User = user;
      this.messages = messages;
    }

    
}