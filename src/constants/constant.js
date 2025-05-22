// export const BASE_URL = "https://tv-server-1.onrender.com";
export const BASE_URL = "http://localhost:4000";

export const subData = [
  {
    plan: "Basic Plan",
    quality: "HD 720P",
    device: "Mobile",
    price: "99",
    month: "3 month",
    planKey: "basic",
  },
  {
    plan: "Standard Plan",
    quality: "Full HD 1080p",
    device: "Mobile & Website",
    price: "299",
    month: "3 month",
    planKey: "standard",
  },
  {
    plan: "Premium Plan",
    quality: "2K",
    device: "Mobile, Website, TAB and Smart TV",
    price: "999",
    month: "6 months",
    planKey: "premium",
  },
  {
    plan: "Gold Plan",
    quality: " Ultra HD 4K",
    device: " Mobile, Website, TAB and Smart TV",
    price: "1200",
    month: "1 year",
    planKey: "gold",
  },
];

export const adminDashboardResponse = {
  success: true,
  data: {
    summary: {
      totalMovies: 140,
      totalSeries: 65,
      totalUsers: 820,
      totalViews: 22500,
      activeSubscriptions: 450,
      totalRevenue: 158400,
    },
    recentMovies: [
      {
        _id: "movie1",
        title: "The Silent Guardian",
        createdAt: "2025-05-17T10:45:00.000Z",
      },
      {
        _id: "movie2",
        title: "Code of Shadows",
        createdAt: "2025-05-15T14:20:00.000Z",
      },
    ],
    recentUsers: [
      {
        _id: "user1",
        phoneNumber: "9876543210",
        createdAt: "2025-05-19T12:00:00.000Z",
      },
      {
        _id: "user2",
        phoneNumber: "9123456789",
        createdAt: "2025-05-18T08:30:00.000Z",
      },
    ],
    topViewedMovies: [
      {
        _id: "top1",
        title: "The Last Frontier",
        views: 5400,
      },
      {
        _id: "top2",
        title: "Warrior’s Way",
        views: 4800,
      },
    ],
    charts: {
      revenueByMonth: [
        { _id: "2025-01", total: 12000 },
        { _id: "2025-02", total: 18000 },
        { _id: "2025-03", total: 24500 },
        { _id: "2025-04", total: 31000 },
        { _id: "2025-05", total: 72500 },
      ],
      subscriptionBreakdown: [
        { _id: "Basic", count: 120 },
        { _id: "Standard", count: 180 },
        { _id: "Premium", count: 80 },
        { _id: "Gold", count: 70 },
      ],
      contentTypeDistribution: [
        { _id: "movie", count: 140 },
        { _id: "series", count: 65 },
      ],
      languageDistribution: [
        { _id: "Hindi", count: 90 },
        { _id: "English", count: 75 },
        { _id: "Tamil", count: 35 },
        { _id: "Telugu", count: 30 },
        { _id: "Kannada", count: 20 },
        { _id: "Malayalam", count: 10 },
      ],
    },
  },
};
