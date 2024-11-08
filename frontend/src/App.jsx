// App.js
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  const { isAuthentic } = useAuth(); // Correção: desestruture para pegar apenas isAuthentic

  return (
    // <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={isAuthentic ? <Chat /> : <Login />} />
          <Route
            path="/chat"
            element={
              <PrivateRoute>
                <Chat />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    // </AuthProvider>
  );
}
