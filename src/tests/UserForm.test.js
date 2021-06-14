import React from 'react';
import UserForm from '../components/UserForm';
import UserDetail from '../components/users/UserDetail'
import { render, fireEvent } from '@testing-library/react';


describe("UserForm", () => {
    let container;
   
    const mockChangeValue = jest.fn();
    const stubbedUser = {
      name: "Ahmet",
      password: "metallica"
    };

  
    // first test case to check all fields are empty
    it("shows all required input fields with empty values", () => {
      const { getByTestId } = render(
        <UserForm setUser={stubbedUser} />
      );
  
      expect(getByTestId("user-name").value).toBe("");
      expect(getByTestId("password").value).toBe("");
    });

    // second test case to check user can login
    it("login test user", () => {
        const { getByTestId } = render(
          <UserForm setUser={stubbedUser} />
        );
        getByTestId("user-name").value = "Ahmet";
        getByTestId("password").value = "metallica";

        getByTestId("log-in").onsubmit;

        let container = render(<UserDetail user={stubbedUser} />);
        expect(container.getByTestId('name')).toHaveTextContent("Ahmet");
    
      });
    })
