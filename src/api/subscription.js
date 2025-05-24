import { api } from "./config.js";

export const createCheckoutSession = async (planKey) => {
  try {
    const response = await api.post("/api/checkout/create-order", {
      planKey,
    });
    return response.data;
  } catch (error) {
    console.error("Error creating checkout session:", error);
    throw error;
  }
};
