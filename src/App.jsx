import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";

import RedirectBrainrot from "./pages/RedirectBrainrot";

import Blog from "./pages/Blog";

import Header from "./components/Header";
import Footer from "./components/Footer";

// portfolio pages

import BrainrotArchive from "./pages/portfoliopages/BrainrotArchive";
import Catalist from "./pages/portfoliopages/Catalist";
import ChatTech from "./pages/portfoliopages/ChatTech";
import Crossword from "./pages/portfoliopages/Crossword";
import CuntyRoads from "./pages/portfoliopages/CuntyRoads";
import GermanPopulation from "./pages/portfoliopages/GermanPop";
import HellOnEarth from "./pages/portfoliopages/HellOnEarth";
import IEFinal from "./pages/portfoliopages/IEFinal";
import IEMidterm from "./pages/portfoliopages/IEMidterm";
import InventoryManagement from "./pages/portfoliopages/InventoryManagement";
import JimmyBuffett from "./pages/portfoliopages/JimmyBuffett";
import MastodonBot from "./pages/portfoliopages/MastodonBot";
import SubwaySafety from "./pages/portfoliopages/SubwaySafety";
import Taskr from "./pages/portfoliopages/Taskr";
import TruthOrDare from "./pages/portfoliopages/TruthOrDare";
import Velociraptor from "./pages/portfoliopages/Velociraptor";
import Zipcodeclock from "./pages/portfoliopages/ZipCodeClock";
import GermanDepartment from "./pages/portfoliopages/GermanDepartment";

import PostPage from "./pages/BlogPages/PostPage";

// Inside the <Routes> block:


// Blog Pages
import Login from "./pages/BlogPages/Login";
import { AuthProvider } from "./AuthContext";
import Dashboard from "./pages/BlogPages/Dashboard";
import CapstoneBlog from "./pages/BlogPages/CapstoneBlog";
import CriticalExperiencesBlog from "./pages/BlogPages/CriticalExperiencesBlog";

import NotFound from "./pages/NotFound";
function App() {
  return (
    <div className="App">
    <AuthProvider>
    <Router>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Gallery />} />

        <Route path="/blog" element={<Blog />} />

        <Route path="/brainrot" element={<RedirectBrainrot />} />

        {/* <Route path="/resume" element={<Resume />}/> */}
        {/* portfolio routes */}
        <Route path="/portfolio/brainrotarchive" element={<BrainrotArchive />} />
        <Route path="/portfolio/catalist" element={<Catalist/>}/> {/* html basically done, now just needs css */}
        <Route path="/portfolio/chattech" element={<ChatTech />} />
        <Route path="/portfolio/crossword" element={<Crossword />} />
        <Route path="/portfolio/cuntyroads" element={<CuntyRoads />} />
        <Route path="/portfolio/germandepartment" element={<GermanDepartment />} />
        <Route path="/portfolio/germanpopulation" element={<GermanPopulation />} />
        <Route path="/portfolio/hellonearth" element={<HellOnEarth />} />
        <Route path="/portfolio/iefinal" element={<IEFinal />} />
        <Route path="/portfolio/iemidterm" element={<IEMidterm />} />
        <Route path="/portfolio/inventorymanagement" element={<InventoryManagement />} />
        <Route path="/portfolio/jimmybuffett" element={<JimmyBuffett />} />
        <Route path="/portfolio/mastodonbot" element={<MastodonBot />} />
        <Route path="/portfolio/subwaysafety" element={<SubwaySafety />} />
        <Route path="/portfolio/taskr" element={<Taskr />} />
        <Route path="/portfolio/truthordare" element={<TruthOrDare />} />
        <Route path="/portfolio/velociraptor" element={<Velociraptor />} />
        <Route path="/portfolio/zipcodeclock" element={<Zipcodeclock />} />

        <Route path="/login" element={<Login/>}/>
        <Route path="/blog/dashboard" element={<Dashboard/>}/>
        <Route path="/blog/criticalexperiences" element={<CriticalExperiencesBlog/>}/>
        <Route path="/blog/capstone" element={<CapstoneBlog/>}/>  
        <Route path="/blog/:blog/post/:id" element={<PostPage />} />

        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer />
    </Router>
    </AuthProvider>
    </div>
  )
}

export default App;