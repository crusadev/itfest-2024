import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
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
    mmptRegular:{
      fontFamily:"MMPT-B"
    }
})

export default globalStyles