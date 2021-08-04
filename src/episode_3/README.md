Episode 3: Eagle Eye
-----
![Eagle Eye chapter (Orient Hacker)][poster]

In an attempt to track down location of drones project data center, you try to investigate over staffs' addresses, especially the company and project managers'.

> Coding time: 20-30min

### Requirements
- Write a CLI to crawl data from provided staffs' addresses
- The CLI should receive a path to JSON file containing staff information along with their addresses, for example `storage/addresses.json`
- The `fetchAddress` inside `index.js` should fetch address detail from [Google Map API](#google-map-api) or any Map APIs you're familiar with, results in an object containing [suburb](https://dictionary.cambridge.org/vi/dictionary/english/suburb) and `city` fields
- The fetched details of addresses should be exported into path provided by param `output`  
- The CLI resolves the final location of secret data center by finding the most common `sururb` and `city` from address details

### What success looks like
- The CLI function should pass all tests
- Exported or processed file formats and paths should follow interviewer's instructions
- Code should be clean and easy for reuse

### Goals and non-goals
- This is a test for robust development, the more concise the code is, the better
- All requirements should be fulfilled, nothing more. You can discuss with the interviewer beforehand about the best approach you can take
- The faster execution time it takes, the better

### How do we measure results
- Requirements fulfillment
- Number of tests passed
- Logic
- Code quality, conciseness

### References
#### Google Map API
- First step is to get a Google Map API key 
https://developers.google.com/webmaster-tools/search-console-api/v1/configure
- [Autocomplete API](https://developers.google.com/maps/documentation/places/web-service/autocomplete) for searching places using addresses
- [Place Detail API](https://developers.google.com/maps/documentation/places/web-service/details) for getting more detailed information about a place
- Notably, `suburb` is named as `locality` or `sublocality`, and `city` is named as `administrative_area_level_2` in Google API response

**Good luck & Have fun 🍻**

[poster]: ../../assets/posters/eagle-eye-min.jpg
