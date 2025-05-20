import React from "react";
import SubsCard from "../components/subsCard/SubsCard";
import { data } from "react-router-dom";
import { subData } from '../constants/constant.js'
import {createCheckoutSession} from "../api/subscription.js";
import {api} from "../api/config.js";

const Subscribe = () => {

  const handleCreateCheckoutSession = (planKey) => {
    // Handle the click event for the subscription card
    console.log(`Clicked on plan: ${planKey}`);

    createCheckoutSession(planKey)
      .then(({ data }) => {
        console.log("Checkout session created:", data);

        const options = {
          key: data.key,
          amount: data.amount,
          currency: data.currency,
          name: "Subscription",
          description: "Subscription for TV",
          order_id: data.orderId,
          handler: async function (response) {
            await api.post('/api/checkout/verify-payment')
          }
        }
      })
  }


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
