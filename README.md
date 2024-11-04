Hello World!
Here you can find the mobile application we made for the It-Fest 2024 second hackathon, supported by EA/Frostbite.
This was a 12-hour hackathon where we needed to code an app from 0 in the smart city direction with gamification features.
In 12 hours we developed a Cross-Platform mobile application integrating Google Maps API to show us reciclying centers, the main feature was the scan product one,
allowing us to take a photo of the recycling symbol ( U+2672 UNIVERSAL RECYCLING SYMBOL ), sending the photo to a third party API hosting an AI computer vision model,
scanning the symbol and returning us the type of recyclable product.
After succesfully scanning the product, we would reward the user with 5 coins that could be used as an exchange for rewards ( discounts, products etc ), being able to
also identifying othe objects as humans or non-recyclable trash.
The AI API/Model used is this one: https://www.nyckel.com/pretrained-classifiers/recycling-identifier/
We used Expo wrapper for the app development and its libraries expo-camera, expo-location and expo-maps for taking the pictures and integrating Google Maps.
The technology stack was React Native through Expo for the mobile development, Nodejs for the backend server and MongoDB for the database.
The application can be easily tested by executing npm install on both mobileapp and backend folders and running npm run start on the backend, npx expo start on the
mobile-app and using it with expo go.
Please note that we developed this app in 10 hours.
