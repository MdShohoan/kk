// import SeatInformation from './SeatInformation/SeatInformation'
// import MapInformation from './MapInformation/MapInformation'

import { useEffect, useState } from "react";
import Title from "../common/Title/Title"
import { MdOutlineArrowDropDown } from "react-icons/md";


function ElectionInformation() {
  // const dorpdownRef = useRef()

  const [selectedSeat, setSelectedSeat] = useState('')
  const [clicked, setClicked] = useState('')
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

  const handleDivisionClick = (divisionName) => {
    if (clicked) {
      if (clicked === divisionName) {
        setClicked('')
      }
      else {
        setClicked(divisionName)
      }
    }
    else {
      setClicked(divisionName)
    }
  }

  const handleItemClick = (seat)=>{
    setClicked('')
    setSelectedSeat(seat)
  }

  //Make mock data
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

  //Filter data
  const filterSeatByDivision = () => {
    return seatList.filter((seat) => seat?.division === clicked)
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
  return (
    <section className='mb-28'>
      <div className='container m-auto'>
        <Title text='জেনে নিন আপনার আসন সম্পর্কে' underline={'type2'} />
        <div className='mb-5 md:mb-10' />
        {/* Division navigator */}
        <div>
          <div className='grid grid-cols-8 px-4 my-4 [&>*:nth-child(8)]:border [&>*:nth-child(8)]:border-r-[#8da2df] [&>*:nth-child(8)]:border-l-0 [&>*:nth-child(8)]:border-t-0 [&>*:nth-child(8)]:border-b-0'>
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
                  {/* Dropdown */}
                  <ul className={`min-w-[200px] h-52 overflow-auto absolute z-10 border border-[#8da2df] text-[#5f7fee] mt-1 rounded ${clicked === division.divisionName ? 'block' : 'hidden'}`}>
                    {
                      filterSeatByDivision().map((seat, i) => (
                        <li
                          key={i}
                          onClick={()=>handleItemClick(seat?.name)}
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
          </div>
        </div>

        <div>
          <h1 className="text-center">{selectedSeat}</h1>
        </div>

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