import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Stomp from "stompjs";
import Chat from '../components/Chat';

describe("Chat", () => {

    const stubbedFoundRoom = {
        id:1,
        roomName:"memories",
    }

    const stubbedUser = {
        name: "Ahmet",
    }
    
    // const mockChangeValue = jest.fn();
    // const stubbedUser = {message: "Hi how are you?", name: "Ahmet"};
    let container;

    beforeEach(() => {
         const messageList = [{sender:"Ahmet", message:"Liam"}]
         container = render(<Chat foundRoom={stubbedFoundRoom} user={stubbedUser}/>);  
    })
    
    // first test case to check message field is empty
    it("shows message field with empty value", () => {
        const { getByTestId } = container;
        //getByTestId("dmessage").value = "testing";
        expect(getByTestId("dmessage").value).toBe("");   
      });

    //Second test case to enter message into the field and submit
    it("enter message into the field", () => {
        const { getByTestId } = container;
        getByTestId("dmessage").value = "testing message";
        getByTestId("submit").onsubmit;  

        const messageList = [{sender:"Ahmet", message:"testing message"}];

        // console.log("textcontent == "+getByTestId('dmessagelist').textContent);
        expect(container.getByTestId('dmessagelist')).toContainHTML("<ul data-testid=\"dmessagelist\" />");
      });

})