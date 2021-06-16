class Request {
  constructor(url) {
    this.url = url;
  }

  get() {
    return fetch(this.url).then((res) => res.json());
  }

  getById(id) {
    return fetch(this.url + id).then((res) => {
      return res.json();
    });
  }

  getByEmail(email){
    return fetch(this.url + `?email=${email}`).then((res) => res.json());
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

  put(payload) {
    return fetch(this.url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  }
}

export default Request;
