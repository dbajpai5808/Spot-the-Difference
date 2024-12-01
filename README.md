# Spot the Difference Game

## Description
This is a "Spot the Difference" game where players identify differences between two images. The differences and images are configured using a JSON file.

## Features
- Dynamically loads images and differences from a JSON file.
- Highlights differences as the player clicks.
- Tracks score and time.
- Displays a win message when all differences are found.

## How to Run
1. Clone this repository.
2. Open `index.html` in any modern web browser.
3. Enjoy the game!

## JSON Configuration
The game is configured using `config.json`. To change the images or differences, edit the file with the following structure:
```json
{
  "gameTitle": "Game Title",
  "images": {
    "image1": "path/to/image1.jpg",
    "image2": "path/to/image2.jpg"
  },
  "differences": [
    { "x": 100, "y": 200, "width": 50, "height": 50 },
    ...
  ]
}
# Spot the Difference Game

## Description
This is a "Spot the Difference" game where players identify differences between two images. The differences and images are configured using a JSON file.

## Features
- Dynamically loads images and differences from a JSON file.
- Highlights differences as the player clicks.
- Tracks score and time.
- Displays a win message when all differences are found.

## How to Run
1. Clone this repository.
2. Open `index.html` in any modern web browser.
3. Enjoy the game!

## JSON Configuration
The game is configured using `config.json`. To change the images or differences, edit the file with the following structure:
```json
{
  "gameTitle": "Spot the difference",
  "images": {
    "image1": ""C:\Users\dbajp\OneDrive\Documents\GitHub\Spot-the-Difference\Assets\image1.jpg"",
    "image2": ""C:\Users\dbajp\OneDrive\Documents\GitHub\Spot-the-Difference\Assets\image2.jpg""
  },
  "differences": [
    { "x": 100, "y": 200, "width": 50, "height": 50 },
    ...
  ]
}
