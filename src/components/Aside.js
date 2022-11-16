import React from 'react';
import '../sass/layout/_Aside.scss';
import { useSelector } from 'react-redux';
import LeaderCard from './LeaderCard';

const Aside = () => {
  const { isOpen } = useSelector(store => store.aside);

  console.log(isOpen);
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
