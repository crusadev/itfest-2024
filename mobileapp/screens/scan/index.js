import { Text, TouchableOpacity, View,Image } from "react-native"
import styles from "./styles"
import globalStyles from "../../globalStyles"
import { CameraView, Camera, useCameraPermissions } from 'expo-camera';
import { useRef, useState } from "react";
import axios from "axios"
import Constants from "expo-constants"
const uri =
  Constants.expoConfig?.hostUri?.split(':').shift()?.concat(':8080') ??
  'yourapi.com';

const ScanScreen = ({navigation}) => {
    const [facing, setFacing] = useState('back');
    const [permission, requestPermission] = useCameraPermissions();
    const [cameraReady,setCameraReady] = useState(false);
    const [photo,setPhoto] = useState(null);
    const cameraRef = useRef(null);

    const handleTakePhoto = async () => {
        const options = {quality:1, base64: true, exif:false};
        const picture = await this.camera.takePictureAsync(options)
        setPhoto(picture.uri)
    }
    const handleSendPhoto = async () => {
        try{
            const image = new FormData()
            image.append("file",{
                uri:photo,
                type:"image/jpeg",
                name:"photo.jpg"
            })
            const result = await axios.post(`http://${uri}/api`,image,{
                headers:{
                    "Content-Type":"multipart/form-data"
                }
            })
            console.log(result.data)
        }catch(err){
            console.log(err.message)
        } 
    }
    return(
        permission && permission.granted ? 
        !photo ? <View style={globalStyles.container}>
            <TouchableOpacity style={styles.returnButton} onPress={() => navigation.goBack()}><Text> {"< "}Return</Text></TouchableOpacity>
            <CameraView facing={facing} style={styles.cameraContainer} mode="picture" ref={(ref) => this.camera = ref}>
                <TouchableOpacity onPress={() => handleTakePhoto()} style={styles.takePhotoButtonContainer}>
                    <View style={styles.takePhotoButton}></View>
                </TouchableOpacity>
            </CameraView>
        </View>
        :
        <View style={styles.takenPhotoContainer}>
            <Image style={styles.cameraContainer} source={{uri:photo}} />
            <View style={styles.handleImageContainer}>
            <TouchableOpacity onPress={() => setPhoto(null)} style={styles.retryPhotoContainer}>
                <Text style={styles.retryPhotoText}>Retry</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSendPhoto()} style={styles.sendPhotoContainer}>
                <Text style={styles.sendPhotoText}>Send</Text>
            </TouchableOpacity>
            </View>
        </View>
        :
        <View style={[globalStyles.container,styles.permissionScreen]}>
            <View style={styles.permissionContainer}>
                <Text style={[styles.permissionText,globalStyles.mmtpBold]}>We need camera permissions to work!</Text>
                <TouchableOpacity onPress={() => requestPermission()} style={styles.grantButton}>
                    <Text style={[styles.grantText,globalStyles.mmtpBold]}>Grant Permissions</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ScanScreen;