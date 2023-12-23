import { useEffect, useState } from 'react'
import Layout from '../components/common/Layout/Layout'
import Section from '../components/common/Section/Section'
import axios from 'axios'
import formatTimeDifference from '../lib/formatTimeDifference'
import { IoMdTime } from "react-icons/io";
import List from '../components/LatestNews/List/List'
import Card from '../components/LatestNews/Card/Card'


function News() {
    const [news, setNews] = useState([])
    const url = 'https://bn-api.kalerkantho.com/api/election?page=1'
    // const url = 'https://bn-api.kalerkantho.com/api/gallery_cat/3?page=1'


    const fetchData = async () => {
        const res = await axios.get(url)
        setNews(res?.data?.data)

    }

    const openNewTab = (url) => {
        window.open(url, "_blank")
    }

    useEffect(() => {
        fetchData()
    }, [])


    console.log(news)
    return (
        <Layout>
            <Section className='mb-3 md:mb-3 lg:mb-6 mt-3'>
                <div className='container'>
                    <div className='max-w-[970px] h-[90px] bg-slate-200 mx-auto flex justify-center items-center'>
                        ADS 970*90
                    </div>
                </div>
            </Section>
            <Section>
                <div className='container'>
                    {/* <----------Top section start-------------> */}
                    <div className='flex flex-col lg:flex-row gap-4 mb-6'>
                        <div
                            onClick={() => openNewTab(news[0]?.detailsUrl)}
                            className='flex-1 flex flex-col md:flex-row gap-4 cursor-pointer group'
                        >
                            <div className='basis-full'>
                                <h1 className='font-bold text-3xl mb-2 group-hover:text-primary transition-all duration-500'>{news[0]?.n_head}</h1>
                                <p className='text-[#333] text-base mb-3'>{news[0]?.n_details}</p>
                                <div className='flex items-center gap-[3px]'>
                                    <IoMdTime />
                                    <span className='text-xs text-[#333]'>
                                        {formatTimeDifference(news[0]?.created_at)?.split(',')[0]} আগে
                                    </span>
                                </div>
                            </div>
                            <div className='basis-full rounded-lg overflow-clip'>
                                <img src={news[0]?.thumb_image} className='w-full h-[250px] object-cover group-hover:scale-105 transition-all duration-500' />
                            </div>
                        </div>
                        <div className='place-self-center'>
                            <div className='w-[300px] h-[250px] bg-slate-200 flex justify-center items-center'>
                                ADS
                            </div>
                        </div>
                    </div>
                    {/* <---------------Top section end--------------> */}

                    {/* <----------------Middle section start----------> */}
                    <div className='hidden lg:grid grid-cols-4 gap-6'>
                        {
                            news?.slice(1, 9)?.map((newsItem) => (
                                <Card story={newsItem} key={newsItem?.n_id}/>
                            ))
                        }
                    </div>

                    {/*News List Start (visible in mobile screen)*/}
                    <div className='flex lg:hidden flex-col gap-4 '>
                        {
                            news?.slice(1, 9).map((newsItem) => (
                                <List key={newsItem.n_id} story={newsItem} />
                            ))
                        }
                    </div>
                    {/*News List end (visible in mobile screen)-*/}

                    {/* <---------------Middle section end------------------>*/}
                </div>
            </Section>
        </Layout>
    )
}

export default News