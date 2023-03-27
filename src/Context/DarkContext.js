import React, { createContext, useContext, useState } from 'react';

export const darkProvider = createContext()
const DarkContext = ({children}) => {
    const [darkMode, setDarkMode] = useState(false)
    const value = {darkMode, setDarkMode}
    return (
        <darkProvider.Provider value={value}>
            {children}
        </darkProvider.Provider>
    );
};

export const useDark = () => {
    const {darkMode} = useContext(darkProvider)
    return darkMode
}

export default DarkContext;