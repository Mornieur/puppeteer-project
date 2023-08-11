<div align='center'>
  <h1 >Welcome to Puppeteer Project!</h1>
</div>

<br />

<div align='center'>

  <img src="src=./public/assets/puppeteer-project.png" alt='project image' width='600'  />
</div>

This project automates the process of capturing screenshots for various web projects using Puppeteer. It leverages Puppeteer to navigate to different URLs, capture screenshots, and save them for showcasing purposes. The captured screenshots are displayed in a React component named "Header," showcasing each project's name, description, and a screenshot.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

- Node.js
- yarn

### Installation

1. Clone the repository:

```
git clone https://github.com/your-username/puppeteer-project.git
```

2. Install project dependencies:

```
cd puppeteer-project
yarn install
```

### Usage

1.  Run the Puppeteer script to capture screenshots:

```
yarn run capture
```

2. Start the development server:

```
yarn run dev
```

3. Open your browser and navigate to http://localhost:3000 to see the captured screenshots in the Header component.

### Project Structure

- scripts/: Contains the Puppeteer script for capturing screenshots.
- public/screenshots/: Directory where captured screenshots will be saved.
- src/: Main application source code.
  - components/: Contains React components.
    - Header.tsx: React component displaying project information and screenshots.
  - projects/: Contains an array of project data for Puppeteer.
  - styles/: Contains styled-components styles for components.
  - pages/: Next.js pages for rendering the project.
  - ...
- storybook/: Storybook configuration and stories for the Header component.

### Technologies Used

- Puppeteer: Headless browser automation tool.
- React: JavaScript library for building user interfaces.
- Next.js: React framework for server-rendered applications.
- Styled Components: CSS-in-JS library for styling components.
- Jest: Testing framework.
- Storybook: UI component development environment.
- ...
