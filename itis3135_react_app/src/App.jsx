import { Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import StaticPage from './pages/StaticPage.jsx';
import { ClientHome, ClientIdentify, ClientMeanings, ClientJournalism, ClientGallery } from './pages/ClientProject.jsx';
import { JsHome, Converter, DrumMachine, VotingSystem, BankAccount, WeatherApp, Survey, Inventory, SimpleJsPage } from './pages/JavaScriptCertification.jsx';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<StaticPage pageKey="index.html" />} />
        <Route path="/index.html" element={<StaticPage pageKey="index.html" />} />
        <Route path="/introduction" element={<StaticPage pageKey="introduction.html" />} />
        <Route path="/introduction.html" element={<StaticPage pageKey="introduction.html" />} />
        <Route path="/contract" element={<StaticPage pageKey="contract.html" />} />
        <Route path="/contract.html" element={<StaticPage pageKey="contract.html" />} />
        <Route path="/intro-form" element={<StaticPage pageKey="intro_form.html" />} />
        <Route path="/intro_form.html" element={<StaticPage pageKey="intro_form.html" />} />
        <Route path="/project-overview" element={<StaticPage pageKey="project_overview.html" />} />
        <Route path="/project_overview.html" element={<StaticPage pageKey="project_overview.html" />} />
        <Route path="/website-evaluations" element={<StaticPage pageKey="website_evaluations.html" />} />
        <Route path="/website_evaluations.html" element={<StaticPage pageKey="website_evaluations.html" />} />
        <Route path="/review1" element={<StaticPage pageKey="review1.html" />} />
        <Route path="/review1.html" element={<StaticPage pageKey="review1.html" />} />
        <Route path="/review2" element={<StaticPage pageKey="review2.html" />} />
        <Route path="/review2.html" element={<StaticPage pageKey="review2.html" />} />
        <Route path="/hobby" element={<StaticPage pageKey="hobby/index.html" />} />
        <Route path="/maliciousbeastdesigns" element={<StaticPage pageKey="maliciousbeastdesigns.com/index.html" />} />

        <Route path="/fcc/cards" element={<StaticPage pageKey="FCC/cards.html" />} />
        <Route path="/fcc/survey" element={<StaticPage pageKey="FCC/survey.html" />} />
        <Route path="/fcc/gallery" element={<StaticPage pageKey="FCC/gallery.html" />} />
        <Route path="/fcc/inventory" element={<StaticPage pageKey="FCC/inventory.html" />} />
        <Route path="/fcc/documentation" element={<StaticPage pageKey="FCC/documentation.html" />} />
        <Route path="/fcc/highlight" element={<StaticPage pageKey="FCC/highlight.html" />} />

        <Route path="/client-project" element={<ClientHome />} />
        <Route path="/client-project/index.html" element={<ClientHome />} />
        <Route path="/client-project/identify" element={<ClientIdentify />} />
        <Route path="/client-project/identify.html" element={<ClientIdentify />} />
        <Route path="/client-project/meanings" element={<ClientMeanings />} />
        <Route path="/client-project/meanings.html" element={<ClientMeanings />} />
        <Route path="/client-project/journalism" element={<ClientJournalism />} />
        <Route path="/client-project/journalism.html" element={<ClientJournalism />} />
        <Route path="/client-project/gallery" element={<ClientGallery />} />
        <Route path="/client-project/gallery.html" element={<ClientGallery />} />

        <Route path="/javascript-certification" element={<JsHome />} />
        <Route path="/javascript-certification/index.html" element={<JsHome />} />
        <Route path="/javascript-certification/converter" element={<Converter />} />
        <Route path="/javascript-certification/converter.html" element={<Converter />} />
        <Route path="/javascript-certification/machine" element={<DrumMachine />} />
        <Route path="/javascript-certification/machine.html" element={<DrumMachine />} />
        <Route path="/javascript-certification/voting" element={<VotingSystem />} />
        <Route path="/javascript-certification/voting.html" element={<VotingSystem />} />
        <Route path="/javascript-certification/bank" element={<BankAccount />} />
        <Route path="/javascript-certification/bank.html" element={<BankAccount />} />
        <Route path="/javascript-certification/weather" element={<WeatherApp />} />
        <Route path="/javascript-certification/weather.html" element={<WeatherApp />} />
        <Route path="/javascript-certification/survey" element={<Survey />} />
        <Route path="/javascript-certification/survey.html" element={<Survey />} />
        <Route path="/javascript-certification/inventory" element={<Inventory />} />
        <Route path="/javascript-certification/inventory.html" element={<Inventory />} />
        <Route path="/javascript-certification/documentation" element={<SimpleJsPage title="Documentation" />} />
        <Route path="/javascript-certification/documentation.html" element={<SimpleJsPage title="Documentation" />} />
        <Route path="/javascript-certification/cards" element={<SimpleJsPage title="Cards" />} />
        <Route path="/javascript-certification/cards.html" element={<SimpleJsPage title="Cards" />} />
        <Route path="/javascript-certification/product" element={<SimpleJsPage title="Product" />} />
        <Route path="/javascript-certification/product.html" element={<SimpleJsPage title="Product" />} />

        <Route path="*" element={<StaticPage pageKey="index.html" />} />
      </Routes>
      <Footer />
    </>
  );
}
