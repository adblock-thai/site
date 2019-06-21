/* eslint jsx-a11y/label-has-for:0 */

import React from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby";
import styled from "styled-components";
import { Layout, Wrapper, Header, Button } from "../components";

import config from "../../config";

const Content = styled.div`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 2rem 4rem;
  background-color: ${props => props.theme.colors.bg};
  z-index: 9000;
  margin-top: -3rem;
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 3rem 3rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 1.5rem;
  }
  form {
    p {
      label,
      input {
        display: block;
      }
      input {
        min-width: 275px;
        margin-top: 0.5rem;
      }
      textarea {
        resize: vertical;
        min-height: 150px;
        width: 100%;
        margin-top: 0.5rem;
      }
    }
  }
`;

const Report = () => (
  <Layout>
    <Wrapper>
      <Helmet title={`Contact | ${config.siteTitle}`} />
      <Header>
        <Link to="/">{config.siteTitle}</Link>
      </Header>
      <Content>
        <h2>รายงานพบโฆษณา</h2>
        <h5>
          หากคุณพบโฆษณาในเว็บหรืออยากให้บล็อคเพิ่ม <br />
          แจ้งได้ที่ LINE SQUARE:{" "}
          <a
            href="https://line.me/ti/g2/AAUOP0DACB"
            target="_blank"
            rel="noreferrer"
          >
            AdblockThai
          </a>
        </h5>
        <img src="/lq_code.jpg" width="300px"></img>
      </Content>
    </Wrapper>
  </Layout>
);

export default Report;
