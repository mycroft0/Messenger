import {useAuthRoute} from "../../contexts/RouteProvider";
import {ACTIVE_ROUTES} from "../../helpers/constants";

const [LOGIN, REGISTRATION] = ACTIVE_ROUTES

const Register = () => {
    const {setActiveRoute} = useAuthRoute()

    return (
        <div>
            Register
            <button onClick={()=> setActiveRoute(LOGIN)}>go to login</button>
        </div>

    )
}

export default Register