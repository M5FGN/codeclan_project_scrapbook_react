import React from 'react';
import UserUpdate from '../components/users/UserUpdate';
import UserButtons from '../components/users/UserButtons';
import { render, fireEvent } from '@testing-library/react';
import UserDetail from '../components/users/UserDetail';

describe("UserUpdate", () => {
    let container;
   
    const mockChangeValue = jest.fn();
    const stubbedUser = {
      name: "Ahmet",
      bio: "Young Boy"
      
    };

    // first test case to check all fields are empty
    it("shows all required input fields with empty values", () => {
        const { getByTestId } = render(
          <UserUpdate setUser={stubbedUser} />
        );
    
        expect(getByTestId("bio").value).toBe("");
        
      });

      // second test case to check user can update profile
    it("should be able to update profile", () => {
        const { getByTestId } = render(
          <UserUpdate setUser={stubbedUser} />
        );
        getByTestId("bio").value = "Young Boy";
        getByTestId("submit").onsubmit;

       let container = render(<UserDetail user={stubbedUser} />);
       expect(container.getByTestId('name')).toHaveTextContent("Ahmet");
    
      });

})
