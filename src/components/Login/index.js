import {useForm} from "react-hook-form";
import {useAuthRoute} from "../../contexts/RouteProvider";
import {ACTIVE_ROUTES} from "../../helpers/constants";

const [,REGISTRATION] = ACTIVE_ROUTES

const Login = () => {
    const {setActiveRoute} = useAuthRoute()
    const {register, handleSubmit, formState:{errors}} =  useForm()

    return (
        <div>
            <form onSubmit={handleSubmit(()=>{})}>
                <input type={'text'}/>
                <input type={'text'}/>
            </form>
            Login
            <button onClick={()=> setActiveRoute(REGISTRATION)}>go to registration</button>
        </div>

    )
}

export default Login