import React from 'react';
import '../sass/layout/_Aside.scss';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import LeaderCard from './LeaderCard';
import { getLeaders } from '../features/aside/asideSlice';

const Aside = () => {
  const { isOpen } = useSelector(store => store.aside);

  // useEffect(() => {
  //   const data = getLeaders();
  //   console.log(data);
  // }, []);

  // console.log(isOpen);
  if (isOpen) {
    return (
      <aside className="Aside">
        <h1>Leaderboards</h1>
        <LeaderCard />
      </aside>
    );
  }
};

export default Aside;
