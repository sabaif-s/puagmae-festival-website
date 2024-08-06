import React from 'react';
import { scheduleData } from '../constants';
import { FaCalendarDay } from 'react-icons/fa';

const Schedule = () => {
  return (
    <div className='relative py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white' id='schedule'>
      <div className='max-w-6xl mx-auto px-4'>
        <h2 className='text-5xl font-extrabold mb-12 text-center text-goldenrod'>
          Festival Schedule
        </h2>
        <div className='flex flex-col space-y-8'>
          {scheduleData.map((event, index) => (
            <div key={index} className='bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105'>
              <div className='relative'>
                {/* <div 
                //   className='absolute inset-0 bg-cover bg-center' 
                >
                  <div className='absolute inset-0 bg-black opacity-50'></div>
                </div> */}
                <div className='relative p-6 flex items-center'>
                  <FaCalendarDay className='text-goldenrod text-4xl mr-4' />
                  <div>
                    <h3 className='text-3xl font-bold'>{event.date}</h3>
                    <h4 className='text-2xl font-semibold mb-2'>{event.title}</h4>
                    <p className='text-lg leading-relaxed'>{event.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
