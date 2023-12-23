import Title from "../common/Title/Title";
import Card from "./Card/Card";
import List from "./List/List";
import Section from "../common/Section/Section";
import { useEffect, useState } from "react";
import axios from "axios";

export default function LatestNews() {

    const [stories, setStories] = useState([])
    const url = 'https://bn-api.kalerkantho.com/api/election?page=1'
    // const url = 'https://bn-api.kalerkantho.com/api/gallery_cat/3?page=1'


    const fetchData = async () => {
        const res = await axios.get(url)
        setStories(res?.data?.data)

    }

    useEffect(() => {
        fetchData()
    }, [])

    console.log(stories)
    return (
        <Section>
            <div className="container mx-auto">
                <Title>
                    নির্বাচনের সর্বশেষ খবর
                </Title>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6 mb-6">
                    <Card story={stories[0]} />
                    {
                        stories?.slice(1, 3).map((story) => (
                            <>
                                <Card story={story} key={story?.n_id} className={'hidden md:block'} />
                                <List key={story?.n_id} story={story} className={'flex md:hidden'} />
                            </>
                        ))
                    }

                    <div className='h-[250px] w-[300px] mx-auto bg-gray-200 mb-8 flex justify-center items-center font-extrabold text-[36px]'>
                        ads: 300*250
                    </div>
                </div>

                {/* ----News Card Start (visible in big screen)---- */}
                <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {
                        stories?.slice(3, 11).map((story) => (
                            <Card story={story} key={story?.n_id} />
                        ))
                    }
                </div>
                {/* ----News Card End (visible in big screen)---- */}

                {/* ----News List Start (visible in mobile screen)---- */}
                <div className='flex md:hidden flex-col gap-4 '>
                    {
                        stories?.slice(3, 12).map((story) => (
                            <List key={story.n_id} story={story} />
                        ))
                    }
                </div>
                {/* ----News List end (visible in mobile screen)---- */}
            </div>
        </Section>
    )
}