# FoodLynk Backend Prototype

This repository contains a minimal Express.js server written in TypeScript. It demonstrates a basic tenant resolver middleware for a multi-tenant architecture.

## Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open `http://localhost:3000/api/hello` in your browser. The response will include the tenant slug extracted from the request hostname.
