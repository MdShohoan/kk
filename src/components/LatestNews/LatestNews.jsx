import Title from "../common/Title/Title";
import Card from "./Card/Card";
import List from "./List/List";
import Section from "../common/Section/Section";
import { useEffect, useState } from "react";
import axios from "axios";
import cn from "../../lib/cn";

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
                {/* ----News Card Start (visible in big screen)---- */}
                <div className="hidden lg:grid grid-cols-4 gap-y-4">
                    {
                        stories?.slice(0, 12).map((story, i) => (
                            <div key={story?.n_id} className='border-t pt-4'>
                                <Card story={story} className={cn(`font-bold border-r px-5 pb-6 h-full`, (i + 1) % 4 === 0 && 'border-r-0 pr-0', (i + 1) === 1 && 'pl-0', (i + 1) === 5 && 'pl-0')} />
                            </div>
                        ))
                    }
                </div>
                {/* ----News Card End (visible in big screen)---- */}

                {/* ----News List Start (visible in mobile screen)---- */}
                <div className='flex md:hidden flex-col gap-4 '>
                    <Card story={stories[0]} className={'mb-1 pb-1 sm:pb-0 sm:border-b-0 font-bold leading-[22px] text-2xl md:text-lg'} />
                    {
                        stories?.slice(1, 12).map((story) => (
                            <List key={story.n_id} story={story} />
                        ))
                    }
                </div>
                {/* ----News List end (visible in mobile screen)---- */}
            </div>
        </Section>
    )
}