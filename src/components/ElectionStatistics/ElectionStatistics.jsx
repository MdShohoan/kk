import React from 'react'
import { useState, useEffect } from 'react';
import styles from './ElectionStatistics.module.css';
import CountUp from 'react-countup';
export default function ElectionStatistics() {

const data = [
    {count: '১০,৪১,৯০,৪৮০', title: 'মোট ভোটার', image: 'https://election.prothomalo.com/web-theme/img/core-img/total-voter.png'},
    {count: '৫,২৫,৪৭,৩২৯', title: 'পুরুষ ভোটার', image: 'https://election.prothomalo.com/web-theme/img/core-img/male-voter.png'},
    {count: '৫,১৬,৪৩,১৫১', title: 'নারী ভোটার ', image: 'https://election.prothomalo.com/web-theme/img/core-img/female-voter.png'},
    {count: '৩০০', title: 'আসন সংখ্যা', image: 'https://election.prothomalo.com/web-theme/img/core-img/total-seat.png'},
    {count: '১,৮৪৮', title: 'মোট প্রার্থী', image: 'https://election.prothomalo.com/web-theme/img/core-img/total-candidate.png'},
    {count: '১,৭৭৯', title: 'পুরুষ প্রার্থী', image: 'https://election.prothomalo.com/web-theme/img/core-img/male-candidate.png'},
    {count: '৬৯', title: 'নারী প্রার্থী', image: 'https://election.prothomalo.com/web-theme/img/core-img/female-candidate.png'},
    {count: '৩৯', title: 'দল', image: '	https://election.prothomalo.com/web-theme/img/core-img/political-parties.png'},

]

const [count, setCount] = useState(0);

const toBanglaDigits = (number) => {
  const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return number.toString().split('').map(digit => banglaDigits[digit]).join('');
}

const toEnglishDigits = (banglaNumber) => {
  const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  const englishDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  return banglaNumber.toString().split('').map(digit => {
    const digitIndex = banglaDigits.indexOf(digit);
    return digitIndex !== -1 ? englishDigits[digitIndex] : digit;
  }).join('');
}

  return (
    <section className={styles.statisticsSection}>
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <div className={styles.headingContainer}>
                    <h3 className={styles.heading}>নির্বাচনের সংক্ষিপ্ত তথ্য</h3>
                </div>
                <div className={styles.dataContainer}>
                    {
                        data.map((singleData, i)=>(
                            <div key={i} className={styles.card}>
                                <img src={singleData?.image} alt={singleData?.title +'image'}/>
                                <p className={styles.data}>{singleData?.count}</p>
                                <h6 className={styles.title}>{singleData?.title}</h6>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
        <div>
        <CountUp end={100}/>
        </div>
    </section>
  )
}
