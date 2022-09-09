import {useForm} from "react-hook-form";
import {useAuthRoute} from "../../contexts/RouteProvider";
import {ACTIVE_ROUTES} from "../../helpers/constants";
import classes from "./Login.module.css"
import {useState} from "react";
import axios from "axios";
import {baseUrl} from "../api/api";
import {useNavigate} from "react-router-dom";

const [, REGISTRATION] = ACTIVE_ROUTES

const Login = () => {

    const [isAuthFailed, setIsAuthFailed] = useState(false)
    const {setActiveRoute} = useAuthRoute()
    const {register, handleSubmit, formState: {errors}} = useForm()

    const navigate = useNavigate()

    const onSubmit = data => {
        axios.get(`${baseUrl}/users`)
            .then(res=>{
                const user = res.data.find(user=>user.name === data.login && user.password === data.password)
                if(user){
                    navigate('../messages')
                }else {
                    console.error('User not found!')
                    setIsAuthFailed(true)
                }
            })
    }

    return (
        <div>
            <form className={classes.form}
                  onSubmit={handleSubmit(onSubmit)}>
                <label className={classes.label}>
                    LOGIN
                    <input {...register('login', {required: true})} type={'text'}/>
                </label>
                <label className={classes.label}>
                    PASSWORD
                    <input {...register('password', {required: true})} type={'password'}/>
                </label>
                <button type={"submit"}>LOG IN</button>
            </form>
            {
                isAuthFailed &&  <button onClick={() => setActiveRoute(REGISTRATION)}>go to registration</button>
            }

        </div>

    )
}

export default Login