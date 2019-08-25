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
        <h2>รายงานพบโฆษณา</h2>
        <h5>
          หากคุณพบโฆษณาในเว็บหรืออยากให้บล็อกเพิ่มโปรดกรอกข้อมูลในแบบฟอร์ม
          <br />
          <form
            name="report-form"
            method="post"
            acceptCharset="utf-8"
            action="https://formspree.io/pakondaman@gmail.com"
          >
            <p>
              <label htmlFor="report-email">
                อีเมล{" "}
                <input
                  name="_replyto"
                  placeholder="อีเมลของคุณ"
                  id="report-email"
                  type="email"
                />
              </label>
            </p>
            <p>
              <label htmlFor="report-url">
                URL{" "}
                <input
                  name="report_url"
                  id="report-url"
                  placeholder="ใส่ url ของเว็บที่นี่"
                  type="text"
                  required
                />
              </label>
            </p>
            <p>
              <label htmlFor="report-message">
                รายละเอียด <br />
                <textarea
                  name="message"
                  id="report-message"
                  placeholder="รายละเอียดเพิ่มเติม เช่น โฆษณาในแทบด้านข้าง"
                  required
                />
              </label>
            </p>
            <input type="hidden" name="_language" value="th" />
            <input
              type="hidden"
              name="_next"
              value="https://adblock-thai.github.io/success/"
            />
            <input type="hidden" name="_subject" value="Ads site report" />
            <p>
              <Button>ส่ง</Button>
            </p>
          </form>
          <Community />
        </h5>
      </Content>
    </Wrapper>
  </Layout>
);

export default Report;
