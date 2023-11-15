// api, axios (axios secure), tan stack
import { useQuery } from "@tanstack/react-query";
import useAxiosSercure from "./useAxiosSercure";
import useAuth from "./useAuth";

const useCart = () => {
    // tan stack query
    const axiosSecure = useAxiosSercure();
    const {user} = useAuth();
    const {refetch,data: cart=[]} = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/carts?email=${user.email}`)
            return res.data;
        }
    })
    return [cart, refetch]
};

export default useCart;