import React from 'react';
import { Card } from 'reactstrap';
import './Footer.css';
import { useAtom } from 'jotai';
import { Link } from 'react-router-dom';
import homeIcon from '../../assets/icons/home.png';
import dumbellIcon from '../../assets/icons/dumbell.png';
import userIcon from '../../assets/icons/user.png';
import { selectedPageAtom } from './Store';

export default function Footer() {
  const [selectedPage, setSelectedPage] = useAtom(selectedPageAtom);
  return (
    <div className="footer">
      <Card className="footer-card">
        <div className={`icon-page ${selectedPage === 'workouts' && 'selected-page'}`}>
          <Link to="/workouts" id="workouts" onClick={() => setSelectedPage('workouts')}>
            <img name="workouts" src={dumbellIcon} className="icon" alt="" />
          </Link>
        </div>
        <div className={`icon-page ${selectedPage === 'home' && 'selected-page'}`}>
          <Link to="/home" id="home" onClick={() => setSelectedPage('home')}>
            <img name="home" src={homeIcon} className="icon" alt="" />
          </Link>
        </div>
        <div className={`icon-page ${selectedPage === 'user' && 'selected-page'}`}>
          <Link to="/profile" id="user" onClick={() => setSelectedPage('user')}>
            <img name="user" src={userIcon} className="icon" alt="" />
          </Link>
        </div>
      </Card>
    </div>
  );
}
