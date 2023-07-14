import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { ThemeProvider, createTheme } from "@mui/material";
import Home from "./pages/Home";

const App = () => {
  const [explaination, setExplaination] = useState("Loading...");

  const [previousExplaination, setPreviousExplaination] = useState([]);

  console.log(explaination);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#0079FF",
      },
      secondary: {
        main: "#071952",
      },
    },
  });

  const explainCode = async (text) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: "kindly explain this code in simple language" + text,
        temperature: 0.5,
        max_tokens: 600,
        top_p: 1.0,
        frequency_penalty: 0.8,
        presence_penalty: 0.0,
      }),
    };

    try {
      const response = await fetch(
        import.meta.env.VITE_OPENAI_API_URL,
        options
      );
      const data = await response.json();
      setExplaination(data.choices[0].text);
      setPreviousExplaination([data.choices[0].text, ...previousExplaination]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Home
        explainCode={explainCode}
        explaination={explaination}
        previousExplaination={previousExplaination}
      />
    </ThemeProvider>
  );
};

export default App;
