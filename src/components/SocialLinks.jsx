import React from "react";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import linkedinIcon from '@iconify/icons-simple-icons/linkedin';
import styled from "styled-components";
// Data
import { Blog } from "../data";
// Icons
import { Icon } from '@iconify/react';

const StyledSocialLinks = styled.div`
  a {
    margin: 0 1rem;
  }
`;

export default function SocialLinks() {
  const { blog, html_url } = useSelector(selectData);

  return (
    <StyledSocialLinks>
      <a
        href={html_url}
        aria-label="Check out my GitHub profile."
        className="link-icons"
      >
        <Icon icon="icomoon-free:github" />
      </a>
      <a
        href="https://www.linkedin.com/in/will-papp-068b21274/"
        aria-label="Check out my LinkedIn profile."
        className="link-icons"
      >
        <Icon icon={linkedinIcon} />
      </a>
      {blog && (
        <a href={blog} aria-label="External link" className="link-icons">
          {Blog}
        </a>
      )}
    </StyledSocialLinks>
  );
}
