import React from "react";
import { motion } from "framer-motion";
import "../App.css";

export const ProjectDetail = () => {
  return (
    <motion.div
      className="project-detail"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div className="project-container">
        <h1>프로젝트 소개</h1>
        <h3>주제: LLM을 활용한 개발자들을 위한 블로그</h3>
        <p>
          1. AI를 활용하여 사용자들의 깃허브, 기술 블로그 분석 <br />
          2. 분석 내용을 바탕으로 포트폴리오, 이력서 생성 및 제안 <br />
          3. 사용자의 포트폴리오, 이력서와 같은 자료를 활용하여 앞으로의 로드맵
          제안 <br />
          4. 포트폴리오, 이력서를 헤드헌터가 조회, 검색을 가능하게 하여 채용
          매칭 서비스 구현 <br />
          5. IT 관련 블로그 포스팅 기능 및 댓글 기능 제공 <br />
        </p>
      </div>
    </motion.div>
  );
};
