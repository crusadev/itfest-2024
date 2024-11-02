import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

const useLocation = () => {
    const [userLocation,setUserLocation] = useState()
    const [error,setError] = useState()
    
    useEffect(() => {
        (async () => {
          
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setError('Permission to access location was denied');
            return;
          }
          const location = await Location.getCurrentPositionAsync({});
          console.log("location hook called")
          console.log("location hook: " + JSON.stringify(location))
          setUserLocation(location);
        })();
      },[]);

      return {userLocation,error}
}

export default useLocation;
