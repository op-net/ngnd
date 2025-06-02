import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Homepage';
import {homepage_url} from "./constants";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={homepage_url} element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
