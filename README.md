# Andrea Leang - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and styled-components. This website showcases Andrea Leang's academic achievements, research experience, and professional background as an MEng candidate at MIT.

## 🚀 Features

- **Modern React Architecture**: Built with React 18, TypeScript, and modern hooks
- **Responsive Design**: Mobile-first approach with beautiful animations
- **GitHub Pages Compatible**: Optimized for static hosting on GitHub Pages
- **Accessible**: WCAG compliant with proper semantic HTML
- **Performance Optimized**: Fast loading with code splitting and optimization
- **Modern Styling**: Styled-components with CSS-in-JS approach
- **Smooth Animations**: Framer Motion for delightful user interactions

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, React Router
- **Styling**: Styled-components, CSS-in-JS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Build Tool**: Create React App
- **Deployment**: GitHub Pages

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   └── Header.tsx      # Navigation header component
├── pages/              # Page components
│   ├── Home.tsx        # Landing page
│   ├── Research.tsx    # Research and publications
│   ├── Experience.tsx  # Work experience and leadership
│   ├── Media.tsx       # Media gallery and articles
│   └── Contact.tsx     # Contact form and information
├── styles/             # Global styles and themes
│   └── GlobalStyle.ts  # Styled-components global styles
├── App.tsx             # Main app component with routing
└── index.tsx           # App entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/akleang/akleang.git
cd akleang
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

### Deploying to GitHub Pages

```bash
npm run deploy
```

This will build the project and deploy it to GitHub Pages.

## 📱 Pages Overview

### Home
- Welcome message and introduction
- Download resume functionality
- Professional summary

### Research
- Publications with external links
- Research experience at MIT Media Lab and LEMI
- Focus areas: ML, robotics, VR/AR, biotechnology

### Experience
- Work experience including Fencing Star U.S. Distribution
- Teaching Assistant role at MIT
- Leadership positions and extracurriculars

### Media
- Publications and articles
- Media gallery (placeholder for future content)
- Interactive project showcases

### Contact
- Contact information with clickable links
- Modern contact form with email client integration
- GitHub Pages compatible email handling

## 🎨 Design Features

- **Color Scheme**: Professional blue and green palette
- **Typography**: Inter font family for modern readability
- **Animations**: Smooth page transitions and hover effects
- **Responsive**: Mobile-first design with breakpoints
- **Accessibility**: Proper ARIA labels and keyboard navigation

## 🔧 Customization

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route in `src/App.tsx`
3. Update the navigation in `src/components/Header.tsx`

### Styling

The project uses styled-components with a CSS-in-JS approach. Global styles and theme variables are defined in `src/styles/GlobalStyle.ts`.

### Content Updates

- Update page content directly in the respective page components
- Resume file should be placed in the `public/` directory
- Images and media should be added to the `public/` directory

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Contact

Andrea Leang - [akleang@mit.edu](mailto:akleang@mit.edu)

Project Link: [https://github.com/akleang/akleang](https://github.com/akleang/akleang)

---

Built with ❤️ using React and modern web technologies.
