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

  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const IdentitySection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;

  @media (min-width: 992px) {
    display: contents;
  }
`;

const TitleBar = styled.div`
  display: grid;
  grid-template-columns: 44px 1fr 44px;
  align-items: center;
  width: 100%;

  @media (min-width: 992px) {
    display: block;
    width: auto;
  }
`;

const TitleBarSpacer = styled.div`
  @media (min-width: 992px) {
    display: none;
  }
`;

const Title = styled(motion.h1)`
  font-size: 2rem;
  font-weight: 650;
  margin: 0;
  text-align: center;
  white-space: nowrap;
  flex-shrink: 0;
  justify-self: center;
  grid-column: 2;

  @media (min-width: 992px) {
    text-align: left;
    grid-column: auto;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  opacity: 0.9;

  @media (min-width: 992px) {
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
  display: none;
  gap: 0;
  background: rgba(255, 255, 255, 0.1);
  border-radius: var(--border-radius);
  padding: 4px;
  backdrop-filter: blur(10px);

  @media (min-width: 992px) {
    display: flex;
  }
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
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.15);
  border: none;
  color: white;
  font-size: 1.5rem;
  line-height: 1;
  width: 44px;
  height: 44px;
  border-radius: var(--border-radius);
  cursor: pointer;
  flex-shrink: 0;
  transition: var(--transition);
  grid-column: 3;
  justify-self: end;

  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }

  @media (min-width: 992px) {
    display: none;
  }
`;

const MobileNav = styled(motion.nav)`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  border-radius: var(--border-radius);
  padding: 8px;
  backdrop-filter: blur(10px);
  overflow: hidden;

  @media (min-width: 992px) {
    display: none;
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
        <IdentitySection>
          <TitleBar>
            <TitleBarSpacer aria-hidden="true" />
            <Title
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Andrea Leang
            </Title>

            <MobileMenuButton
              type="button"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </MobileMenuButton>
          </TitleBar>

          <ContactInfo>
            <span>Cambridge, MA 02139</span>
            <a href="mailto:andrealeang@gmail.com">andrealeang@gmail.com</a>
            <a href="https://linkedin.com/in/andrea-leang/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </ContactInfo>
        </IdentitySection>

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
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;