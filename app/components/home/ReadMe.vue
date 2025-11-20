<template>
  <div class="max-w-4xl mx-auto p-8 readme">
    <h1>Kingscrowd Raises Table</h1>
    
    <p>A Nuxt 4 application displaying Active Reg CF and Reg A+ fundraising deals from the Kingscrowd API.</p>

    <h2>Features</h2>
    <ul>
      <li><strong>Table View</strong>: Displays raise name, status, platform, money raised to date, and valuation</li>
      <li><strong>Pagination</strong>: Handles 500+ results with client-side pagination (50 items per page)</li>
      <li><strong>CSV Export</strong>: Client-side download of currently displayed table data</li>
      <li><strong>Error Handling</strong>: Toast notifications and console logging for API errors</li>
      <li><strong>Loading States</strong>: Visual feedback during data fetching</li>
      <li><strong>Nuxt UI</strong>: Leverages Nuxt UI components for accessibility and consistent styling</li>
    </ul>

    <h2>Setup</h2>
    <ol>
      <li>Clone the repository
        <pre><code>git clone https://github.com/WdRgrs/kc-raises-demo.git</code></pre>
      </li>
      <li>
        Install dependencies:
        <pre><code>npm install</code></pre>
      </li>
      <li>
        Create a <code>.env</code> file with your Kingscrowd API key:
        <pre><code>NUXT_KC_API_KEY=your_api_key_here</code></pre>
      </li>
      <li>
        Run the development server:
        <pre><code>npm run dev</code></pre>
      </li>
    </ol>

    <h2>Architecture Decisions</h2>
    <ul>
      <li><strong>Nuxt UI</strong>: Chosen for rapid development with built-in accessibility (Table, Pagination, Toast components)</li>
      <li><strong>Server Route</strong>: API key stored securely in <code>.env</code> and accessed only via <code>/api/raises</code> server endpoint</li>
      <li><strong>TypeScript</strong>: Full type safety with transformed API response types</li>
      <li><strong>Dual Pagination</strong>: Batch fetching of 2 KC API pages (25 items each) to display 50 items per page</li>
    </ul>

    <h2>Tradeoffs & Future Improvements</h2>
    <p><strong>What I would change with more time:</strong></p>
    <ol>
      <li><strong>State Management</strong>: Implement Pinia for persistent table state across navigation</li>
      <li><strong>Server Caching</strong>: Add Redis or Nuxt's <code>useStorage</code> to cache KC API responses and reduce redundant calls</li>
      <li>
        <strong>UI/UX Enhancements</strong>:
        <ul>
          <li>Mobile responsiveness</li>
          <li>Table sorting and filtering</li>
          <li>Better loading indicators (sticky header, skeleton states)</li>
          <li>Display current item count/range</li>
        </ul>
      </li>
      <li><strong>CSV Export</strong>: Move to server-side with cache integration</li>
      <li><strong>Testing</strong>: Add comprehensive unit and integration tests</li>
      <li><strong>Error Handling</strong>: More robust error boundaries and retry logic</li>
    </ol>

    <h2>AI Usage</h2>
    <p>Used Claude (Anthropic) & ChatGPT for:</p>
    <ul>
      <li>Clarifying docs, researching concepts, sanity checks with project brainstorming/direction</li>
      <li>Generating this ReadmMe given various notes from project lifecycle</li>
      <li>Cleaning up & evaluation of certain code snippets/direction</li>
      <li>Explicitly used to create: CSV export & ReadMe.vue SFC, from this readme</li>
    </ul>
  </div>
</template>

<style scoped>
.readme {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
  line-height: 1.6;
  color: #333;
}

.readme h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  margin-top: 0;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 0.5rem;
}

.readme h2 {
  font-size: 1.75rem;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 0.25rem;
}

.readme p {
  margin-bottom: 1rem;
  line-height: 1.7;
}

.readme ul,
.readme ol {
  margin-bottom: 1rem;
  padding-left: 2rem;
}

.readme ul {
  list-style-type: disc;
}

.readme ol {
  list-style-type: decimal;
}

.readme li {
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

.readme ul ul {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.readme code {
  background-color: #f6f8fa;
  padding: 0.2rem 0.4rem;
  border-radius: 0.25rem;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.9em;
  color: #e83e8c;
}

.readme pre {
  background-color: #f6f8fa;
  padding: 1rem;
  border-radius: 0.375rem;
  overflow-x: auto;
  margin: 0.5rem 0 1rem 0;
  border: 1px solid #e5e7eb;
}

.readme pre code {
  background-color: transparent;
  padding: 0;
  color: #333;
  font-size: 0.875rem;
}

.readme strong {
  font-weight: 600;
  color: #1f2937;
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .readme {
    color: #e5e7eb;
  }

  .readme h1,
  .readme h2 {
    border-bottom-color: #374151;
  }

  .readme strong {
    color: #f3f4f6;
  }

  .readme code {
    background-color: #1f2937;
    color: #f472b6;
  }

  .readme pre {
    background-color: #1f2937;
    border-color: #374151;
  }

  .readme pre code {
    color: #e5e7eb;
  }
}
</style>