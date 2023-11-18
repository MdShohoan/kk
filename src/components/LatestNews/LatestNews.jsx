import Title from "../common/Title/Title";
import newsCard1 from '../../assets/newsCard/newsCard1.png'
import newsCard2 from '../../assets/newsCard/newsCard2.png'
import Card from "./Card/Card";

export default function LatestNews() {
    const data = [
        { title: 'ধ্বংসের নীলনকশা বাস্তবায়ন করছে', image: newsCard1 },
        { title: 'ধ্বংসের নীলনকশা বাস্তবায়ন করছে', image: newsCard2 },
        { title: 'ধ্বংসের নীলনকশা বাস্তবায়ন করছে', image: newsCard1 },
        { title: 'ধ্বংসের নীলনকশা বাস্তবায়ন করছে', image: newsCard2 },
        { title: 'ধ্বংসের নীলনকশা বাস্তবায়ন করছে', image: newsCard1 },
        { title: 'ধ্বংসের নীলনকশা বাস্তবায়ন করছে', image: newsCard2 },
        { title: 'ধ্বংসের নীলনকশা বাস্তবায়ন করছে', image: newsCard1 },
        { title: 'ধ্বংসের নীলনকশা বাস্তবায়ন করছে', image: newsCard2 },
        { title: 'ধ্বংসের নীলনকশা বাস্তবায়ন করছে', image: newsCard1 },
    ]

    return (
        <section className="mb-24">
            <div className="container mx-auto">
                <Title text={'নির্বাচনের সর্বশেষ খবর'} underline="type1" />
                <div className="mb-5 md:mb-10" />
                <div className="grid grid-cols-3 gap-8 mb-16">
                    {
                        data?.slice(0, 2).map((news, i) => (
                            <Card news={news} key={i} />
                        ))
                    }
                    <div className='h-[250px] w-[300px] mx-auto bg-gray-200 mb-8 flex justify-center items-center font-extrabold text-[36px]'>
                        ads: 300*250
                    </div>
                </div>
                <div className='h-[90px] w-[970px] mx-auto bg-gray-200 mb-8 flex justify-center items-center font-extrabold text-[36px] mb-9'>
                    ADS 970*90
                </div>
                <div className="grid grid-cols-3 gap-8">
                    {
                        data?.slice(3).map((news, i) => (
                            <Card news={news} key={i} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}