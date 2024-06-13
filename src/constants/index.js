import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

import about from '../assets/hero/about.webp'



import { ser1,ser2,ser3,ser4 } from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "About Us",
    text: "NeighborGood is on a mission to provide the simplest platform for neighborhoods to form connections & community. We are going after this by creating an Al agent that acts as the highly-social extrovert neighbor who finds symbiotic activities for people to do together.We offer users the ability to screen potential nearby connections and arrange shared face-to-face activities. Our team previously founded Foresight Institute, Persist Ventures, & Systemic Altruism..",
    date: "May 2023",
    status: "done",
    imageUrl: about,
    colorful: true,
  },
  // {
  //   id: "1",
  //   title: "Gamification",
  //   text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
  //   date: "May 2023",
  //   status: "progress",
  //   imageUrl: roadmap2,
  // },
  // {
  //   id: "2",
  //   title: "Chatbot customization",
  //   text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
  //   date: "May 2023",
  //   status: "done",
  //   imageUrl: roadmap3,
  // },
  // {
  //   id: "3",
  //   title: "Integration with APIs",
  //   text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
  //   date: "May 2023",
  //   status: "progress",
  //   imageUrl: roadmap4,
  // },
];

export const collabText =
  "Al can suggest matches and activities, making connection even easier. LLMs enable semantic understanding of wants and needs, allowing the neighborhood connector - formerly the local extrovert - to instead be an Al agent.";

export const collabContent = [
  {
    id: "0",
    title: "Neighborhood norms have evolved away from spontaneous connections.Today we prefer to screen our contacts online before meeting in person. We screen work colleagues using LinkedIn; we screen activity participants on Facebook; we screen romance candidates using online dating services.",
  },
  {
    id: "1",
    title: "What's needed now is an app that lets us share specific info that we select, with nearby neighbors that we also select-just as we can do now on Linkedin, but for our social lives with nearby neighbors.",
  },

];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Connect, Discover , Attend : Meet Our Last Neighbour.",
    text: "Connect, Discover , Attend : Meet Our Last Neighbour.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: ser1,
  },
  {
    id: "1",
    title: "Connect with neighbours , Discover Local Events.",
    text: "Connect with neighbours , Discover Local Events.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: ser2,
    light: true,
  },
  {
    id: "2",
    title: "Build your Neighbour Network , Connect Now.",
    text: "Build your Neighbour Network , Connect Now.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: ser3,
  },
  {
    id: "3",
    title: "Get nearby support around you Easily.",
    text: "Get nearby support around you Easily.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: ser4,
    light: true,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
