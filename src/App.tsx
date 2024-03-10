import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Article from "./components/Article";
import { trackPageView } from "./services/AnalyticsService";
import useGenerateUserUUID from "./hooks/useGenerateUserUUID";
import useAssignABTestVariation from "./hooks/useAssignABTestVariation";
import ABTestManager from "./modules/ABTestManager";
import Navbar from "./components/Navbar";

function App() {
  const userUUID = useGenerateUserUUID();
  const variationId = useAssignABTestVariation();

  useEffect(() => {
    trackPageView(window.location.pathname, userUUID, variationId);
  }, [userUUID, variationId]);

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Article />} />
        <Route path="/ab-tests" element={<ABTestManager />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
