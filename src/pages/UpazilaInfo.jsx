import Card from "../components/common/CardCountUP/CardCountUP"
import Layout from "../components/common/Layout/Layout"
import Section from "../components/common/Section/Section"

import total_voter from '../assets/election/total-voter.png'
import total_candidate from '../assets/election/total-candidate.png'
import male_voter from '../assets/election/male-voter.png'
import female_voter from '../assets/election/female-voter.png'
import common_gender from '../assets/election/common-gender.png'
import Title from "../components/common/Title/Title"

function UpazilaInfo() {

  // const seatData = [
  //   { count: currentSeatInfo?.totalVoter || '০', title: 'মোট ভোটার', image: total_voter },
  //   { count: currentSeatInfo?.maleVoter || '০', title: 'পুরুষ ভোটার', image: male_voter },
  //   { count: currentSeatInfo?.femaleVoter || '০', title: 'নারী ভোটার ', image: female_voter },
  //   { count: currentSeatInfo?.hijraVoter || '০', title: 'তৃতীয় লিঙ্গ ভোটার ', image: common_gender },
  //   { count: currentSeatInfo?.totalCandidate || '০', title: 'মোট প্রার্থী', image: total_candidate },
  // ]
  const seatData = [
    { count: '০', title: 'মোট ভোটার', image: total_voter },
    { count: '০', title: 'পুরুষ ভোটার', image: male_voter },
    { count: '০', title: 'নারী ভোটার ', image: female_voter },
    { count: '০', title: 'তৃতীয় লিঙ্গ ভোটার ', image: common_gender },
    { count: '০', title: 'মোট প্রার্থী', image: total_candidate },
  ]

  const currentCandidates = [
    {
      "seatName": 1,
      "symbol": "নৌকা ",
      "partyName": "আওয়ামী লীগ",
      "candidateName": "নাঈমুজ্জামান ভূইয়া ",
      "candidateImage": "seat-1/NAIMUJJAMAN_BHUIYAN.jpg"
    },
    {
      "seatName": 1,
      "symbol": "ট্রাক",
      "partyName": "স্বতন্ত্র (আওয়ামী লীগ)",
      "candidateName": "আনোয়ার সাদাত সম্রাট",
      "candidateImage": "seat-1/ANOWAR_SADAT_SOMRAT.jpg"
    },
    {
      "seatName": 1,
      "symbol": "একতারা",
      "partyName": "বাংলাদেশ সুপ্রিম পার্টি (বিএসপি)",
      "candidateName": "আব্দুল ওয়াদুদ বাদশা",
      "candidateImage": "seat-1/ABDUL_WADUD_BADSHA.jpg"
    },
    {
      "seatName": 1,
      "symbol": "আম",
      "partyName": "ন্যাশনাল পিপলস পার্টি",
      "candidateName": "মশিউর রহমান বাবুল ",
      "candidateImage": "seat-1/MOSIUR_RAHMAN.jpg"
    },
  ]

  let BASE_URL = 'https://election.kalerkantho.com'

  return (
    <Layout>
      <Section>
        <div className="container">
          <div className='mb-4'>
            <span className='inline-block rounded-lg bg-primary-light text-2xl py-[6px] px-4 mb-2'>
              আদাবর উপজেলা
            </span>
            <div className='bg-gray1 h-[2px]' />
          </div>
          {/* ------------Upazila information counter start---------- */}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-8'>
            {
              seatData.map((singleData) => (
                <Card key={(singleData?.count + singleData?.title)} type='type1' data={singleData} />
              ))
            }
          </div>
          {/* -----------Upazila information counter end------- */}
        </div>
      </Section>

      <Section>
        <div className='container'>
          <Title>
            প্রার্থী
          </Title>
          {/* -----------Candidates information start-------- */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8">
            {
              currentCandidates?.map((candidate, i) => (
                <div key={i} className="text-center cursor-pointer bg-primary-light py-5 rounded-xl">
                  <img
                    src={`${BASE_URL}/candidates/${candidate?.candidateImage}`}
                    alt={candidate.candidateName + ' এর ছবি'}
                    className="bg-primary-light w-[100px] md:w-[130px] mx-auto block border-4 border-[#fff] rounded-full shadow-[0_0_5px_rgba(0,0,0,0.6)]"
                  />
                  <div className="mt-5">
                    <h2 className="text-lg font-bold text-primary mb-2">{candidate?.candidateName}</h2>
                    <span className="block text-sm mb-[2px] font-normal text-[#000000cc]"><span className="font-semibold">দল:</span> {candidate?.partyName}</span>
                    <span className="block text-sm font-normal text-[#000000cc]"><span className="font-semibold">প্রতীক:</span> {candidate?.symbol}</span>
                  </div>
                </div>
              ))
            }
          </div>
          {/* ------------Candidates information end-------------- */}
        </div>
      </Section>
    </Layout>
  )
}

export default UpazilaInfo