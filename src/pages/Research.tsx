import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
// import { FaExternalLinkAlt, FaGraduationCap, FaMicroscope } from 'react-icons/fa';

const ResearchContainer = styled.div`
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

const Research: React.FC = () => {
  return (
    <ResearchContainer>
      <Section>
        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Research
        </Title>
        
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Focused in machine learning and data analytics in robotics, VR/AR, biotechnology, and biomechanics.
        </Subtitle>

        <Subsection
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <SubsectionTitle>
            {/* <FaMicroscope /> */}
            Publications
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
                Acknowledged for contributions to running experiments with ultrasound, EKGs, and motion tracking.
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
            {/* <FaGraduationCap /> */}
            Research Experience
          </SubsectionTitle>
          <ExperienceList>
            <ExperienceItem>
              <ExperienceTitle>MIT Media Lab (June 2024 - August 2024)</ExperienceTitle>
              <ExperienceDescription>
              Networked Electronic Textile Skin for VR/AR
              </ExperienceDescription>
              <ExperienceBullet>
                - Developed a 3D digital twin of a grid of sensors embedded in fabric. Utilizing Unity and Arduino, the digital twin accurately updates with real-time 
                movements, folds, lengths, and slopes in the fabric, enhancing VR/AR experiences
              </ExperienceBullet>
              <ExperienceBullet>
              - Engineered real-time control of robotic arm via changes in connected sensors on a person's arm using bi-directional data communication between Unity and multiple Arduino ports
              </ExperienceBullet>
              <ExperienceBullet>
              - This project involved advanced sensor integration, real-time data processing, 
                and immersive technology development
              </ExperienceBullet>
            </ExperienceItem>
            
            <ExperienceItem>
              <ExperienceTitle>MIT LEMI (June 2023 - June 2024)</ExperienceTitle>
              <ExperienceDescription>
                Towards Microbial-Arduino Study 
              </ExperienceDescription>
              <ExperienceBullet>
                - Automated and improved analysis of bacterial videos using MATLAB and Machine Learning clustering techniques 
                to assess surface charge characteristics
              </ExperienceBullet>
              <ExperienceBullet>
                - This research contributed to the "Zeta potential characterization 
                using commercial microfluidic chips" publication and advanced our understanding of bateria characterization
              </ExperienceBullet>
            </ExperienceItem>

            <ExperienceItem>
              <ExperienceTitle>MIT.nano Immersion Lab (April 2022 - May 2022)</ExperienceTitle>
              <ExperienceDescription>
                Joint-Stability Study 
              </ExperienceDescription>
              <ExperienceBullet>
                - Lead experiments to collect EMG, motion tracking, ultrasound, and video data of 
                20 participants doing various arm exercises to identify occurrences of highest muscle instability
              </ExperienceBullet>
              <ExperienceBullet>
              - Acknowledged in “A comparison of point-tracking algorithms in ultrasound videos 
              from the upper limb”
              </ExperienceBullet>
            </ExperienceItem>

            <ExperienceItem>
              <ExperienceTitle>MIT.nano Immersion Lab (January 2022 - January 2022)</ExperienceTitle>
              <ExperienceDescription>
                Music-Running Study 
              </ExperienceDescription>
              <ExperienceBullet>
              - Programmed functions in Python to mitigate the experiment's treadmill speed error
              </ExperienceBullet>
              <ExperienceBullet>
              - Colead experiments with a team of 5 to collect motion tracking, EMG, video, and 
              audio data to understand how different tempos of music affect a person’s walking structure
              </ExperienceBullet>
            </ExperienceItem>
            
          </ExperienceList>
        </Subsection>
      </Section>
    </ResearchContainer>
  );
};

export default Research;
