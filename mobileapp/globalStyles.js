import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  container:{
    paddingTop:"15%",
    width:"100%",
    height:"100%",
},
    shadow:{
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity:  0.17,
        shadowRadius: 2.54,
        elevation: 3
    },
    mmtpBold:{
      fontFamily:"MMTP-B"
    },
})

export default globalStyles