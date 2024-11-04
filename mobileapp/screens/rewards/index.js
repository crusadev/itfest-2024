import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import styles from "./styles"
import { faCoins } from "@fortawesome/free-solid-svg-icons"
import {Text,TouchableOpacity,View} from "react-native"
import { useNavigation } from "@react-navigation/native"

const RewardsScreen = () => {
    const navigation = useNavigation()
    const rewards = [
        {
            name:"Reducere 25% Metrorex",
            cost:50
        },{
            name:"Reducere 25% STB",
            cost:50
        },{
            name:"Reducere 25% CFR",
            cost:50
        },{
            name:"Reducere 50% la pachet de tigari",
            cost:100
        },{
            name:"Reducere 50% la bere",
            cost:150
        },{
            name:"O sticla de 1L de vodka absolut",
            cost:250
        }
    ]
    return(
        <View style={styles.rewardsContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("Main")} style={styles.return}>
                <Text>{"< "} Return</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Rewards:</Text>
            {rewards.map((reward,index) => (
                <View style={styles.rewardContainer} key={index}>
                    <FontAwesomeIcon icon={faCoins} />
                    <Text style={styles.name}>{reward.name}</Text>
                    <Text style={styles.value}>{reward.cost} Coins</Text>
                </View>
            ))}
        </View>
    )
}

export default RewardsScreen