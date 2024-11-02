const { createContext, useState } = require("react")
const { userModel } = require('../../../backend/user/models/user');


const defaultVal = {
    getUserPoints: () => null,
    increaseUserPoints: () => null,
    buyReward: () => null,
}
const UserContext = createContext(defaultVal);


const UserContextProvider = (props) => {
    const [userID, setUserID] = useState(null)

    const getUserPoints = async () => {
        if (!userID) return null;

        try {
            const user = await userModel.findOne({ _id: userID});
            if (!user) {
                console.log("User not found!");
                return null;
            };
            return user.rewardPoints;
        } catch (error) {
            console.error("Error fetching user points: ", error);
            return null;
        }
    }
    const increaseUserPoints = async () => {
        if (!userID) return;
        
        try {
            const user = await userModel.findOne({ _id: userID });
            if (!user) {
                console.log("User not found!");
                return;
            };

            user.rewardPoints += 5;
            await user.save();
        } catch (error) {
            console.log("Catch fired up: error increasing user points;")
        }
    }
    
    const buyReward = async () => {
        if (!userID) return;

        try {
            const user = await userModel.findOne({ _id: userID });
            if (!user) {
                console.log("User not found!");
                return;
            };

            if (user.rewardPoints > 5) {
                user.rewardPoints -= 5;
                await user.save();

            } else {
                console.log("You don't have enough reward points!");
            }
            } catch (err) {
                console.log("Error buying reward: ", err);
            }
    }

    const ContextValue = {
        getUserPoints,
        increaseUserPoints,
        buyReward,
    } 

    return <UserContext.Provider value={ContextValue}>
        {props.children}
    </UserContext.Provider>
}

module.exports = { UserContextProvider };