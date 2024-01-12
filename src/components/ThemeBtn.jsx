// Importing the 'react' library and the custom 'useTheme' hook from the theme context
import React from 'react';
import useTheme from '../contexts/theme';

// Functional component for a theme toggle button
export default function ThemeBtn() {
    // Destructuring values from the useTheme hook
    const { themeMode, lightTheme, darkTheme } = useTheme();

    // Event handler for the theme toggle button
    const onChangeBtn = (e) => {
        // Checking whether the toggle button is checked (dark mode) or unchecked (light mode)
        const darkModeStatus = e.currentTarget.checked;

        // Invoking the appropriate theme change function based on the toggle button status
        if (darkModeStatus) {
            darkTheme();
        } else {
            lightTheme();
        }
    }

    // JSX rendering of the theme toggle button
    return (
        <label className="relative inline-flex items-center cursor-pointer">
            {/* Input checkbox element for the theme toggle */}
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={onChangeBtn}
                checked={themeMode === "dark"}
            />

            {/* Styled div representing the visual appearance of the theme toggle button */}
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>

            {/* Text label indicating the purpose of the toggle button */}
            <span className="ml-3 text-sm font-medium text-gray-900">Toggle Theme</span>
        </label>
    );
}
