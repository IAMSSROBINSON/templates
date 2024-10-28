# Webpack Starter Template

A basic starter template for projects using Webpack. This template provides a clean setup for bundling JavaScript, handling CSS, managing HTML templates, and working with images. It also includes a development server with hot reloading.

## Features

- JavaScript Bundling**: Uses Webpack to bundle JavaScript modules.
- CSS Loading**: Includes loaders for CSS files for styling.
- HTML Generation**: Automatically generates `index.html` from a template file.
- Image Handling**: Supports common image formats (PNG, JPG, JPEG, GIF, SVG).
- Development Server**: Includes a live-reloading development server.
- Source Maps**: Source maps enabled for easier debugging in development.

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository**:
   ```bash
   git clone <your-repo-url> my-new-project
   ```

2. Navigate to your project directory**:
   ```bash
   cd my-new-project
   ```

3. Install dependencies**:
   ```bash
   npm install
   ```

### Running the Development Server

To start the development server and open the app in your default browser:
```bash
npm run serve
```

### Building for Production

To build the project for production:
```bash
npm run build
```

## Project Structure

```
webpack-template
├── dist/                # Bundled output (auto-generated)
├── src/                 # Source files
│   ├── index.js         # Main JS file
│   ├── index.html       # HTML template
│   └── styles/          # CSS styles
├── package.json         # Project configuration
├── webpack.config.js    # Webpack configuration
└── README.md            # Project information
```

## License

This project is licensed under the MIT License