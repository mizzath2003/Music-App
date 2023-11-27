# My Music App 🎵

Welcome to My Music App, a platform where users can explore different varieties of music, search for tracks, and discover trending music in their area.

![Music App](music_app_screenshot.png)

## Overview

- **Discover Music:** Explore various genres and categories of music available.
- **Search Tracks:** Find specific tracks or artists using the search functionality.
- **Trending Music:** Discover what's trending in your area based on geolocation.
- **API Integration:** Utilizes Shazam API for fetching music and IP Geolocation API to determine the user's location.

## Technology Stack

- **Frontend:** React.js, Redux
- **API Integration:** RapidAPI, Shazam API, IP Geolocation API
- **Styling:** Tailwind CSS for UI design
- 

## Features

- **Music Categories:** Browse through a diverse range of music genres and categories.
- **Search Tracks & Artists:** Find specific tracks or artists with the search feature.
- **Local Trending Music:** Discover trending music in your area based on geolocation.

## API Integration

This app integrates with the Shazam API to fetch music data. Ensure to acquire your API key from [RapidAPI - Shazam](https://rapidapi.com/search/shazam) and replace it in the code's API request section.

### Updating API Key

To update the API key:

1. **Navigate to the Services Directory:**

    ```plaintext
    /src/redux/services
    ```

2. **Locate the API File:**

    Find the file responsible for API requests, named `shazamAPI.js` or similar.

3. **Replace API Key:**

    Inside the file, look for the section where the API key is used.
    Replace the existing API key with your new Shazam API key from RapidAPI.




## Get Started

To set up a development environment for this project, follow these steps:

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

5. **Run the app:**

    ```shell
    npm start
    ```
   


 🎧🎶
