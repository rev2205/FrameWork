// TODO: Add your own locations here
// Format: { name: "Place Name", lat: 12.345, lng: 67.890 }

const originalLocationsData = [
  // Add your general photo locations
  // Example: { name: "Hyderabad", lat: 17.3850, lng: 78.4867 },

{ name: "Bengaluru", lat: 12.9716, lng: 77.5946 },
  { name: "Mysuru", lat: 12.2958, lng: 76.6394 },
  { name: "Nandi Hills", lat: 13.3702, lng: 77.6835 },
  { name: "Delhi", lat: 28.6139, lng: 77.2090 },
  { name: "Dehradun", lat: 30.3165, lng: 78.0322 },
  { name: "Chennai", lat: 13.0827, lng: 80.2707 },
  { name: "Tirumala", lat: 13.6807, lng: 79.3509 },
  { name: "Ooty", lat: 11.4102, lng: 76.6950 }
];

const detailedLocationsData = [
  // Add your detailed/specific photo locationsExample: { name: "Charminar", lat: 17.3616, lng: 78.4747 },
  { name: "Tirumala Devastanam", lat: 13.6832597, lng: 79.347114 },
  { name: "Japali", lat: 13.6965394, lng: 79.3365122 },
  { name: "Sri Vari Padalu", lat: 13.6794843, lng: 79.3327889 },
  { name: "Papavinasanam Theertham", lat: 13.7198495, lng: 79.3447291 },
  { name: "Akashaganga", lat: 13.7062015, lng: 79.3398747 },
  { name: "Silathoranam", lat: 13.6873945, lng: 79.3351943 },
  { name: "Doddabetta Peak", lat: 11.4102, lng: 76.695 },
  { name: "Ooty Lake", lat: 11.4102, lng: 76.695 },
  { name: "Mysuru Palace", lat: 12.305268, lng: 76.655075 },
  { name: "Mysuru Zoo", lat: 12.302121, lng: 76.665284 },
  { name: "Brindavana Gardens", lat: 12.423168, lng: 76.574777 },
  { name: "Bangalore Palace", lat: 13.0035, lng: 77.5891 },
  { name: "ISKCON Bangalore (Yeswanthpur/Rajajinagar)", lat: 13.0097, lng: 77.5511 },
  { name: "Phoenix Marketcity (Whitefield)", lat: 12.9974, lng: 77.6967 },
  { name: "Nexus Shantiniketan", lat: 12.9893, lng: 77.7282 },
  { name: "Nexus Koramangala", lat: 12.9346, lng: 77.6111 },
  { name: "Vega City Mall", lat: 12.9069, lng: 77.6015 },
  { name: "VR Bengaluru", lat: 12.9961, lng: 77.6953 },
  { name: "Vidhana Soudha", lat: 12.9797, lng: 77.5912 },
  { name: "Isha Foundation - Chikkaballapur", lat: 13.4880, lng: 77.7126 }

];

var foodLocationsData = [
  // Add your favorite food spots
  // Example: { name: "Paradise Biryani", lat: 17.4400, lng: 78.4982 },
// --- HSR Layout Cluster ---
  { name: "Babai Tiffins - HSR", lat: 12.9182, lng: 77.6448 },
  { name: "Arogya Ahara - HSR", lat: 12.9167, lng: 77.6381 },
  { name: "Anmay Restaurant - HSR", lat: 12.9155, lng: 77.6515 },
  { name: "Copper Kitchen - HSR", lat: 12.9151, lng: 77.6321 },
  { name: "Paper & Pie - HSR", lat: 12.9140, lng: 77.6423 },
  { name: "Brik Oven - HSR", lat: 12.9138, lng: 77.6447 },
  { name: "Blur Toki Coffee - HSR", lat: 12.9130, lng: 77.6395 },
  { name: "HSR High Street 2.0", lat: 12.9128, lng: 77.6351 },
  { name: "Bathinda Junction - HSR", lat: 12.9122, lng: 77.6359 },
  { name: "Paris Panini - HSR", lat: 12.9121, lng: 77.6471 },
  { name: "The Pizza Bakery - HSR", lat: 12.9121, lng: 77.6472 },
  { name: "Glens BakeHouse - HSR", lat: 12.9120, lng: 77.6481 },
  { name: "Asha Tiffins - HSR", lat: 12.9119, lng: 77.6326 },

  // --- Marathahalli / Bellandur / ORR Cluster ---
  { name: "Meghana Foods - Marathahalli", lat: 12.9555, lng: 77.7005 },

  { name: "Cafe Coffee Day - Marathahalli", lat: 12.9562, lng: 77.7011 },
  { name: "The Rameshwaram Cafe - Brookefield", lat: 12.9708, lng: 77.7125 },
  { name: "TBC Sky Lounge - Kadubeesanahalli", lat: 12.9366, lng: 77.6912 },
  // --- Marathahalli / Bellandur Cluster ---
  { name: "Mani's Dum Biryani - Bellandur", lat: 12.9242, lng: 77.6737 },
  { name: "Ironhill - Marathahalli", lat: 12.9509, lng: 77.6987 },
  { name: "Nagarjuna Restaurant - Marathahalli", lat: 12.9484, lng: 77.6988 },
  { name: "Nandana Palace - Marathahalli", lat: 12.9489, lng: 77.6996 },

  // --- Other Popular Areas ---
  { name: "The Rameshwaram Cafe - Indiranagar", lat: 12.9817, lng: 77.6409 },
  { name: "The Pizza Bakery - Indiranagar", lat: 12.9701, lng: 77.6447 },
  { name: "Bathinda Junction - Indiranagar", lat: 12.9690, lng: 77.6481 },
  { name: "Burma Burma - Church Street", lat: 12.9751, lng: 77.6047 },
  { name: "Rajdhani - Phoenix Marketcity", lat: 12.9974, lng: 77.6967 },
  { name: "Biergarten - Koramangala", lat: 12.9334, lng: 77.6142 },
  { name: "Salt Restaurant - Nexus Koramangala", lat: 12.9346, lng: 77.6111 },
  { name: "Kahale Filter Kaapi - Jayanagar", lat: 12.9244, lng: 77.5851 },
  { name: "Pooja Bakery - RT Nagar", lat: 13.0165, lng: 77.5963 },
  { name: "Punjab Grill - Lulu Mall", lat: 12.9772, lng: 77.5623 }

  
];
