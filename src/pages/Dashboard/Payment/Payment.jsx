import { loadStripe } from "@stripe/stripe-js";
import SectionTile from "../../../components/SectionTitle/SectionTile";
import {
  Elements
} from '@stripe/react-stripe-js';
import CheckoutForm from "./CheckoutForm";

// TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Geteway_PK);
const Payment = () => {

  return (
    <div>
      <SectionTile
        subHeading="---Please pay to cart!---"
        heading="PAYMENT"
      ></SectionTile>
      <div>
          <Elements stripe={stripePromise}>
              <CheckoutForm></CheckoutForm>
          </Elements>
      </div>
    </div>
  );
};

export default Payment;
