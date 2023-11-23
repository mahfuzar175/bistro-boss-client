import SectionTile from "../../../components/SectionTitle/SectionTile";
import useAxiosSercure from "../../../hooks/useAxiosSercure";
import useAuth from "./../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSercure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });

  return (
    <div>
      <SectionTile
        subHeading="---History!---"
        heading="PAYMENT HISTORY"
      ></SectionTile>
      <h2 className="text-3xl font-semibold my-3">
        Total Payments: {payments.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead className="bg-[#D1A054] text-white">
            <tr>
              <th>#</th>
              <th>EMAIL</th>
              <th>TRANSACTION ID</th>
              <th>TOTAL PRICE</th>
              <th>PAYMENT STATUS</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={payment._id}>
                <th>{index + 1}</th>
                <td>
                  <h2>{payment.email}</h2>
                </td>
                <td>
                  <h2>{payment.transactionId}</h2>
                </td>
                <th>
                  <h2>${payment.price}</h2>
                </th>
                <th>
                  <h2>{payment.status}</h2>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
