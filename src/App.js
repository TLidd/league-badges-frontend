import './App.css';
import SummonerForm from './components/SummonerForm';
import SummonerPage from './components/SummonerPage/SummonerPage';
import SummonerLobby from './components/SummonerLobby';
import HelpPage from './components/HelpPage';
import ServerState from './components/ServerState';
import SummonerGameView from './components/SummonerPage/SummonerGameView';

import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import { useState } from 'react';

function App() {
  const reload = () => window.location.reload();
  document.body.style.overflow = "hidden";

  let [pingingServer, setPingingServer] = useState(true);
  let [serverOnline, setServerOffline] = useState(false);

  function pingingServerCallback(state){
    setPingingServer(state);
  }

  function serverOfflineCallback(serverOff){
    setServerOffline(serverOff);
  }

  if(!serverOnline && !pingingServer){
    return <span className='server-down'>Server is <span className='offline-text'>offline</span>. Please Try again later.</span>
  }

  return (
    <div className="App">
      {serverOnline && pingingServer &&
        <Router>
          <Routes>
            <Route exact path="" element={<SummonerForm />} />
            <Route exact path={`/Help`} element={<HelpPage />} />
            <Route exact path={`/account/:region/:name`} element={<SummonerPage />} />
            <Route exact path={`/account/:region/:name/gameView/:gameId`} element={<SummonerGameView />} />
            <Route exact path={`/account/:region/:name/ActiveGame/*`} element={<SummonerLobby />} />
            <Route exact path={'//riot.txt'} onEnter={reload} />
            <Route element={<SummonerForm />}/>
          </Routes>
        </Router>
      }
      <ServerState serverPingingFn={pingingServerCallback} serverOnlineFn={serverOfflineCallback} retries={12} intervalTimer={5}/>
      {!serverOnline && pingingServer &&
        <div className='ping-container'>
          <span className='pinging-server'>Connecting to server please wait.</span><br/>
          <img className='ping-gif' src={require('./assets/loading.gif')} alt=''></img>
        </div>
      }
    </div>
  );
}

export default App;
