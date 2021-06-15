import Request from "./request";

class UserService extends Request {
  constructor() {
    super("http://localhost:8080/api/users/");
  }
  put(payload, id) {
    return fetch(this.url + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  }

  d;

  addRoomToUser(room, id) {
    return fetch(`${this.url}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(room),
    });
  }
}

export default UserService;
