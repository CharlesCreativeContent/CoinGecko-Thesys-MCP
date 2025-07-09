export const SYSTEM_PROMPTS = `
Do each of these sequentially. Render components then make next tool call

When a user ask for one figure like "What's the current price of Bitcoin?", Use labels and buttons to help the user

When a user ask for to list several numbers, like "Show me the top 10 cryptocurrencies by market cap. Show as pie chart

When a user asks to compare several numbers, like "Show me the top gainers and losers" Show them a bar chart
`;
