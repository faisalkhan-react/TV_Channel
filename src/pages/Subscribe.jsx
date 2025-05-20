import React from "react";
import SubsCard from "../components/subsCard/SubsCard";
import { data } from "react-router-dom";

const Subscribe = () => {
  const subData = [
    {
      plan: "Basic Plan",
      quality: "HD 720P",
      device: "Mobile",
      price: "99",
      month:"3 month",
      planId : ""
    },
     {
      plan: "Standard Plan",
      quality: "Full HD 1080p",
      device: "Mobile & Website",
      price: "299",
      month:"3 month",
      planId : ""
    }, {
      plan: "Premium Plan",
      quality: "2K",
      device: "Mobile, Website, TAB and Smart TV",
      price: "999",
      month:"6 months",
      planId : ""
    }, {
      plan: "Gold Plan",
      quality: " Ultra HD 4K",
      device: " Mobile, Website, TAB and Smart TV",
      price: "1200",
      month: "1 year",
      planId : "plan_QX8Rn54YOXX7Mw"
    },

  ];

  return (
    <div className=" p-10 text-2xl text-center">
      <p className="mb-10 font-bold">Choose the Best Plan for You</p>
      <div className=" flex items-center justify-evenly">
       {subData.map((data,i)=>(

        <SubsCard 
        key={i}
        plan={data.plan}
        quality={data.quality}
        device={data.device}
        price={data.price}
        month={data.month}
        />
       ))} 
      </div>
    </div>
  );
};

export default Subscribe;
