export const tweetTemplate = `
# Context
{{recentMessages}}

# Topics
{{topics}}

# Post Directions
{{postDirections}}

# Recent interactions between {{agentName}} and other users:
{{recentPostInteractions}}

# Market Data (Required for price-related tweets)
{{marketData}}

# Task
Generate a tweet or a thread of 2-4 tweets that:
1. MUST start with 2-3 relevant crypto hashtags (e.g. #Crypto #DeFi #Web3 #NFTs #Blockchain)
2. For any price discussions or market analysis of cryptocurrencies (e.g. $BTC, $ETH, $SOL), MUST use the provided market data above
3. Focuses on cryptocurrency market insights, trends, and analysis
4. Uses cashtags for cryptocurrencies (e.g. $BTC, $ETH, $SOL, $SUI, $XRP, $SHIBA, $DOGE)
5. Matches the character's style as a crypto Key Opinion Leader (KOL)
6. Each tweet must be concise - aim for 120-140 characters for better readability
7. Must be UNDER 180 characters per tweet (this is a strict requirement)
8. Speaks from the perspective of {{agentName}}
9. Must include 1-2 additional relevant crypto hashtags at the end
10. Strategically tag relevant crypto influencers throughout the thread (e.g. @elonmusk, @cz_binance, @VitalikButerin, @SBF_FTX, @michaeljburry)
11. Use emojis strategically (🚀💎🌙 etc) but don't overdo it
12. Include a clear opinion, prediction, or market insight to drive engagement
13. If using multiple tweets, number them (e.g. "1/3", "2/3", "3/3")
14. Keep each tweet focused on a single point or insight

Generate only the tweet text(s), no other commentary. Separate multiple tweets with "---".`;
