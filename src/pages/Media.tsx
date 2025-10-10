import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
// import { FaFileAlt, FaImage, FaVideo, FaExternalLinkAlt } from 'react-icons/fa';

const MediaContainer = styled.div`
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

const MediaIcon = styled.div`
  font-size: 2rem;
  opacity: 0.5;
`;

const ComingSoon = styled.div`
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  padding: 20px;
  border-radius: var(--border-radius);
  text-align: center;
  margin: 20px 0;
`;

const Media: React.FC = () => {
  return (
    <MediaContainer>
      <Section>
        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Media
        </Title>
        
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Explore photos, videos, and articles related to my projects and extracurricular activities.
        </Subtitle>

        <Subsection
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <SubsectionTitle>
            {/* <FaFileAlt /> */}
            Articles & Publications
          </SubsectionTitle>
          <PublicationList>
            <PublicationItem>
              <PublicationTitle 
                href="https://doi.org/10.1039/d3lc00825h" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                "Zeta potential characterization using commercial microfluidic chips" - Coauthor (Jan. 2024)
                {/* <FaExternalLinkAlt size={12} /> */}
              </PublicationTitle>
              <PublicationDetails>
                Published in Lab on a Chip journal, contributing to automated analysis of bacterial videos using MATLAB and Machine Learning clustering techniques.
              </PublicationDetails>
            </PublicationItem>
            
            <PublicationItem>
              <PublicationTitle 
                href="https://doi.org/10.1186/s12938-023-01105-y" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                "Comparison of point-tracking algorithms in ultrasound videos from the upper limb" - Acknowledgment (May 2023)
                {/* <FaExternalLinkAlt size={12} /> */}
              </PublicationTitle>
              <PublicationDetails>
                Acknowledged for contributions to point-tracking algorithm research in biomedical engineering.
              </PublicationDetails>
            </PublicationItem>
          </PublicationList>
        </Subsection>

        <Subsection
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <SubsectionTitle>
            {/* <FaImage /> */}
            Media Gallery
          </SubsectionTitle>
          
          <ComingSoon>
            <h4>Coming Soon!</h4>
            <p>Project photos, videos, and interactive demos will be added here soon.</p>
          </ComingSoon>
          
          <MediaGallery>
            <MediaPlaceholder>
              <MediaIcon>
                {/* <FaImage /> */}
              </MediaIcon>
              <div>
                <strong>Project Images</strong>
                <p>Photos from research projects and experiments</p>
              </div>
            </MediaPlaceholder>
            
            <MediaPlaceholder>
              <MediaIcon>
                {/* <FaVideo /> */}
              </MediaIcon>
              <div>
                <strong>Demo Videos</strong>
                <p>Interactive demonstrations and project showcases</p>
              </div>
            </MediaPlaceholder>
            
            <MediaPlaceholder>
              <MediaIcon>
                {/* <FaFileAlt /> */}
              </MediaIcon>
              <div>
                <strong>Technical Documentation</strong>
                <p>Detailed project documentation and reports</p>
              </div>
            </MediaPlaceholder>
          </MediaGallery>
        </Subsection>
      </Section>
    </MediaContainer>
  );
};

export default Media;

