import {useAuthRoute} from "../../contexts/RouteProvider";
import {ACTIVE_ROUTES} from "../../helpers/constants";
import {useForm} from "react-hook-form";
import {useState} from "react";
import classes from "./Register.module.css"
import axios from "axios";
import {baseUrl} from "../api/api";

const [LOGIN] = ACTIVE_ROUTES

const Register = () => {

    const {setActiveRoute} = useAuthRoute()
    const [isRegisterFailed, setIsRegisterFailed] = useState(true)
    const {register, handleSubmit, formState: {errors}} = useForm()

    const onSubmit = data => {

        axios.post(`${baseUrl}/users`, {
            name:data.login,
            password: data.password
        })


        setIsRegisterFailed(false)
        setTimeout(() => {
            setActiveRoute(LOGIN)
        }, 1000)
    }

    return (
        <div>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <label className={classes.label}>
                    LOGIN
                    <input {...register('login', {required: true})} type={'text'}></input>
                </label>
                <label className={classes.label}>
                    PASSWORD
                    <input  {...register('password', {required: true})} type={'password'}></input>
                </label>
                <label className={classes.label}>
                    REPEAT PASSWORD
                    <input  {...register('rePassword', {required: true})} type={'password'}></input>
                </label>
                <button type={'submit'}>REGISTER</button>
            </form>

            {
                !isRegisterFailed && <p>Registration is succeed!</p>
            }

        </div>

    )
}

export default Register