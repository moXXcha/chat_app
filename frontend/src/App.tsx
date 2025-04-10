import "./App.css";
import "./index.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Signup from "./pages/Signup";
import Layout from "./layout/Layout";
import Login from "./pages/Login";
import CreateUser from "./pages/CreateUser";
import CreateMessageRoom from "./pages/CreateMessageRoom";
import Rooms from "./pages/Rooms";
import TalkRoom from "./pages/TalkRoom";
import AuthenticatedLayout from "./layout/AuthenticatedLayout";
import PrivatePage from "./layout/PrivatePage";
import AllreadyLoginRoute from "./layout/AllreadyLoginRoute";
import AllreadyCreateProfile from "./layout/AllreadyCreateProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PrivatePage>
              <Layout>
                <App />
              </Layout>
            </PrivatePage>
          }
        />
        <Route
          path="/signup"
          element={
            <AllreadyLoginRoute>
              <Layout>
                <Signup />
              </Layout>
            </AllreadyLoginRoute>
          }
        />
        <Route
          path="/login"
          element={
            <AllreadyLoginRoute>
              <Layout>
                <Login />
              </Layout>
            </AllreadyLoginRoute>
          }
        />

        <Route
          path="/user/create"
          element={
            <PrivatePage>
              <AllreadyCreateProfile>
                <Layout>
                  <CreateUser />
                </Layout>
              </AllreadyCreateProfile>
            </PrivatePage>
          }
        />
        <Route
          path="/room/create"
          element={
            <PrivatePage>
              <AuthenticatedLayout>
                <CreateMessageRoom />
              </AuthenticatedLayout>
            </PrivatePage>
          }
        />
        <Route
          path="/rooms/"
          element={
            <PrivatePage>
              <AuthenticatedLayout>
                <Rooms />
              </AuthenticatedLayout>
            </PrivatePage>
          }
        />
        <Route
          path="/room/:id"
          element={
            <PrivatePage>
              <AuthenticatedLayout>
                <TalkRoom />
              </AuthenticatedLayout>
            </PrivatePage>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
