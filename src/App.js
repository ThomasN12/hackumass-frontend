import './App.css';
import Layout from './components/layout/Layout';
import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login"
import "bootstrap/dist/css/bootstrap.css";
import TagList from './components/TagList';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Question from "./components/questionsAnswers/Question"


function App() {
  return (
    <Layout>
      <GoogleOAuthProvider clientId="868855841872-sc6bivb284l92isq1r9cude5fqhkt149.apps.googleusercontent.com">
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/tags" element={<TagList />} />
          {/* <Route path="*" element={<NotFound />} /> */}
          <Route path='/' element={<Login />} />
          <Route path='/question' element={<Question/>}/>
        </Routes>
      </GoogleOAuthProvider>

    </Layout>

  );
}

export default App;
