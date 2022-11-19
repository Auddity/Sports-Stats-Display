import React, { useEffect, useState } from 'react';
import '../sass/layout/_Aside.scss';
import { useSelector } from 'react-redux';
import LeaderCard from './LeaderCard';
import axios from 'axios';

const Aside = () => {
  const { isOpen } = useSelector(store => store.aside);

  const [state, setState] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'http://localhost:8000/aside',
    };

    axios
      .request(options)
      .then(response => {
        setState(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  console.log(state.topPlayers.passingTouchdowns);
  const playerList = state.topPlayers.passingTouchdowns;

  if (isOpen) {
    return (
      <aside className="Aside">
        <h1>Leaderboards</h1>
        <LeaderCard />
        <ul>
          {playerList.map(obj => {
            return (
              <li key={obj.name.id}>
                <p>{obj.player.name}</p>
                <p>{obj.statistics.passingTouchdowns}</p>
              </li>
            );
          })}
        </ul>
      </aside>
    );
  }
};

export default Aside;
