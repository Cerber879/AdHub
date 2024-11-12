import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/slices/userSlise';
import { login } from '../../services/api';
import { User } from '../../modules/types';

const Login: React.FC = () => {
  const [loginInput, setLoginInput] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const user: User = await login(loginInput, password);
      dispatch(setUser(user));
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Login"
        value={loginInput}
        onChange={(e) => setLoginInput(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
