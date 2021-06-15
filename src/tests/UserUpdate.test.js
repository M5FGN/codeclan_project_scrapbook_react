import React from 'react';
import UserUpdate from '../components/users/UserUpdate';
import UserButtons from '../components/users/UserButtons';
import { render, fireEvent } from '@testing-library/react';

describe("UserUpdate", () => {
    let container;
   
    const mockChangeValue = jest.fn();
    const stubbedUser = {
      name: "Ahmet",
      bio: "Young Boy",
      profilepicture: "old memories"
      
    };

    // first test case to check all fields are empty
    it("shows all required input fields with empty values", () => {
        const { getByTestId } = render(
          <UserUpdate setUser={stubbedUser} />
        );
    
        expect(getByTestId("bio").value).toBe("");
        expect(getByTestId("profilepicture").value).toBe("");
      });

      

})
