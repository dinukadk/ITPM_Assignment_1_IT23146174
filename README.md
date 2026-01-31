# IT23146174 - SwiftTranslator Automation Testing Project

This project contains automated end-to-end tests for the SwiftTranslator website (https://www.swifttranslator.com/) using Playwright. The test suite includes functional test cases covering positive and negative scenarios for Singlish to Sinhala translation.

## Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (version 14 or higher recommended)
- **npm** (comes with Node.js)
- **Git** (for cloning the repository)

## Installation

1. **Clone the repository** (or download the project files):
   ```bash
   git clone https://github.com/dinukadk/ITPM_Assignment_1_IT23146174.git
   cd IT23146174
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Install Playwright browsers** (if not already installed):
   ```bash
   npm init playwright@latest
   ```

## Running the Tests

After installation, you can run the tests using any of the following commands:

### Basic Test Execution

```bash
npm test
```

or

```bash
npm run go
```

Both commands execute the same test suite using Playwright.

### Additional Test Options

- **Run tests in headed mode** (with visible browser):
  ```bash
  npm run test:headed
  ```

- **Run tests with UI mode** (interactive test runner):
  ```bash
  npm run test:ui
  ```

- **View test report** (after running tests):
  ```bash
  npm run test:report
  ```

## Project Structure

```
itpm/
├── tests/
│   └── assignment1.spec.js    # Main test file containing all test scenarios
├── playwright.config.js       # Playwright configuration file
├── package.json               # Project dependencies and scripts
├── package-lock.json          # Locked dependency versions
└── README.md                  # This file
```

## Test Configuration

The project uses the following Playwright configuration:
- **Test Directory**: `./tests`
- **Timeout**: 30 seconds per test
- **Browser Mode**: Headless disabled (browser visible by default)
- **Viewport**: 1280x720
- **Screenshots**: Captured on test failures
- **Videos**: Retained on test failures
- **Reporter**: HTML reporter

## Test Scenarios

The test suite includes:

- **27 Positive Functional Test Scenarios**: Testing valid Singlish inputs and expected Sinhala translations
- **11 Negative Functional Test Scenarios**: Testing edge cases, misspellings, and non-standard inputs

All tests automatically navigate to the SwiftTranslator website and verify the translation output matches expected results.

## Test Results

After running tests, you can find:
- **HTML Report**: Generated in `playwright-report/` directory
- **Test Artifacts**: Screenshots and videos of failed tests in `test-results/` directory

To view the HTML report, run:
```bash
npm run test:report
```

## Troubleshooting

If you encounter issues:

1. **Ensure all dependencies are installed**:
   ```bash
   npm install
   npx playwright install
   ```

2. **Check Node.js version**:
   ```bash
   node --version
   ```
   Should be version 14 or higher.

3. **Clear cache and reinstall** (if needed):
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```


