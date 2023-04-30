import React from "react";
import { IoIosFlame } from "react-icons/io";

import './DashboardPage.css';
import Menu from "../../components/menu/Menu";
import Content from "../../components/content/Content";
import Profile from "../../components/profile/Profile";
import FireNumber from "../../components/fire-number/FireNumber";
import lady from "../../assests/lady.jpeg";
import man from "../../assests/man.jpeg";
import Lesson from "../../components/lesson/Lesson";

const DashboardPage = () => {
  return (
    <div className="container-wrapper">
      <main>
        <section className="greeting">
          <div>
            <p className="text">Hello Rachel,</p>
            <p className="greeting-question">
              Ready to <span>play English?</span>
            </p>
          </div>
          <div className="greeting-icon">
            <div className="flame-icon">
              <IoIosFlame />
            </div>
            <div style={{ fontSize: "18px" }}>65</div>
          </div>
        </section>
        <section className="goal">
          <div className="left-side">
            <p className="goal-text small-text">Today's goal</p>
            <div className="outer">
              <div className="inner">
                <div id="number">70%</div>
              </div>
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="100px"
                height="100px"
              >
                <circle cx="50" cy="50" r="43" stroke-linecap="round" />
              </svg> */}
            </div>
          </div>
          <div className="right-side">
            <h3 className="heading">Excellent!</h3>
            <p className="small-text">
              You're almost there. Finish the goal to achieve
            </p>
            <FireNumber number="10" />
          </div>
        </section>
        <Content title="Your lesson">
          <Lesson />
        </Content>
        <Content title="Leaderboard">
          <Profile
            image={lady}
            name="Yasmine Lee"
            country="Taiwan"
            number="1230"
          />
          <Profile
            image={man}
            name="Guy Hawkins"
            country="Spain"
            number="1130"
          />
        </Content>
      </main>
      <Menu />
    </div>
  );
};

export default DashboardPage;