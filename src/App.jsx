import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contract from "./pages/Contract";
import IntroductionForm from "./pages/IntroductionForm";
import WebsiteEvaluations from "./pages/WebsiteEvaluations";
import Hobby from "./pages/Hobby";
import DesignHome from "./pages/DesignHome";

import Cards from "./pages/fcc/Cards";
import Survey from "./pages/fcc/Survey";
import Gallery from "./pages/fcc/Gallery";
import Inventory from "./pages/fcc/Inventory";
import Instructions from "./pages/fcc/Instructions";
import Documentation from "./pages/fcc/Documentation";
import Highlight from "./pages/fcc/Highlight";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contract" element={<Contract />} />
        <Route path="introduction-form" element={<IntroductionForm />} />
        <Route path="website-evaluations" element={<WebsiteEvaluations />} />
        <Route path="hobby" element={<Hobby />} />
        <Route path="design" element={<DesignHome />} />

        <Route path="fcc/cards" element={<Cards />} />
        <Route path="fcc/survey" element={<Survey />} />
        <Route path="fcc/gallery" element={<Gallery />} />
        <Route path="fcc/inventory" element={<Inventory />} />
        <Route path="fcc/instructions" element={<Instructions />} />
        <Route path="fcc/documentation" element={<Documentation />} />
        <Route path="fcc/highlight" element={<Highlight />} />
      </Route>
    </Routes>
  );
}