import { useContext, useState, useEffect, createContext } from "react";
import { account } from "../../appWriteConfig";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(false);

    useEffect(() => {
        checkUserStatus();
    }, [])
    const loginUser = async (userInfo) => {
        setLoading(true)
        try {
            let response = await account.createEmailPasswordSession(
                userInfo.email,
                userInfo.password
            )
            let accountDetails = await account.get()
            console.log("Account Details", accountDetails)
            setUser(accountDetails)
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }
    const logoutUser = () => {
        account.deleteSession();
        setUser(null);
    }
    const registerUser = () => { }
    const checkUserStatus = async () => {
        let accountDetails = await account.get();
        setUser(accountDetails)
    }

    const contextData = {
        user,
        loginUser,
        logoutUser,
        registerUser
    }
    return (< AuthContext.Provider value={contextData} >
        {loading ? <p>Loading....</p> : children}
    </AuthContext.Provider>
    )
}

export const useAuth = () => { return useContext(AuthContext) }
export default AuthContext;