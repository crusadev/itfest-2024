import {View,Text} from "react-native"
import MapView, { Marker } from 'react-native-maps';
import styles from "./styles";
import ScanButton from "../../components/scan-button";
import IconsTab from "../../components/icons-tab";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faT, faTrash } from "@fortawesome/free-solid-svg-icons";


const MainScreen = () => {
    const markers = [
        {
            title:"test 1",
            lng:26.096594852092743, 
            lat:44.42609080353044
        },
        {
            title:"test 2",
            lng:26.116593402744584,
            lat:44.431423340839046
        },
        {
            title:"test 3",
            lat:44.4393905934261,
            lng:26.093333285892015
        }
    ]
    return(
        <View>
            <IconsTab />
            <MapView provider={MapView.PROVIDER_GOOGLE} initialRegion={{
                latitude:44.4366848,
                longitude:26.0931584,
                latitudeDelta:0.15,
                longitudeDelta:0.15
            }} style={styles.map}>
                {markers.map((marker,index) => (
                    <Marker
                    title={marker.title}
                    coordinate={{
                        "latitude":marker.lat,
                        "longitude":marker.lng
                    }}
                    key={index}>
                        <FontAwesomeIcon icon={faTrash} />
                    </Marker>
                ))}
            </MapView>
            <ScanButton />
        </View>
    )
}

export default MainScreen;