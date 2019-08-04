import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Content = styled.div`
  justify-items: center;
  grid-column: 3;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 2rem 1rem;
  background-color: ${props => props.theme.colors.bg};
  z-index: 9000;
  margin-top: 6rem;
  align-items: center;
  text-align: center;

  h5 {
    margin-top: 0;
    margin-bottom: 1rem;
  }
`;

const Community = () => (
  <div>
    <Content>
      <h5>หากมีคำถามหรือข้อเสนอแนะ พูดคุยกับเราได้ตามช่องทาง</h5>
      <a
        href="https://line.me/ti/g2/AAUOP0DACB"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon size="2x" icon={["fab", "line"]} />
      </a>{" "}
      <a
        href="https://www.facebook.com/adblock.thai"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon size="2x" icon={["fab", "facebook"]} />
      </a>{" "}
      <a
        href="https://github.com/adblock-thai/thai-ads-filter"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon size="2x" icon={["fab", "github"]} />
      </a>
    </Content>
  </div>
);

export default Community;
