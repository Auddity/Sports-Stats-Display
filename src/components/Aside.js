import React, { useEffect, useState } from 'react';
import '../sass/layout/_Aside.scss';
import { useSelector } from 'react-redux';
import LeaderCard from './LeaderCard';
import axios from 'axios';

const Aside = () => {
  const { isOpen } = useSelector(store => store.aside);

  const [passingLeaders, setPassingLeaders] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'http://localhost:8000/aside',
    };

    axios
      .request(options)
      .then(response => {
        setPassingLeaders(response.data.topPlayers.passingTouchdowns);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  if (isOpen) {
    return (
      <aside className="Aside">
        <h1>Leaderboards</h1>
        <LeaderCard />
        <ul>
          {passingLeaders.map(obj => {
            return (
              <li key={obj.player.id}>
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
