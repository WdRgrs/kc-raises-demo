# Kingscrowd Raises Table

A Nuxt 4 application displaying Active Reg CF and Reg A+ fundraising deals from the Kingscrowd API.

## Features

- **Table View**: Displays raise name, status, platform, money raised to date, and valuation
- **Pagination**: Handles 500+ results with client-side pagination (50 items per page)
- **CSV Export**: Client-side download of currently displayed table data
- **Error Handling**: Toast notifications and console logging for API errors
- **Loading States**: Visual feedback during data fetching
- **Nuxt UI**: Leverages Nuxt UI components for accessibility and consistent styling

## Setup

1. Clone the repository
```bash
  git clone https://github.com/WdRgrs/kc-raises-demo.git
```

2. Install dependencies:
```bash
   npm install
```

3. Create a `.env` file with your Kingscrowd API key:
```
   NUXT_KC_API_KEY=your_api_key_here
```

4. Run the development server:
```bash
   npm run dev
```

## Architecture Decisions

- **Nuxt UI**: Chosen for rapid development with built-in accessibility (Table, Pagination, Toast components)
- **Server Route**: API key stored securely in `.env` and accessed only via `/api/raises` server endpoint
- **TypeScript**: Full type safety with transformed API response types
- **Dual Pagination**: Batch fetching of 2 KC API pages (25 items each) to display 50 items per page

## Tradeoffs & Future Improvements

**What I would change with more time:**

1. **State Management**: Implement Pinia for persistent table state across navigation
2. **Server Caching**: Add Redis or Nuxt's `useStorage` to cache KC API responses and reduce redundant calls
3. **UI/UX Enhancements**:
   - Mobile responsiveness
   - Table sorting and filtering
   - Better loading indicators (sticky header, skeleton states)
   - Display current item count/range
4. **CSV Export**: Move to server-side with cache integration
5. **Testing**: Add comprehensive unit and integration tests
6. **Error Handling**: More robust error boundaries and retry logic

## AI Usage

Used Claude (Anthropic) & ChatGPT for:
- Clarifying docs, researching concepts, sanity checks with project brainstorming/direction
- Generating this ReadmMe given vairous notes from project lifecycle
- Cleaning up & evaluation of certain code snippets/direction
- Explicitly used to create: CSV export & ReadMe.vue SFC, from this readme
