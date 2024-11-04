import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        position:"absolute",
        marginTop:"15%",
        width:"100%",
        alignItems:"start",
        display:"flex",
        flexDirection:"row",
        zIndex:1
    },
    empty:{
        flexGrow:1
    },
    button:{
        padding:12,
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        gap:12
    },
    rewards:{
        backgroundColor:"rgb(252, 204, 43)",
        borderRadius:18,
        paddingLeft:12,
        margin:12
    },
    profile:{
        padding:24,
        marginRight:12,
    }
})

export default styles