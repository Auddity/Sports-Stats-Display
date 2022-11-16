import React from 'react';
import '../sass/components/_LeaderCard.scss';

const LeaderCard = () => {
  return (
    <article className="LeaderCard">
      <h2>Stat Leaders</h2>
      <div className="leaderBoard">
        <div className="leaderBoard-header">
          <p className="playerName">Player</p>
          <p className="statType">Yds</p>
        </div>
        <div className="leaderBoard-body">
          <ul className="playerList">
            <li className="playerInfo">
              <div className="playerInfo-left">
                <img src="" alt="" />
                <p className="name">tomas hulstrom</p>
                <p className="teamSlug">kc</p>
              </div>
              <div className="playerInfo-right">
                <span className="statValue">5,680</span>
              </div>
            </li>

            <li className="playerInfo">
              <div className="playerInfo-left">
                <img src="" alt="" />
                <p className="name">tomas hulstrom</p>
                <p className="teamSlug">kc</p>
              </div>
              <div className="playerInfo-right">
                <span className="statValue">5,680</span>
              </div>
            </li>

            <li className="playerInfo">
              <div className="playerInfo-left">
                <img src="" alt="" />
                <p className="name">tomas hulstrom</p>
                <p className="teamSlug">kc</p>
              </div>
              <div className="playerInfo-right">
                <span className="statValue">5,680</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default LeaderCard;
