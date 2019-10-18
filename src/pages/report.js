/* eslint jsx-a11y/label-has-for:0 */

import React from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby";
import styled from "styled-components";
import { Layout, Wrapper, Header, Community, Button } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        min-width: 255px;
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
      <Helmet title={`Report | ${config.siteTitle}`} />
      <Header>
        <Link to="/">{config.siteTitle}</Link>
      </Header>
      <Content>
        <h3>
          แจ้งพบโฆษณาได้ที่{" "}
          <a href="https://spectrum.chat/adblock-thailand">Spectrum Chat</a>{" "}
          หรือ{" "}
          <a href="https://github.com/adblock-thai/thai-ads-filter">Github</a>
          <Community />
        </h3>
      </Content>
    </Wrapper>
  </Layout>
);

export default Report;
