import { View,Text, TouchableOpacity } from "react-native"
import styles from "./styles"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faGift,faUser } from "@fortawesome/free-solid-svg-icons"
import globalStyles from "../../globalStyles"

const IconsTab = () => {

    return(
        <View style={styles.container}>
            <TouchableOpacity style={[styles.button,styles.rewards,globalStyles.shadow]}>
                <FontAwesomeIcon icon={faGift} size={24}/>
                <Text>Rewards</Text>
            </TouchableOpacity>
            <View style={styles.empty} />
            <TouchableOpacity style={styles.button}>
                <FontAwesomeIcon icon={faUser} size={24}/>
            </TouchableOpacity>
        </View>
    )
}

export default IconsTab