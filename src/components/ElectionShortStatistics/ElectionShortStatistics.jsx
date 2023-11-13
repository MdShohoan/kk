import Card from '../common/CardCountUP/CardCountUP';
import Title from '../common/Title/Title';

import total_voter from '../../assets/election/total-voter.png'
import total_candidate from '../../assets/election/total-seat.png'
import male_voter from '../../assets/election/male-voter.png'
import female_voter from '../../assets/election/female-voter.png'
import male_candidate from '../../assets/election/male-candidate.png'
import female_candidate from '../../assets/election/female-candidate.png'
import total_seat from '../../assets/election/total-seat.png'
import political_parties from '../../assets/election/political-parties.png'

export default function ElectionShortStatistics() {
  const data = [
    { count: '১০৪১৯০৪৮০', title: 'মোট ভোটার', image: total_voter },
    { count: '৫২৫৪৭৩২৯', title: 'পুরুষ ভোটার', image: male_voter },
    { count: '৫১৬৪৩১৫১', title: 'নারী ভোটার ', image: female_voter },
    { count: '৩০০', title: 'আসন সংখ্যা', image: total_seat },
    { count: '১৮৪৮', title: 'মোট প্রার্থী', image: total_candidate },
    { count: '১৭৭৯', title: 'পুরুষ প্রার্থী', image: male_candidate },
    { count: '৬৯', title: 'নারী প্রার্থী', image: female_candidate },
    { count: '৩৯', title: 'দল', image: political_parties },

  ]

  return (
    <section className='bg-white mb-28'>
      <div className='container mx-auto'>
        <div>
          <div>
            <Title text={'নির্বাচনের সংক্ষিপ্ত তথ্য'} underline='type1' />
            <div className='mb-5 md:mb-10'/>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-7'>
            {
              data.map((singleData, i) => (
                <Card key={i} data={singleData} />
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}