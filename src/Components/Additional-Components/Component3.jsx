import React, { useContext } from "react";
import {UserContext, ChannelContext} from './Component1';

const Component3 = () => {

    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);

    return (
        <div>{`Hello ${user} from ${channel}`}</div>
    );
};

export default Component3;