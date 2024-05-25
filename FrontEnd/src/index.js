import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "@material-tailwind/react";

const theme = {
  iconButton: {
    defaultProps: {
      variant: "filled",
      size: "md",
      color: "blue",
      fullWidth: false,
      ripple: true,
      className: "",
    },
    valid: {
      variants: ["filled", "outlined", "gradient", "text"],
      sizes: ["sm", "md", "lg"],
      colors: [
        "white",
        "blue-gray",
        "gray",
        "brown",
        "deep-orange",
        "orange",
        "amber",
        "yellow",
        "lime",
        "light-green",
        "green",
        "teal",
        "cyan",
        "light-blue",
        "blue",
        "indigo",
        "deep-purple",
        "purple",
        "pink",
        "red",
      ],
    },
    styles: {
      sizes: {
        sm: {
          width: "w-6",
          maxWidth: "max-w-[32px]",
          height: "h-6",
          maxHeight: "max-h-[32px]",
          borderRadius: "rounded-lg",
          fontSize: "text-xs",
        },
        md: {
          width: "w-8",
          maxWidth: "max-w-[40px]",
          height: "h-8",
          maxHeight: "max-h-[40px]",
          borderRadius: "rounded-lg",
          fontSize: "text-xs",
        },
        lg: {
          width: "w-10",
          maxWidth: "max-w-[48px]",
          height: "h-10",
          maxHeight: "max-h-[48px]",
          borderRadius: "rounded-lg",
          fontSize: "text-sm",
        },
      },
    },
  },
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider value={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();