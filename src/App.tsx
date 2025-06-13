import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Homepage';
import Networks from './Networks/Networks';
import Documentation from './Documentation';
import Contributors from './Contributors';
import PrivacyPolicy from './PrivacyPolicy';
import {homepage_url, networks_url, documentation_url, contributors_url, privacy_policy_url} from "./constants";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={homepage_url} element={<HomePage />} />
        <Route path={networks_url} element={<Networks />} />
        <Route path={documentation_url} element={<Documentation />} />
        <Route path={contributors_url} element={<Contributors />} />
        <Route path={privacy_policy_url} element={<PrivacyPolicy />} />        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
