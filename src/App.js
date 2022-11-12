import './App.css';
import Layout from './components/layout/Layout';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Layout>
      <Routes>
        {/* <Route path="/" element={<HomePage />} />
        <Route path="/campaigns" element={<AllCampaigns />} />
        <Route path="/our-team" element={<EBoardMembers />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Layout>

  );
}

export default App;
