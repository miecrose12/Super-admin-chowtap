export const ORDER_INFO = {
  id: '#Order-4567',
  status: 'New',
  date: 'October 24, 2026',
  time: '12:24PM'
};

export const CUSTOMER_INFO = {
  name: 'Alex Chen',
  email: 'alex.chen@university.edu',
  phone: '+1 (555) 012-3456',
  destination: 'Central Library, Room 402\nNorth Campus Dr, Sector 4'
};

export const VENDOR_INFO = {
  name: 'Urban Bites Grill',
  email: 'orders@urbanbites.com',
  location: 'North Campus Mall, Stall 12',
  kitchenStatus: 'Busy (High Volume)'
};

export const ORDER_ITEMS = [
  {
    id: 1,
    name: 'Jollof Rice',
    quantity: 3,
    price: 'N1,300.00',
    image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=200',
    complements: [
      { name: 'Takeaway', qty: 1 },
      { name: 'Plantain', qty: 1 },
      { name: 'Fried rice', qty: 1 },
      { name: 'Big meat', qty: 1 }
    ]
  },
  {
    id: 2,
    name: 'Jollof Rice',
    quantity: 3,
    price: 'N1,300.00',
    image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=200',
    complements: [
      { name: 'Takeaway', qty: 1 },
      { name: 'Plantain', qty: 1 },
      { name: 'Fried rice', qty: 1 },
      { name: 'Big meat', qty: 1 }
    ]
  }
];

export const FINANCIAL_SUMMARY = {
  subtotal: 'N2,500.00',
  deliveryFee: 'N200.00',
  serviceFee: 'N50.00',
  grandTotal: 'N2,800.00'
};

export const PAYMENT_METHOD = {
  type: 'VISA',
  provider: 'Paystack Transfer',
  accountNumber: 'Acct Number: ########890',
  status: 'Transaction Secured'
};