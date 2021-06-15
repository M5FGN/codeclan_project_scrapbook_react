import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Stomp from "stompjs";
import Chat from '../components/Chat';

describe("Chat", () => {
    
    // const mockChangeValue = jest.fn();
    // const stubbedUser = {message: "Hi how are you?", name: "Ahmet"};
    let container;

    beforeEach(() => {
        const messageList = [{sender:"Ahmet", message:"Liam"}]
        container = render(<Chat messageList={messageList} />);
      
    })
    // first test case to check message field is empty
    xit("shows message field with empty value", () => {
        const { getByTestId } = render(<Chat  messageList={messageList} />);
        expect(getByTestId('message').value).toBe("");
      
      });

})