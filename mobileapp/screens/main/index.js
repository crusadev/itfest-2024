import {View,Text} from "react-native"
import MapView from 'react-native-maps';
import styles from "./styles";
import useLocation from "../../react-logic/hooks/useLocation";

const MainScreen = () => {
    const {userLocation,error} = useLocation();
    return(
        <View>
            <Text>Hello World</Text>
            <MapView provider="google" initialRegion={userLocation} style={styles.map}/>
        </View>
    )
}

export default MainScreen;