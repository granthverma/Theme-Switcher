// Importing necessary functions from the 'react' library

import { createContext, useContext } from "react";

 //hum value de sakte jab wo bana toh 
 // Creating a context for managing theme-related data
export const ThemeContext = createContext ({
    themeMode: "light",   // Default theme mode is set to "light"
    darkTheme : ()=> {},   // Placeholder function for activating dark theme
    lightTheme : ()=> {},  // Placeholder function for activating light theme

})

// methods  variable de sakte ho method bhi kuch de sakte ho

// Creating a provider component using the context created above
export const ThemeProvider = ThemeContext.Provider

//khi bhi export ho sakte hai ThemeProvider


// Custom hook for accessing the theme context within components
export default function useTheme(){
    return useContext (ThemeContext)
}

// 1. createContext is used to create a context for managing theme-related data.
// 2. The context provides a default value with "light" as the initial theme mode
//    and empty functions (placeholders) for darkTheme and lightTheme.
// 3. ThemeProvider is a shorthand for ThemeContext.Provider, allowing easy usage
//    of the context provider in other parts of the code.
// 4. useTheme is a custom hook that uses the useContext hook to access the current
//    value of the ThemeContext, allowing components to subscribe to theme changes.

