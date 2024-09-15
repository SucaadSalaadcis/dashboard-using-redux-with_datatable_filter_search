import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Logout() {

    const navigate = useNavigate(); // Correctly use the hook inside the component

    const handleLogout = () => {
        axios.get('http://localhost:3000/auth/logout').then((res) => {
            if (res.data.status) {
                toast.success("Logout Successfully...");
                navigate('/example/login_v2'); // Use the navigate function properly here
            }
        }).catch((err) => console.log(err));
    };

    return (
        <p style={{ marginLeft: '6px', cursor: 'pointer' }} onClick={handleLogout}>
            Logout
        </p>
    );
}
