import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import culturalKnowledgeExchange from "./assets/cultural-knowledge-exchange.jpg";
import localAndInternationalConference from './assets/local-and-international-conference.jpg';
import treePlanting from './assets/tree-planting.jpg';
import fashionShow from './assets/fashion-show.jpg';
import culturalFoodMaking from './assets/cultural-food-making.jpg';
import panelDiscussion from './assets/panel-discussion.jpg';

export const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Events', id: 'events' },
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
