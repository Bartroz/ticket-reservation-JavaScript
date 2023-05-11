Hello everyone  
Welcome to my ticket-reservation project written in JavaScript!

Below I put the instruction how to correctly run this project on your computer.

* Check your's node.js version (I used node 16.15.1) and install newer version if it's needed
* Download procject from my github
* Open it your code editor
* Open terminal and write `npm instal`, after that in folder should appear `node_modules` folder containing all used in packaged used in project
* Write in terminal `npm run build` 
* Write in terminal `npm run start:dev`
* Open your browser and write "localhost:9000" and enjoy my ticket-reservation website!

**IMPORTANT**  
In appication is used two kind of API which require certain action:
- https://openweathermap.org/api  
Used to display current departure city's weather.  
To works this API properly you have to generate you onw API key and insert it in bar **385** `const apiKey`

- https://rapidapi.com/3b-data-3b-data-default/api/skyscanner44  
Used to fetch information about flight.
To works this API properly you have to log in into *RapidApi* website and subscribe to this API, but don't you worry! First 100 request are for free!
