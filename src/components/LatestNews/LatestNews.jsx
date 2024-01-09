import Title from "../common/Title/Title";
import Card from "./Card/Card";
import List from "./List/List";
import Spinner from '../common/Spinner/Spinner'
import Section from "../common/Section/Section";
import { useEffect, useState } from "react";
import axios from "axios";
import cn from "../../lib/cn";
import { TfiMore } from "react-icons/tfi";
import { colors } from "../../theme";
import { useNavigate } from "react-router-dom";

export default function LatestNews() {
    const navigate = useNavigate()
    const [stories, setStories] = useState([])
    const [loading, setLoading] = useState(false)

    const url = 'https://bn-api.kalerkantho.com/api/election?page=1'



    const fetchData = async () => {
        setLoading(true)
        try {
            const res = await axios.get(url)
            setStories(res?.data?.data)
        } catch (error) {
            console.log(error)
        }
        finally {
            setLoading(false)
        }

    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <Section>
            <div className="container mx-auto">
                <Title>
                    নির্বাচনের সর্বশেষ খবর
                </Title>
                {
                    loading ? (<Spinner className={'h-[300px]'} />) : (
                        <>
                            <div className=" mb-6 md:mb-9">
                                {/* ----News Card Start (visible in big screen)---- */}
                                <div className="hidden md:grid grid-cols-4 gap-y-4">
                                    {
                                        stories?.slice(0, 12).map((story, i) => (
                                            <div key={story?.n_id} className='border-t pt-4'>
                                                <Card story={story} className={cn(`font-bold border-r px-5 pb-6`, (i + 1) % 4 === 0 && 'border-r-0 pr-0', (i + 1) === 1 && 'pl-0', (i + 1) === 5 && 'pl-0')} />
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
                                            <List key={story.n_id} story={story} className={cn('last:border-b-0')} />
                                        ))
                                    }
                                </div>
                                {/* ----News List end (visible in mobile screen)---- */}
                            </div>
                            <div className='w-fit mx-auto'>
                                <button
                                    onClick={() => navigate('/news')}
                                    className={
                                        cn(
                                            `inline-flex items-center gap-1 border border-primary text-primary-light py-1 px-4 rounded cursor-pointer bg-primary transit text-base`,

                                        )
                                    }>
                                    আরো
                                    <TfiMore size={20} color={colors.primary.light} />
                                </button>
                            </div>
                        </>
                    )
                }
            </div>
        </Section>
    )
}