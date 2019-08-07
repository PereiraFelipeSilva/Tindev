import React from 'react';
import './Main.css';
import logo from '../assets/logo.svg';
import dislike from '../assets/dislike.svg';
import like from '../assets/like.svg';

export default function Main({ match }){

  return(

    <div className="main-container">
      <img src={logo} alt="Tindev-logo" />
      <ul>
        <li>
          <img src="https://avatars2.githubusercontent.com/u/2254731?v=4" alt="" />
          <footer>
            <strong>Diego Fernandes</strong>
            <p>CTO na RocketSeat</p>
          </footer>

          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="dislike-button" />
            </button>
            <button type="button">
              <img src={like} alt="like-button" />
            </button>
          </div>
        </li>
        <li>
          <img src="https://avatars2.githubusercontent.com/u/2254731?v=4" alt="" />
          <footer>
            <strong>Diego Fernandes</strong>
            <p>CTO na RocketSeat</p>
          </footer>

          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="dislike-button" />
            </button>
            <button type="button">
              <img src={like} alt="like-button" />
            </button>
          </div>
        </li>
        <li>
          <img src="https://avatars2.githubusercontent.com/u/2254731?v=4" alt="" />
          <footer>
            <strong>Diego Fernandes</strong>
            <p>CTO na RocketSeat</p>
          </footer>

          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="dislike-button" />
            </button>
            <button type="button">
              <img src={like} alt="like-button" />
            </button>
          </div>
        </li>
        <li>
          <img src="https://avatars2.githubusercontent.com/u/2254731?v=4" alt="" />
          <footer>
            <strong>Diego Fernandes</strong>
            <p>CTO na RocketSeat</p>
          </footer>

          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="dislike-button" />
            </button>
            <button type="button">
              <img src={like} alt="like-button" />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}