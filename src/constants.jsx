import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import culturalKnowledgeExchange from "./assets/cultural-knowledge-exchange.jpg";
import localAndInternationalConference from './assets/local-and-international-conference.jpg';
import treePlanting from './assets/tree-planting.jpg';
import fashionShow from './assets/fashion-show.jpg';
import culturalFoodMaking from './assets/cultural-food-making.jpg';
import panelDiscussion from './assets/panel-discussion.jpg';
import peaceAndLove from './assets/peace-and-love.png';
import culturalUnity from './assets/cultural-unity.png';
import childrenFestival from './assets/children-festival.png';
import tradeEvent from './assets/trade-event.jpg';
import beautyCompetition from './assets/beauty-competition.jpg';
import gallery1 from './assets/Gallery/gallery-image1.jpg';
import gallery2 from './assets/Gallery/gallery-image2.jpg';
import gallery3 from './assets/Gallery/gallery-image3.jpg';
import gallery4 from './assets/Gallery/gallery-image4.jpg';
import gallery5 from './assets/Gallery/gallery-image6.jpg';
import gallery6 from './assets/Gallery/gallery-image7.jpg';
import gallery7 from './assets/Gallery/gallery-image9.jpg';
import gallery8 from './assets/Gallery/gallery-image10.jpg';
import gallery9 from './assets/Gallery/gallery-image11.jpg';
import gallery10 from './assets/Gallery/gallery-image12.jpg';
import gallery11 from './assets/Gallery/gallery-image13.jpg';
import testimonial1 from "./assets/testimonials/testimonial1.jpg";
import testimonial2 from "./assets/testimonials/testimonial2.jpg";
import testimonial3 from "./assets/testimonials/testimonial3.jpg";

import { FaHandshake , FaUsers, FaLightbulb, FaBullhorn, FaRocket } from 'react-icons/fa';
import { MdEqualizer } from 'react-icons/md';

export const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Schedule', id: 'schedule' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact', id: 'contact' },
];

export const socialLinks = [
    { name: <FaFacebookF />, path: 'https://www.facebook.com/puagmae' },
    { name: <FaInstagram />, path: 'https://www.instagram.com/puagmae' },
    { name: <FaTwitter />, path: 'https://www.twitter.com/puagmae' },
    { name: <FaLinkedinIn />, path: 'https://www.linkedin.com/puagmae' },
    { name: <FaTiktok />, path: 'https://www.tiktok.com/puagmae' },
];

export const services = [
    {
        title: 'Cultural Knowledge Exchange',
        description: 'Promote cultural knowledge and exchange between different communities.',
        fullDescription: 'This service aims to promote cultural knowledge and exchange between different communities through various activities such as workshops, seminars, and cultural fairs.',
        image: culturalKnowledgeExchange,
    },
    {
        title: 'Organize Fashion Show',
        description: 'Showcase traditional and contemporary fashion from diverse cultures.',
        fullDescription: 'Our fashion shows bring together designers from diverse cultures to showcase both traditional and contemporary fashion, celebrating the rich tapestry of global attire.',
        image: fashionShow,
    },
    {
        title: 'Tree Planting Session',
        description: 'Contribute to the environment by planting trees.',
        fullDescription: 'Join us in our tree planting sessions to contribute to the environment, promote sustainability, and beautify our surroundings.',
        image: treePlanting,
    },
    {
        title: 'Local & International Conference',
        description: 'Bring together experts to discuss cultural and social topics.',
        fullDescription: 'We organize conferences that bring together experts, scholars, and community leaders to discuss various topics related to culture, heritage, and social development.',
        image: localAndInternationalConference,
    },
    {
        title: 'Cultural Food Making',
        description: 'Learn and share traditional cooking methods and recipes.',
        fullDescription: 'Participate in our cultural food making sessions to learn and share traditional cooking methods and recipes, preserving culinary heritage and promoting cultural exchange.',
        image: culturalFoodMaking,
    },
    {
        title: 'Panel Discussion',
        description: 'Engage in discussions on cultural and social issues.',
        fullDescription: 'Our panel discussions provide a platform for engaging and insightful conversations on cultural and social issues, featuring experts and community leaders.',
        image: panelDiscussion,
    },
];

export const scheduleData = [
    {
        date: 'September 6, 2024',
        title: 'Peace and Love',
        description: 'Celebrate peace and love across Africa and around the world. This day is dedicated to fostering harmony and unity through various events and activities.',
        image: peaceAndLove,
    },
    {
        date: 'September 7, 2024',
        title: 'Cultural and Africa Unity',
        description: 'Experience the rich culture and traditions of Africa. This day highlights the cultural heritage and unity of the African continent through performances and exhibitions.',
        image: culturalUnity,
    },
    {
        date: 'September 8, 2024',
        title: 'African Children Festival',
        description: 'A special day for children featuring games, activities, and events designed to celebrate and entertain the younger generation.',
        image: childrenFestival,
    },
    {
        date: 'September 9, 2024',
        title: "Let's Trade on Puagmae",
        description: 'An exciting trading event for various production companies, traders, and entrepreneurs to showcase their products and services.',
        image: tradeEvent,
    },
    {
        date: 'September 10, 2024',
        title: "Puagmae's Beauty",
        description: 'A fashion show competition celebrating the pure beauty of Africa, featuring stunning designs and models from across the continent.',
        image: beautyCompetition,
    },
];

export const galleryData = [
    {
        image: gallery1,
        alt: 'Gallery Image 1',
    } ,
    {
        image: gallery2,
        alt: 'Gallery Image 2',
    } ,
    {
        image: gallery3,
        alt: 'Gallery Image 3',
    } ,
    {
        image: gallery4,
        alt: 'Gallery Image 4',
    } ,
    {
        image: gallery5,
        alt: 'Gallery Image 5',
    } ,
    {
        image: gallery6,
        alt: 'Gallery Image 6',
    } ,
    {
        image: gallery7,
        alt: 'Gallery Image 7',
    } ,
    {
        image: gallery8,
        alt: 'Gallery Image 8',
    } ,
    {
        image: gallery9,
        alt: 'Gallery Image 9',
    } ,
    {
        image: gallery10,
        alt: 'Gallery Image 10',
    } ,
    {
        image: gallery11,
        alt: 'Gallery Image 11',
    } ,
]

export const testimonials = [
    {
        name: 'John Doe',
        title: 'CEO, Company Name',
        image: testimonial1,
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas tincidunt. Nullam nec purus nec purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas tincidunt. Nullam nec purus nec purus.',
    } ,
    {
        name: 'John Doe',
        title: 'CEO, Company Name',
        image: testimonial2,
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas tincidunt. Nullam nec purus nec purus. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas tincidunt. Nullam nec purus nec purus.',
    } ,
    {
        name: 'John Doe',
        title: 'CEO, Company Name',
        image: testimonial3,
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas tincidunt. Nullam nec purus nec purus. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas tincidunt. Nullam nec purus nec purus.',
    } ,
]


export const reasons = [
    {
      icon: <FaHandshake className="text-4xl text-goldenrod" />,
      title: 'We Encourage the Ideals of Unity',
      description: 'We foster a collaborative and unified approach to achieve common goals.',
    },
    {
      icon: <MdEqualizer className="text-4xl text-goldenrod" />,
      title: 'We Never Compromise Equality',
      description: 'Equality is at the core of our values, ensuring fair treatment and opportunities for all.',
    },
    {
      icon: <FaUsers className="text-4xl text-goldenrod" />,
      title: 'Reliable Audience Relationship',
      description: 'We build and maintain strong, trustworthy relationships with our audience.',
    },
    {
      icon: <FaLightbulb className="text-4xl text-goldenrod" />,
      title: 'Technology & Creativity',
      description: 'Combining cutting-edge technology with creative solutions to drive innovation.',
    },
    {
      icon: <FaRocket className="text-4xl text-goldenrod" />,
      title: 'We Are Highly Responsible',
      description: 'Our commitment to responsibility ensures that we deliver on our promises with integrity.',
    },
    {
      icon: <FaBullhorn className="text-4xl text-goldenrod" />,
      title: 'Continuous Improvement',
      description: 'We are dedicated to continuous improvement and striving for excellence in everything we do.',
    },
  ];
