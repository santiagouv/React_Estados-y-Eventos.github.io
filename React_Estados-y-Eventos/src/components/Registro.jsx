import { useState } from "react";

import Formulario from "./Formulario";
import SocialButton from "./SocialButton";
import Alert from "./Alert";

const Registro = () =>{
    const [alert, setAlert] = useState({ error: "", msg: "", color:"" });
    return(
        <>
        <div className="container  border border-light-subtle rounded-5 bg-secondary p-5">
            <h1 className="fs-1">Crea una cuenta</h1>
        <div className="d-flex gap-3 justify-content-center my-3"> 
            <SocialButton icon="fa-brands fa-facebook" link="https://www.facebook.com/Diego.Santiago.Urioste.Vaca/?locale=es_LA"/>
            <SocialButton icon="fa-brands fa-github"link="https://github.com/santiagouv"/>
            <SocialButton icon="fa-brands fa-linkedin" link="https://www.linkedin.com/in/diego-santiago-urioste-vaca-067892112/" />
        </div>
        <p>O usa tu email para registrarte</p>
        <Formulario setAlert={setAlert}/>
        {alert.msg && <Alert color={alert.color}>{alert.msg}</Alert>}
        </div>
      
        </>

    );
};
export default Registro;