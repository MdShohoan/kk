import Title from "../common/Title/Title";
import newsCard1 from '../../assets/newsCard/newsCard1.png'
import newsCard2 from '../../assets/newsCard/newsCard2.png'
import Card from "./Card/Card";
import List from "./List/List";

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
    ]

    return (
        <section className="mb-12 md:mb-24">
            <div className="container mx-auto">
                <div className="mb-5 md:mb-10">
                    <Title text={'নির্বাচনের সর্বশেষ খবর'} underline="type1" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-4 md:mb-16">
                    <Card news={data[0]} />
                    <div className="hidden md:block">
                        <Card news={data[1]} />
                    </div>
                    <div className="block md:hidden">
                        <List info={data[1]} />
                    </div>
                    <div className='h-[250px] w-[300px] mx-auto bg-gray-200 mb-8 flex justify-center items-center font-extrabold text-[36px]'>
                        ads: 300*250
                    </div>
                </div>

                {/* ----News Card Start (visible in big screen)---- */}
                <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {
                        data?.slice(2).map((news, i) => (
                            <Card news={news} key={i} />
                        ))
                    }
                </div>
                {/* ----News Card End (visible in big screen)---- */}

                {/* ----News List Start (visible in mobile screen)---- */}
                <div className='flex md:hidden flex-col gap-4'>
                    {
                        data?.slice(3).map((info, i) => (
                            <List key={i} info={info} />
                        ))
                    }
                </div>
                {/* ----News List end (visible in mobile screen)---- */}
            </div>
        </section>
    )
}