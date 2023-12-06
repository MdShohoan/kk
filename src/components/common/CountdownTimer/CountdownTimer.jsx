// CountdownTimer.js
import { useState, useEffect } from 'react';
import moment from 'moment';

const CountdownTimer = ({ electionDate }) => {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());
  const units = ['দিন', 'ঘন্টা', 'মিনিট', 'সেকেন্ড']
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

   //Convert english digit to bangla digit
   function toBanglaDigits  (number){
    const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    const converted = number?.toString()?.split('')?.map(digit => banglaDigits[digit])?.join('');
    return converted
}

  function getTimeRemaining() {
    const now = moment();
    const electionDateTime = moment(electionDate);
    const duration = moment?.duration(electionDateTime?.diff(now));

    if (duration.asMilliseconds() > 0) {
      const days = toBanglaDigits(Math?.floor(duration?.asDays()));
      const hours = toBanglaDigits(duration?.hours());
      const minutes = toBanglaDigits(duration?.minutes());
      const seconds = toBanglaDigits(duration?.seconds());

      // return `${days} দিন, ${hours} ঘন্টা, ${minutes} মিনিট, ${seconds} সেকেন্ড`;
      return [days, hours, minutes, seconds]
    } else {
      // return "Election is happening now!";
      return ''
    }
  }
  

  return (
    <div className='flex gap-4 justify-center md:justify-start'>
      {
      timeRemaining.map((element, i)=>(
        <div key={i} className='flex flex-col gap-1 items-center bg-primary-light w-16 rounded px-1 py-1 border border-primary-contrast'>
          <div className='font-semibold text-primary'>{element}</div>
          <div className='text-xs text-primary'>
            {units[i]}
          </div>
        </div>
      ))
      }
    </div>
  );
};

export default CountdownTimer;
