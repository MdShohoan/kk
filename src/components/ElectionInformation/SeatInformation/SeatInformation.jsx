import { useEffect, useState } from 'react'
import Title from '../../common/Title/Title'
import Gap from '../../common/Gap/Gap'
function SeatInformation() {

  const [selected, setSelected] = useState('All')
  const [seatList, setSeatList] = useState([])

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
  const filterSeatByDivision= () => {
    if (selected === 'All') {
      return seatList
    }
    return seatList.filter((seat) => seat?.division === selected)
  }




  const navigationOption = [
    {
      divisionName: 'All',
      text: 'সব আসন',
      to: 'all'
    },
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
    <div className='border border-gray-300'>
      <Title text='জেনে নিন আপনার আসন সম্পর্কে' underline={'type2'} />
      <div className='mb-5 md:mb-10'/>
      {/* Division navigator */}
      <div>
        <div className='grid grid-cols-3 px-4 my-4 [&>*:nth-child(1)]:rounded-tl [&>*:nth-child(7)]:rounded-bl [&>*:nth-child(3)]:rounded-tr [&>*:nth-child(9)]:rounded-br'>
          {
            navigationOption.map((division, i) => (
              <div
                onClick={() => setSelected(division.divisionName)}
                key={i}
                className={`text-center border border-l-[#8da2df] border-t-[#8da2df] ${(i + 1) % 3 === 0 ? 'border-r-[#8da2df]' : 'border-r-0'} ${(i + 1) > 6 ? 'border-b-[#8da2df]' : 'border-b-0'} cursor-pointer hover:bg-[#5f7fee] ${division?.divisionName === selected ? 'bg-[#5f7fee]' : 'bg-[#fff]'}`}
              >
                <span
                  className={`block text-base font-normal p-[5px] hover:text-white ${selected === division?.divisionName ? 'text-white' : 'text-[#5f7fee]'}`}>{division?.text}
                </span>
              </div>
            ))
          }
        </div>
      </div>
      {/* Seat List */}
      <div className='bg-[#f7f7f7] p-4'>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-6 h-[580px] overflow-auto overflow-x-hidden'>
          {
            filterSeatByDivision().map((seat) => (
              <div key={seat?.to} className='p-3 pt-4 bg-white text-center'>
                <p className='text-[#5a5a5a] text-sm font-normal leading-normal'>আসন নং: {seat?.number?.inBangla}</p>
                <h6 className='text-lg text-[#0b47a1] mb-1 font-bold'>{seat?.name}</h6>
                <p className='text-[#5a5a5a] text-sm font-normal leading-normal'>{seat?.details}</p>
              </div>
            ))
          }
        </div>
      </div>
      <Gap />
    </div>
  )
}

export default SeatInformation