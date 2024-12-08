# Project Structure

Overview the project directory structure:

```plaintext
src/
├── helper/                   # Helper functions and utility classes
├── ultil/                    # Additional utility functions and modules
pom/                          # Page Object Model (POM)
├── pom-api/                  # API automation page objects
├── pom-ui/                   # UI automation page objects
fixtures/                     # Contains static test data and resources
tests/                        # Test cases for the project
├── test-ui/                  # UI test cases
└── test-api/                 # API test cases
```

## Prerequisites

-   Node.js (version 14.x or later)

# Project Installation and Set up

## Clone the respository

1. Clone the repository:
    ```bash
    git clone https://github.com/chautu0201/test-framework.git
    ```
2. Navigate to the project directory:
    ```base
    cd your-project-name
    ```

## Install Nodejs and Playwright

1. Install Node.js

    Initialize a new Node.js project

    ```base
    npm init -y
    ```

    Verify installation by running

    ```base
    node --version
    npm --version
    ```

2. Install Playwright and run test

    Install Playwright

    ```base
    npm init playwright@latest
    ```

    Run Playwright tests

    ```base
    npx playwright test
    ```
