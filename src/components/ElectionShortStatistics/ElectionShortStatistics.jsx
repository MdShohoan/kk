import Card from './Card/Card';
import Gap from '../common/Gap/Gap';
import styles from './ElectionShortStatistics.module.css';
import male_candidate from '../../assets/election/male-candidate.png'
import female_candidate from '../../assets/election/female-candidate.png'
import total_voter from '../../assets/election/total-voter.png'
import total_seat from '../../assets/election/total-seat.png'
import total_candidate from '../../assets/election/total-seat.png'
import political_parties from '../../assets/election/political-parties.png'
import male_voter from '../../assets/election/male-voter.png'
import female_voter from '../../assets/election/female-voter.png'

export default function ElectionShortStatistics() {
  const data = [
    { count: '১০৪১৯০৪৮০', title: 'মোট ভোটার', image: total_voter },
    { count: '৫২৫৪৭৩২৯', title: 'পুরুষ ভোটার', image:  male_voter},
    { count: '৫১৬৪৩১৫১', title: 'নারী ভোটার ', image:  female_voter},
    { count: '৩০০', title: 'আসন সংখ্যা', image:  total_seat},
    { count: '১৮৪৮', title: 'মোট প্রার্থী', image: total_candidate},
    { count: '১৭৭৯', title: 'পুরুষ প্রার্থী', image: male_candidate },
    { count: '৬৯', title: 'নারী প্রার্থী', image: female_candidate },
    { count: '৩৯', title: 'দল', image: political_parties },

  ]

  return (
    <>
      <Gap gap={'45vh'} />
      <section className={styles.statisticsSection}>
        <div className={styles.container}>
          <div className={styles.innerContainer}>
            <div className={styles.headingContainer}>
              <h3 className={styles.heading}>নির্বাচনের সংক্ষিপ্ত তথ্য</h3>
            </div>
            <div className={styles.dataContainer}>
              {
                data.map((singleData, i) => (
                  <Card key={i} data={singleData} />
                ))
              }
            </div>
          </div>
        </div>
      </section>
      <Gap />
    </>
  )
}
