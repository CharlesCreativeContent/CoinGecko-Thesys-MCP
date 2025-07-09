"use client";

import { C1Chat, ThemeProvider } from "@thesysai/genui-sdk";
import "@crayonai/react-ui/styles/index.css";
import { themePresets } from '@crayonai/react-ui';

interface ChartColorPalette {
  defaultChartPalette?: string[]; // Fallback for all charts
  barChartPalette?: string[]; // Specific to BarChart
  lineChartPalette?: string[]; // Specific to LineChart
  areaChartPalette?: string[]; // Specific to AreaChart
  pieChartPalette?: string[]; // Specific to PieChart
  radarChartPalette?: string[]; // Specific to RadarChart
  radialChartPalette?: string[]; // Specific to RadialChart
}

export default function Home() {
  return (
    
    <C1Chat agentName="CoinGecko + C1" apiUrl="/api/chat" 
    logoUrl='https://static.coingecko.com/gecko-logo-new-color.svg'
    mode="light"
    theme={{ ...themePresets.jade,
      defaultChartPalette: [
        "#34495e",
        "#16a085",
        "#f39c12",
        "#e74c3c",
        "#8e44ad",
      ],
  } } 
     />
  );
}
