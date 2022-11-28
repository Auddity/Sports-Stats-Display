import React, { useEffect } from 'react';
import '../sass/layout/_Aside.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getPassingLeaders } from '../features/aside/asideSlice';
import LeaderCard from './LeaderCard';

const Aside = () => {
  const { isOpen, passingLeaders } = useSelector(store => store.aside);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPassingLeaders());
  }, [dispatch]);

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
                <p>{obj.team.name}</p>
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
