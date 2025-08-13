import React from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import LoginForm from '../LoginForm';

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = async ({ email, password }) => {
    try {
      const response = await api.post('/users/login', { email, password });
      const token = response.data.token;
      if (token) {
        localStorage.setItem('token', token);
        navigate('/dashboard');
      } else {
        throw new Error('Invalid token received');
      }
    } catch (err) {
      throw new Error(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <LoginForm onLogin={handleLogin} />
    </div>
  );
}
