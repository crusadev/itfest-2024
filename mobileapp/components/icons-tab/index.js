import { View,Text, TouchableOpacity } from "react-native"
import styles from "./styles"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faGift,faUser } from "@fortawesome/free-solid-svg-icons"
import globalStyles from "../../globalStyles"
import { useNavigation } from "@react-navigation/native"

const IconsTab = () => {
    const navigation = useNavigation()
    return(
        <View style={styles.container}>
            <TouchableOpacity style={[styles.button,styles.rewards,globalStyles.shadow]} onPress={() => navigation.navigate("Rewards")}>
                <FontAwesomeIcon icon={faGift} size={24}/>
                <Text>Rewards</Text>
            </TouchableOpacity>
            <View style={styles.empty} />
            <TouchableOpacity style={[styles.button,styles.profile]}>
                <FontAwesomeIcon icon={faUser} size={24} color="rgb(252, 204, 43)"/>
            </TouchableOpacity>
        </View>
    )
}

export default IconsTab