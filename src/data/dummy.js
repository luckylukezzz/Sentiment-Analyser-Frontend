import React from 'react';
import { AiOutlineCalendar, AiOutlineShoppingCart, AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock } from 'react-icons/ai';
import { FiShoppingBag, FiEdit, FiPieChart, FiBarChart, FiCreditCard, FiStar, FiShoppingCart } from 'react-icons/fi';
import { LiaCertificateSolid } from "react-icons/lia";
import { BsKanban, BsBarChart, BsBoxSeam, BsCurrencyDollar, BsShield, BsChatLeft } from 'react-icons/bs';
import { FaStar } from "react-icons/fa6";
import { FcCustomerSupport } from "react-icons/fc";
import { TbCalendarTime,TbTruckDelivery } from "react-icons/tb";
import { IoIosSearch } from "react-icons/io";
import { BiColorFill,BiSolidCategory,BiSolidCrown } from 'react-icons/bi';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine, RiStockLine } from 'react-icons/ri';
import { MdOutlineSupervisorAccount,MdOutlineRateReview,MdOutlineAnalytics} from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';
import { TiTick } from 'react-icons/ti';
import { GiLouvrePyramid } from 'react-icons/gi';
import { GrLocation } from 'react-icons/gr';
import avatar from './avatar.jpg';


export const gridOrderImage = (props) => (
  <div>
    <img
      className="rounded-xl h-20 md:ml-3"
      src={props.ProductImage}
      alt="order-item"
    />
  </div>
);

export const gridOrderStatus = (props) => (
  <button
    type="button"
    style={{ background: props.StatusBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.Status}
  </button>
);
export const positiveTerms = [
  'Excellent',
  'Outstanding product amazing Outstanding product amazing',
  'Fantastic',
  'Wonderful',
  'Great',
  'Amazing',
  'Superb',
  'Impressive',
  'Marvelous',
  'Exceptional',
  'Excellent',
  'Outstanding',
  'Fantastic',
  'Wonderful',
  'Great',
  'Amazing',
  'Superb',
  'Impressive',
  'Marvelous',
  'Exceptional',

];

export const negativeTerms = [
  'Terrible',
  'Awful',
  'Horrible',
  'Poor',
  'Bad',
  'Dreadful',
  'Unpleasant',
  'Disappointing',
  'Mediocre',
  'Subpar',
];
// export const lineChartData = [
//   [
//     { x: new Date(2005, 0, 1), y: 70 },
//     { x: new Date(2006, 0, 1), y: 70 },
//     { x: new Date(2007, 0, 1), y: 36 },
//     { x: new Date(2008, 0, 1), y: 38 },
//     { x: new Date(2009, 0, 1), y: 30 },
//     { x: new Date(2010, 0, 1), y: 27 },
//     { x: new Date(2011, 0, 1), y: 29 },
//   ],
//   [
//     { x: new Date(2005, 0, 1), y: 20 },
//     { x: new Date(2006, 0, 1), y: 20 },
//     { x: new Date(2007, 0, 1), y: 48 },
//     { x: new Date(2008, 0, 1), y: 50 },
//     { x: new Date(2009, 0, 1), y: 36 },
//     { x: new Date(2010, 0, 1), y: 37 },
//     { x: new Date(2011, 0, 1), y: 42 },
//   ],

//   [
//     { x: new Date(2005, 0, 1), y: 10 },
//     { x: new Date(2006, 0, 1), y: 10 },
//     { x: new Date(2007, 0, 1), y: 16 },
//     { x: new Date(2008, 0, 1), y: 12 },
//     { x: new Date(2009, 0, 1), y: 34 },
//     { x: new Date(2010, 0, 1), y: 36 },
//     { x: new Date(2011, 0, 1), y: 29 },
//   ],
// ];


// export const lineCustomSeries = [
//   {
//     dataSource: lineChartData[0],
//     xName: 'x',
//     yName: 'y',
//     name: 'Positive',
//     width: '2',
//     marker: { visible: true, width: 10, height: 10 },
//     type: 'Line',
//     color: '#66BB6A'  // Soft Green for Positive
//   },
//   {
//     dataSource: lineChartData[1],
//     xName: 'x',
//     yName: 'y',
//     name: 'Negative',
//     width: '2',
//     marker: { visible: true, width: 10, height: 10 },
//     type: 'Line',
//     color: '#EF5350'  // Soft Red for Negative
//   },
//   {
//     dataSource: lineChartData[2],
//     xName: 'x',
//     yName: 'y',
//     name: 'Neutral',
//     width: '2',
//     marker: { visible: true, width: 10, height: 10 },
//     type: 'Line',
//     color: '#42A5F5'  // Soft Blue for Neutral
//   },
// ];

export const LinePrimaryXAxis = {
  valueType: 'DateTime',
  labelFormat: 'y',
  intervalType: 'Years',
  edgeLabelPlacement: 'Shift',
  majorGridLines: { width: 0 },
  background: 'white',
};

export const LinePrimaryYAxis = {
  labelFormat: '{value}%',
  rangePadding: 'None',
  minimum: 0,
  maximum: 100,
  interval: 20,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};




export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'search',
        icon: <IoIosSearch />,
        route: 'search',
      },
      {
        name: 'All-Analytics',
        icon: <FiShoppingBag />,
        route: 'All-Analytics',
      },
      {
        name: 'Get-Analytics',
        icon: <MdOutlineAnalytics />,
        route: 'admin',
      },
      
     
    ],
  },

  {
    title: 'Charts',
    links: [
      {
        name: 'Sentiment vs Time',
        icon: <AiOutlineStock />,
        route: "line"
      },
      {
        name: 'Sentiment Breakdown',
        icon: <FiPieChart />,
        route: 'sentiment-pie',
      },
      {
        name: 'Emotions Breakdown',
        icon: <FiPieChart />,
        route: 'emotion-pie',
      },
      {
        name: 'Improvements',
        icon: <RiStockLine />,
        route: 'improvement',
      },
      {
        name: 'Aspects Breakdown',
        icon: <FaStar />,
        route: 'aspect',
      },
    ],
  },
];



export const chatData = [
 
  {
    image:
      avatar,
    message: 'Jolly completed tasks',
    desc: 'Assign her new tasks',
    time: '1:12 AM',
  },
];

export const topBlocks = [
  {
    icon: <BiSolidCategory />,
    amount: 'Electronics and Accessories',
    title: 'Category',
    iconColor: 'rgb(228, 106, 118)',
    iconBg: 'rgb(255, 244, 229)',

    pcColor: 'green-600',
  },
  {
    icon: <MdOutlineRateReview />,
    amount: '450',
    title: 'Analysing Reviews',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'red-600',
  },
  
  {
    icon: <TbCalendarTime />,
    amount: '2021 Apr - 2024 Jun',
    title: 'Time Peroid',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
    pcColor: 'green-600',
  },

];

export const aspectList = [
  {
    icon: <BiSolidCrown />,
    score: '0.99',
    title: 'Quality',
    sentiment: 'Positive',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'green-600',
  },
  {
    icon: <BsCurrencyDollar />,
    score: '0.61',
    sentiment: 'Negative',
    title: 'Price',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
    pcColor: 'red-600',
  },
  {
    icon: <TbTruckDelivery />,
    score: '0.72',
    title: 'Shipping',
    sentiment: 'Positive',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',

    pcColor: 'green-600',
  },
  {
    icon: <FcCustomerSupport />,
    score: '0.62',
    title: 'Customer Service',
    sentiment: 'Neutral',
    iconColor: 'rgb(228, 106, 118)',
    iconBg: 'rgb(255, 244, 229)',
    pcColor: 'indigo-600',
  },
  {
    icon: <LiaCertificateSolid />,
    score: '0.88',
    title: 'Warranty ',
    sentiment: 'Negative',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'red-600',
  },
];



export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];

export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: 'My Profile',
    desc: 'Account Settings',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  // {
  //   icon: <BsShield />,
  //   title: 'My Inbox',
  //   desc: 'Messages & Emails',
  //   iconColor: 'rgb(0, 194, 146)',
  //   iconBg: 'rgb(235, 250, 242)',
  // },
  // {
  //   icon: <FiCreditCard />,
  //   title: 'My Tasks',
  //   desc: 'To-do and Daily Tasks',
  //   iconColor: 'rgb(255, 244, 229)',
  //   iconBg: 'rgb(254, 201, 15)',
  // },
];


export const dropdownData = [
  {
    Id: '1',
    Time: 'March 2021',
  },
  {
    Id: '2',
    Time: 'April 2021',
  }, {
    Id: '3',
    Time: 'May 2021',
  },
];

export const pieChartData = [
  { x: 'NaN', y: 70, text: '70%', color: '#FF8A80' },  // Soft Green
  { x: 'NaN', y:20, text: '20%', color: '#FF8A80' },   // Soft Red
  { x: 'NaN', y: 10, text: '10%', color: '#FF8A80' },   // Soft Grey
];

export const pieChartDataEmotion = [
  { x: 'NaN', y: 40, text: '40%', color: '#FF8A80' },   // Warm Coral
  { x: 'NaN', y: 25, text: '25%', color: '#FF8A80' },     // Bright Yellow
  { x: 'NaN', y: 20, text: '20%', color: '#FF8A80' },   // Soft Teal
  { x: 'NaN', y: 10, text: '10%', color: '#FF8A80' },     // Soft Red
  { x: 'NaN', y: 5, text: '5%', color: '#FF8A80' },  // Soft Purple
];


// export const improvementTips = [
//   "Increase battery life to extend usage time and reduce customer complaints about frequent charging.",
//   "Improve the durability of materials used to enhance product longevity and reduce wear and tear.",
//   "Expand color options to appeal to a broader demographic and match customer preferences.",
//   "Optimize the user interface for better accessibility, ensuring that all users can easily navigate the product.",
//   "Enhance packaging to provide better protection during shipping and improve the unboxing experience.",
//   "Reduce the weight of the product to make it more portable and convenient for users on the go.",
//   "Offer customizable features to allow customers to personalize the product according to their needs.",
//   "Increase the clarity of the instruction manual to reduce user confusion and improve setup time.",
//   "Upgrade the camera quality to provide sharper and more vibrant images, meeting customer expectations.",
//   "Add more connectivity options, such as Bluetooth and Wi-Fi, to increase the product's versatility.",
//   "Introduce a loyalty program or discount for repeat purchases to encourage customer retention.",
//   "Reduce the product's environmental impact by using eco-friendly materials and sustainable practices.",
// ];
