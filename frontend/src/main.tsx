import { createRoot } from "react-dom/client";
import "./index.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import Signup from "./pages/Signup";
import Layout from "./layout/Layout";
import Login from "./pages/Login";
import CreateUser from "./pages/CreateUser";
import CreateMessageRoom from "./pages/CreateMessageRoom";
import Rooms from "./pages/Rooms";
import TalkRoom from "./pages/TalkRoom";
import AuthenticatedLayout from "./layout/AuthenticatedLayout";

createRoot(document.getElementById("root")!).render(
  <Router>
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <App />
          </Layout>
        }
      />
      <Route
        path="/signup"
        element={
          <Layout>
            <Signup />
          </Layout>
        }
      />
      <Route
        path="/login"
        element={
          <Layout>
            <Login />
          </Layout>
        }
      />
      <Route
        path="/user/create"
        element={
          <Layout>
            <CreateUser />
          </Layout>
        }
      />
      <Route
        path="/room/create"
        element={
          <AuthenticatedLayout>
            <CreateMessageRoom />
          </AuthenticatedLayout>
        }
      />
      <Route
        path="/rooms/"
        element={
          <AuthenticatedLayout>
            <Rooms />
          </AuthenticatedLayout>
        }
      />
      <Route
        path="/room/:id"
        element={
          <AuthenticatedLayout>
            <TalkRoom />
          </AuthenticatedLayout>
        }
      />
    </Routes>
  </Router>
);
