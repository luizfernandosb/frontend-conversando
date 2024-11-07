import PrivateRoute from "./components/PrivateRoute";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  const [isAuthentic, setIsAuthentic] = useState(false);

  useEffect(() => {
    function isAuth() {
      const token = localStorage.getItem("token");
      setIsAuthentic(!!token);
    }
    isAuth();
  }, []);

  console.log(isAuthentic);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login setIsAuthentic={setIsAuthentic} />} />
        <Route
          path="/chat"
          element={
            <PrivateRoute isAuthentic={isAuthentic}>
              <Chat />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}
