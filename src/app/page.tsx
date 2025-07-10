"use client";

import { C1Chat, ThemeProvider } from "@thesysai/genui-sdk";
import "@crayonai/react-ui/styles/index.css";
import { Theme, themePresets } from '@crayonai/react-ui';


const lightTheme: Theme = {
  
  // Professional light theme colors
  ...themePresets.jade.theme,
  defaultChartPalette:  [" #ffe867", " #A6EF5F", "#4BCC00", " #F7931A", " #0D1217",],
  pieChartPalette:  [" #A6EF5F", " #ffe867", "#4BCC00", " #F7931A", " #0D1217",],
  barChartPalette: [" #ffe867", " #A6EF5F", "#4BCC00", " #F7931A", " #0D1217",],
  lineChartPalette: [" #ffe867", " #A6EF5F", "#4BCC00", " #F7931A", " #0D1217",],
  areaChartPalette: [" #ffe867", " #A6EF5F", "#4BCC00", " #F7931A", " #0D1217",],
  radarChartPalette: [" #ffe867", " #A6EF5F", "#4BCC00", " #F7931A", " #0D1217",],
  radialChartPalette: [" #ffe867", " #A6EF5F", "#4BCC00", " #F7931A", " #0D1217",],
  interactiveAccent: "#35af00",
  interactiveAccentHover:"#ffffff",
  brandElFills: "#ffffff",
  backgroundFills:"#ffffff",
  containerHoverFills:"#4BCC00",
  interactiveAccentPressed: "#4BCC00",
  interactivePressed: "#4BCC00",
  interactiveDefault:  "#ffffff",
  interactiveHover: "#4BCC00",
  interactiveDisabled: "#4BCC00",

};

export default function Home() {
  return (
    
    <C1Chat  agentName="CoinGecko + C1" apiUrl="/api/chat" 
    logoUrl='https://static.coingecko.com/gecko-logo-new-color.svg'
    theme={{
      mode: 'light',
      theme: lightTheme,
    }}
     />
  );
}
