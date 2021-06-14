import Request from "./request";

class RoomService extends Request {
  constructor() {
    super("http://localhost:8080/api/rooms");
  }
}

export default RoomService;
