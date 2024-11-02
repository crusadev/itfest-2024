import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    buttonContainer:{
        position:"absolute",
        bottom:"5%",
        display:"flex",
        width:"100%",
        alignItems:"center",
    },
    button:{
        borderRadius:24,
        backgroundColor:"rgb(82, 109, 242)",
        paddingTop:12,
        paddingBottom:12,
        paddingLeft:32,
        paddingRight:32,
        fontSize:20,
    },
    buttonText:{
        color:"white",
        fontWeight:900
    }
})

export default styles