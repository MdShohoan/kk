import Card from '../common/CardCountUP/CardCountUP';
import Title from '../common/Title/Title';

import total_voter from '../../assets/election/total-voter.png'
import total_candidate from '../../assets/election/total-candidate.png'
import male_voter from '../../assets/election/male-voter.png'
import female_voter from '../../assets/election/female-voter.png'
import common_voter from '../../assets/election/common-gender.png'
import total_seat from '../../assets/election/total-seat.png'
import political_parties from '../../assets/election/political-parties.png'
import Section from '../common/Section/Section';

export default function ElectionShortStatistics() {
  const data = [
    { count: '১১৯৬৯১৬৩৩', title: 'মোট ভোটার', image: total_voter },
    { count: '৬০৭৭১৫৭৯', title: 'পুরুষ ভোটার', image: male_voter },
    { count: '৫৮৯১৯২০২', title: 'নারী ভোটার ', image: female_voter },
    { count: '৮৫২', title: 'হিজড়া ভোটার', image: common_voter },
    { count: '১৯৭০', title: 'মোট প্রার্থী', image: total_candidate },
    { count: '৪৩৬', title: 'স্বতন্ত্র প্রার্থী', image: total_candidate },
    { count: '২৮', title: 'দল', image: political_parties },
    { count: '৩০০', title: 'আসনসংখ্যা', image: total_seat },

  ]

  return (
    <Section>
      <div className='container mx-auto'>
        <div>
          <Title>
            নির্বাচনের সংক্ষিপ্ত তথ্য
          </Title>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-7'>
            {
              data.map((singleData, i) => (
                <Card key={i} data={singleData} />
              ))
            }
          </div>
        </div>
      </div>
    </Section>
  )
}