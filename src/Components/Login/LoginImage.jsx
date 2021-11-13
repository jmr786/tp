import React from "react"
import {Image} from "react-bootstrap"
import LogoJMR from "../Login/LogoJMR.png"
function LoginImage(){
    return(
        <>
            <Image src={LogoJMR} rounded  height="192"/>
        </>
    )

}
export default LoginImage