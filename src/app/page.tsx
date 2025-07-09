"use client";

import { C1Chat, ThemeProvider } from "@thesysai/genui-sdk";
import "@crayonai/react-ui/styles/index.css";
import { Theme, themePresets } from '@crayonai/react-ui';


const lightTheme: Theme = {
  // Professional light theme colors
  defaultChartPalette: ["#4BCC00", "#0D1217", "green", "#A6EF5F", "light-green",],
  pieChartPalette: ["#4BCC00", "blue", "green", "#A6EF5F", "light-green",],
  barChartPalette: ["#4BCC00", "#0D1217", "green", "#A6EF5F", "#F7931A",],
  lineChartPalette: ["#4BCC00", "#0D1217", "green", "#A6EF5F", "#F7931A",],
  areaChartPalette: ["#4BCC00", "#0D1217", "green", "#A6EF5F", "#F7931A",],
  radarChartPalette: ["#4BCC00", "#0D1217", "green", "#A6EF5F", "#F7931A",],
  radialChartPalette: ["#4BCC00", "#0D1217", "green", "#A6EF5F", "#F7931A",],
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
