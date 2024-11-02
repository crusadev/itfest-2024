import { Text, TouchableOpacity } from "react-native"
import styles from "./styles"
import globalStyles from "../../globalStyles"
import { useNavigation } from "@react-navigation/native"

const ScanButton = () => {
    const navigation = useNavigation()
    return(
        <TouchableOpacity style={styles.container}>
            <Text style={[styles.button,globalStyles.shadow,globalStyles.mmptRegular]} onPress={() => navigation.navigate("Scan")}>Scan Product</Text>
        </TouchableOpacity>
    )
}

export default ScanButton