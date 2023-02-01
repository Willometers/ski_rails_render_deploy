import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const LoginButton = (resort) => {

    console.log("LIB", resort)

    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        navigate("/loginpage")
    }

        return (
            <div>
                <Button onClick={handleLogin}>Login</Button> 
            </div>
        )
    }


export default LoginButton
