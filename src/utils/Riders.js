// utils/ridersUtils.js

export const generateRidersData = () => {
  const baseNames = ['Raheem IniOluwa', 'Chioma Adeyemi', 'Tunde Okafor', 'Zainab Hassan', 'Emeka Nwosu'];
  const baseEmails = ['inioluwa@gmail.com', 'chioma@gmail.com', 'tunde@gmail.com', 'zainab@gmail.com', 'emeka@gmail.com'];
  const basePhones = ['+234 706-564-8785', '+234 701-234-5678', '+234 703-456-7890', '+234 705-678-9012', '+234 704-890-1234'];
  const campuses = ['MCPHERSON UNIVERSITY', 'UNIVERSITY OF LAGOS', 'OAU ILE-IFE', 'ABU ZARIA', 'UNIBEN'];

  return Array.from({ length: 130 }, (_, i) => ({
    id: i,
    initials: 'IR',
    name: baseNames[i % baseNames.length],
    email: baseEmails[i % baseEmails.length],
    phone: basePhones[i % basePhones.length],
    completedOrders: 400 + Math.floor(Math.random() * 100),
    activeOrders: Math.floor(Math.random() * 5),
    campus: campuses[i % campuses.length],
    status: i % 13 === 2 ? 'INACTIVE' : 'ACTIVE'
  }));
};

export const dateOptions = [
  'Today', 'Yesterday', 'This week', 'This month',
  'Last month', 'This year', 'All time'
];

export const calculateSummary = (riders) => ({
  totalRiders: riders.length,
  activeRiders: riders.filter(r => r.status === 'ACTIVE').length,
  totalActiveOrders: riders.reduce((sum, r) => sum + r.activeOrders, 0),
  avgRating: '4.0'
});