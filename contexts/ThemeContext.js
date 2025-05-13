import React, { createContext, useContext, useState, useMemo } from 'react';
import { useColorScheme } from 'react-native';

// Định nghĩa màu cho từng theme
const lightColors = {
  background: '#fff',
  text: '#222',
  primary: '#0095f6',
  secondary: '#fbbf24',
  border: '#eee',
  card: '#fafafa',
};
const darkColors = {
  background: '#181818',
  text: '#fff',
  primary: '#0095f6',
  secondary: '#fbbf24',
  border: '#333',
  card: '#222',
};

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Lấy theme mặc định từ hệ điều hành
  const systemScheme = useColorScheme();
  const [theme, setTheme] = useState(systemScheme || 'light');

  // Hàm chuyển đổi theme
  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  // Object màu sắc theo theme
  const colors = useMemo(() => (theme === 'dark' ? darkColors : lightColors), [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}