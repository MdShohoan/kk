// import SeatInformation from './SeatInformation/SeatInformation'
// import MapInformation from './MapInformation/MapInformation'

import { useEffect, useState} from "react";
import Title from "../common/Title/Title"
import { RiArrowDropDownLine } from "react-icons/ri";

// import { MdOutlineArrowDropDown } from "react-icons/md";
// import Card from "../common/CardCountUP/CardCountUP";

// import candidat1 from '../../assets/candidatePhoto/asaduzzaman.webp'
// import total_voter from '../../assets/election/total-voter.png'
// import total_candidate from '../../assets/election/total-seat.png'
// import male_voter from '../../assets/election/male-voter.png'
// import female_voter from '../../assets/election/female-voter.png'

function ElectionInformation() {
  // const dorpdownRef = useRef()

  // const [selectedSeat, setSelectedSeat] = useState('')
  // const [clicked, setClicked] = useState('')
  const [seatList, setSeatList] = useState([])


  // useEffect(() => {
  //   let handler = (e) => {
  //     if (!dorpdownRef.current.contains(e.target)) {
  //       // setOpen(false)
  //       setClicked('')
  //     }
  //   };
  //   document.addEventListener("mousedown", handler);
  //   return () => {
  //     document.removeEventListener("mousedown", handler);
  //   }
  // });

  // const handleDivisionClick = (divisionName) => {
  //   if (clicked) {
  //     if (clicked === divisionName) {
  //       setClicked('')
  //     }
  //     else {
  //       setClicked(divisionName)
  //     }
  //   }
  //   else {
  //     setClicked(divisionName)
  //   }
  // }

  // const handleItemClick = (seat) => {
  //   setClicked('')
  //   setSelectedSeat(seat)
  // }

  //-----------Make mock data-----------
  const makeMockData = () => {
    const list = []
    for (let i = 1; i < 17; i++) {
      list.push({ number: { inEnglish: '174', inBangla: '১৭৪' }, name: 'ঢাকা-১', details: 'দোহার এবং নবাবগঞ্জ উপজেলা', division: 'Dhaka' })
    }
    for (let i = 1; i < 17; i++) {
      list.push({ number: { inEnglish: '278', inBangla: '২৭৮' }, name: 'চট্টগ্রাম-১', details: 'মিরশরাই উপজেলা', division: 'Chittagong' })
    }
    return list
  }
  const list = makeMockData()

  useEffect(() => {
    setSeatList(list)
  }, [])

  // --------Filter data-------------

  const filterSeatByDivision = (filterBy) => {
    return seatList.filter((seat) => seat?.division === filterBy)
  }

  const navigationOption = [
    {
      divisionName: 'Dhaka',
      text: 'ঢাকা',
      to: 'dhaka'
    },
    {
      divisionName: 'Chittagong',
      text: 'চট্টগ্রাম',
      to: 'chittagong'
    },
    {
      divisionName: 'Sylhet',
      text: 'সিলেট',
      to: 'sylhet'
    },
    {
      divisionName: 'Barisal',
      text: 'বরিশাল',
      to: 'barisal'
    },
    {
      divisionName: 'Rajshahi',
      text: 'রাজশাহী',
      to: 'rajshahi'
    },
    {
      divisionName: 'Khulna',
      text: 'খুলনা',
      to: 'Khulna'
    },
    {
      divisionName: 'Rangpur',
      text: 'রংপুর',
      to: 'Rangpur'
    },
    {
      divisionName: 'Mymensingh',
      text: 'ময়মনসিংহ',
      to: 'mymensingh'
    },
  ]

  // const candidates = [
  //   {
  //     name: 'আসাদুজ্জামান নূর',
  //     party: 'আওয়ামী লীগ',
  //     symbol: 'নৌকা',
  //     photo: candidat1,
  //   },
  //   {
  //     name: 'আসাদুজ্জামান নূর',
  //     party: 'আওয়ামী লীগ',
  //     symbol: 'নৌকা',
  //     photo: candidat1,
  //   },
  //   {
  //     name: 'আসাদুজ্জামান নূর',
  //     party: 'আওয়ামী লীগ',
  //     symbol: 'নৌকা',
  //     photo: candidat1,
  //   },
  //   {
  //     name: 'আসাদুজ্জামান নূর',
  //     party: 'আওয়ামী লীগ',
  //     symbol: 'নৌকা',
  //     photo: candidat1,
  //   },
  // ]

  // const data = [
  //   { count: '১০৪১৯০৪৮০', title: 'মোট ভোটার', image: total_voter },
  //   { count: '৫২৫৪৭৩২৯', title: 'পুরুষ ভোটার', image: male_voter },
  //   { count: '৫১৬৪৩১৫১', title: 'নারী ভোটার ', image: female_voter },
  //   { count: '১৮৪৮', title: 'মোট প্রার্থী', image: total_candidate },
  // ]

  return (
    <section className='mb-12 md:mb-24'>
      <div className='container m-auto'>
        <div className='mb-5 md:mb-10'>
          <Title text='জেনে নিন আপনার আসন সম্পর্কে' underline={'type1'} />
          {/* <h3 className="text-center mt-2 text-[#666] text-base">নির্বাচিত: {selectedSeat || 'নীলফামারী-২'}</h3> */}
        </div>

        {/* -------Division navigator start--------- */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {
            navigationOption?.map((option, i) => (
              <div key={i} className="relative">
                <select
                  className="w-full border rounded-lg border-[#0000003D] bg-primary-light p-2 md:p-4 text-xl md:text-2xl font-normal appearance-none"
                >
                  <option value="select">{option?.text}</option>
                  {
                    filterSeatByDivision(option.divisionName)?.map((option, i)=>(
                      <option key={i} value={option?.name?.inEnglish}>{option?.name}</option>
                    ))
                  }
                </select>
                <span className="absolute right-0 top-1/2 -translate-y-1/2">
                  <RiArrowDropDownLine size={28} />
                </span>
              </div>
            ))
          }
        </div>


        {/* <div className='grid grid-cols-8 mb-12 [&>*:nth-child(8)]:border [&>*:nth-child(8)]:border-r-[#8da2df] [&>*:nth-child(8)]:border-l-0 [&>*:nth-child(8)]:border-t-0 [&>*:nth-child(8)]:border-b-0'>
          {
            navigationOption.map((division, i) => (
              <div key={i}>
                <div
                  className={`text-center border border-[#8da2df] border-r-0 cursor-pointer hover:bg-[#5f7fee]`}
                >
                  <div
                    onClick={() => handleDivisionClick(division.divisionName)}
                    className={`text-base font-normal p-[5px] hover:text-white flex justify-center items-start text-[#5f7fee]`}
                  >
                    <span>{division?.text}</span>
                    <MdOutlineArrowDropDown size={22} style={{ marginTop: '-2px' }} />
                  </div>

                </div>
                
                <ul className={`min-w-[200px] h-52 overflow-auto absolute z-10 border bg-white border-[#8da2df] text-[#5f7fee] mt-1 rounded ${clicked === division.divisionName ? 'block' : 'hidden'}`}>
                  {
                    filterSeatByDivision().map((seat, i) => (
                      <li
                        key={i}
                        onClick={() => handleItemClick(seat?.name)}
                        className="cursor-pointer hover:bg-[#5f7fee] hover:text-white py-2 px-4 block whitespace-no-wrap"
                      >
                        {seat?.name}
                      </li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
        </div> */}
        {/* ---------Division navigator end--------- */}


        {/* ------------Seat information counter start---------- */}
        {/* <div className='grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-7 mb-12'>
          {
            data.map((singleData, i) => (
              <Card key={i} data={singleData} />
            ))
          }
        </div> */}
        {/* -----------Seat information counter end------- */}


        {/* Candidates information start */}
        {/* <div className="mb-8">
          <Title text={'প্রার্থী'} underline="type2" />
        </div> */}


        {/* <div className="grid grid-cols-4 gap-8">
          {
            candidates.map((candidate, i) => (
              <div key={i} className="text-center cursor-pointer">
                <img src={candidate?.photo} className="bg-[#b9b9b969] mx-auto block border-4 border-[#fff] rounded-full shadow-[0_0_5px_rgba(0,0,0,0.6)]" />
                <div className="my-5">
                  <h2 className="text-lg font-bold text-[#547cf5] mb-2">{candidate?.name}</h2>
                  <span className="block text-sm mb-[2px] font-normal text-[#000000cc]"><span className="font-semibold">দল:</span> {candidate?.party}</span>
                  <span className="block text-sm font-normal text-[#000000cc]"><span className="font-semibold">প্রতীক:</span> {candidate?.symbol}</span>
                </div>
              </div>
            ))
          }
        </div> */}

        {/* Candidates information start */}

        {/* Copy of Prothom-alo */}
        {/* <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <MapInformation />
          <SeatInformation />
        </div> */}
      </div>
    </section>
  )
}

export default ElectionInformation