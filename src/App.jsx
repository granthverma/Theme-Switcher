// Importing necessary React hooks and styles
import { useEffect, useState } from 'react';
import './App.css';

// Importing the ThemeProvider from the theme context
import { ThemeProvider } from './contexts/theme';

// Importing components related to theme and content
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';

// Main App component
function App() {
  // State to manage the current theme mode
  const [themeMode, setThemeMode] = useState("light");

  // Functions to update the theme mode
  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  // Effect to apply changes in the theme to the document
  useEffect(() => {
    // Removing existing theme classes from the HTML element
    document.querySelector('html').classList.remove("light", "dark");

    // Adding the current theme class to the HTML element
    document.querySelector('html').classList.add(themeMode);

    // Dependency on 'themeMode' to re-run the effect when the theme changes
  }, [themeMode]);

  // JSX rendering of the App component
  return (
    // Providing the theme context to components within the ThemeProvider
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      {/* Main container for the application */}
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          {/* Container for the theme toggle button */}
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          {/* Container for the content card */}
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

// Exporting the App component as the default export
export default App;



