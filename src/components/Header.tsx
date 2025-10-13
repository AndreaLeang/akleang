import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeaderContainer = styled.header`
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
  color: white;
  padding: 20px 0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: var(--shadow-lg);
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Title = styled(motion.h1)`
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  opacity: 0.9;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
  }

  a {
    color: white;
    text-decoration: none;
    transition: var(--transition);
    
    &:hover {
      opacity: 0.8;
      text-decoration: underline;
    }
  }
`;

const Navigation = styled.nav`
  display: flex;
  gap: 0;
  background: rgba(255, 255, 255, 0.1);
  border-radius: var(--border-radius);
  padding: 4px;
  backdrop-filter: blur(10px);
`;

const NavLink = styled(Link)<{ $isActive: boolean }>`
  padding: 12px 20px;
  color: white;
  text-decoration: none;
  border-radius: calc(var(--border-radius) - 2px);
  font-weight: 500;
  transition: var(--transition);
  position: relative;
  
  ${props => props.$isActive && `
    background: rgba(255, 255, 255, 0.2);
    font-weight: 600;
  `}
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-1px);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 767px) {
    display: block;
  }
`;

const MobileNav = styled(motion.div)`
  display: none;
  
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 20px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: var(--border-radius);
    padding: 8px;
    backdrop-filter: blur(10px);
  }
`;

const Header: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/research', label: 'Research' },
    { path: '/experience', label: 'Experience' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' }
  ];

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <HeaderContainer>
      <HeaderContent>
        <Title
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Andrea Leang
        </Title>
        
        <ContactInfo>
          <span>Cambridge, MA 02139</span>
          <a href="mailto:akleang@mit.edu">akleang@mit.edu</a>
          <a href="https://linkedin.com/in/andrea-leang/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </ContactInfo>

        <Navigation>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              $isActive={location.pathname === item.path}
            >
              {item.label}
            </NavLink>
          ))}
        </Navigation>

        <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          ☰
        </MobileMenuButton>
      </HeaderContent>

      {isMobileMenuOpen && (
        <MobileNav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              $isActive={location.pathname === item.path}
            >
              {item.label}
            </NavLink>
          ))}
        </MobileNav>
      )}
    </HeaderContainer>
  );
};

export default Header;