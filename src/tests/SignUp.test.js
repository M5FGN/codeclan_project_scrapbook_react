import React from 'react';
import SignUp from '../components/SignUp';
import { render, fireEvent } from '@testing-library/react';
import UserForm from '../components/UserForm';


describe("SignUp", () => {
    let container;
   
    const mockChangeValue = jest.fn();
    const stubbedUser = {
      name: "",
      DOB: "",
      password: "",
      confirmpassword: ""
    };

  
    // first test case to check all fields are empty
    it("shows all required input fields with empty values", () => {
      const { getByTestId } = render(
        <SignUp />
      );
  
      expect(getByTestId("name").value).toBe("");
      expect(getByTestId("DOB").value).toBe("");
      expect(getByTestId("password").value).toBe("");
      expect(getByTestId("confirmpassword").value).toBe("");
    });

    // second test case to check user can signed up
    it("should be able to signed up ", () => {
        const { getByTestId } = render(
          <SignUp />
        );
        getByTestId("name").value = "Ahmet";
        getByTestId("DOB").value = "01/11/1974";
        getByTestId("password").value = "metallica";

        getByTestId("confirmpassword").value = "metallica";

        getByTestId("submit").onsubmit;

        container = render(<UserForm />);
        expect(container.getByTestId('log-in-scrapbook'));
    
      });
    })
