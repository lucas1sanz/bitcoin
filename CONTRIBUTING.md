# Contributing to Bitcoin Security Reference

Thank you for helping improve this resource. Here are the guidelines.

## What We Accept

- **Corrections** to factual errors (wrong dates, incorrect technical descriptions)
- **Additions** of well-established security practices with sources
- **Updated information** when products change, incidents occur, or recommendations shift
- **New resource links** that meet the quality bar below
- **Typo and clarity fixes**

## What We Don't Accept

- Affiliate or referral links
- Promotional content for products or services
- Content without verifiable sources for factual claims
- New "levels" or major structural changes (open an issue to discuss first)
- Analytics, tracking, or third-party scripts

## Resource Link Quality Bar

External links in `resources.html` must be:
- **Primary sources**: official product sites, GitHub repositories, or BIP spec pages
- **Non-commercial education**: no affiliate links, no sponsored content
- **Relevant**: directly related to Bitcoin self-custody security
- **Stable**: long-lived URLs preferred (GitHub, official domains)

## Making a Contribution

1. Fork the repository
2. Make your change in a branch
3. Ensure `python3 -m http.server 8080` serves the site correctly with no console errors
4. Open a pull request describing what you changed and why
5. Link to any sources for factual changes

## Content Standards

- Write in clear, direct English — active voice preferred
- No marketing language or superlatives without evidence
- Security claims must be substantiated (include the source or a reference link)
- When documenting vulnerabilities or incidents, include the year and a verifiable reference
- For product recommendations, disclose meaningful limitations alongside the recommendation

## Adding to the Search Index

If you add a new section to any level page:
1. Add a corresponding document object to `assets/js/search-index.js`
2. Follow the existing format: `{ id, title, url, level, levelLabel, tags, body }`
3. The `url` should be `levelN.html#section-id`
4. Keep `body` under 300 words — this is the search excerpt source

## Code Style

- HTML: 2-space indentation, semantic elements, ARIA labels on interactive elements
- CSS: custom properties for all design tokens (see `base.css`)
- JS: plain ES5 (no transpilation), IIFE wrapping, `'use strict'`
- No build tools, no npm, no frameworks

## Reporting Issues

Open a GitHub Issue for:
- Broken external links (or wait for the weekly automated link check)
- Factually incorrect content
- Security or privacy concerns with the site itself
- Feature suggestions (open to discussion)
