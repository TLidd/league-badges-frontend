import './App.css';
import SummonerForm from './components/SummonerForm';
import SummonerPage from './components/SummonerPage/SummonerPage';
import SummonerLobby from './components/SummonerLobby';
import HelpPage from './components/HelpPage';
import ServerState from './components/ServerState';

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
    return <div className='server-down'>Server is <div className='offline-text'>offline</div>. Please Try again later.</div>
  }

  return (
    <div className="App">
      {serverOnline && pingingServer &&
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
      }
      <ServerState serverPingingFn={pingingServerCallback} serverOnlineFn={serverOfflineCallback} retries={12} intervalTimer={5}/>
      {!serverOnline && pingingServer &&
        <div className='ping-container'>
          <div className='pinging-server'>Connecting to server please wait.</div>
          <img className='ping-gif' src={require('./assets/loading.gif')} alt=''></img>
        </div>
      }
    </div>
  );
}

export default App;
