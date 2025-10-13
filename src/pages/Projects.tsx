import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsContainer = styled.div`
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

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: var(--text-secondary);
  text-align: center;
  margin-bottom: 50px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
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

const PublicationList = styled.ul`
  list-style: none;
  padding: 0;
`;

const PublicationItem = styled.li`
  margin-bottom: 20px;
  padding: 20px;
  background: var(--background);
  border-radius: var(--border-radius);
  border-left: 4px solid var(--primary-color);
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }
`;

const PublicationTitle = styled.a`
  font-weight: 600;
  color: var(--primary-color);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  
  &:hover {
    text-decoration: underline;
  }
`;

const PublicationDetails = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin: 0;
`;

const MediaGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const MediaPlaceholder = styled.div`
  background: var(--background);
  border: 2px dashed var(--border);
  border-radius: var(--border-radius);
  padding: 40px;
  text-align: center;
  color: var(--text-secondary);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  transition: var(--transition);
  
  &:hover {
    border-color: var(--primary-color);
    color: var(--primary-color);
  }
`;


const ComingSoon = styled.div`
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  padding: 20px;
  border-radius: var(--border-radius);
  text-align: center;
  margin: 20px 0;
`;


const ExperienceList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ExperienceItem = styled.li`
  margin-bottom: 25px;
  padding: 20px;
  background: var(--background);
  border-radius: var(--border-radius);
  border-left: 4px solid var(--secondary-color);
`;

const ExperienceTitle = styled.h4`
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 8px;
  font-size: 1.1rem;
`;

const ExperienceDescription = styled.p`
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


const Projects: React.FC = () => {
  return (
    <ProjectsContainer>
      <Section>
        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Projects
        </Title>
        
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Class and Personal Projects
        </Subtitle>

        <Subsection
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <SubsectionTitle>
            Class Projects
            
          </SubsectionTitle>
          <ExperienceList>
            <ExperienceItem>
              <ExperienceTitle>Robotic Manipulation</ExperienceTitle>
              <ExperienceDescription>
              Project Name
              </ExperienceDescription>
              <ExperienceBullet>
              - Project Description
              </ExperienceBullet>
            </ExperienceItem>

            
          </ExperienceList>
        </Subsection>

        <Subsection
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <SubsectionTitle>
            Media Gallery
          </SubsectionTitle>
          
          <ComingSoon>
            <h4>Coming Soon!</h4>
            <p>Project photos, videos, and interactive demos will be added here soon.</p>
          </ComingSoon>
          
          <MediaGallery>
            <MediaPlaceholder>
              <div>
                <strong>Project Images</strong>
                <p>Photos from research projects and experiments</p>
              </div>
            </MediaPlaceholder>
            
            <MediaPlaceholder>
              <div>
                <strong>Demo Videos</strong>
                <p>Interactive demonstrations and project showcases</p>
              </div>
            </MediaPlaceholder>
            
            <MediaPlaceholder>
              <div>
                <strong>Technical Documentation</strong>
                <p>Detailed project documentation and reports</p>
              </div>
            </MediaPlaceholder>
          </MediaGallery>
        </Subsection>
      </Section>
    </ProjectsContainer>
  );
};

export default Projects;

