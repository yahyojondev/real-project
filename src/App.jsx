import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Auth from "./pages/auth/Auth";
import Login from "./pages/login/Login";
import Layout from "./pages/layout/Layout";
import DownloadLogin from "./pages/downloadLogin/DownloadLogin";
import "swiper/css";
import "swiper/css/pagination";
import Sertifikat from "./components/sertifikat/Sertifikat";
import Lessontables from "./pages/lessonTables/Lessontables";
import Science from "./pages/science/Science";
import Homework from "./pages/homework/Homework";
import PrivateOffice from "./pages/privateOffice/PrivateOffice";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/downloadLogin" element={<DownloadLogin />} />
        <Route path="/sertifikat" element={<Sertifikat />} />
        <Route path="/lessonTables" element={<Lessontables />} />
        <Route path="/science" element={<Science />} />
        <Route path="/homework" element={<Homework />} />
        <Route path="/privateOffice" element={<PrivateOffice />} />
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Auth />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
