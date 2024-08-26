import React from "react";
import Component3 from "./Component3";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

const Component1 = () => {
    // const [user, setUser] = React.useState('Jesse Hall');

    return (
        <UserContext.Provider value={'Jesse Hall'}>
            <ChannelContext.Provider value={'codevolution'}>
                <Component3 />
            </ChannelContext.Provider>
            {/* <Component2 user={user} /> */}
        </UserContext.Provider>
    );
};

export default Component1;