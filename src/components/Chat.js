import React, {useState, useEffect} from "react";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import ChatService from "../helpers/ChatService";


const Chat = ({foundRoom, user}) => {

    const [messages, setMessages] = useState([]);
    const [msgReceived, setMsgReceived] = useState(false);
    const [stompy, setStompy] = useState({});
    const [listMsgs, setListMsgs] = useState([]);
  
    
    let stompClient;
    let username = user.name;
    const request = new ChatService();
  
    const connect = async () => {
      const sock = new SockJS("http://localhost:8080/api/ws");
      stompClient = Stomp.over(sock);
      stompClient.connect({}, onConnected);
      setStompy(stompClient);
    };
  
    const onConnected = () => {
      stompClient.subscribe("/topic/public", onMessageReceived);
      stompClient.send(
        "/app/addUser",
        {},
        JSON.stringify({ sender: username, type: "JOIN" })
      );
    };
  
    const onMessageReceived = (payload) => {
      const message = JSON.parse(payload.body);
      fetchAllMessages();
      setMessages([...listMsgs, message]); // 
    };
  
    const fetchAllMessages = () => {
      request.getMessagesByRoomId(Number(foundRoom.id)).then((messages) => setMessages(messages));
    };
  
    const sendMessage = (event) => {
  
      
      event.preventDefault();
      stompClient = stompy;

      const d = new Date();
      const t = d.getTime();
      
      const newMessage = {
        message: event.target.message.value.trim(),
        sender: user.name,
        room: {
            id: foundRoom.id,
            roomName: foundRoom.roomName,
            bio: foundRoom.bio,
            password: foundRoom.password,
            admin: foundRoom.admin
        },
        timeStamp: t.toString()
      };
      
      request.post(newMessage);
  
      const message = event.target.message.value.trim();
  
      if (message && stompClient) {
  
        var chatMessage = {
          sender: username,
          content: message,
          type: "CHAT",
        };
  
        stompClient.send("/app/sendMessage", {}, JSON.stringify(chatMessage));
        console.log("this is the sent message", chatMessage);
        
        event.target.message.value = "";
      }
      event.target.message.value = "";
      fetchAllMessages();
    };
  
    useEffect(() => {
      connect();
      setTimeout(fetchAllMessages(), 1000)
    }, []);
  
    let messageList = [];
  
    if (messages) {
      messageList = messages.map((msg, index) => {
        return <li key={index}>{msg.sender} said: {msg.message}</li>;
      });
    }
  
    const newListMessages = listMsgs.map((msg, index) => {
      return <li key={index}>{msg.sender} said: {msg.message}</li>;
    });
  
    return (
      <>
        <form action="" onSubmit={sendMessage}>
          <input
            type="text"
            name="message"
          />
          <input type="submit" />
        </form>
        {/* <ul>{messageList ? messageList : fetchAllMessages()}</ul> */}
        <ul>
          {messageList}
          {listMsgs}
        </ul>
      </>
    );
  };
  export default Chat;