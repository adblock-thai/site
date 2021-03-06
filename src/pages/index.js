import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import styled from "styled-components";
import GitHubButton from "react-github-btn";

import { Layout, Article, Wrapper, Button, SectionTitle } from "../components";

const Content = styled.div`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 3rem 6rem;
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 3rem 2rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 1.5rem;
  }
  overflow: hidden;
`;

const Hero = styled.div`
  grid-column: 2;
  padding: 3rem 2rem 6rem 2rem;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  color: ${props => props.theme.colors.grey.dark};

  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 1rem 4rem 1rem;
  }

  p,
  ul {
    font-size: 1.68rem;
    margin-top: -1rem;
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: 1.45rem;
    }
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      font-size: 1.25rem;
    }
  }

  .filter-desc {
    font-size: 1.1rem !important;
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: 1rem;
    }
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      font-size: 1rem;
    }
  }
`;

const IndexPage = ({
  data: {
    allMdx: { nodes: posts }
  }
}) => (
  <Layout>
    <Wrapper>
      <Hero>
        <h2>
          <img src="logo-256.webp" width="50px" alt="logo" /> Adblock Thai
        </h2>
        <p>
          รำคาญโฆษณา? รายการฟิลเตอร์โฆษณาสำหรับประเทศไทย
          ช่วยให้คุณปิดโฆษณาและการติดตามต่างๆในเว็บของประเทศไทย
        </p>
        <p>
          <GitHubButton
            href="https://github.com/adblock-thai/thai-ads-filter"
            data-size="large"
            data-show-count="true"
            aria-label="Star adblock-thai/thai-ads-filter on GitHub"
            data-icon="octicon-star"
          >
            Star
          </GitHubButton>{" "}
          <GitHubButton
            href="https://github.com/adblock-thai/thai-ads-filter/fork"
            data-size="large"
            data-show-count="true"
            aria-label="Fork adblock-thai/thai-ads-filter on GitHub"
            data-icon="octicon-repo-forked"
          >
            Fork
          </GitHubButton>
        </p>

        <hr />
        <br />
        <div className="is-size-4">
          <p>
            ติดตั้งส่วนเสริม{" "}
            <span className="is-dark is-top is-large tooltip is-multiline">
              <a
                href="https://github.com/gorhill/uBlock/#installation"
                target="_blank"
              >
                uBlock Origin
              </a>
            </span>
          </p>
          <ul>
            <li>
              <a
                href="/how-to-install-adblock-for-chrome"
                className="button is-success is-rounded"
              >
                วิธีติดตั้งสำหรับ Chrome
              </a>
            </li>
            <li>
              <a
                href="/how-to-install-adblock-for-firefox"
                className="button is-success is-rounded"
              >
                วิธีติดตั้งสำหรับ Firefox
              </a>
            </li>
            <li>
              <a
                href="/how-to-install-adblock-for-firefox-android"
                className="button is-success is-rounded"
              >
                วิธีติดตั้งสำหรับ Firefox (Android)
              </a>
            </li>
            <li>
              <a
                href="/how-to-install-adblock-for-edge-chrome"
                className="button is-success is-rounded"
              >
                วิธีติดตั้งสำหรับ Edge Chrome
              </a>
            </li>
          </ul>
          <p>
            ถ้ามี uBlock ติดตั้งอยู่แล้ว{" "}
            <a href="abp:subscribe?location=https://adblock-thai.github.io/thai-ads-filter/subscription.txt&title=Thai Adblock List">
              กดที่นี่
            </a>{" "}
            เพื่อเพิ่มรายการไปยังส่วนเสริม
            <br />
            หรือเพิ่ม{" "}
            <a href="https://adblock-thai.github.io/thai-ads-filter/subscription.txt">
              URL
            </a>{" "}
            ด้วยตัวเอง
          </p>
        </div>
        <hr />
        <br />
        <p>ฟิลเตอร์ทั้งหมด</p>
        <ul>
          <li>
            <a href="https://adblock-thai.github.io/thai-ads-filter/subscription.txt">
              Thai Ads Filters
            </a>{" "}
            <a href="abp:subscribe?location=https://adblock-thai.github.io/thai-ads-filter/subscription.txt&title=Thai Adblock List">
              (เพิ่ม)
            </a>
          </li>
          <label className="filter-desc">
            ฟิลเตอร์สำหรับ uBO ที่มีวัตถุประสงค์เพื่อลบโฆษณาของไทย การติดตาม
            เว็บไซต์หลอกลวงและโปรแกรมอันตราย
          </label>
          <li>
            <a href="https://adblock-thai.github.io/thai-ads-filter/annoyance.txt">
              Thai Annoyance Filters
            </a>{" "}
            <a href="abp:subscribe?location=https://adblock-thai.github.io/thai-ads-filter/annoyance.txt&title=Thai Annoyances List">
              (เพิ่ม)
            </a>
          </li>
          <label className="filter-desc">
            ฟิลเตอร์ที่มีจุดประสงค์เพื่อลบสิ่งรบกวนที่บังหน้าจอการใช้งานและสิ่งที่ไม่จำเป็นออก
          </label>
        </ul>
        <hr />
        <br />
        <p>
          <Link to="/report">
            <Button small>
              <svg
                width="1792"
                height="1792"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1764 11q33 24 27 64l-256 1536q-5 29-32 45-14 8-31 8-11 0-24-5l-453-185-242 295q-18 23-49 23-13 0-22-4-19-7-30.5-23.5t-11.5-36.5v-349l864-1059-1069 925-395-162q-37-14-40-55-2-40 32-59l1664-960q15-9 32-9 20 0 36 11z" />
              </svg>
              รายงานพบโฆษณาที่นี่
            </Button>
          </Link>
        </p>
      </Hero>
      <Content>
        <SectionTitle>Latest stories</SectionTitle>
        {posts.map(post => (
          <Article
            title={post.frontmatter.title}
            date={post.frontmatter.date}
            excerpt={post.excerpt}
            timeToRead={post.timeToRead}
            slug={post.fields.slug}
            categories={post.frontmatter.categories}
            key={post.fields.slug}
          />
        ))}
      </Content>
    </Wrapper>
  </Layout>
);

export default IndexPage;

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      nodes: PropTypes.array.isRequired
    })
  }).isRequired
};

export const IndexQuery = graphql`
  query IndexQuery {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "DD/MM/YYYY")
          categories
        }
        excerpt(pruneLength: 200)
        timeToRead
      }
    }
  }
`;
