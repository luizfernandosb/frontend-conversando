import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = () => {
    setEmail(event.target.value);
  };

  const handlePassword = () => {
    setPassword(event.target.value);
  };

  const loginData = {
    email: "teste@teste.com",
    password: "teste123",
  };

  const handleLogin = () => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/api/login", loginData, {
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    // console.log(password, email);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Digite seu e-mail"
              onChange={() => handleEmail()}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Senha
            </label>
            <input
              type="password"
              id="password"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Digite sua senha"
              onChange={() => handlePassword()}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
            onClick={() => handleLogin()}
          >
            Entrar
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Não tem uma conta?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Registre-se
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
