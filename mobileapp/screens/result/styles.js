import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    resultScreen:{
        width:"100%",
        height:"100%",
        justifyContent:"center",
        alignContent:"center"
    },
    resultContainer:{
        margin:12,
        backgroundColor:"rgb(82, 109, 242)",
        padding:12,
        borderRadius:20,
        height:"50%"
    },
    resultTitle:{
        fontWeight:"bold",
        color:"white",
        textAlign:"center",
        fontSize:24,
        marginTop:12,
        marginBottom:12
    },
    resultText:{
        color:"white",
        fontSize:24
    },
    buttonContainer:{
        backgroundColor:"rgb(252, 204, 43)",
        padding:12,
        borderRadius:12
    },
    buttonText:{
        color:"white",
        textAlign:"center"
    },
    empty:{
        flexGrow:1
    }
})

export default styles