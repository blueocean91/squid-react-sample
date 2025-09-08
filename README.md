# Squid React Sample

A sample React application demonstrating integration with Squid AI chat widget using Vite.

## Prerequisites

- Node.js (version 18 or higher)
- npm or yarn
- Squid Cloud account

## Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/squid-react-sample.git
cd squid-react-sample
```

2. Install dependencies:
```bash
npm install
```

3. Create environment variables file:
Create a `.env` file in the root directory and add your Squid configuration:

```env
VITE_SQUID_APP_ID=your_app_id_here
VITE_SQUID_REGION=your_region_here
VITE_SQUID_ENVIRONMENT_ID=your_environment_id_here
VITE_SQUID_DEVELOPER_ID=your_developer_id_here
```

**Important**: Replace the placeholder values with your actual Squid Cloud credentials:
- `VITE_SQUID_APP_ID`: Your Squid application ID
- `VITE_SQUID_REGION`: Your Squid region (e.g., `us-east-1.aws`)
- `VITE_SQUID_ENVIRONMENT_ID`: Your environment ID (e.g., `dev` or `prod`)
- `VITE_SQUID_DEVELOPER_ID`: Your Squid developer ID

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

## Features

- React 18 with Vite
- Squid AI chat widget integration
- Framer Motion animations
- Environment-based configuration
- Responsive design

## Project Structure

```
src/
├── App.jsx          # Main application component
├── ChatWidget.jsx   # Squid chat widget component
├── App.css          # Application styles
└── main.jsx         # Application entry point
```

## Environment Variables

This project uses Vite's environment variable system. All environment variables must be prefixed with `VITE_` to be accessible in the browser.

**Security Note**: Never commit your `.env` file to version control. The `.gitignore` file is configured to exclude environment files.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Learn More

- [Squid Cloud Documentation](https://docs.getsquid.ai/)
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
