import { Shield, ShoppingBag } from 'lucide-react';

// Unsplash image URL for all products
const PRODUCT_IMAGE = 'https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&q=80&w=600';

export const STATS_DATA = [
  { label: 'NET REVENUE', value: '₦ 25,000.00', icon: Shield },
  { label: 'ORDERS VOLUME', value: '8,246', icon: ShoppingBag },
  { label: 'TOTAL REFUNDED', value: '₦ 30,000.00', icon: Shield },
  { label: 'COMPANY PROFIT', value: '₦ 125,000.00', icon: Shield },
];

export const VERIFICATION_ITEMS = [
  {
    title: 'Account Details Added',
    detail: 'Verified on Oct 12, 2023',
  },
  {
    title: 'Vendor Location Mapped',
    detail: 'Coordinate precision within 5m',
  },
];

export const OPERATING_HOURS = [
  { day: 'Mon-Fri', time: '9:30 AM - 8:30 PM' },
  { day: 'Sat-Sun', time: '9:30 AM - 8:30 PM' },
];

// Updated MENU_PRODUCTS using Unsplash image URL instead of local SVGs
export const MENU_PRODUCTS = [
  { 
    id: 'PRD-772', 
    line1: 'Signature', 
    line2: 'Wagyu Burger', 
    cat: 'Main dish', 
    price: '₦2,500.00', 
    status: 'AVAILABLE', 
    available: true, 
    img: PRODUCT_IMAGE 
  },
  { 
    id: 'PRD-102', 
    line1: 'Truffle', 
    line2: 'Parmesan Fries', 
    cat: 'Side dish', 
    price: '₦1,500.00', 
    status: 'AVAILABLE', 
    available: true, 
    img: PRODUCT_IMAGE 
  },
  { 
    id: 'PRD-441', 
    line1: 'Spicy Buffalo', 
    line2: 'Wings', 
    cat: 'Protein', 
    price: '₦1,200.00', 
    status: 'UNAVAILABLE', 
    available: false, 
    img: PRODUCT_IMAGE 
  },
  { 
    id: 'PRD-219', 
    line1: 'Old Fashioned', 
    line2: 'Milkshake', 
    cat: 'Drink', 
    price: '₦1,500.00', 
    status: 'AVAILABLE', 
    available: true, 
    img: PRODUCT_IMAGE 
  },
  { 
    id: 'PRD-333', 
    line1: 'Classic', 
    line2: 'Cheese Burger', 
    cat: 'Main dish', 
    price: '₦2,000.00', 
    status: 'AVAILABLE', 
    available: true, 
    img: PRODUCT_IMAGE 
  },
  { 
    id: 'PRD-444', 
    line1: 'Sweet', 
    line2: 'Potato Fries', 
    cat: 'Side dish', 
    price: '₦1,200.00', 
    status: 'AVAILABLE', 
    available: true, 
    img: PRODUCT_IMAGE 
  },
  { 
    id: 'PRD-555', 
    line1: 'Grilled', 
    line2: 'Chicken Wings', 
    cat: 'Protein', 
    price: '₦1,500.00', 
    status: 'AVAILABLE', 
    available: true, 
    img: PRODUCT_IMAGE 
  },
  { 
    id: 'PRD-666', 
    line1: 'Vanilla', 
    line2: 'Milkshake', 
    cat: 'Drink', 
    price: '₦1,300.00', 
    status: 'AVAILABLE', 
    available: true, 
    img: PRODUCT_IMAGE 
  },
  { 
    id: 'PRD-777', 
    line1: 'Deluxe', 
    line2: 'BBQ Burger', 
    cat: 'Main dish', 
    price: '₦3,000.00', 
    status: 'UNAVAILABLE', 
    available: false, 
    img: PRODUCT_IMAGE 
  },
  { 
    id: 'PRD-888', 
    line1: 'Garlic', 
    line2: 'Parmesan Fries', 
    cat: 'Side dish', 
    price: '₦1,600.00', 
    status: 'AVAILABLE', 
    available: true, 
    img: PRODUCT_IMAGE 
  },
  { 
    id: 'PRD-999', 
    line1: 'Honey', 
    line2: 'Glazed Wings', 
    cat: 'Protein', 
    price: '₦1,400.00', 
    status: 'AVAILABLE', 
    available: true, 
    img: PRODUCT_IMAGE 
  },
  { 
    id: 'PRD-1010', 
    line1: 'Strawberry', 
    line2: 'Milkshake', 
    cat: 'Drink', 
    price: '₦1,400.00', 
    status: 'AVAILABLE', 
    available: true, 
    img: PRODUCT_IMAGE 
  },
  { 
    id: 'PRD-1111', 
    line1: 'Triple', 
    line2: 'Decker Burger', 
    cat: 'Main dish', 
    price: '₦3,500.00', 
    status: 'AVAILABLE', 
    available: true, 
    img: PRODUCT_IMAGE 
  },
  { 
    id: 'PRD-1212', 
    line1: 'Loaded', 
    line2: 'Cheese Fries', 
    cat: 'Side dish', 
    price: '₦2,000.00', 
    status: 'AVAILABLE', 
    available: true, 
    img: PRODUCT_IMAGE 
  },
];

export const ORDERS_DATA = [
  { id: '#ORD-88219', init: 'JD', name: 'John Doe', date: 'Oct 24, 2023', time: '14:22 PM', items: 'Double BBQ × 2, Truffle Fries', total: '₦12,400.00', status: 'DELIVERED', sColor: 'text-emerald-500', sBg: 'bg-emerald-900/30' },
  { id: '#ORD-88220', init: 'SC', name: 'Sarah Chen', date: 'Oct 24, 2023', time: '14:45 PM', items: 'Classic Cheese × 1, Milkshake', total: '₦8,500.00', status: 'PENDING', sColor: 'text-orange-500', sBg: 'bg-orange-900/30' },
  { id: '#ORD-88221', init: 'MT', name: 'Mike Tunde', date: 'Oct 24, 2023', time: '15:10 PM', items: 'Zinger Tower × 3', total: '₦15,000.00', status: 'ON ROUTE', sColor: 'text-blue-500', sBg: 'bg-blue-900/30' },
  { id: '#ORD-88222', init: 'AL', name: 'Amara Lawson', date: 'Oct 24, 2023', time: '15:32 PM', items: 'Mushroom Swiss, Soda', total: '₦9,200.00', status: 'DELIVERED', sColor: 'text-emerald-500', sBg: 'bg-emerald-900/30' },
  { id: '#ORD-88223', init: 'KO', name: 'Kola Okoro', date: 'Oct 24, 2023', time: '16:05 PM', items: 'Vegan Burger, Sweet Potato', total: '₦10,800.00', status: 'CANCELLED', sColor: 'text-neutral-400', sBg: 'bg-neutral-800/50' },
  { id: '#ORD-88224', init: 'EM', name: 'Emilia Martinez', date: 'Oct 25, 2023', time: '09:15 AM', items: 'Grilled Chicken, Fries', total: '₦11,500.00', status: 'DELIVERED', sColor: 'text-emerald-500', sBg: 'bg-emerald-900/30' },
  { id: '#ORD-88225', init: 'DR', name: 'David Ross', date: 'Oct 25, 2023', time: '11:30 AM', items: 'Buffalo Wings × 2', total: '₦7,800.00', status: 'PENDING', sColor: 'text-orange-500', sBg: 'bg-orange-900/30' },
  { id: '#ORD-88226', init: 'NK', name: 'Nkechi Kalu', date: 'Oct 25, 2023', time: '13:45 PM', items: 'Signature Wagyu, Drink', total: '₦14,200.00', status: 'ON ROUTE', sColor: 'text-blue-500', sBg: 'bg-blue-900/30' },
  { id: '#ORD-88227', init: 'JW', name: 'James Wright', date: 'Oct 25, 2023', time: '16:20 PM', items: 'Combo Meal × 2', total: '₦18,500.00', status: 'DELIVERED', sColor: 'text-emerald-500', sBg: 'bg-emerald-900/30' },
  { id: '#ORD-88228', init: 'LC', name: 'Lisa Chen', date: 'Oct 26, 2023', time: '10:05 AM', items: 'Vegetarian Burger', total: '₦6,500.00', status: 'CANCELLED', sColor: 'text-neutral-400', sBg: 'bg-neutral-800/50' },
  { id: '#ORD-88229', init: 'PC', name: 'Peter Chisom', date: 'Oct 26, 2023', time: '14:30 PM', items: 'Double Burger, Drink × 3', total: '₦13,900.00', status: 'PENDING', sColor: 'text-orange-500', sBg: 'bg-orange-900/30' },
  { id: '#ORD-88230', init: 'AB', name: 'Aisha Bello', date: 'Oct 26, 2023', time: '15:45 PM', items: 'Truffle Fries, Burger', total: '₦9,800.00', status: 'DELIVERED', sColor: 'text-emerald-500', sBg: 'bg-emerald-900/30' },
];

export const REVIEW_ANALYTICS = [
  { star: '5', pct: '78%', w: 'w-[78%]' },
  { star: '4', pct: '15%', w: 'w-[15%]' },
  { star: '3', pct: '4%', w: 'w-[4%]' },
  { star: '2', pct: '2%', w: 'w-[2%]' },
  { star: '1', pct: '1%', w: 'w-[1%]' },
];

export const REVIEWS = [
  {
    name: 'Tunde Oladapo',
    initials: 'TO',
    rating: 5,
    date: 'October 12, 2023',
    text: 'The Double Truffle Burger was exceptional. Delivery was surprisingly fast to the main campus gate. Definitely our new go-to for Friday night coding sessions.',
  },
  {
    name: 'Tunde Oladapo',
    initials: 'TO',
    rating: 5,
    date: 'October 12, 2023',
    text: 'The Double Truffle Burger was exceptional. Delivery was surprisingly fast to the main campus gate. Definitely our new go-to for Friday night coding sessions.',
  },
  {
    name: 'Tunde Oladapo',
    initials: 'TO',
    rating: 5,
    date: 'October 12, 2023',
    text: 'The Double Truffle Burger was exceptional. Delivery was surprisingly fast to the main campus gate. Definitely our new go-to for Friday night coding sessions.',
  },
];

export const generateTransactions = (count = 27) => {
  return Array(count).fill(null).map((_, i) => ({
    id: `Order-${3567 + i}`,
    ref: `trf-Order-${3567 + i}-hjs`,
    customer: 'JOHN DOE',
    status: 'SUCCESS',
    amount: `₦ ${1000 + (i * 150)}.00`,
    type: 'Credit',
    date: `13:00PM | 02/${String((i % 30) + 1).padStart(2, '0')}/2026`
  }));
};