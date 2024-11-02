import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    cameraContainer:{
        width:"100%",
        height:"85%"
    },
    statusBarmargin:{
        marginTop:32,
        paddingTop:64
    },
    permissionText:{
        fontSize:24,
        color:"white"
    },
    grantButton:{
        borderRadius:32,
        padding:24,
        backgroundColor:"white",
        marginTop:48,
    },
    grantText:{
        color:"rgb(42, 35, 59)",
        textAlign:"center",
    },
    permissionContainer:{
        backgroundColor:"rgb(201, 149, 147)",
        borderRadius:24,
        padding:24,
        marginLeft:24,
        marginRight:24
    },
    permissionScreen:{
        justifyContent:"center"
    },
    takePhotoButtonContainer:{
        position:"absolute",
        bottom:"5%",
        display:"flex",
        alignItems:"center",
        width:"100%",
    },
    takePhotoButton:{
        backgroundColor:"white",
        borderRadius:300,
        width:90,
        height:90,
    },
    returnButton:{
        padding:24
    },
    handleImageContainer:{
        display:"flex",
        flexDirection:"row"
    },
    retryPhotoContainer:{
        backgroundColor:"rgb(242, 82, 90)",
        padding:24,
        flexGrow:1
    },
    sendPhotoContainer:{
        padding:24,
        backgroundColor:"rgb(82, 109, 242)",
        flexGrow:1
    },
    retryPhotoText:{
        color:"white",
        fontWeight:900,
        textAlign:"center"
    },
    sendPhotoText:{
        color:"white",
        fontWeight:900,
        textAlign:"center"
    },
})

export default styles