import styles from "./styles"
import {View,Text} from "react-native"

const LoadingBox = () => {

    return(
        <View style={styles.loadingScreen}>
            <View style={styles.loadingContainer}>
                <Text style={styles.loadingText}>Loading...</Text>
            </View>
        </View>
    )
}

export default LoadingBox;