# Contributing to Financial Dashboard

First off, thanks for taking the time to contribute! 🎉

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

- **Ensure the bug was not already reported** by searching on GitHub under [Issues](https://github.com/PedroM2626/Financial-Dashboard/issues).
- If you're unable to find an open issue addressing the problem, [open a new one](https://github.com/PedroM2626/Financial-Dashboard/issues/new). Be sure to include a **title and clear description**, as much relevant information as possible, and a **code sample** or an **executable test case** demonstrating the expected behavior that is not occurring.

### Suggesting Enhancements

- Open a new issue with a clear title and description.
- Explain why this enhancement would be useful to most users.
- Include screenshots or animated GIFs if relevant.

### Your First Code Contribution

1. **Fork** the repository on GitHub.
2. **Clone** the project to your own machine.
3. **Commit** changes to your own branch.
4. **Push** your work back up to your fork.
5. Submit a **Pull Request** so that we can review your changes.

### Pull Request Process

1. Ensure any install or build dependencies are removed before the end of the layer when doing a build.
2. Update the README.md with details of changes to the interface, this includes new environment variables, exposed ports, useful file locations, and container parameters.
3. Increase the version numbers in any examples files and the README.md to the new version that this Pull Request would represent. The versioning scheme we use is [SemVer](http://semver.org/).
4. You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

## Development Setup

### Prerequisites

- Node.js 18+
- npm 9+ or yarn
- Git

### Installation

1. Fork the repository
2. Clone your fork
   ```bash
   git clone https://github.com/your-username/Financial-Dashboard.git
   cd Financial-Dashboard
   ```
3. Install dependencies
   ```bash
   npm install
   ```
4. Create a `.env` file based on the example
   ```bash
   cp .env.example .env
   ```
5. Start the development server
   ```bash
   npm run dev
   ```

### Testing

Run the test suite:

```bash
npm test
```

### Linting

```bash
npm run lint
```

### Building for Production

```bash
npm run build
```

## Style Guide

### Code Style

- Use TypeScript for all new code
- Follow the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- Use Prettier for code formatting
- Use ESLint for code quality

### Git Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line
- Consider starting the commit message with an applicable emoji:
  - 🎨 `:art:` when improving the format/structure of the code
  - 🐛 `:bug:` when fixing a bug
  - 🔥 `:fire:` when removing code or files
  - 💚 `:green_heart:` when fixing the CI build
  - ✅ `:white_check_mark:` when adding tests
  - 🔒 `:lock:` when dealing with security
  - ⬆️ `:arrow_up:` when upgrading dependencies
  - ⬇️ `:arrow_down:` when downgrading dependencies
  - 👕 `:shirt:` when removing linter warnings

## License

By contributing, you agree that your contributions will be licensed under its MIT License.
