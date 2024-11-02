import { View,Text, TouchableOpacity } from "react-native"
import styles from "./styles"

const ResultScreen = ({route,navigation}) => {
    console.log(route.params)
    return(
        <View style={styles.resultScreen}>
            <View style={styles.resultContainer}>
                <Text style={styles.resultTitle}>Congratulations! +5 Coins</Text>
                <Text style={styles.resultText}>
                    Recycling label: {
                    route.params.labelName == "Trash - 8 - Wrappers" ? 
                    "Plastic #5 (Recyclable in certain areas)"
                :
                route.params.labelName}
                    </Text>
                <View style={styles.empty} ></View>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("Main")}>
                    <Text style={styles.buttonText}>Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ResultScreen