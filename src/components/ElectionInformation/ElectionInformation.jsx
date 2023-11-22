// import SeatInformation from './SeatInformation/SeatInformation'
// import MapInformation from './MapInformation/MapInformation'

import DivisionNavigator from "../common/DivisionNavigator/DivisionNavigator"

// import { MdOutlineArrowDropDown } from "react-icons/md";
// import Card from "../common/CardCountUP/CardCountUP";

function ElectionInformation() {
  // const dorpdownRef = useRef()

  // const [selectedSeat, setSelectedSeat] = useState('')
  // const [clicked, setClicked] = useState('')



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
        
        {/* -------Division navigator start--------- */}
        <DivisionNavigator/>


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

        {/* Candidates information end */}

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