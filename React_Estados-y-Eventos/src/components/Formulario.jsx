import { useState } from "react";

const Formulario = ({setAlert}) =>{
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validatePassword, setValidatePassword] = useState("");

    const validateData = (e) => {
        e.preventDefault()
        if(password !== validatePassword){
            setAlert({
             error: true,
             msg: "Las contraseñas no coinciden",
             color: "danger",

            });
            return
        }

        if(nombre === '' || email === '' || password === '' || validatePassword === ''){
            setAlert({
                error: true,
                msg: "Complete todos los campos",
                color: "danger",
            });
            return
        }

        setAlert({
            error: false,
            msg: "Cuenta creada con exito", 
            color: "success"});
        setNombre('')
        setEmail('')
        setPassword('')
        setValidatePassword('')    
        }

    return(
        <>
        <form className="formulario" onSubmit={validateData}>
            <div className="form-group mb-3">
                <input 
                type="text"
                name="nombre"
                className="form-control"
                placeholder="Nombre"
                onChange={(e) => setNombre(e.target.value)}
                value={nombre}
                 />
            </div>
            <div className="form-group mb-3">
                <input 
                type="email"
                name="email"
                className="form-control"
                placeholder="email@ejemplo.com"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                />
            </div>
            <div className="form-group mb-3">
                <input 
                type="password"
                name="password"
                className="form-control"
                placeholder="Contraseña"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                />
            </div>
            <div className="form-group mb-3">
                <input 
                type="password"
                name="password"
                className="form-control"
                placeholder="Confirma la contraseña"
                onChange={(e) => setValidatePassword(e.target.value)}
                value={validatePassword}
                />
            </div>
            <div className="d-grip gap-2">
                <button type="submit" className="btn btn-success">
                    Registrarse
                </button>
            </div>
        </form>
        </>
    );
};
export default Formulario;