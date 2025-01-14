# Debugging Setup for BookWise Next.js Application

This document explains the debugging configuration set up for this Next.js TypeScript project.

## Available Debug Configurations

1. **Next.js: debug server-side**
   - Allows debugging of server-side code
   - Uses node-terminal to launch the development server
   - Configured to skip Node.js internal files
   - Runs in the integrated terminal

2. **Next.js: debug client-side**
   - Enables debugging of client-side code using Chrome DevTools
   - Launches Chrome and connects to localhost:3000
   - Properly configured source map overrides for webpack

3. **Next.js: debug full stack**
   - Combined configuration for debugging both server and client code
   - Automatically launches Chrome when the server is ready
   - Perfect for full-stack debugging sessions

## Project Technology Stack
- Next.js 15.1.4
- React 19
- TypeScript
- TailwindCSS
- ESLint with TypeScript and React plugins
- Various UI components from Radix UI

## Usage Instructions

1. Install the recommended VS Code extensions:
   - JavaScript Debugger (built into VS Code)
   - Chrome Debugger extension

2. Set breakpoints in your code:
   - For server-side code: Set breakpoints in API routes, getServerSideProps, etc.
   - For client-side code: Set breakpoints in React components and client-side logic

3. Start debugging:
   - Press F5 or use the Run and Debug panel in VS Code
   - Select the appropriate configuration based on what you need to debug
   - Use the debug toolbar to control execution (continue, step over, step into, etc.)

## Notes
- The server-side debugging configuration uses `npm run dev` with Turbopack enabled
- Source maps are properly configured for accurate debugging
- The full stack configuration provides the most comprehensive debugging experience