import { useNavigate } from "react-router";

const StartTradingButton = () => {
    const navigate = useNavigate();
    const token = sessionStorage.getItem("token");

    const handleClick = () => {
        if (token) {
            navigate("/profile");
        } else {
            navigate("/register");
        }
    };

    return (
        <button
            onClick={handleClick}
            className="px-4 h-10 rounded-md bg-zinc-800 text-white transition-colors duration-300 hover:bg-zinc-500 shadow-sm"
        >
            Start Trading
        </button>
    );
};

export default StartTradingButton;
