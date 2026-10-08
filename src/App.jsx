import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Team from "./Components/Team";
import LatestProjects from "./Components/ProjectDetails/Latestprojects";
import ViewMore from "./Components/ProjectDetails/ViewMore";
import SoftwareSection from "./Components/Software/SoftwareSection";
import Services from "./Components/Services";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Home />
                            <Team />
                            <LatestProjects />
                            <SoftwareSection/>
                            <Services/>
                        </>
                    }
                />
                <Route path="/project/:id" element={<ViewMore />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;