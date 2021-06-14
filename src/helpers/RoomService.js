import Request from "./request";

class RoomService extends Request {
  constructor() {
    super("http://localhost:8080/api/rooms");
  }

  getByRoomNameAndAdmin(roomName, admin) {
    return fetch(`${this.url}/room?name=${roomName}&email=${admin}`).then(
      (res) => {
        return res.json();
      }
    );
  }
}

export default RoomService;
