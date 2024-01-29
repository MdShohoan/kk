import moment from 'moment';
import 'moment-timezone';
import dhakaPrayerTime from '../assets/data/dhakaPrayerTime.json'

function Religion() {


    // Get the current date and time in the "Asia/Dhaka" time zone
    const currentDate = moment().tz("Asia/Dhaka");

    const findCurrentDayPrayerTime = () => {
        const todayPrayerTime = dhakaPrayerTime?.find((day) => {
            const dayDate = moment(day.date, 'D/M/YYYY');
            return dayDate.isSame(currentDate, 'day');
        });
        return todayPrayerTime;
    };

    const currentDayPrayerTime = findCurrentDayPrayerTime()

    return (
        <div className="container">
            <div>
                <h3 className="text-center mb-3">আজকের নামাজের সময়সূচি</h3>
                <div className="grid grid-cols-5 gap-3 text-center">
                    <div className='border'>
                        <p>ফজর</p>
                        {currentDayPrayerTime?.fajr}
                    </div>
                    <div className='border'>
                        <p>যোহর</p>
                        {currentDayPrayerTime?.dhuhr}
                    </div>
                    <div className='border'>
                        <p>আছর</p>
                        {currentDayPrayerTime?.asr}
                    </div>
                    <div className='border'>
                        <p>মাগরিব</p>
                        {currentDayPrayerTime?.maghrib}
                    </div>
                    <div className='border'>
                        <p>ইশা</p>
                        {currentDayPrayerTime?.isha}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Religion