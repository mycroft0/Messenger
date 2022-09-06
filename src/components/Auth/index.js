import {useMemo, useState} from "react";
import Login from "../Login";
import Register from "../Register";
import {useAuthRoute} from "../../contexts/RouteProvider";
import {ACTIVE_ROUTES} from "../../helpers/constants";

const [LOGIN,REGISTRATION] = ACTIVE_ROUTES


const component = {
    [LOGIN]: <Login/>,
    [REGISTRATION]: <Register/>
}


const Auth = () =>{

    const {activeRoute} = useAuthRoute()

    const ActiveComponent = useMemo(()=>component[activeRoute],[activeRoute])

    return(
        <>
            {ActiveComponent}
        </>
    )
}

export default Auth