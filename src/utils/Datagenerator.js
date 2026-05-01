export const generateMockData = (count) => {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    name: `Raheem Inioluwa ${index + 1}`,
    email: `inioluwa${index + 1}@gmail.com`,
    phone: `+234 706-564-${(1000 + index).toString().slice(-4)}`,
    orders: Math.floor(Math.random() * 500) + 10,
    spent: `₦ ${(Math.random() * 5000 + 100).toFixed(2)}`,
    date: "12/02/2025",
    time: "10:34AM",
    status: index % 3 === 0 ? "INACTIVE" : "ACTIVE",
  }));
};