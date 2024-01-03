import clsx from 'clsx'
import Section from '../Section/Section'
import Title from '../Title/Title'
import moment from 'moment';
import cn from '../../../lib/cn';

function Schedule() {
    const currentDate = moment()
    const timeLineData = [
        {
            title: 'মনোনয়নপত্র জমা দেওয়ার শেষ দিন',
            date: '৩০ নভেম্বর ২০২৩',
            dateEn: moment('2023-11-30')
        },
        {
            title: 'মনোনয়নপত্র বাছাই',
            date: '০১ থেকে ০৪ ডিসেম্বর ২০২৩',
            dateEn: moment('2023-12-04')
        },
        {
            title: 'মনোনয়নপত্র প্রত্যাহারের শেষ দিন',
            date: '১৭ ডিসেম্বর ২০২৩',
            dateEn: moment('2023-12-17')
        },
        {
            title: 'নির্বাচনী প্রচারের শেষ সময়',
            date: '০৫ জানুয়ারি ২০২৪',
            dateEn: moment('2024-01-05')
        },
        {
            title: 'ভোটগ্রহণ',
            date: '০৭ জানুয়ারি ২০২৪',
            dateEn: moment('2024-01-07')
        },
    ]
    return (
        <Section>
            <div className='container'>
                <Title>
                    নির্বাচনের সময়সূচি
                </Title>
                {/* All device except mobile */}
                <div className='md:flex border rounded pb-7 pt-16 hidden'>
                    {
                        timeLineData?.map((data, i) => (
                            <div key={i} className={
                                clsx(
                                    `flex-1 relative
                                before:w-1/2 before:h-[3px] before:bg-gray-500 before:block before:-z-10 before:absolute before:bottom-[1.25em] first:before:w-0
                                after:right-0 after:w-1/2 after:h-[3px] after:bg-gray-500 after:block after:-z-10 after:absolute after:bottom-[1.25em] last:after:w-0
                                `, currentDate.diff(data?.dateEn, 'seconds') >= 0 && 'before:bg-primary', currentDate.diff(data?.dateEn, 'seconds') >= 0 && 'after:bg-primary'
                                )
                            }>
                                {/* <div className="mb-2">
                                    <p className="text-center text-primary font-bold text-xs">{data?.title}</p>
                                    <p className="text-center text-[#333] font-bold text-xs">{data.date}</p>
                                </div> */}
                                <div className={cn(
                                    'w-10 h-10 bg-white relative border-2 mx-auto border-gray-500 rounded-full',
                                    currentDate.diff(data?.dateEn, 'seconds') >= 0 && 'border-primary'
                                )}>
                                    <span className={
                                        cn('w-5 h-5 hidden rounded-full bg-primary mx-auto my-[25%]', currentDate.diff(data?.dateEn, 'seconds') >= 0 && 'before:bg-primary', currentDate.diff(data?.dateEn, 'seconds') >= 0 && 'block')
                                    } />
                                </div>
                                <div className="absolute bottom-12 w-full">
                                    <p className="text-center text-primary font-bold text-xs">{data?.title}</p>
                                    <p className="text-center text-[#333] font-bold text-xs">{data.date}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                {/* Mobile device */}
                {/* before:w-[3px] before:h-1/2 before:bg-gray-500 before:block before:-z-10 before:absolute first:before:h-0 */}
                <div className='flex flex-col md:hidden h-[500px]'>
                    {
                        timeLineData?.map((data, i) => (
                            <div key={i} className={
                                clsx(
                                    `h-full relative last:h-fit
                                
                                after:w-[3px] after:h-full after:bg-gray-500 after:block after:-z-10 after:absolute last:after:h-0 after:top-0 after:left-[1.25em]
                                `, currentDate.diff(data?.dateEn, 'seconds') >= 0 && 'before:bg-primary', currentDate.diff(data?.dateEn, 'seconds') >= 0 && 'after:bg-primary'
                                )
                            }>
                                <div className={cn(
                                    'w-10 h-10 bg-white relative border-2 border-gray-500 rounded-full',
                                    currentDate.diff(data?.dateEn, 'seconds') >= 0 && 'border-primary'
                                )}>
                                    <span className={
                                        cn('w-5 h-5 hidden rounded-full bg-primary mx-auto my-[25%]', currentDate.diff(data?.dateEn, 'seconds') >= 0 && 'before:bg-primary', currentDate.diff(data?.dateEn, 'seconds') >= 0 && 'block')
                                    } />
                                    {/* <div className="mb-2 absolute left-[50px] top-0 w-[280px] bg-primary-light py-2 rounded">
                                        <p className="text-center text-primary font-bold text-xs">{data?.title}</p>
                                        <p className="text-center text-[#333] font-bold text-xs">{data.date}</p>
                                    </div> */}

                                </div>
                                <div className="mb-2 absolute  w-[80%] top-0 left-[20%] bg-primary-light py-2 rounded">
                                    <p className="text-center text-primary font-bold text-xs">{data?.title}</p>
                                    <p className="text-center text-[#333] font-bold text-xs">{data.date}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Section>
    )
}

export default Schedule