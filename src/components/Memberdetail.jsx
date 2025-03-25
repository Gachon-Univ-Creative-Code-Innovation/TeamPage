import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import member1 from "../assets/강현승.png";
import member2 from "../assets/김현지.png";
import member3 from "../assets/문승주.png";
import member4 from "../assets/이경준.png";
import member5 from "../assets/김송희.png";
import member6 from "../assets/이재모.png";
import member7 from "../assets/조선현.png";
import member8 from "../assets/전준배.png";
import "../App.css";

const memberData = [
  {
    name: "강현승",
    image: member1,
    role: "Leader, AI, Backend",
    description: "MBTI: ESTJ",
    description1: "생년월일: 2002.09.10",
    description2: "전공: 인공지능전공",
    description3: "Skill: Python, C, Java",
    description4: "인공지능학과의 기초를 다진 남자",
  },
  {
    name: "김현지",
    image: member2,
    role: "Backend, Infra",
    description: "MBTI: ISFP",
    description1: "생년월일: 2002.09.10",
    description2: "전공: 인공지능전공",
    description3: "Skill: SpringBoot, C, Java, Python, Kotlin",
    description4: "우리팀의 Backend 에이스",
  },
  {
    name: "문승주",
    image: member3,
    role: "Backend, Infra",
    description: "MBTI: ESFJ",
    description1: "생년월일: 1999.06.05",
    description2: "전공: 컴퓨터공학전공",
    description3: "Skill: SpringBoot, Java, Docker, SpringCloud, AWS",
    description4: "네 좋습니다. 저만 믿고 따라오면 됩니다",
  },
  {
    name: "이경준",
    image: member4,
    role: "Frontend",
    description: "MBTI: ISFJ",
    description1: "생년월일: 2001.02.24",
    description2: "전공: 컴퓨터공학전공",
    description3: "Skill: JavaScript, React, Flutter, Dart",
    description4: "비행기 타고 보면 가천대 2.5cm",
  },
  {
    name: "김송희",
    image: member5,
    role: "Frontend",
    description: "MBTI: INFP",
    description1: "생년월일: 2003.05.09",
    description2: "전공: 소프트웨어전공",
    description3: "Skill: Python, Java, C, HTML",
    description4: "총학생회 그만두고 싶어하는 것 같다",
  },
  {
    name: "이재모",
    image: member6,
    role: "Backend, Infra",
    description: "MBTI: ISFP",
    description1: "생년월일: 1999.02.11",
    description2: "전공: 컴퓨터공학전공",
    description3: "Skill: Python, Java, C",
    description4: "아직 취해본 적이 없는 술톤 개발자",
  },
  {
    name: "조선현",
    image: member7,
    role: "PM, Frontend, AI",
    description: "MBTI: ISTJ",
    description1: "생년월일: 2000.03.14",
    description2: "전공: 소프트웨어전공",
    description3: "Skill: Python, Java, C",
    description4: "목표는 3대 500치기",
  },
  {
    name: "전준배",
    image: member8,
    role: "Backend",
    description: "MBTI: ISFP",
    description1: "생년월일: 1999.09.01",
    description2: "전공: 컴퓨터공학전공",
    description3: "Skill: SpringBoot, Java",
    description4: "오늘의 집 애용하는 복정 자취남",
  },
];

export const MemberDetail = () => {
  const { id } = useParams();
  const member = memberData[parseInt(id) - 1];

  if (!member) {
    return (
      <div style={{ padding: "100px", textAlign: "center" }}>
        존재하지 않는 멤버입니다.
      </div>
    );
  }

  return (
    <motion.div
      className="member-detail"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="member-container"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.1 }}
      >
        <img
          src={member.image}
          alt={member.name}
          className="member-detail-img"
        />
        <h1>{member.name}</h1>
        <h4>{member.role}</h4>
        <p>{member.description4}</p>
        <p>{member.description}</p>
        <p>{member.description1}</p>
        <p>{member.description2}</p>
        <p>{member.description3}</p>
      </motion.div>
    </motion.div>
  );
};
