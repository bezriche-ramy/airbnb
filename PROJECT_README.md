# AInbnb - Luxury Holiday Rental Landing Page

A beautiful, fullscreen landing page for a luxury holiday rental platform, inspired by Le Collectionist. Built with React and CSS, featuring a stunning background video, elegant search interface, and responsive design.

## 🌟 Features

- **Fullscreen Background Video** - Immersive ski vacation video from Le Collectionist's S3 bucket
- **Dark Overlay Effect** - Professional dark overlay for better text readability
- **Modern Navigation Bar** - Logo, menu, phone contact, app button, wishlist, and profile icons
- **Comprehensive Search Bar** - Destination, arrival date, departure date, and guest selection
- **Inspiration Prompt** - Helpful suggestion bar for undecided travelers
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **Component-Based Architecture** - Clean, reusable React components

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx           # Main navigation bar
│   ├── Navbar.css           # Navbar styles
│   ├── HeroSection.jsx      # Video background and hero text
│   ├── HeroSection.css      # Hero section styles
│   ├── SearchBar.jsx        # Search form component
│   ├── SearchBar.css        # Search bar styles
│   ├── SuggestionBar.jsx    # Inspiration prompt
│   └── SuggestionBar.css    # Suggestion bar styles
├── pages/
│   ├── Home.jsx             # Main landing page
│   └── Home.css             # Home page styles
├── App.jsx                  # App component
├── App.css                  # App styles
├── index.css                # Global styles
└── main.jsx                 # Entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd ainbnb
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📦 Dependencies

- **React** - UI library
- **Vite** - Build tool and dev server
- **react-icons** - Icon library (FaBars, FaHeart, FaUserCircle, FaGlobeAmericas, FaChevronRight)

## 🎨 Component Overview

### Navbar Component
- Logo: "le collectionist" branding
- Menu icon for navigation
- Phone number: +33 1 73 03 02 02
- "Obtenir l'app" button
- Wishlist icon
- Profile icon

### HeroSection Component
- Fullscreen background video from: `https://collectionist.s3.eu-west-1.amazonaws.com/production/assets/homepage/2025/ski-fever.mp4`
- Dark overlay (40% opacity)
- Hero title: "Vos vacances méritent d'être inoubliables"
- Subtitle: "Les plus belles maisons à louer, des services exceptionnels et des expériences mémorables"

### SearchBar Component
- Destination input field
- Arrival date picker
- Departure date picker
- Guest selector dropdown (1-10+ travelers)
- "Rechercher" (Search) button
- Responsive layout with proper field separators

### SuggestionBar Component
- Globe icon
- Text: "Vous ne savez pas où partir ?"
- Link: "S'inspirer"
- Subtle hover effects

### Home Page
- Combines all components
- Absolute positioning for search overlay
- Ensures proper z-index stacking

## 🎯 Key Features Implementation

### Video Background
The video is set to:
- Autoplay
- Muted (for autoplay compatibility)
- Loop continuously
- PlayInline for mobile support
- Cover the entire viewport with object-fit

### Responsive Design
- Desktop: Full layout with all features
- Tablet: Adjusted search bar layout
- Mobile: Stacked search fields, hidden phone/app button

### Styling Approach
- Pure CSS (no Tailwind or styled-components)
- One CSS file per component
- Clean, maintainable code structure
- Smooth transitions and hover effects
- Professional color scheme and typography

## 🛠️ Customization

### Changing the Background Video
Edit `src/components/HeroSection.jsx`:
```jsx
<source 
  src="YOUR_VIDEO_URL_HERE" 
  type="video/mp4" 
/>
```

### Updating Colors
Each component has its own CSS file. Key color values:
- Navbar background: `rgba(0, 0, 0, 0.3)` with backdrop blur
- Overlay: `rgba(0, 0, 0, 0.4)`
- Search button: `#000` (black)
- White text for contrast

### Modifying Text Content
All text is in French. To change language or content, edit the respective component JSX files.

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Development

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Linting
```bash
npm run lint
```

## 📄 License

This project is created for educational purposes.

## 🙏 Credits

- Design inspiration: Le Collectionist
- Background video: Le Collectionist S3 bucket
- Icons: react-icons library

## 📞 Support

For questions or issues, please open an issue in the repository.

---

**Enjoy building beautiful vacation rental experiences! ✨🏔️**
