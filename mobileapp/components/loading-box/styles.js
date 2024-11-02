import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    loadingScreen:{
        width:"100%",
        height:"100%",
        alignContent:"center",
        justifyContent:"center",
        position:"absolute"
    },
    loadingContainer:{
        backgroundColor:"rgb(82, 109, 242)",
        height:"50%",
        borderRadius:24,
        padding:12,
        borderColor:"blue",
        borderWidth:5,
        margin:32,
        justifyContent:"center"
    },
    loadingText:{
        color:"white",
        fontWeight:900,
        fontSize:32,
        textAlign:"center"
    }
})

export default styles