import React, { useContext } from 'react'

const themeContext = React.createContext('light');

const LOCAL_STORAGE_THEME_KEY = 'current_theme_color';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    
    const currentTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || 'light';

    return (
        <themeContext.Provider value={currentTheme}>
            <div className={`${currentTheme === 'dark' ? 'dark' : ''} min-h-screen w-full`}>
                {children}
            </div>
        </themeContext.Provider>
    );
}

export const Template = (props: React.ReactNode | any) => {
    
  return (
    <ThemeProvider>
      {props.children}
    </ThemeProvider>
  )
}

export default Template
