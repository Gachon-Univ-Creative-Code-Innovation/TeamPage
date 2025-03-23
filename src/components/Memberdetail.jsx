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
    role: "팀장",
    description: "인공지능학과 2024년도 회장출신",
  },
  {
    name: "김현지",
    image: member2,
    role: "백엔드",
    description: "Spring Boot 에이스",
  },
  {
    name: "문승주",
    image: member3,
    role: "백엔드, 인프라",
    description: "네 좋습니다. 저만 믿고 따라오면 됩니다",
  },
  {
    name: "이경준",
    image: member4,
    role: "프론트엔드",
    description: "열심히 하겠습니다",
  },
  {
    name: "김송희",
    image: member5,
    role: "프론트엔드",
    description: "총학생회 화이팅",
  },
  {
    name: "이재모",
    image: member6,
    role: "인프라",
    description: "아직 취해본 적이 없는 개발자",
  },
  {
    name: "조선현",
    image: member7,
    role: "PM",
    description: "목표는 3대 500치기",
  },
  {
    name: "전준배",
    image: member8,
    role: "백엔드",
    description: "엊그제 여행갔다온 복정 자취남",
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
        <h2>{member.name}</h2>
        <h4>{member.role}</h4>
        <p>{member.description}</p>
      </motion.div>
    </motion.div>
  );
};
