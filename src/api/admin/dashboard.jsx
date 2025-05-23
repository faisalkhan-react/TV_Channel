import { api } from "../config";

const getDashboardDataApi = async () => {
  try {
    const res = await api.get("/api/admin/dashboard");
    return res.data;
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    throw error;
  }
};
export { getDashboardDataApi };
