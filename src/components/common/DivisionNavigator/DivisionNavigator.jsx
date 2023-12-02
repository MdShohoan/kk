import { useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import Title from "../../common/Title/Title"
import { useNavigate } from "react-router-dom";

function DivisionNavigator() {
    const [seatList, setSeatList] = useState([])
    const navigate = useNavigate()

    const handleDivisionChange = (e) => {
        console.log(e.target.value)
        navigate('/seat/123')
    }

    // --------Filter data-------------
    const filterSeatByDivision = (filterBy) => {
        return seatList.filter((seat) => seat?.division === filterBy)
    }

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
        <>
            <div className='mb-5 md:mb-10'>
                <Title text='জেনে নিন আপনার আসন সম্পর্কে' underline={'type1'} />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                {
                    navigationOption?.map((option, i) => (
                        <div key={i} className="relative">
                            <select
                                onChange={handleDivisionChange}
                                className="w-full border rounded-lg border-[#0000003D] bg-primary-light p-2 md:p-3 text-base font-normal appearance-none cursor-pointer"
                            >
                                <option className="cursor-pointer" value="select">{option?.text}</option>
                                {
                                    filterSeatByDivision(option.divisionName)?.map((option, i) => (
                                        <option key={i} value={option?.name?.inEnglish}>{option?.name}</option>
                                    ))
                                }
                            </select>
                            <span className="absolute right-0 top-1/2 -translate-y-1/2">
                                <RiArrowDropDownLine size={28} style={{cursor: "pointer"}} />
                            </span>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default DivisionNavigator