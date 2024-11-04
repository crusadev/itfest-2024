import {View,Text, Image} from "react-native"
import MapView, { Callout, Marker } from 'react-native-maps';
import styles from "./styles";
import ScanButton from "../../components/scan-button";
import IconsTab from "../../components/icons-tab";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios"
import Constants from "expo-constants"
const uri =
  Constants.expoConfig?.hostUri?.split(':').shift()?.concat(':8080') ??
  'yourapi.com';


const MainScreen = () => {
    const [markers,setMarkers] = useState()
    useEffect(() => {
        (async () => {
            try{
                console.log(uri)
                const markers = await axios.get(`http://${uri}/services/map`,{
                    headers:{
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                })
                console.log(markers)
                setMarkers(markers.data)
            }catch(err){
                console.log(err)
            }

        })()
    },[])
    return(
        <View>
            <IconsTab />
            <MapView provider={MapView.PROVIDER_GOOGLE} initialRegion={{
                latitude:44.4366848,
                longitude:26.0931584,
                latitudeDelta:0.15,
                longitudeDelta:0.15
            }} style={styles.map}>
                {markers && markers.map((marker,index) => (
                    <Marker
                    title={marker.name}
                    coordinate={{
                        "latitude":marker.location.lat,
                        "longitude":marker.location.lng
                    }}
                    key={index}>
                        <FontAwesomeIcon icon={faTrash} color="rgb(82, 109, 242)" size={32}/>
                    </Marker>
                ))}
            </MapView>
            <ScanButton />
        </View>
    )
}

export default MainScreen;