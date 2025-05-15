import React from "react";

const sections = [
  {
    title: "Refund and Cancellation Policy",
    content: [
      `This policy applies to Chitramcinema website / mobile app platforms, including without limitation https://www.chitramcinema.com and other related Site/s or App/s, mobile applications, and other online features each a “Site/s or App/s”. All the information is available in detail for you to view about the packages before you subscribe to our services.`,
      `If you have any questions or reservations, please contact us at chitramcinema@gmail.com before you subscribe to the services.`,
    ],
  },
  {
    title: "Fees are Non-Refundable",
    content: [
      `Being the service providers for the content available via website or App, we get paid for the content before you start consuming it. The fees that you pay for the content on Chitramcinema are non-refundable. However, we do not have an auto-renewal system that means there is no recurrent subscription option. In case you do not want to continue, stop paying for the service from the next month.`,
    ],
  },
  {
    title: "Failure of Payment",
    content: [
      `There is any technical glitch in the payment gateway during the time of the online transaction where the transaction failed to complete. Still, the amount gets deducted from your account; it will be refunded automatically through Payment Gateway within a prescribed time that varies from 5 to 7 business days.`,
    ],
  },
  {
    title: "Chargeback Requests",
    content: [
      `In case we receive a chargeback request or payment dispute from a credit card company or from a bank, we will terminate your subscription without any prior notice. Applicable chargeback fee will be issued to recover fees passed on to us by the credit company, plus any outstanding balances accrued as a result of the chargeback(s) must be paid in full before service is restored. If you have any billing issues, instead of issuing a chargeback, please contact us.`,
      `Requesting a chargeback or opening any sort of dispute for a valid charge from us is considered as fraud. It is not an appropriate or legal method to obtain a refund.`,
    ],
  },
  {
    title: "Cancellation of Services",
    content: [
      `In case we find that our services are being misused or there is any complaint from a credit card company, Bank, or any other authority competent by law, we may cancel your subscription or coupon, and your payment will be forfeited with prior notice or email you for your misconduct. We may also serve you cause notice for defaming, misrepresentation caused.`,
    ],
  },
];

const Section = ({ title, content }) => (
  <>
    <p className={`font-bold ${title === "Refund and Cancellation Policy" ? "text-center" : ""}`}>
      {title}
    </p>
    {content.map((text, i) => (
      <p key={i}>{text}</p>
    ))}
  </>
);

const RefundAndCancellationPolicy = () => {
  return (
    <div className="px-20 pt-10 pb-10">
      <div className="space-y-4 text-justify">
        {sections.map((section, idx) => (
          <Section key={idx} title={section.title} content={section.content} />
        ))}
      </div>
    </div>
  );
};

export default RefundAndCancellationPolicy;
