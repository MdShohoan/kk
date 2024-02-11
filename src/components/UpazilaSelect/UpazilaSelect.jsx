import cn from "../../lib/cn";
import { colors } from "../../theme";
import Section from "../common/Section/Section";
import Title from "../common/Title/Title";
import Select from "react-tailwindcss-select";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";


function UpazilaSelect() {
    const [selectedDivision, setSelectedDivision] = useState('')
    const handleChange = () => {

    }
    const options = [
        { value: "dhaka", label: "ঢাকা" },
        { value: "chattogram", label: "চট্টগ্রাম" },
        { value: "khulna", label: "খুলনা" },
        { value: "barisal", label: "বরিশাল" },
        { value: "sylhet", label: "সিলেট" },
        { value: "rajshahi", label: "রাজশাহী" },
        { value: "rangpur", label: "রংপুর" },
        { value: "mymensingh", label: "ময়মনসিংহ" },
    ];

    const districtsOption = [
        {
            division: 'dhaka',
            districts: [
                { value: "dhaka", label: "ঢাকা" }
            ]
        },
        {
            division: 'chattogram',
            districts: [
                { value: "chattogram", label: "চট্টগ্রাম" },
            ]
        },
        { value: "khulna", label: "খুলনা" },
        { value: "barisal", label: "বরিশাল" },
        { value: "sylhet", label: "সিলেট" },
        { value: "rajshahi", label: "রাজশাহী" },
        { value: "rangpur", label: "রংপুর" },
        { value: "mymensingh", label: "ময়মনসিংহ" },
    ];

    const getDistrictOption = ()=>{
        const found = districtsOption.find((element)=>element?.division === selectedDivision)
        return found?.districts
    }

    console.log(getDistrictOption(), '======district option')

    const divisions = [
        { value: "dhaka", label: "ঢাকা" },
        { value: "chattogram", label: "চট্টগ্রাম" },
        { value: "khulna", label: "খুলনা" },
        { value: "barisal", label: "বরিশাল" },
        { value: "sylhet", label: "সিলেট" },
        { value: "rajshahi", label: "রাজশাহী" },
        { value: "rangpur", label: "রংপুর" },
        { value: "mymensingh", label: "ময়মনসিংহ" },
    ];
    return (
        <Section>
            <div className="container mx-auto">
                <Title>
                    আপনার উপজেলার তথ্য খুজুন
                </Title>
                <div className="grid grid-cols-4 gap-8">
                    <div>
                        <Select
                            value={selectedDivision}
                            onChange={(curr) => setSelectedDivision(curr)}
                            options={divisions}
                            placeholder='বিভাগ নির্বাচন করুন'
                            primaryColor={"violet"}

                        />
                    </div>
                    <div>
                        <Select
                            // value={animal}
                            // onChange={handleChange}
                            options={[]}
                            placeholder='জেলা নির্বাচন করুন'
                            primaryColor={"violet"}
                        />
                    </div>
                    <div>
                        <Select
                            // value={animal}
                            onChange={handleChange}
                            options={options}
                            placeholder='উপজেলা নির্বাচন করুন'
                            primaryColor={"violet"}
                        />
                    </div>
                    <div>
                        <button
                            // onClick={() => navigate('/videos')}
                            className={
                                cn(
                                    `w-full inline-flex items-center gap-1 border border-primary text-primary-light py-1 px-4 rounded cursor-pointer bg-primary transit text-base`,

                                )
                            }>
                            <div className="w-full flex justify-center items-center gap-2">
                                <span className="inline-block">খুজুন</span>
                                <FiSearch size={20} color={colors?.primary?.light} />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default UpazilaSelect