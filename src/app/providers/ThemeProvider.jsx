"use client";
export default function ThemeProvider({ children }) {
  // In a future update, we can move the dark mode logic here.
  // For now, it simply passes children through to satisfy the architectural requirement.
  return (
    <>
      {children}
    </>
  );
}
