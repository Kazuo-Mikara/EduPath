import { useContext, useState, useEffect, createContext } from "react";
import { account } from "../../appWriteConfig";
import Loader from "../pages/home/components/Loader";
import { ID } from "appwrite";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Check user status when component mounts
        checkUserStatus();
    }, [])

    const loginUser = async (userInfo) => {
        setLoading(true)
        try {
            await account.createEmailPasswordSession(userInfo.email, userInfo.password);
            let accountDetails = await account.get()
            console.log("Account Details", accountDetails)
            setUser(accountDetails)
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }

    const logoutUser = async () => {
        try {
            await account.deleteSession('current');
            setUser(null);
        } catch (error) {
            console.log("Logout error:", error);
        }
    }

    const registerUser = async (userInfo) => {
        setLoading(true)
        try {
            await account.create(ID.unique(), userInfo.email, userInfo.password, userInfo.userName);
            // await account.create(ID.unique(), email, password, name);
            await account.createEmailPasswordSession(userInfo.email, userInfo.password);
            let accountDetails = await account.get();
            setUser(accountDetails)
        }
        catch (e) {
            console.log(e)
        }
        setLoading(false)
    }

    const checkUserStatus = async () => {
        try {
            // This will throw an error if no valid session exists
            let accountDetails = await account.get();
            setUser(accountDetails);
        } catch (error) {
            console.log("Session error:", error);
            setUser(null);
        } finally {
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        }
    }

    const contextData = {
        user,
        loginUser,
        logoutUser,
        registerUser
    }
    return (< AuthContext.Provider value={contextData} >
        {loading ?
            <div className="w-full h-screen loading-container flex flex-col justify-center items-center">
                <Loader />
                <h1 className="text-2xl font-bold text-primary mt-5">Loading</h1>
            </div>

            : children}
    </AuthContext.Provider>
    )
}

export const useAuth = () => { return useContext(AuthContext) }
export default AuthContext;