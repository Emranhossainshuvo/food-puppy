import { useContext, useState } from "react";
import "./LoginPopup.css"
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const LoginPopup = ({ setShowLogin }) => {

    const {url} = useContext(StoreContext);

    const [currentState, setCurrentState] = useState("Register")
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const onLogin = async (event) => {
        event.preventDefault();
    }

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }))
    }

    return (
        <div className="login-popup">
            <form onSubmit={onLogin} className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {
                        currentState === "Login" ? <></> : <input type="text" name="name" onChange={onChangeHandler} value={data?.name} placeholder="Full Name" required />
                    }

                    <input name="email" onChange={onChangeHandler} value={data?.email} type="email" placeholder="Email" required />
                    <input name="password" onChange={onChangeHandler} value={data?.password} type="password" placeholder="Password" required />
                </div>
                <button type="submit">{currentState === "Register" ? "Create Account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>I agree to the terms of use & privacy policy.</p>
                </div>
                {
                    currentState === "Login" ?
                        <p>Create a new account? <span onClick={() => setCurrentState("Register")}>Register here</span></p>
                        :
                        <p>Already have an account? <span onClick={() => setCurrentState("Login")}>Login here</span></p>
                }
            </form>
        </div>
    );
};

export default LoginPopup;