class ChatService {
    constructor() {
      this.baseUrl = "http://localhost:8080/api/messages/";
    }
  
    getMessagesByRoomId = (id) => {
      return fetch(this.baseUrl + id).then((res) => res.json());
    };
  
    post = (payload) => {
      return fetch(this.baseUrl, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    };
  }
  
  export default ChatService;