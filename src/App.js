import './App.css';
import Layout from './components/layout/Layout';
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login"
import "bootstrap/dist/css/bootstrap.css";
import { ToastContainer } from 'react-toastify';
import CourseCardList from './pages/CourseCardList';
import { GoogleOAuthProvider } from '@react-oauth/google';
import CourseDetailPanel from './pages/CourseDetailPanel';
import Question from "./components/questionsAnswers/Question"


function App() {
  return (
    <Layout>
      <GoogleOAuthProvider clientId="868855841872-sc6bivb284l92isq1r9cude5fqhkt149.apps.googleusercontent.com">
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route name="login" path="/login" element={<Login />} />
          <Route path="/courses" element={<CourseCardList />} />
          <Route name="courseDetailPanel" path="/courses/:codeName" element={<CourseDetailPanel />} />
          {/* <Route path="*" element={<NotFound />} /> */}
          <Route path='/' element={<Login />} />
          <Route path='/question' element={<Question/>}/>
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
        />
      </GoogleOAuthProvider>

    </Layout>

  );
}

export default App;
