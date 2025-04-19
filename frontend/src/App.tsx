import "./App.css";
import "./index.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Signup from "./pages/Signup";
import Layout from "./layout/Layout";
import Login from "./pages/Login";
import CreateUser from "./pages/CreateUser";
import CreateMessageRoom from "./pages/CreateMessageRoom";
import TalkRoom from "./pages/TalkRoom";
import AuthenticatedLayout from "./layout/AuthenticatedLayout";
import PrivatePage from "./layout/PrivatePage";
import AllreadyLoginRoute from "./layout/AllreadyLoginRoute";
import AllreadyCreateProfile from "./layout/AllreadyCreateProfile";
import RoomsPage from "./pages/RoomsPage";
import { AuthProvider } from "./layout/AuthContext";

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
              <AuthProvider>
                <AllreadyCreateProfile>
                  <Layout>
                    <CreateUser />
                  </Layout>
                </AllreadyCreateProfile>
              </AuthProvider>
            </PrivatePage>
          }
        />
        <Route
          path="/room/create"
          element={
            <PrivatePage>
              <AuthProvider>
                <AuthenticatedLayout>
                  <CreateMessageRoom />
                </AuthenticatedLayout>
              </AuthProvider>
            </PrivatePage>
          }
        />
        <Route
          path="/rooms/"
          element={
            <PrivatePage>
              <AuthProvider>
                <AuthenticatedLayout>
                  <RoomsPage />
                </AuthenticatedLayout>
              </AuthProvider>
            </PrivatePage>
          }
        />
        <Route
          path="/room/:id"
          element={
            <PrivatePage>
              <AuthProvider>
                <AuthenticatedLayout>
                  <TalkRoom />
                </AuthenticatedLayout>
              </AuthProvider>
            </PrivatePage>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
