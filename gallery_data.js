// ============================================================
// HOW TO ADD MORE IMAGES IN THE FUTURE:
//
// 1. Upload your image to GitHub (same repo or any public repo).
// 2. Get the raw URL:
//    - Open the image on GitHub
//    - Click the "Raw" button OR change the URL from:
//        https://github.com/username/repo/blob/main/image.jpg
//      to:
//        https://raw.githubusercontent.com/username/repo/main/image.jpg
//
// 3. Add a new entry inside the correct year and location block below.
//    - To add to an existing location, just append to the array.
//    - To add a new location, create a new key under the year.
//    - To add a new year, create a new top-level key.
//
// FORMAT:
//   var galleryData = {
//     "YEAR": {
//       "Location Name": [
//         { "imageLink": "raw-url", "season": "Season", "shotOn": "Device" },
//         { "imageLink": "raw-url", "season": "Season", "shotOn": "Device" },
//       ]
//     }
//   };
// ============================================================

var galleryData = {
  "2025": {
    "New Horizon College": [
      {
        "imageLink": "https://raw.githubusercontent.com/rev2205/picss/main/20251015_150301.jpg",
        "season": "Rainy",
        "shotOn": "Samsung S24+"
      }
      // Add more New Horizon College images here:
      // { "imageLink": "https://raw.githubusercontent.com/...", "season": "Winter", "shotOn": "Samsung S24+" },
    ]
    // Add more locations here:
    // "Mysuru": [
    //   { "imageLink": "https://raw.githubusercontent.com/...", "season": "Summer", "shotOn": "Camera" }
    // ]
  },

  "2026": {
    "Blue Tokai Coffee": [
      {
        "imageLink": "https://raw.githubusercontent.com/rev2205/picss/main/20260211_172532.jpg",
        "season": "Autumn",
        "shotOn": "Samsung S24+"
      },
    ],

    "Phoenix Market City": [
      {
        "imageLink": "https://raw.githubusercontent.com/rev2205/picss/main/20260202_153905.jpg",
        "season": "Winter",
        "shotOn": "Samsung S24+"
      }
      // Add more New Horizon College images here:
      // { "imageLink": "https://raw.githubusercontent.com/...", "season": "Winter", "shotOn": "Samsung S24+" },
    ]
    // Add more locations here:
    // "Mysuru": [
    //   { "imageLink": "https://raw.githubusercontent.com/...", "season": "Summer", "shotOn": "Camera" }
    // ]
  }
  
  // Add more years here:
  // "2024": {
  //   "Location": [{ ... }]
  // }
};
