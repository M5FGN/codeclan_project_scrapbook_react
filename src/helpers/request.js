class Request {
  constructor(url) {
    this.url = url;
  }

  get() {
    return fetch(this.url).then((res) => res.json());
  }

  delete() {
    return fetch(this.url, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  }

  post(payload) {
    return fetch(this.url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  }

  patch(payload) {
    return fetch(this.url, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  }
}

export default Request;
