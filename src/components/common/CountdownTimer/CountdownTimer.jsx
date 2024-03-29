// CountdownTimer.js
import { useState, useEffect } from 'react';
import moment from 'moment';
import toBengaliDigits from '../../../lib/toBanglaDigits';

const CountdownTimer = ({ electionDate }) => {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());
  const units = ['দিন', 'ঘণ্টা', 'মিনিট', 'সেকেন্ড']

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []); // eslint-disable-line

  function getTimeRemaining() {
    const now = moment();
    const electionDateTime = moment(electionDate);
    const duration = moment?.duration(electionDateTime?.diff(now));

    if (duration.asMilliseconds() > 0) {
      const days = toBengaliDigits(Math?.floor(duration?.asDays()));
      const hours = toBengaliDigits(duration?.hours());
      const minutes = toBengaliDigits(duration?.minutes());
      const seconds = toBengaliDigits(duration?.seconds());

      // return `${days} দিন, ${hours} ঘন্টা, ${minutes} মিনিট, ${seconds} সেকেন্ড`;
      return [days, hours, minutes, seconds]
    } else {
      // return "Election is happening now!";
      return false
    }
  }

  if (!timeRemaining) {
    return null
  }

  return (
    <div className='bg-white p-4 rounded-md mx-auto md:mx-0 border border-primary-background'>
      <div className='flex gap-4 justify-center md:justify-start'>
        {
          timeRemaining?.map((element, i) => (
            <div key={i} className='flex flex-col gap-1 items-center bg-primary-light w-16 rounded px-1 py-1 border border-primary-contrast'>
              <div className='font-semibold text-primary'>{element}</div>
              <div className='text-xs text-primary'>
                {units[i]}
              </div>
            </div>
          ))
        }
      </div>
      {/* <div className='mt-4 w-[300px] h-[90px] flex justify-center items-center bg-primary-light'>
        ads
      </div> */}
    </div>
  );
};

export default CountdownTimer;
