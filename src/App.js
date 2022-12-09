import './App.css';
import SummonerForm from "./components/SummonerForm";
import SummonerPage from './components/SummonerPage';
import SummonerLobby from './components/SummonerLobby';
import HelpPage from './components/HelpPage';

import {Route, BrowserRouter as Router, Routes} from "react-router-dom"

function App() {
  const reload = () => window.location.reload();
  document.body.style.overflow = "hidden"
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="" element={<SummonerForm />} />
          <Route exact path={`/Help`} element={<HelpPage />} />
          <Route exact path={`/account/:name`} element={<SummonerPage />} />
          <Route exact path={`/account/:name/ActiveGame/*`} element={<SummonerLobby />} />
          <Route exact path={'//riot.txt'} onEnter={reload} />
          <Route element={<SummonerForm />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
