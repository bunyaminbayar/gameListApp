import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Login from './Login';

describe('Login component', () => {
  test('renders the component', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
  });

  test('validates input fields', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'invalid-email' } });
    fireEvent.blur(screen.getByLabelText(/Email/i));
    expect(screen.getByText(/Please enter a valid email address/i)).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: '' } });
    fireEvent.blur(screen.getByLabelText(/Password/i));
    expect(screen.getByText(/Please enter a password/i)).toBeInTheDocument();
  });

  test('submits the form with valid credentials', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'a@a.a' } });
    fireEvent.blur(screen.getByLabelText(/Email/i));
    fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: '1234' } });
    fireEvent.blur(screen.getByLabelText(/Password/i));
    fireEvent.click(screen.getByRole('button', { name: /Login/i }));
    expect(screen.getByText(/Incorrect email or password/i)).not.toBeInTheDocument();
  });

  test('submits the form with invalid credentials', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'invalid-email' } });
    fireEvent.blur(screen.getByLabelText(/Email/i));
    fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'invalid-password' } });
    fireEvent.blur(screen.getByLabelText(/Password/i));
    fireEvent.click(screen.getByRole('button', { name: /Login/i }));
    expect(screen.getByText(/Incorrect email or password/i)).toBeInTheDocument();
  });

  test('navigates to the registration page', () => {
    const historyMock = { push: jest.fn() };
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    fireEvent.click(screen.getByRole('button', { name: /Register/i }));
    expect(historyMock.push).toHaveBeenCalledWith('/register');
  });
});
