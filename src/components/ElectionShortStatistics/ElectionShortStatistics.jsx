import Card from '../common/CardCountUP/CardCountUP';
import Title from '../common/Title/Title';

import total_voter from '../../assets/election/total-voter.png'
import total_candidate from '../../assets/election/total-candidate.png'
import male_voter from '../../assets/election/male-voter.png'
import female_voter from '../../assets/election/female-voter.png'
import common_voter from '../../assets/election/common-gender.png'
import male_candidate from '../../assets/election/male-candidate.png'
import common_candidate from '../../assets/election/common-candidate.png'
import female_candidate from '../../assets/election/female-candidate.png'
import total_seat from '../../assets/election/total-seat.png'
import political_parties from '../../assets/election/political-parties.png'
import Section from '../common/Section/Section';

export default function ElectionShortStatistics() {
  const data = [
    { count: '১০৪১৯০৪৮০', title: 'মোট ভোটার', image: total_voter },
    { count: '৫২৫৪৭৩২৯', title: 'পুরুষ ভোটার', image: male_voter },
    { count: '৫১৬৪৩১৫১', title: 'নারী ভোটার ', image: female_voter },
    { count: '৫১৬৪৩১৫১', title: 'হিজড়া ভোটার', image: common_voter },
    { count: '৩০০', title: 'আসন সংখ্যা', image: total_seat },
    { count: '১৮৪৮', title: 'মোট প্রার্থী', image: total_candidate },
    { count: '১৭৭৯', title: 'পুরুষ প্রার্থী', image: male_candidate },
    { count: '৬৯', title: 'নারী প্রার্থী', image: female_candidate },
    { count: '৬৯', title: 'হিজড়া প্রার্থী', image: common_candidate},
    { count: '৩৯', title: 'দল', image: political_parties },

  ]

  return (
    <Section>
      <div className='container mx-auto'>
        <div>
          <Title>
            নির্বাচনের সংক্ষিপ্ত তথ্য
          </Title>
          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-7'>
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