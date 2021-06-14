import UserForm from '../components/UserForm';
import { render, fireEvent } from '@testing-library/react';

describe('UserForm', () => {
  
    let container;
    beforeEach(() => {
        const logIn = [{name: "Ahmet", password:"metallica"}]
        container = render(<UserForm logIn={logIn} />);
      
    })

    it('should be logIn', () => {
        const logInButton = container.getByTestId('log-in');
        fireEvent.click(logInButton)
        expect(container.getAllByTestId('logged-in')).toHaveTextContent("Ahmet", "metallica");
      });

})


















// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
