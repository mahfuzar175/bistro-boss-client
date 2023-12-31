import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {googleSignIn} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoggleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            console.log(result);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res => {
                console.log(res.data);
                navigate('/');
            })
        })
        .catch(error => {
            console.error(error);
        });
    }
  return (
    <div className="p-6">
      <div className="divider">Or</div>
      <div className="flex justify-center items-center">
        <button onClick={handleGoggleSignIn} className="btn normal-case">
          <FaGoogle className="mr-2"></FaGoogle>
            Sign up with Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
