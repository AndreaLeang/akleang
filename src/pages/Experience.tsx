import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
// import { FaBriefcase, FaTrophy, FaUsers, FaDollarSign } from 'react-icons/fa';

const ExperienceContainer = styled.div`
  padding: 60px 0;
`;

const Section = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: var(--text-primary);
  text-align: center;
`;

const Subsection = styled(motion.div)`
  background: var(--surface);
  border-radius: var(--border-radius);
  padding: 30px;
  margin: 30px 0;
  box-shadow: var(--shadow);
  border: 1px solid var(--border);
`;

const SubsectionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 10px;
`;


const ExperienceList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ExperienceItem = styled.li`
  margin-bottom: 25px;
  padding: 25px;
  background: var(--background);
  border-radius: var(--border-radius);
  border-left: 4px solid var(--primary-color);
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }
`;

const ExperienceHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
`;

const ExperienceIcon = styled.div`
  width: 50px;
  height: 50px;
  background: var(--primary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
`;

const ExperienceTitle = styled.h4`
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
  font-size: 1.2rem;
`;

const ExperienceLink = styled.a`
  font-weight: 600;
  font-size: 1.2rem;
  color: var(--primary-color);
  display: flex;
  margin: 0;

  
  &:hover {
    text-decoration: underline;
  }
`;


const ExperienceDescription = styled.h4`
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
`;


const ExperienceBullet = styled.p`
  padding-left: 20px;
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
`;

const Highlight = styled.span`
  color: var(--primary-color);
  font-weight: 600;
`;

const Experience: React.FC = () => {
  return (
    <ExperienceContainer>
      <Section>
        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Past Experiences
        </Title>

        <Subsection
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <SubsectionTitle>
            {/* <FaBriefcase /> */}
            Work Experience
          </SubsectionTitle>
          <ExperienceList>
            <ExperienceItem>
              <ExperienceHeader>
                <ExperienceIcon>
                </ExperienceIcon>
                <ExperienceLink
                    href="https://fencingstar.us" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                  Co-Founder & CEO
                  </ExperienceLink> 
                <ExperienceTitle>@ Fencing Star U.S. Distribution</ExperienceTitle>
                
              </ExperienceHeader>
              <ExperienceDescription>
              August 2023 - Present
              </ExperienceDescription>
              <ExperienceBullet>
              - Sold 1000+ pairs of fencing shoes, <Highlight>reached $100,000 ARR</Highlight>, captured 20% of the market, broke even year 1
              </ExperienceBullet>
              <ExperienceBullet>
                - Directed and managed company vision, national competition ventures, day-to-day sales, and graphic design
              </ExperienceBullet>
              <ExperienceBullet>
              - Cultivated and managed over 25 fencing clubs and NCAA fencing teams collaborations in 
              North America to provide affordable and high quality fencing shoes for all levels of fencers
              </ExperienceBullet>
              <ExperienceBullet>
              - Created and managed an e-commerce site using Javascript and Ruby to streamline sales and outreach, 
              implementing SEO and digital marketing strategies to expand market reach
              </ExperienceBullet>
              <ExperienceBullet>
                - Designed backdrops, banners, pamphlets, flyers, and other media for in-person sales and social media. 
                Managed business Instagram, Facebook page, and Reddit accounts
              </ExperienceBullet>
            </ExperienceItem>
            
            <ExperienceItem>
              <ExperienceHeader>
                <ExperienceTitle><Highlight>Teaching Assistant</Highlight> @ MIT EECS</ExperienceTitle>
                
              </ExperienceHeader>
              <ExperienceDescription>
              Febuary 2024 - Present
              </ExperienceDescription>
              <ExperienceBullet>
              - Undergraduate TA for 6.1200 (6.042) Mathematics for Computer Science, Graduate TA for 6.1210 (6.006) Introduction to Algorithms
              </ExperienceBullet>
              <ExperienceBullet>
              - Taught probability, graph theory, and proof-writing skills 20 hr/wk to 1200+ undergraduate and graduate students
              </ExperienceBullet>
              <ExperienceBullet>
              - Led review sessions and 1-1 tutoring. Turned foundational concepts into digestible content for students of all levels
              </ExperienceBullet>
              
            </ExperienceItem>

            <ExperienceItem>
              <ExperienceHeader>
                
                  <ExperienceLink
                    href="https://docs.google.com/presentation/d/1IADP66k77rqbyR3YU-7hPUSozxD2YzMUOD8fLhIkWP8/edit?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                  Software Engineer Intern</ExperienceLink> 

                  <ExperienceTitle>@ Cambridege Mobile Telematics</ExperienceTitle>
                
              </ExperienceHeader>
              <ExperienceDescription>
              June 2025 - August 2025
              </ExperienceDescription>
              <ExperienceBullet>
              - Automated RoadClub users’ hard-brake events processing with Postgres, Python, & AWS, improving data analysis
              </ExperienceBullet>
              <ExperienceBullet>
              - Developed API handler and unit tests in Python to enhance date-specific hard brake summary retrievals from S3
              </ExperienceBullet>
              <ExperienceBullet>
              - Implemented structure for API calls and UI for hard brake information in Swift, improving user interface clarity
              </ExperienceBullet>
            </ExperienceItem>

            <ExperienceItem>
              <ExperienceHeader>
                <ExperienceTitle><Highlight>Intern</Highlight>  @ TalentSeer Recruiting Company</ExperienceTitle>
                
              </ExperienceHeader>
              <ExperienceDescription>
              June 2021 - August 2021
              </ExperienceDescription>
              <ExperienceBullet>
              - Constructed company’s database through researching and gathering data on uprising AI companies
              </ExperienceBullet>
            </ExperienceItem>

          </ExperienceList>
        </Subsection>

        <Subsection
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <SubsectionTitle>
            {/* <FaTrophy /> */}
            Leadership & Extracurriculars
          </SubsectionTitle>
          <ExperienceList>
          <ExperienceItem>
              <ExperienceHeader>
                <ExperienceTitle>MIT Varsity Fencing (September 2021 - Present)</ExperienceTitle>
                
              </ExperienceHeader>
              <ExperienceDescription>
              <Highlight>Women's Epee Squad Leader ('22 - '25), 4-time NCAA Regionals Qualifier, Pan-American Finalist, Volunteer Assistant Coach ('25 - Present)</Highlight>
              </ExperienceDescription>
              <ExperienceBullet>
              - Led team through competitions and practices 10 hrs/wk against 21 NCAA teams
              </ExperienceBullet>
              <ExperienceBullet>
              - US Fencing Coach Association (USFCA): Scholar of Distinction (’22, ’23, ’24, ’25)
              </ExperienceBullet>

            </ExperienceItem>

          </ExperienceList>
        </Subsection>
      </Section>
    </ExperienceContainer>
  );
};

export default Experience;

