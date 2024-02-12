import cn from "../../lib/cn";
import { colors } from "../../theme";
import Section from "../common/Section/Section";
import Title from "../common/Title/Title";
import Select from "react-tailwindcss-select";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import { useNavigate } from "react-router";


function UpazilaSelect() {
    const navigate = useNavigate()
    const [selectedDivision, setSelectedDivision] = useState(null)
    const [selectedDistrict, setSelectedDistrict] = useState(null)
    const [selectedUpazila, setSelectedUpazila] = useState(null)


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

    const upazilaOption = [
        {
            district: 'dhaka',
            upazila: [
                { value: "adabor", label: "আদাবর" }
            ]
        },
        {
            district: 'chattogram',
            upazila: [
                { value: "anowara", label: "আনোয়ারা" }
            ]
        },
    ]

    //Filter district according to the division selection
    const getDistrictOption = () => {
        const found = districtsOption.find((element) => element?.division === selectedDivision?.value)
        return found?.districts
    }

    //Filter upazila according to the district selection
    const getUpazilaOption = () => {
        const found = upazilaOption.find((element) => element?.district === selectedDistrict?.value)
        return found?.upazila
    }

    //Handle search
    const handleSearch = () => {
        if(!selectedUpazila){
            return
        }
        navigate(`/upazila-election/upazila/${selectedUpazila?.value}`)
    }


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
                <div className="grid md:grid-cols-4 gap-8 md:border md:rounded md:p-10">
                    <div>
                        <Select
                            value={selectedDivision}
                            onChange={(curr) => {
                                setSelectedDivision(curr)
                                setSelectedDistrict(null)
                                setSelectedUpazila(null)
                            }}
                            options={divisions}
                            placeholder='বিভাগ নির্বাচন করুন'
                            primaryColor={"violet"}

                        />
                    </div>
                    <div>
                        <Select
                            value={selectedDistrict}
                            onChange={(curr) => {
                                setSelectedDistrict(curr)
                                setSelectedUpazila(null)
                            }}
                            options={getDistrictOption() || []}
                            placeholder='জেলা নির্বাচন করুন'
                            primaryColor={"violet"}
                            noOptionsMessage='দয়াকরে আগে বিভাগ নির্বাচন করুন'
                        />
                    </div>
                    <div>
                        <Select
                            value={selectedUpazila}
                            onChange={(curr) => setSelectedUpazila(curr)}
                            options={getUpazilaOption() || []}
                            placeholder='উপজেলা নির্বাচন করুন'
                            primaryColor={"violet"}
                            noOptionsMessage='দয়াকরে আগে জেলা নির্বাচন করুন'
                        />
                    </div>
                    <div>
                        <button
                            onClick={handleSearch}
                            className={
                                cn(
                                    `w-full inline-flex items-center gap-1 border border-primary text-primary-light py-1 px-4 rounded cursor-pointer bg-primary transit text-base`,
                                    !selectedUpazila && 'cursor-none'

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