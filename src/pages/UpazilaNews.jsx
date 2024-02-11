import { useEffect, useState } from 'react'
import Layout from '../components/common/Layout/Layout'
import Section from '../components/common/Section/Section'
import axios from 'axios'
import formatTimeDifference from '../lib/formatTimeDifference'
import { IoMdTime } from "react-icons/io";
import List from '../components/LatestNews/List/List'
import Card from '../components/LatestNews/Card/Card'
import cn from '../lib/cn'
import Spinner from '../components/common/Spinner/Spinner'
import { IoIosArrowRoundForward } from "react-icons/io";
import { colors } from '../theme'

function UpazilaNews() {
    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(false)
    const [loadingMore, setLoadingMore] = useState(false)
    const [moreCount, setMoreCount] = useState(null)

    const [page, setPage] = useState(4)

    const url = 'https://bn-api.kalerkantho.com/api/election?page=1'

    const openNewTab = (url) => {
        window.open(url, "_blank")
    }

    const fetchData = async () => {
        setLoading(true)
        try {
            const res = await axios.get(url)
            setNews(res?.data?.data)
            setMoreCount(res?.data?.total - res?.data?.to)
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

    const loadMore = async () => {
        if (moreCount === 0) {
            return
        }
        setLoadingMore(true)
        try {
            const res = await axios.get(`https://bn-api.kalerkantho.com/api/election?page=${page}&per_page=10`)
            setNews((news) => [...news, ...res.data.data])
            setPage((page) => page + 1)
            setMoreCount((res?.data?.total - res?.data?.to))
        } catch (error) {
            console.log(error)
        }
        finally {
            setLoadingMore(false)
        }
    }

    return (
        <Layout>
            {
                loading ? (<Spinner className={'h-[calc(100vh-62px)'} />) : (
                    <>
                        {/* Spacing if not any add available */}
                        <div className='w-full h-6'></div>
                        <Section>
                            <div className='container'>
                                {/* <----------Top section with add start-------------> */}
                                {/* <div className='flex flex-col lg:flex-row gap-4 mb-8'>
                                    <div
                                        onClick={() => openNewTab(news[0]?.detailsUrl)}
                                        className='flex-1 flex flex-col-reverse md:flex-row gap-4 cursor-pointer group'
                                    >
                                        <div className='basis-full mb  md:mb-0'>
                                            <h1 className='font-bold text-3xl mb-2 text-[#333] group-hover:text-primary transition-all duration-500'>{news[0]?.n_head}</h1>
                                            <p className='text-[#333] text-base mb-3 hidden md:block'>{news[0]?.n_details}</p>
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
                                </div> */}
                                {/* <---------------Top section with add end--------------> */}


                                {/* Top section without add start */}
                                <div className='grid grid-cols-1 lg:grid-cols-4 mb-4'>
                                    <div
                                        onClick={() => openNewTab(news[0]?.detailsUrl)}
                                        className='md:col-start-1 md:col-end-4 flex flex-col-reverse md:flex-row gap-4 cursor-pointer group lg:pr-5 lg:border-r mb-6 lg:mb-0'
                                    >
                                        <div className='md:basis-full'>
                                            <h1 className='font-bold text-3xl mb-2 text-[#333] group-hover:text-primary transition-all duration-500'>{news[0]?.n_head}</h1>
                                            <p className='text-[#333] text-base mb-3 hidden md:block'>{news[0]?.n_details}</p>
                                            <div className='flex items-center gap-[3px]'>
                                                <IoMdTime />
                                                <span className='text-xs text-[#333]'>
                                                    {formatTimeDifference(news[0]?.created_at)?.split(',')[0]} আগে
                                                </span>
                                            </div>
                                        </div>
                                        <div className='md:basis-full rounded-lg overflow-clip'>
                                            <img src={news[0]?.thumb_image} className='w-full h-44 md:h-60 object-cover group-hover:scale-105 transition-all duration-500 rounded-lg' />
                                        </div>
                                    </div>
                                    <div className='lg:col-start-4 lg:col-end-5 lg:pl-5'>
                                        <Card story={news[1]} className={cn(`font-bold hidden lg:block`)} />
                                        <List story={news[1]} className={cn(`lg:hidden flex`)} />
                                    </div>
                                </div>
                                {/* Top section without add end */}

                                {/* <----------------Middle section start----------> */}
                                <div className='hidden lg:grid grid-cols-4 gap-y-4'>
                                    {
                                        news?.slice(2, 10)?.map((newsItem, i) => (
                                            <div key={newsItem?.n_id} className='border-t pt-4'>
                                                <Card story={newsItem} className={cn(`font-bold border-r px-5 pb-6`, (i + 1) % 4 === 0 && 'border-r-0 pr-0', (i + 1) === 1 && 'pl-0', (i + 1) === 5 && 'pl-0')} />
                                            </div>
                                        ))
                                    }
                                </div>

                                {/*News List Start (visible in mobile screen)*/}
                                <div className='flex lg:hidden flex-col gap-4'>
                                    {
                                        news?.slice(2, 10).map((newsItem) => (
                                            <List key={newsItem.n_id} story={newsItem} />
                                        ))
                                    }
                                </div>
                                {/* <---------------Middle section end------------------>*/}

                                {/* <---------------Last section start------------------>*/}
                                <div className='container border-t mt-4 hidden lg:block'>
                                    <div className='max-w-xl mx-auto md:mt-8 flex flex-col gap-y-4'>
                                        {
                                            news?.slice(10)?.map((story) => (
                                                <div
                                                    onClick={() => openNewTab(story?.detailsUrl)}
                                                    key={story?.n_id}
                                                    className='md:flex gap-4 hidden group cursor-pointer border-b pb-4 last:border-b-0'
                                                >
                                                    <div className='basis-2/5 rounded-lg overflow-clip' >
                                                        <img src={story.thumb_image} className='w-full group-hover:scale-105 transition-all duration-500' />
                                                    </div>
                                                    <div className='basis-3/5'>
                                                        <h1 className='text-lg mb-2 leading-[22px] font-bold text-[#333] group-hover:text-primary transition-all duration-500'>{story?.n_head}</h1>
                                                        <p className='text-sm text-[#333]'>{story?.n_details}</p>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                {/* Visible in mobile only */}
                                <div className='flex lg:hidden flex-col gap-4 mt-4'>
                                    {
                                        news?.slice(10)?.map((story) => (
                                            <List className={'last:border-b-0'} key={story.n_id} story={story} />
                                        ))
                                    }
                                </div>
                                {/* <---------------Last section end------------------>*/}
                                {
                                    moreCount > 0 && (
                                        <div className='flex justify-center mt-7'>
                                            <button
                                                disabled={loadingMore}
                                                onClick={loadMore}
                                                className={
                                                    cn(
                                                        `inline-flex items-center gap-1 border border-primary text-primary-light py-1 px-4 rounded cursor-pointer bg-primary transit`,

                                                    )
                                                }>
                                                {
                                                    loadingMore && (
                                                        <svg aria-hidden="true" className="inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-primary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                                        </svg>
                                                    )
                                                }

                                                {
                                                    loadingMore ? 'লোড হচ্ছে...' : (
                                                        <>
                                                            আরো
                                                            <IoIosArrowRoundForward size={24} color={colors.primary.light} />
                                                        </>
                                                    )
                                                }
                                            </button>
                                        </div>
                                    )
                                }

                            </div>
                        </Section>
                    </>
                )
            }
        </Layout>
    )
}

export default UpazilaNews