import { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'juanmalaver@gmail.com' && password === 'Juanma1511') {
      onLogin(true);
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div className="w-1/3 mx-auto mt-10">
      <div className="flex justify-center items-center h-full">
        <img
          src="./usuario.png"
          alt="Descripción de la imagen"
          className="w-32 h-auto  mb-6 rounded"
        />
      </div>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full p-2 border rounded mb-4"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block w-full p-2 border rounded mb-4"
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
