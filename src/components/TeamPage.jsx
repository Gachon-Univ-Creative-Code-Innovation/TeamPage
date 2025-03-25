import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import x11 from "../assets/pic.png";
import member1 from "../assets/강현승.png";
import member2 from "../assets/김현지.png";
import member3 from "../assets/문승주.png";
import member4 from "../assets/이경준.png";
import member5 from "../assets/김송희.png";
import member6 from "../assets/이재모.png";
import member7 from "../assets/조선현.png";
import member8 from "../assets/전준배.png";
import "../App.css";

const memberImages = [
  member1,
  member2,
  member3,
  member4,
  member5,
  member6,
  member7,
  member8,
];

export const TeamPage = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="team-page"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div className="div">
        <div className="main">
          <div className="main-top">
            <div className="rectangle-2" />
            <div className="rectangle-3" />
          </div>

          <div className="main-bottom">
            <img className="img" alt="Element" src={x11} />
            <p className="GUCCI-gachon">
              <span className="text-wrapper-2">GUCCI</span>
              <br />
              <span className="text-wrapper-4">
                Gachon <br />
                University <br />
                Creative <br />
                Code <br />
                Innovation
              </span>
            </p>
          </div>
        </div>

        <div className="project-button-container">
          <button
            className="project-button"
            onClick={() => navigate("/project")}
          >
            프로젝트 소개
          </button>
        </div>

        <div className="member-title">
          <h2>Team Member</h2>
        </div>

        <div className="overlap">
          <div className="person">
            <div className="group">
              {memberImages.map((imgSrc, i) => (
                <div
                  className={`element element-${i + 1}`}
                  key={i}
                  onClick={() => navigate(`/member/${i + 1}`)}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={imgSrc}
                    alt={`Member ${i + 1}`}
                    className="member-img"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="foot">
          <p className="GUCCI-git">
            <span className="text-wrapper">
              GUCCI
              <br />
              <br />
            </span>
            <span className="span">
              git: https://github.com/Gachon-Univ-Creative-Code-Innovation
              <br />
              confluece: https://sh0314.atlassian.net/wiki/spaces/GUCCI/overview
              <br />
            </span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};
