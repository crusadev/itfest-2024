import { Text, TouchableOpacity, View } from "react-native"
import styles from "./styles"
import globalStyles from "../../globalStyles"
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState } from "react";

const ScanScreen = () => {
    const [facing, setFacing] = useState('back');
    const [permission, requestPermission] = useCameraPermissions();
    const [cameraReady,setCameraready] = useState(false)
    
    return(
        permission && permission.granted ? 
        <View>
            <Text>Scan Screen</Text>
            <CameraView facing={facing} style={styles.cameraContainer} mode="picture" onCameraReady={() => setCameraready(true)}></CameraView>
            {
            !cameraReady &&
            <View>
                <Text>Loading Camera</Text>
            </View>
            }
        </View>
        :
        <View style={styles.statusBarmargin}>
            <Text>We need camera permissions to work!</Text>
            <TouchableOpacity onPress={() => requestPermission()} >
                <Text>Grant Permissions</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ScanScreen;