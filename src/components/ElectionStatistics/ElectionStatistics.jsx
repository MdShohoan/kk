import CountUp from '../CountUp/CountUp';
import styles from './ElectionStatistics.module.css';
export default function ElectionStatistics() {

  const data = [
    { count: '১০৪১৯০৪৮০', title: 'মোট ভোটার', image: 'https://election.prothomalo.com/web-theme/img/core-img/total-voter.png' },
    { count: '৫২৫৪৭৩২৯', title: 'পুরুষ ভোটার', image: 'https://election.prothomalo.com/web-theme/img/core-img/male-voter.png' },
    { count: '৫১৬৪৩১৫১', title: 'নারী ভোটার ', image: 'https://election.prothomalo.com/web-theme/img/core-img/female-voter.png' },
    { count: '৩০০', title: 'আসন সংখ্যা', image: 'https://election.prothomalo.com/web-theme/img/core-img/total-seat.png' },
    { count: '১৮৪৮', title: 'মোট প্রার্থী', image: 'https://election.prothomalo.com/web-theme/img/core-img/total-candidate.png' },
    { count: '১৭৭৯', title: 'পুরুষ প্রার্থী', image: 'https://election.prothomalo.com/web-theme/img/core-img/male-candidate.png' },
    { count: '৬৯', title: 'নারী প্রার্থী', image: 'https://election.prothomalo.com/web-theme/img/core-img/female-candidate.png' },
    { count: '৩৯', title: 'দল', image: '	https://election.prothomalo.com/web-theme/img/core-img/political-parties.png' },

  ]

  return (
    <section className={styles.statisticsSection}>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div className={styles.headingContainer}>
            <h3 className={styles.heading}>নির্বাচনের সংক্ষিপ্ত তথ্য</h3>
          </div>
          <div className={styles.dataContainer}>
            {
              data.map((singleData, i) => (
                <div key={i} className={styles.card}>
                  <img src={singleData?.image} alt={singleData?.title + 'image'} />
                  <CountUp end={singleData?.count}/>
                  <h6 className={styles.title}>{singleData?.title}</h6>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}
