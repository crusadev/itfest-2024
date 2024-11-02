import { Text, TouchableOpacity, View } from "react-native"
import styles from "./styles"
import globalStyles from "../../globalStyles"
import { useNavigation } from "@react-navigation/native"

const ScanButton = () => {
    const navigation = useNavigation()
    return(
        <TouchableOpacity style={[styles.container,styles.buttonContainer,globalStyles.shadow]}>
            <View style={styles.button}>
                <Text style={[globalStyles.mmtpBold,styles.buttonText]} onPress={() => navigation.navigate("Scan")}>Scan Product</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ScanButton