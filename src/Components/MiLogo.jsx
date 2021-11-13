import LogoJMR from "../Images/LogoJMR.png"
import {Image} from "react-bootstrap"
import React from "react";
function MiLogo(props){
    const {sizes} = props
 
    return(
        <>
            <Image src={LogoJMR} rounded="true" width={sizes} ></Image>
        </>
    )
}
export default MiLogo