import React, { useEffect } from "react";
import SubsCard from "../components/subsCard/SubsCard";
import { data } from "react-router-dom";
import { subData } from "../constants/constant.js";
import { createCheckoutSession } from "../api/subscription.js";
import { api } from "../api/config.js";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Subscribe = () => {
  const { phoneNumber, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  console.log("User data:", user);

  const handleCreateCheckoutSession = (planKey, plan, device) => {
    // Check if the user is logged in
    if (!user?.token) {
      alert("Please log in to subscribe.");
      navigate("/login");
      return;
    }

    // Handle the click event for the subscription card
    createCheckoutSession(planKey)
      .then((data) => {
        console.log("Checkout session created:", data);

        const options = {
          key: data.key,
          amount: data.amount,
          currency: data.currency,
          name: plan,
          description: device,
          order_id: data.orderId,
          prefill: {
            name: "",
            email: "",
            contact: "",
          },
          handler: async function (response) {
            await api
              .post("/api/checkout/verify-payment", {
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature,
                planKey: planKey,
              })
              .then((res) => {
                if (res.status === 200) {
                  console.log("Payment verified successfully:", res.data);
                  alert("Payment successful!");
                } else {
                  console.error("Payment verification failed:", res.data);
                  alert("Payment verification failed.");
                }
              })
              .catch((error) => {
                console.error("Error verifying payment:", error);
                alert("Error verifying payment.");
              });
          },
        };

        // Assuming Razorpay is available globally
        const rzp = new window.Razorpay(options);
        rzp.open();
      })
      .catch((error) => {
        console.error("Error creating checkout session:", error);
        alert("Error creating checkout session.");
      });
  };

  return (
    <div className=" p-10 text-2xl text-center">
      <p className="mb-10 font-bold">Choose the Best Plan for You</p>
      <div className=" flex items-center justify-evenly">
        {subData.map((data, i) => (
          <SubsCard
            key={i}
            plan={data.plan}
            quality={data.quality}
            device={data.device}
            price={data.price}
            month={data.month}
            planKey={data.planKey}
            handleClick={handleCreateCheckoutSession}
          />
        ))}
      </div>
    </div>
  );
};

export default Subscribe;
