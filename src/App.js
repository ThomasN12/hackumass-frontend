import './App.css';
import Layout from './components/layout/Layout';
import { Route, Routes } from "react-router-dom";
import Login from './components/login/Login.js';
import "bootstrap/dist/css/bootstrap.css";


function App() {
  return (
    <Layout>
      <Routes>
        {/* <Route path="/" element={<HomePage />} />
        <Route path="/campaigns" element={<AllCampaigns />} />
        <Route path="/our-team" element={<EBoardMembers />} />
        // <Route path="*" element={<NotFound />} /> */
        <Route path='/' element={<Login/>}/>
        }
      </Routes>
    </Layout>

  );
}

export default App;
