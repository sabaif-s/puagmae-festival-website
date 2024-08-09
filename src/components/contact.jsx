import React, { useState, useEffect,useRef} from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone} from '@fortawesome/free-solid-svg-icons'
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import contactBg from '../assets/103685-OMEGA2-343.jpg';
import logo from '../assets/logo.png';
import image1 from '../assets/intern6.webp';
import image2 from '../assets/logo.png';
import image3 from '../assets/home-background.jpg';
import image4 from '../assets/intern8.webp';
import image5 from '../assets/about-image.jpg';
import image6 from '../assets/intern3.webp';
import image7 from '../assets/children-festival.png';
import image8 from '../assets/tree-planting.jpg';
 


export default function myContact(){
  
  const divRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isFormVisible,setIsFormVisible]=useState(false);
  const [isLeftVisible,setLeft]=useState(false);
  const [isLeftAfter,setLeftAfter]=useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setTimeout(()=>{
          
              setLeft(true);
            },1000);
            setTimeout(()=>{
              setIsFormVisible(true);
              setShowMap(true);
            },1500);
            setTimeout(() => {
              setLeftAfter(true);
            }, 2000);
          } else {
            setIsVisible(false);
            setIsFormVisible(false);
            setLeft(false);
            setLeftAfter(false);
            setShowMap(false);
          }
        });
      },
      {
        rootMargin: '0px',
        threshold: 0.10, // Trigger the event when 10% of the div is visible
      }
    );
     
    if (divRef.current) {
      observer.observe(divRef.current);
    }
    

    // Clean up the observer when the component is unmounted
    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
     
    };
  }, []);
   
  const [showMap, setShowMap] = useState(false);

  const handleMouseEnter = () => {
    setTimeout(()=>{
      setShowMap(true);
    },500)
   
  };

  const handleMouseLeave = () => {
    setTimeout(()=>{
      setShowMap(false);
    },1000)
  };

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped((prevFlipped) => !prevFlipped);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);
  const [formState, setFormState] = useState({
    user_name: '',
    email_name: '',
    message: '',
    address:''
  });

  const handleInputChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const [showMessage, setShowMessage] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        'service_6uiulvk',
        'template_awbu5eh',
        event.target,
        'Vl0w92Ek-4bGLCPC9'
      )
      .then(
        (result) => {
          console.log('Email sent successfully!', result.text);
          setShowMessage(true);
          setFormState({
            user_name: '',
            email_name: '',
            message: '',
            address:'',
          });
          setTimeout(() => {
            setShowMessage(false);
          }, 2000);
        },
        (error) => {
          console.error('Error sending email:', error.text);
        }
      );
  };
    const contentStyle = {
        backgroundImage: `url(${contactBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'right',
        filter: 'grayscale(10%)',
        opacity: isVisible ? 1 : 0, // Gradually fade in the div
        visibility: isVisible ? 'visible' : 'hidden', // Gradually show the div
        transition: 'opacity 0.5s, visibility 0.5s', // Add a transition effect

      };
    return( 
        <div  ref={divRef}  className='w-full px-10 py-5 bg-top md:bg-center'  style={contentStyle} id="contact">
        <div className='pl-10 py-8 mt-10'>
               <div className="flex flex-wrap justify-between items-center my-5">
               <div className='flex-none mb-5 px-5 py-5 overflow-hidden relative w-50 h-40' id="home">
          <img 
            src={images[currentIndex]} 
            alt="puagmae logo" 
            className={`w-full h-full bg-black duration-1000 ease-in-out transition-opacity hover:opacity-100 ${
              isFlipped ? 'opacity-40' : 'opacity-100'
            }`}
          />
        </div>        <div className='text-left'>
        <p className='text-2xl  md:text-5xl font-extrabold mb-12 text-center text-goldenrod'>CONTACT US</p> 
        </div>
        <div className='flex-none mb-5 px-5 py-5 overflow-hidden relative w-50 h-40' id="home">
          <img 
            src={images[currentIndex]}  
            alt="puagmae logo" 
            className={`w-full h-full bg-black duration-1000 ease-in-out transition-opacity hover:opacity-100 ${
              isFlipped ? 'opacity-100' : 'opacity-40'
            }`}
          />
        </div> 
                   
                    </div>
             <div className="flex flex-col md:flex-row md:space-x-2">
              <div className="mb-10  md:w-1/2 invisible" style={{ visibility: isLeftVisible ? 'visible':'hidden', transition:"opacity 0.5s, visibility 0.5s",opacity: isLeftVisible ? 1:0}}>
              <div className="flex flex-col">
             
               <div>
               <a href="tel:+251901002282" className='cursor-pointer'>
               <FontAwesomeIcon icon={faPhone}
                 className="w-6 h-6 text-gray-500 hover:text-gray-700"
                 />
                 </a>
                 <p className='pl-2 font-serif inline text-xl font-bold font-bold'>
                 <a href="tel:+251901002282" className='cursor-pointer'>Call us</a>
                  </p>
                 <p className='pb-10 pt-3 md:pb-6 font-bold'> <a href="tel:+251901002282" className='cursor-pointer'>+2519 01 00 22 82</a>
                  </p>
               </div>
               <div>
               <FontAwesomeIcon icon={faClock}
               className='w-6 h-7 text-gray-400 hover:text-gray-700 inline'
               />
               <p className='inline pl-2 font-serif text-xl font-bold '>Working Hours</p>
               <div className= {` flex flex-col w-full not(lg):flex-row lg:flex-row justify-start text-xl bg-amber-100 p-4 rounded-tr-2xl rounded-br-3xl lg:hover:bg-amber-200
               ${
                  isLeftAfter ? 'md:w-2/3 opacity-1 ease-in duration-1000'
                  :'w-full opacity-0'
               }`}
               >
                
  <div class="lg:mr-5 my-1 bg-purple-200 shadow-lg shadow-cyan-500/50 p-1 w-full">
    <div class="font-serif text-nowrap">MONDAY-FRIDAY</div>
    <div class="font-gray-500 text-nowrap">08:00 AM-17:00 PM</div>
  </div>
  <div class="ml-0 my-1 bg-purple-200 shadow-lg shadow-indigo-500/50 p-1 w-full">
    <div class="font-mono text-nowrap">SATURDAY-SUNDAY</div>
    <div class="font-gray-500 text-nowrap">CLOSED</div>
  </div>
</div>
             
               </div>
               <div
              
               >
               <FontAwesomeIcon icon={faLocationDot} 
                 className='w-6 h-7 text-gray-400 hover:text-gray-700'
                 onMouseEnter={handleMouseEnter}
               
               />
               <p className='inline pl-2 font-serif text-xl font-bold cursor-pointer' onClick={handleMouseEnter}  onMouseEnter={handleMouseEnter}>Location</p>
               <p className='pt-3 pb-10 md:pb-6 font-bold'  onMouseEnter={handleMouseEnter}>Ledeta Kefleketema, Kebele 49, At last floor of Haven Hotel</p>
               </div>
               <div className="static w-full">
  <div
  
    className={`bg-gray-200 w-full lg:w-1/2 overflow-hidden ${
      showMap ? 'visible' : 'invisible'
    }`}
    style={{visibility: showMap ? 'visible':'hidden', transition: 'opacity 0.5s, visibility 0.5s', opacity: showMap ? '1':'0'}}
    onMouseLeave={handleMouseLeave}
  >
    {/* Add your map component here */}
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.628474512137!2d38.72900071137378!3d9.006291691016779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b872bd4cd3c9d%3A0x821422725403d743!2sPuagmae%20Festival!5e0!3m2!1sen!2set!4v1723150413836!5m2!1sen!2set"
      className="w-full"
      height="200px"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>

              
               </div>

              </div>
          
             
               <div className="md:w-1/2">
               <form style={{visibility: isFormVisible ? 'visible':'hidden', opacity: isFormVisible ? 1 : 0, transition: 'opacity 0.5s, visibility 0.5s'}} onSubmit={handleSubmit} className='invisible'>
               <div className="flex flex-col">
               <div className="flex flex-col md:flex-row">
               <div className="basis-1/2 w-full mb-3 md:basis-2/3">
               
               <p className='pb-2 font-extrabold'>EMAIL</p>
               <input
  className="
    border-none
    bg-transparent
    border-gray-400
    focus:border-blue-500
    focus:outline-none
    text-yellow-400
    text-2xl
    font-bold
    mb-1
    hover:border-2
    hover:border-blue-500
    hover:ring-2 ring-blue-500
    transition
    duration-300
    ease-in-out
    w-full
    md:w-4/5
  "
  type="text"
  name="email_name"
  value={formState.email_name}
  onChange={handleInputChange}
  autoComplete='off'
/>
               
               <div class="w-full md:w-4/5 border-b border-gray-300 mr-auto"></div>
               </div>
            
              <div class="basis-1/2 w-full md:basis-1/3">
              <p className='pb-2 font-extrabold'>Address</p>
              
<input
  className="
    border-none
    bg-transparent
    border-gray-400
    focus:border-blue-500
    focus:outline-none
    text-yellow-400
    font-bold
    text-2xl
    mb-1
    hover:border-2
    hover:border-blue-500
    hover:ring-2 ring-blue-500
    transition
    duration-300
    ease-in-out
    w-full
    md:w-4/5
  "
  type="text"
          name="address"
          value={formState.address}
          onChange={handleInputChange}
          autoComplete='off'
/>
              <div class="w-full md:w-4/5 border-b border-gray-300 mr-auto"></div>
              </div>
              </div>
               <div>
                <p className='pb-2 font-extrabold'>NAME</p>
                <input
  className="
    border-none
    bg-transparent
    border-gray-400
    focus:border-blue-500
    focus:outline-none
    text-yellow-400
    mb-1
    hover:border-2
    hover:border-blue-500
    hover:ring-2 ring-blue-500
    transition
    duration-300
    ease-in-out
    w-full
    md:w-4/5
    font-black
    text-2xl
  "
  type="text"
  name="user_name"
  value={formState.user_name}
  onChange={handleInputChange}
  autoComplete='off'
/>
                <div class="w-full md:w-4/5 border-b border-gray-300 mr-auto"></div>
               </div>
               <div>
                <p className='pb-2 font-extrabold'>Message</p>
                <textarea className='resize-none text-yellow-400 font-bold text-xl hover:border-2
    hover:ring-2 ring-blue-500 rounded-none border-0 focus:outline-none text-orange-300 mb-1 w-full md:w-4/5 autocomplete-off' type="text"
    name="message"
    value={formState.message}
    onChange={handleInputChange} rows="5"></textarea>
                <div className="w-full md:w-4/5 border-b border-gray-300 mr-auto"></div>
               </div>
               <div>
                <button className='rounded-md w-2/3 md:w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded font-bold focus:outline-none transition duration-300 mt-2' type="submit">SUBMIT</button>
              
               </div>
               {showMessage && (
  <div className="bg-green-500 text-white px-4 py-2 rounded mb-4 mt-5 font-extrabold">
    Thanks for your message!
  </div>
)}
              
               </div>
               </form>
               </div>
             
               </div>
              
        </div>
       
        </div>
    )
}
