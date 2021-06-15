import Request from "./request";

class PostService extends Request {
  constructor() {
    super("http://localhost:8080/api/posts");
  }
}
