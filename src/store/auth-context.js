import React, { useState, useEffect } from 'react';
const AuthContext = React.createContext({
    isLoggedIn: false,
    userInfo: {},
    onLogout: () => { },
    onLogin: () => { }
});

export const AuthContextProvider = (props) => {
                
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userInfo, setUserInfo] = useState(null);

    // useEffect(() => {
    //     const storedLoggedInInfo = localStorage.getItem('isLoggedIn');
    //     if (storedLoggedInInfo === '1')
    //     {
    //         setIsLoggedIn(true);
    //     }
    // }
    // );

    const loginHandler = (userInfo) => {
        // We should of course check email and password
        // But it's just a dummy/ demo anyways
        // localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
        setUserInfo(userInfo);
    };

    const logoutHandler = () => {
        // localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
        setUserInfo(null);
    };

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                userInfo: userInfo,
                onLogout: logoutHandler,
                onLogin: loginHandler
            }}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthContext;