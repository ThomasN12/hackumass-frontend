import './App.css';
import Layout from './components/layout/Layout';
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login"
import "bootstrap/dist/css/bootstrap.css";
import { ToastContainer } from 'react-toastify';
import CourseCardList from './pages/CourseCardList';
import { GoogleOAuthProvider } from '@react-oauth/google';
import CourseDetailPanel from './pages/CourseDetailPanel';
import axios from 'axios';
// import ReviewPanel from './components/reviews/ReviewPanel/StarRatingCourse';
// import ReviewForm from './components/reviews/ReviewPanel/ReviewForm';

// import Question from "./components/questionsAnswers/Question"
import ReviewsList from './components/reviews/ReviewsList';
import { useContext, useEffect } from 'react';
import AuthContext from './store/auth-context';
import Landing from './pages/Landing';
function App() {
  const ctx = useContext(AuthContext);
  const clientId = process.env.REACT_APP_OATH_CLIENT_ID;
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token)
    {
      ctx.onLogout();
      return
    }
    let config = {
      headers: {
        'authorization': 'Bearer ' + token,
      }
    }
    const bodyParameters = {
      key: "value"
    };
    const baseUrl = process.env.REACT_APP_ROOT_API;
    axios.post(`${baseUrl}/auth/auth-token`, bodyParameters, config).then(res => {

      const { data } = res;
      const { status } = data;
      if (status === 200)
      {
        ctx.onLogin(data.data.user)
        // console.log(data.data.userInfo);
        // toast.success(data.success);
      }
    }).catch(err => {
      // toast.success(err.message);
      console.log(err)
    })
  }, [])
  return (
    <Layout>
      <GoogleOAuthProvider clientId={clientId}>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route name="login" path="/login" element={<Login />} />
          <Route path="/courses" element={<CourseCardList />} />
          <Route path="/courses/:codeName" element={<CourseDetailPanel />} />
          {/* <Route path="*" element={<NotFound />} /> */}
          {/* <Route path='/question' element={<Question/>}/> */}
          <Route path='/reviews/:codeName' element={<ReviewsList />} />
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
