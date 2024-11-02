import {View,Text} from "react-native"
import MapView from 'react-native-maps';
import styles from "./styles";
import ScanButton from "../../components/scan-button";
import {PROVIDER_GOOGLE} from "react-native-maps"


const MainScreen = () => {
    return(
        <View>
            <MapView provider={MapView.PROVIDER_GOOGLE} initialRegion={{
                latitude:44.4366848,
                longitude:26.0931584,
                latitudeDelta:0.15,
                longitudeDelta:0.15
            }} style={styles.map}/>
            <ScanButton />
        </View>
    )
}

export default MainScreen;