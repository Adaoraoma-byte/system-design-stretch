"use strict";

// Lesson 1: The Client and Server Model.
// Your standalone code and written observations for this lesson live here,
// as code and comments. The site work happens in the stretch-records folder.
//
// Step 4: how many requests did the single page load make? List three by name.
// There are 11 requests.
// "Names include:css2?family=Inter:wght@300;400;500;600;700;800&display=swap, index.html and pinkfong.jpeg"

// Step 6: which files changed when you added the sixth artist, which did not,
// and why is that separation the point?

// Changed: artists.json — added the sixth artist.
// Not changed: script.js — it fetches the artist data and renders the cards.
// This separation means the data can change without changing the JavaScript
// that controls how the page works.

//
// Step 7: paste the console error the broken artists.json produced.
// The error: Uncaught (in promise) SyntaxError: Expected ',' or ']' after array element in JSON at position 741 (line 37 column 4)
//
// Step 8: build one artist object, JSON.stringify() it, log the text,
// JSON.parse() it back, and log one property of the result.
const artist = {
  name: "Adele",
  genre: "Pop",
  total: "18:30",
};
const artistText = JSON.stringify(artist);
console.log(artistText);

const artistObject = JSON.parse(artistText);
console.log(artistObject.name);

// STRETCH, step 9: describe your page as a system. Name the client, name the
// server, and state what the request asked for and what the response carried.
// System description:
// Client: the web browser running the stretch-records page.
// Server: the Live Server development server.
// Request: the client asks the server for artists.json.
// Response: the server sends the JSON data containing the artist records,
// which the client parses and uses to render the artist cards.
