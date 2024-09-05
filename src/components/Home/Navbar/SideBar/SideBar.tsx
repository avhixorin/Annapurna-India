import { useNavigate } from "react-router-dom";
interface SideBarProps {
    toggle: boolean;
    setToggle: (toggle: boolean) => void;
}
const SideBar:React.FC<SideBarProps> = ({toggle,setToggle}) => {
    const navigate = useNavigate();

    const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
        setToggle(!toggle);
        const route = e.currentTarget.name;
        if(route === "home") {           
            navigate("/");
            return;
        }
        if (route === "register") {
            window.location.href = "https://forms.gle/or5ZH4S16Ex4qeVm7";
            return;
        }
        navigate(`/${route}`);
    };

    return (
        <div className="fixed top-[4rem] right-4 z-50 flex flex-col justify-center items-center transition-all duration-[450ms] ease-in-out w-32">
            <article className="border border-solid border-gray-700 w-full ease-in-out duration-500 rounded-lg inline-block shadow-lg shadow-black/15 bg-white">
                <label
                    htmlFor="home"
                    className="has-[:checked]:shadow-lg relative w-full h-16 ease-in-out duration-300 border-solid border-black/10 has-[:checked]:border group flex flex-row items-center justify-center text-black rounded-xl"
                >
                    <input
                        className="hidden peer/expand"
                        type="radio"
                        name="home"
                        id="home"
                        onClick={handleClick}
                    />
                    <p className="text-base font-bold">Home</p>
                </label>
                <hr className="w-[90%] mx-auto" /> 
                <label
                    htmlFor="about"
                    className="has-[:checked]:shadow-lg relative w-full h-16 ease-in-out duration-300 border-solid border-black/10 has-[:checked]:border group flex flex-row items-center justify-center text-black rounded-xl"
                >
                    <input
                        className="hidden peer/expand"
                        type="radio"
                        name="about"
                        id="about"
                        onClick={handleClick}
                    />
                    <p className="text-base font-bold">About</p>
                </label>
                <hr className="w-[90%] mx-auto" /> 
                <label
                    htmlFor="donate"
                    className="has-[:checked]:shadow-lg relative w-full h-16 p-4 ease-in-out duration-300 border-solid border-black/10 has-[:checked]:border group flex flex-row gap-3 items-center justify-center text-black rounded-xl"
                >
                    <input
                        className="hidden peer/expand"
                        type="radio"
                        name="donate"
                        id="donate"
                        onClick={handleClick}
                    />
                    <p className="text-base font-bold">Donate</p>
                </label>
                <hr className="w-[90%] mx-auto" /> 
                <label
                    htmlFor="contact"
                    className="has-[:checked]:shadow-lg relative w-full h-16 p-4 ease-in-out duration-300 border-solid border-black/10 has-[:checked]:border group flex flex-row gap-3 items-center justify-center text-black rounded-xl"
                >
                    <input
                        className="hidden peer/expand"
                        type="radio"
                        name="contact"
                        id="contact"
                        onClick={handleClick}
                    />
                    <p className="text-base font-bold">Contact Us</p>
                </label>
                <hr className="w-[90%] mx-auto" /> 
                <label
                    htmlFor="register"
                    className="has-[:checked]:shadow-lg relative w-full h-16 p-4 ease-in-out duration-300 border-solid border-black/10 has-[:checked]:border group flex flex-row gap-3 items-center justify-center text-black rounded-xl"
                >
                    <input
                        className="hidden peer/expand"
                        type="radio"
                        name="register"
                        id="register"
                        onClick={handleClick}
                    />
                    <p className="text-base font-bold">Register</p>
                </label>
            </article>
        </div>
    );
};

export default SideBar;
