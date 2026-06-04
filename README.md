# FIT2179 Data Visualisation 2 — How Australia Moves

Author: Yash Sibal  
Date: 3 June 2026

This is a single-page scrolling data visualisation about adult sport, fitness and physical activity participation in Australia.

## Main question

Are Australians mainly participating through traditional organised sport, or through flexible activities like walking, gym and running?

## Technical notes

- The page uses Vega, Vega-Lite and Vega-Embed through CDN scripts.
- All diagrams are Vega-Lite visualisations rendered with `vegaEmbed()`.
- Human-readable Vega-Lite specifications are stored in the `/js` folder.
- Source CSV files are stored in the `/data` folder for transparency.
- The live site is intended to be published with GitHub Pages from the repository root.

## Data sources

1. Australian Sports Commission, AusPlay Data Tables, January-December 2025, released 30 April 2026.  
   https://www.ausport.gov.au/clearinghouse/research/ausplay/results/data-tables

2. Australian Bureau of Statistics, National, state and territory population, September 2025.  
   https://www.abs.gov.au/statistics/people/population/national-state-and-territory-population/latest-release

3. Simplified Australia outline and approximate state/territory capital coordinates are used only for the projected symbol map context.

## AI acknowledgement

Generative AI tools were used to assist with planning, code structure, Vega-Lite specifications and drafting explanatory text. Data values were extracted from the cited public data sources.
