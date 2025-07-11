# CoinGecko MCP with C1 Chat 

<img src="https://shawncharles.com/images/CoinGecko.gif"/>

<p align="center">
  <a href="https://thesys.dev"><img styles="margin-right:20px;" src="https://img.shields.io/badge/Built_with_Thesys-black?style=plastic&logoColor=white&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjcwIiBoZWlnaHQ9IjYxOSIgdmlld0JveD0iMCAwIDI3MCA2MTkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xMC42MzgyIDYxOC42MDNDNC43NjI4OSA2MTguNjAzIDAgNjEzLjg0OSAwIDYwNy45ODVWMjgwLjM1MkMwIDI3NC40ODggNC43NjI4OSAyNjkuNzM0IDEwLjYzODIgMjY5LjczNEg5My42ODI1Qzk5LjU1NzkgMjY5LjczNCAxMDQuMzIxIDI2NC45OCAxMDQuMzIxIDI1OS4xMTZMMTA0LjMyMSAxNzEuODVDMTA0LjMyMSAxNjUuOTg1IDk5LjU1NzkgMTYxLjIzMSA5My42ODI2IDE2MS4yMzFIMTAuNjM4MkM0Ljc2Mjg4IDE2MS4yMzEgMCAxNTYuNDc3IDAgMTUwLjYxM1YxMC42MTg0QzAgNC43NTQwMSA0Ljc2Mjg5IDAgMTAuNjM4MiAwSDExMC4yNjhDMTE2LjE0MyAwIDEyMC45MDYgNC43NTQgMTIwLjkwNiAxMC42MTg0VjE0NS4zMDRDMTIwLjkwNiAxNTEuMTY4IDEyNS42NjkgMTU1LjkyMiAxMzEuNTQ0IDE1NS45MjJIMjU5LjM2MkMyNjUuMjM3IDE1NS45MjIgMjcwIDE2MC42NzYgMjcwIDE2Ni41NFYyNTkuMTE2QzI3MCAyNjQuOTggMjY1LjIzNyAyNjkuNzM0IDI1OS4zNjIgMjY5LjczNEgxMzEuNTQ0QzEyNS42NjkgMjY5LjczNCAxMjAuOTA2IDI3NC40ODggMTIwLjkwNiAyODAuMzUyVjYwNy45ODVDMTIwLjkwNiA2MTMuODQ5IDExNi4xNDMgNjE4LjYwMyAxMTAuMjY4IDYxOC42MDNIMTAuNjM4MloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=" alt="Built with Thesys" /></a>
  <a href="https://discord.gg/Pbv5PsqUSv"><img src="https://img.shields.io/badge/Discord-Join-blueviolet.svg?logo=discord" alt="Discord: Join" /></a>
  <a href="https://linkedin.com/company/thesysdev"><img src="https://img.shields.io/badge/Connect:_Linkedin-blue?logo=linked-in&logoColor=white" alt="Linkedin: Connect" /></a>
  <a href="https://x.com/thesysdev"><img src="https://img.shields.io/twitter/url/https/twitter/follow/thesysdev?style=social&label=Follow%20%40ThesysDev" alt="Twitter: Follow" /></a>
</p>

This is a [C1 by Thesys](https://thesys.dev) project that demonstrates MCP (Model Context Protocol) server integration with streaming chat capabilities.

## Features

- **C1 Chat Integration**: Powered by Thesys C1 for Real-time streaming of AI conversations
- **MCP Server Support**: Connects to MCP servers to extend AI capabilities with tools
- **Tool Integration**: Automatically lists and calls tools from connected MCP servers
- **“One‑liner” public endpoint**: Drop the SSE URL and you’re live, without dealing with auth or SDKs. 
- **Rich analytical endpoints**: 	OHLCV, market‑cap charts, top gainers/losers, new‑coin listings, on‑chain holder charts, etc.

## Getting Started

### Prerequisites

You'll need:
- **Thesys API**: Get your key from [Thesys Console](https://chat.thesys.dev/console/keys)
- **Node.js/pnpm**: For running the development server

### Environment Variables

Set up your environment variables:

```bash
export THESYS_API_KEY=<your-thesys-api-key>
```

### Installation

Install dependencies using pnpm:

```bash
pnpm install
```

### Development

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## What You Can Do - Examples

Once the app is running, you can ask the AI to help with crypto‑focused tasks. Try prompts like:

### 📁 **Market Data & Prices**
```
“What’s the current price of Bitcoin in USD?”
“Show me the top 10 coins by market cap.”
“Compare the 24‑hour percentage change of ETH, SOL, and DOGE.”
```

### 📊 **Historical Analysis**
```
“Plot a 30‑day price chart for Ethereum.”
“How did Cardano’s market cap change over the last year?”
“Give me the OHLC data for BTC from 2021‑01‑01 to 2021‑06‑30.”
```

### 🔍 **Discovery & Trends**
```
“List today’s top gainers and losers.”
“Which NFTs are trending this week?”
“Find memecoins launched in the past 14 days with > $10 M volume.”
```

### 🧭 **On‑Chain & DEX Insights**
```
“Show the top pools on Uniswap v3 (Ethereum) right now.”
“Get the largest holders of the PEPE token.”
“Display a heatmap of 24‑hour DEX volume by network.”
```

### 🏗️ **Development Assistance**
```
“Help me integrate the CoinGecko MCP client in Next.js.”
“What environment variables are required for local CoinGecko MCP?”
“Explain the difference between tools=dynamic and static tools.”
```


## MCP Integration

This project demonstrates how to integrate MCP servers with C1 chat:

1. **MCP Client**: The `MCPClient` class (`src/app/api/chat/mcp.ts`) handles:
   - Connecting to MCP servers
   - Listing available tools via `mcp.listTools()`
   - Running tool calls via `runTools()`

2. **Chat Route**: The API route (`src/app/api/chat/route.ts`) integrates MCP tools:
   - Connects to MCP server on startup
   - Passes MCP tools to the OpenAI completion request
   - Handles tool calls seamlessly with thinking states

3. **Tool Execution**: When the AI needs to use tools, the system:
   - Receives tool calls from the AI model
   - Executes them via the MCP server
   - Returns results back to the conversation
   - Shows thinking states during execution

Note — When running with a Pro API key you unlock additional endpoints such as get_new_coins_list, get_coins_top_gainers_losers, and advanced on‑chain tools.

### Available Tools

The CoinGeck MCP server provides these tools and more:
- `get_coins_list` - Paginated list of supported cryptocurrencies
- `find_coin_ids` - Look up CoinGecko IDs by coin name or symbol
- `get_price_simple` - Current price for one or more coins
- `get_historical_data` - Historical price, market cap & volume
- `get_ohlc_data` - OHLC/candlestick data for a coin & interval
- `get_trending` - Trending search list on CoinGecko
- `get_global_market` - Global crypto market metrics
- `get_pools_trending` - Top trending DEX pools on GeckoTerminal
- `refresh_cache` - Refresh the local coin metadata cache

Note — When running with a Pro API key you unlock additional endpoints such as get_new_coins_list, get_coins_top_gainers_losers, and advanced on‑chain tools.

## Thinking States

The system includes visual thinking states that show users:
- 💭 "Processing your request..." - Initial analysis
- 💭 "Using tool: get_price_simple” – While fetching data
- 💭 "Processing results..." - Parsing & formatting the response

## Tips for Best Results

1. **Be Specific**: “Price of BTC and ETH in EUR” instead of “crypto prices”.
2. **Combine Queries**: “Show BTC 7‑day chart and latest news headlines.”
3. **Use Filters**: “Find DeFi coins with market cap between $100 M and $1 B.”
4. **Ask for Visuals**: Charts and tables improve clarity.
5. **Cache Wisely**: Use refresh_cache sparingly to stay within rate limits.

## Learn More

- [C1 Documentation](https://docs.thesys.dev) - Learn about Thesys C1
- [CoinGecko MCP Documentation](https://mcp.api.coingecko.com/) - Learn more about Coin Gecko MCP Servers
- [Thinking States Guide](https://docs.thesys.dev/guides/thinking-states) - Visual progress indicators
- [MCP Specification](https://spec.modelcontextprotocol.io/) - Model Context Protocol details
- [MCP SDK](https://github.com/modelcontextprotocol/typescript-sdk) - TypeScript SDK for MCP
