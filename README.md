# CPU Benchmark Rating

A Model Context Protocol (MCP) plugin for analyzing and comparing CPU benchmark ratings.

## Description

This application provides tools and interfaces for analyzing CPU performance benchmarks and ratings as a MCP plugin. It can be integrated with the MCP inspector tool for development and testing.

## Getting Started

### Prerequisites

- Node.js (latest LTS version recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd cpubenchmark-rating
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

### Development

To start the development server:
```bash
npm run dev
# or
yarn dev
```

### Building and Testing the Plugin

1. Build the plugin:
```bash
npm run build
```

2. Test the plugin using the MCP inspector tool:
```bash
npx @modelcontextprotocol/inspector node build/index.js
```

This will launch the MCP inspector tool where you can test and debug the plugin's functionality.

## Project Structure

```
cpubenchmark-rating/
├── src/           # Source files
├── public/        # Static assets
├── dist/          # Build output
└── tests/         # Test files
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 