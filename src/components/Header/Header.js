import {NavLink} from "react-router-dom";
import classes from "./header.module.css"
import classNames from "classnames";
import {HEADER_LINKS} from "../../helpers/constants"

const Header = () => {

    return (
        <header className={classes.header}>
            <ul className={classes.ul}>
                {
                    HEADER_LINKS.map(link => (
                        <li key={link.id}>
                            <NavLink
                                className={({isActive}) => classNames(classes.link, {
                                        [classes.active]: isActive
                                    }
                                )}
                                to={link.to}>
                                {link.title}</NavLink>
                        </li>
                    ))
                }
            </ul>
            <input type='button' value='logout'/>
        </header>
    )
}

export default Header