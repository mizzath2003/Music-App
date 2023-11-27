# My Music App 🎵

Welcome to My Music App, a platform where users can explore different varieties of music, search for tracks, and discover trending music in their area.

[![Music App](img.png)](https://mizzath-lyrics-app.netlify.app)

## Overview 🌟

- **Discover Music:** Dive into a world of diverse genres and music categories.
- **Search Tracks:** Find specific tracks or artists using our intuitive search functionality.
- **Local Trends:** Discover what's trending in your area based on geolocation.
- **API Integration:** We leverage the Shazam API for fetching music data and the IP Geolocation API to determine users' locations.

## Technology Stack ⚙️

- **Frontend:** Crafted with React.js and Redux for a seamless experience.
- **API Integration:** RapidAPI, Shazam API, IP Geolocation API
- **Styling:** Tailwind CSS for an elegantly designed UI.

## Features 🎶

- **Music Categories:** Explore a rich tapestry of genres and categories.
- **Search Tracks & Artists:** Find exactly what you're looking for effortlessly.
- **Local Trending Music:** Stay updated with the hottest tracks in your vicinity.

## API Integration & Key Replacement 🔑

This app integrates with the Shazam API to fetch music data. Grab your API key from [RapidAPI - Shazam](https://rapidapi.com/search/shazam) and update it within the code's API request section.

### Updating API Key 🔄

1. **Navigate to Services Directory:**

    ```plaintext
    /src/redux/services
    ```

2. **Locate the API File:**

    Find the file handling API requests, typically named `shazamAPI.js` or similar.

3. **Replace API Key:**

    Inside the file, find where the API key is used and replace it with your new Shazam API key from RapidAPI.

## Get Started 🚀

To set up your development environment:

1. **Clone the repository:**

    ```shell
    git clone https://github.com/mizzath2003/Music-App.git
    ```

2. **Navigate to the project directory:**

    ```shell
    cd (project_directory)
    ```

3. **Install the dependencies:**

    ```shell
    npm install
    ```

4. **Run the app:**

    ```shell
    npm start
    ```
