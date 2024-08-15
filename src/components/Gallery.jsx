import React, { useState,useRef,useEffect } from 'react';
 import intern1 from '../assets/intern9.webp';
import intern2 from '../assets/intern2.webp';
import intern3 from '../assets/intern3.webp';
import intern4 from '../assets/intern4.jpg';
import intern5 from '../assets/intern5.webp';
import intern6 from '../assets/intern6.webp';
import intern7 from '../assets/intern7.webp';
import intern8 from '../assets/about-image.jpg';
import intern9 from '../assets/home-background.jpg';
import intern10 from '../assets/tree-planting.jpg';
import intern11 from '../assets/trade-event.jpg';
export default function MasonryGridGallery() {
  const galleryRef=useRef(null);
  const galleryRefBottom=useRef(null);
  const firstPic=useRef(null);
  const secondPic=useRef(null);
  const thirdPic=useRef(null);
  const [isGallery,setGallery]=useState(false);
  const [isPic,setPic]=useState(false);
  const [isPicFirst,setFirstPic]=useState(false);
  const [isPicThird,setThirdPic]=useState(false);
  const [isLoaded,setLoad]=useState(false);
  const iframeRef=useRef(null);
  var tempTop;
  var tempBottom;
  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.src = 'https://www.youtube.com/embed/f98qFOQnlWw?si=b70SNchdiGhfvDVC';
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(entry.target.id);

         if(entry.target.id === "top"){
            tempTop="top";
          setGallery(true);
          setTimeout(()=>{
        
            setFirstPic(true);
          },500);
          setTimeout(()=>{
             setPic(true)
          },1000);
          setTimeout(()=>{
            setThirdPic(true);
          },1500);
         }
         else{
          tempBottom="bottom";
          setGallery(true);
          setTimeout(()=>{
        
            setFirstPic(true);
          },1500);
          setTimeout(()=>{
             setPic(true)
          },1000);
          setTimeout(()=>{
            setThirdPic(true);
          },500);
         }

           
          }
            else if(tempTop === "top"){
               if(tempBottom === "bottom"){
                  console.log("visible");
               }
               tempTop="";
            } 
           else if(tempBottom === "bottom"){
            if(tempTop === "top"){
              console.log("visible");
            }
            else{
              
              setPic(false);
              setFirstPic(false);
              setThirdPic(false);
              console.log("invisible");
            }
            
            console.log("TempTop: ",tempTop);
            console.log("TempBottom:",tempBottom);
           }
        
          else {
            console.log("invisible");
            console.log(tempTop);
            setGallery(false);
            setPic(false);
            setFirstPic(false);
            setThirdPic(false);
          }
        });
      },
      {
        rootMargin: '0px',
        threshold: 0.9, // Trigger the event when 10% of the div is visible
      }
    );
     
    if (galleryRefBottom.current) {
      observer.observe(galleryRefBottom.current);
    }
    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }
    
     

    // Clean up the observer when the component is unmounted
    return () => {
      if (galleryRefBottom.current) {
        observer.unobserve(galleryRefBottom.current);
        console.log('bottom finished');
        tempBottom='finished';
      }
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current);
        console.log("top finished");
        tempTop='finished';

      }
      
    };
  }, []);
   



  const [selectedImage, setSelectedImage] = useState(null);
  
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
    const handleIframeLoad=()=>{
       setLoad(true);
    }
  const handleCloseClick = () => {
    setSelectedImage(null);
  };

  const [showVideo, setShowVideo] = useState(false);
  const [buttonText, setButtonText] = useState('Video');

  const handleButtonClick = () => {
    
      setShowVideo((prevState) => !prevState);
      setButtonText((prevText) => (prevText === 'Video' ? 'Hide' : 'Video'));
    
  
  };


  return (
    <div style={{visibility: isGallery ? 'visible':'hidden', transition: 'opacity 0.5s, visibility 0.5s', opacity: isGallery ? '1':'0'}}>
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 " id="gallery">
       <h2 ref={galleryRef} className="mb-12 text-5xl font-extrabold text-center text-goldenrod px-4 " id="top">
                       Gallery
</h2>
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      <div className="grid gap-4">
        <div ref={firstPic} style={{visibility: isPicFirst ? 'visible':'hidden', transition: 'opacity 0.5s, visibility 0.5s', opacity: isPicFirst ? '1':'0'}}>
          <img
             className="h-full max-w-full rounded-lg object-cover object-center cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-90 hover:opacity-80 hover:border-5 hover:border-white"
            src={intern1}
            alt="gallery-photo"
            onClick={() => handleImageClick(`${intern1}`)}
          />
        </div>
        <div style={{visibility: isPic ? 'visible':'hidden', transition: 'opacity 0.5s, visibility 0.5s', opacity: isPic ? '1':'0'}}>
          <img
            className="h-full max-w-full rounded-lg object-cover object-center cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-90 hover:opacity-80 hover:border-5 hover:border-white"
            src={intern2}
            alt="gallery-photo"
            onClick={() => handleImageClick(`${intern2}`)} />
        </div>
        <div style={{visibility: isPicThird ? 'visible':'hidden', transition: 'opacity 0.5s, visibility 0.5s', opacity: isPicThird ? '1':'0'}}>
          <img
            className="h-full max-w-full rounded-lg object-cover object-center cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-90 hover:opacity-80 hover:border-5 hover:border-white"
            src={intern3}
            alt="gallery-photo"
            onClick={() => handleImageClick(`${intern3}`)} />
        </div>
      </div>
      <div className="grid gap-4">
        <div style={{visibility: isPicFirst ? 'visible':'hidden', transition: 'opacity 0.5s, visibility 0.5s', opacity: isPicFirst ? '1':'0'}}>
          <img
            className="h-full max-w-full rounded-lg object-cover object-center cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-90 hover:opacity-80 hover:border-5 hover:border-white"
            src={intern4}
            alt="gallery-photo"
            onClick={() => handleImageClick(`${intern4}`)} />
        </div>
        <div style={{visibility: isPic ? 'visible':'hidden', transition: 'opacity 0.5s, visibility 0.5s', opacity: isPic ? '1':'0'}}>
          <img
             className="h-full max-w-full rounded-lg object-cover object-center cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-90 hover:opacity-80 hover:border-5 hover:border-white"
             src={intern5}
            alt="gallery-photo"
            onClick={() => handleImageClick(`${intern5}`)} />
        </div>
        <div style={{visibility: isPicThird ? 'visible':'hidden', transition: 'opacity 0.5s, visibility 0.5s', opacity: isPicThird ? '1':'0'}}>
          <img
            className="h-full max-w-full rounded-lg object-cover object-center cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-90 hover:opacity-80 hover:border-5 hover:border-white"
            src={intern6}
            alt="gallery-photo"
            onClick={() => handleImageClick(`${intern6}`)} />
        </div>
      </div>
      <div className="grid gap-4">
        <div style={{visibility: isPicFirst ? 'visible':'hidden', transition: 'opacity 0.5s, visibility 0.5s', opacity: isPicFirst ? '1':'0'}}>
          <img
             className="h-full max-w-full rounded-lg object-cover object-center cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-90 hover:opacity-80 hover:border-5 hover:border-white"
             src={intern7}
            alt="gallery-photo"
            onClick={() => handleImageClick(`${intern7}`)} />
        </div>
        <div style={{visibility: isPic ? 'visible':'hidden', transition: 'opacity 0.5s, visibility 0.5s', opacity: isPic ? '1':'0'}}>
          <img
            className="h-full max-w-full rounded-lg object-cover object-center cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-90 hover:opacity-80 hover:border-5 hover:border-white"
            src={intern8}
            alt="gallery-photo"
            onClick={() => handleImageClick(`${intern8}`)} />
        </div>
        <div ref={galleryRefBottom} style={{visibility: isPicThird ? 'visible':'hidden', transition: 'opacity 0.5s, visibility 0.5s', opacity: isPicThird ? '1':'0'}} id='bottom'>
          <img
            className="h-full max-w-full rounded-lg object-cover object-center cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-90 hover:opacity-80 hover:border-5 hover:border-white"
            src={intern9}
            alt="gallery-photo"
            onClick={() => handleImageClick(`${intern9}`)} />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="h-full max-w-full rounded-lg object-cover object-center cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-90 hover:opacity-80 hover:border-5 hover:border-white"
            src={intern10}
            alt="gallery-photo"
            onClick={() => handleImageClick(`${intern10}`)} />
        </div>
        <div>
          <img
         className="h-full max-w-full rounded-lg object-cover object-center cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-90 hover:opacity-80 hover:border-5 hover:border-white"
         src={intern11}
         onClick={() => handleImageClick(`${intern11}`)} />
        </div>
      </div>

      {selectedImage && (
       <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-80 flex justify-center items-center z-50">
      <div className="relative w-full max-w-4xl h-auto">
  <img
    src={selectedImage}
    alt="selected-gallery-photo"
    className="max-h-full max-w-full object-contain rounded-lg z-10"
  />
  <button
    className="absolute top-0 right-0  bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 focus:outline-none cursor-pointer z-[9999]"
    onClick={handleCloseClick}
  >
    Close
  </button>
</div>
     </div>
      )}
      </div>
      </div>
      <div className='pt-12 pb-5 bg-gradient-to-r from-gray-900 to-gray-800'>
      {!showVideo && (
        <div style={{ textAlign: 'center' }}>
          <button
            style={{
              backgroundColor: 'blue',
              color: 'white',
              fontWeight: 'bold',
              padding: '8px 16px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
            onClick={handleButtonClick}
          >
            {buttonText}
          </button>
        </div>
      )}
      {showVideo && (
        <div> 
             <div style={{ textAlign: 'center' }}>
          <button
            style={{
              backgroundColor: 'blue',
              color: 'white',
              fontWeight: 'bold',
              padding: '8px 16px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
            onClick={handleButtonClick}
          >
            {buttonText}
          </button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="aspect-video w-full max-w-2xl mt-5">
            <iframe
            ref={iframeRef}
              onLoad={handleIframeLoad}
              className="w-full h-full"
              src="https://www.youtube.com/embed/f98qFOQnlWw?si=b70SNchdiGhfvDVC"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        </div>
      )}
    </div>

    
     </div>
  );
}