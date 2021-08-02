import styled from '@emotion/styled';
import Img from 'gatsby-image';
import React from 'react';
import TechList from './tech-list';
import { mq } from './_shared/media';
import { StyledH1, StyledH2 } from './_shared/styled-headings';
import { StyledStaticImageContainer } from './_shared/styled-image-container';
import { StyledSection } from './_shared/styled-section';

const StyledAboutContainer = styled.article`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 2.5rem;
  padding: 2.5rem 0;

  ${mq.gt.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const StyledTextSection = styled.section`
  white-space: pre-line;
`;

const About = ({ data }) => {
  const {
    frontmatter: { title, techs, about_image },
    html,
  } = data;

  const image = about_image ? about_image.childImageSharp.fluid : null;

  return (
    <StyledSection id="about" >
      <StyledH1>About Me</StyledH1>
      <StyledAboutContainer >
        {image && (
          <StyledStaticImageContainer>
            <Img style={{height:"80%"}} fluid={image} objectFit="contain" />
          </StyledStaticImageContainer>
        )}
        <div>
          <StyledH2>{title}</StyledH2>
          <StyledTextSection dangerouslySetInnerHTML={{ __html: html }} />
          <div style={{border:"5px solid gold", width:"200px " ,height:"80px",backgroundColor:"white",paddingTop:"10px",paddingLeft:"15px"}}>       
                <a download = "file" style={{fontSize:"28px",marginTop:"10px", }} href="https://drive.google.com/file/d/19yuldyZxxgZkwXjcmIsEL3HJi1be_acl/view?export=download"  alt="Manohar Resume">
                  <div style={{display:"flex"}}>
                  <span>Resume</span>
                  <img style={{width:"50px",marginLeft:"15px"}} src="https://image.flaticon.com/icons/png/512/1091/1091007.png" alt="file"/>
                  </div>
                  </a>
            </div>

          {/* <TechList techs={techs} /> */}

        </div>

      </StyledAboutContainer>
    </StyledSection>
  );
};

About.propTypes = {};

export default About;
