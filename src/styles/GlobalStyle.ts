import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #007acc;
    --primary-dark: #005f8a;
    --secondary-color: #04AA6D;
    --text-primary: #1e293b;
    --text-secondary: #64748b;
    --background: #f8fafc;
    --surface: #ffffff;
    --border: #e2e8f0;
    --shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --border-radius: 8px;
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    background-color: var(--background);
    color: var(--text-primary);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: var(--primary-color);
    text-decoration: none;
    transition: var(--transition);
    
    &:hover {
      color: var(--primary-dark);
    }
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    font-family: inherit;
    transition: var(--transition);
  }

  input, textarea {
    font-family: inherit;
    outline: none;
    border: 1px solid var(--border);
    border-radius: var(--border-radius);
    transition: var(--transition);
    
    &:focus {
      border-color: var(--primary-color);
      box-shadow: 0 0 0 3px rgba(0, 122, 204, 0.1);
    }
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .section {
    padding: 60px 0;
  }

  .subsection {
    background: var(--surface);
    border-radius: var(--border-radius);
    padding: 30px;
    margin: 30px 0;
    box-shadow: var(--shadow);
    border: 1px solid var(--border);
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 12px 24px;
    border-radius: var(--border-radius);
    font-weight: 500;
    text-decoration: none;
    transition: var(--transition);
    cursor: pointer;
    
    &.btn-primary {
      background-color: var(--primary-color);
      color: white;
      
      &:hover {
        background-color: var(--primary-dark);
        transform: translateY(-1px);
        box-shadow: var(--shadow-lg);
      }
    }
    
    &.btn-secondary {
      background-color: transparent;
      color: var(--primary-color);
      border: 2px solid var(--primary-color);
      
      &:hover {
        background-color: var(--primary-color);
        color: white;
      }
    }
  }

  @media (max-width: 768px) {
    .container {
      padding: 0 16px;
    }
    
    .section {
      padding: 40px 0;
    }
    
    .subsection {
      padding: 20px;
      margin: 20px 0;
    }
  }
`;

