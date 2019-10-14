import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { email } from '@config';
import styled from 'styled-components';
import { theme, mixins, media, Section } from '@styles';
const { colors, fontSizes, fonts, navDelay, loaderDelay } = theme;

const StyledContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  padding: 120px 0;
  align-items: flex-start;
  min-height: 90vh;
  ${media.tablet`padding-top: 150px;`};
  div {
    width: 100%;
  }
`;
const StyledOverline = styled.h1`
  color: ${colors.green};
margin: 0 0 30px 3px;
  font-size: ${fontSizes.md};
  font-family: ${fonts.SFMono};
  font-weight: normal;
  ${media.desktop`font-size: ${fontSizes.sm};`};
  ${media.tablet`font-size: ${fontSizes.smish};`};
`;
const StyledName = styled.h2`
  font-size: 70px;
  line-height: 1.1;
  margin: 0;
  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 55px;`};
  ${media.phablet`font-size: 45px;`};
  ${media.phone`font-size: 35px;`};
`;
const StyledSubtitle = styled.h3`
  font-size: 70px;
  line-height: 1.1;
  color: ${colors.slate};
  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 55px;`};
  ${media.phablet`font-size: 45px;`};
  ${media.phone`font-size: 35px;`};
`;
const StyledDescription = styled.div`
  margin-top: 25px;
  width: 50%;
  max-width: 500px;
  a {
    ${mixins.inlineLink};
  }
`;
const StyledButton = styled.a`
  ${mixins.bigButton};
  margin-top: 35px;
`;

const Hero = ({ data }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const { frontmatter, html } = data[0].node;

  const overline = () => (
    <StyledOverline style={{ transitionDelay: '100ms' }}>{frontmatter.title}</StyledOverline>
  );
  const name = () => (
    <StyledName style={{ transitionDelay: '200ms' }}>{frontmatter.name}.</StyledName>
  );
  const subtitle = () => (
    <StyledSubtitle style={{ transitionDelay: '300ms' }}
    dangerouslySetInnerHTML={{ __html: frontmatter.subtitle }}
    ></StyledSubtitle>
  );
  const description = () => (
    <StyledDescription
      style={{ transitionDelay: '400ms' }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
  const heroButtons = () => (
    <div style={{ transitionDelay: '500ms' }}>
      <StyledButton href={`mailto:${email}`}>Hire Me!</StyledButton>
      {/*<StyledButton
        href="/resume.pdf"
        target="_blank"
        rel="nofollow noopener noreferrer"
        >
        Download Resume
      </StyledButton>*/}
    </div>
  );

  const items = [overline, name, subtitle, description, heroButtons];

  return (
    <StyledContainer>
      <TransitionGroup component={null}>
        {isMounted &&
          items.map((item, i) => (
            <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
              {item}
            </CSSTransition>
          ))}
      </TransitionGroup>
    </StyledContainer>
  );
};

Hero.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Hero;
