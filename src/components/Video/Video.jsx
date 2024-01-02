import { useEffect, useState } from 'react';
import Title from './../common/Title/Title';
import { GoPlay } from "react-icons/go";
import Section from '../common/Section/Section';
import axios from 'axios';
import Spinner from '../common/Spinner/Spinner';

function Video() {
    const [hoverElement, setHoverElement] = useState(null)
    const [videos, setVideos] = useState([])
    const [loading, setLoading] = useState(false)

    const handleVideoHover = (video) => {
        setHoverElement(video.id)
    }

    const openNewTab = (id) => {
        window.open(`https://www.kalerkantho.com/video/${id}`, "_blank")
    }

    const fetchData = async () => {
        const url = 'https://bn-api.kalerkantho.com/api/gallery_cat/3?page=1'
        setLoading(true)
        try {
            const res = await axios.get(url)
            setVideos(res?.data?.data)
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
                    ভিডিও
                </Title>
                {
                    loading ? (<Spinner className={'h-[300px]'} />) : (
                        <div className="grid grid-cols-1 lg:grid-cols-3">
                            {/* ----Big video Start---- */}
                            <div
                                className='h-full md:flex flex-col cursor-pointer pb-6 lg:pb-0 md:pr-4 md:border-r'
                                onMouseEnter={() => handleVideoHover(videos[0])}
                                onMouseLeave={() => setHoverElement(null)}
                                onClick={() => openNewTab(videos[0]?.id)}
                            >
                                <div className='relative rounded-lg overflow-clip'>
                                    <img src={videos[0]?.cover_photo} className='w-full h-auto md:h-[250px] object-cover md:w-full xl:w-full xl:h-auto' />
                                    <span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                                        <GoPlay
                                            color={hoverElement === videos[0]?.id ? 'red' : 'white'} size={48}
                                            style={{ transition: 'all 300ms' }}
                                        />
                                    </span>
                                </div>
                                <h1
                                    className={`text-${hoverElement === videos[0]?.id ? 'primary' : '[#333]'} font-bold text-2xl pt-3 transition-all duration-300`}
                                >
                                    {videos[0]?.name}
                                </h1>
                            </div>
                            {/* ----Big video End---- */}


                            {/* ----Video List Start---*/}
                            <div className='flex flex-col gap-4 lg:px-4 lg:border-r mb-4 lg:mb-0'>
                                {
                                    videos?.slice(1, 5).map((info, i) => (
                                        <div
                                            key={i}
                                            className='flex gap-2 border-b lg:last:border-b-0 border-gray4 pb-2 cursor-pointer'
                                            onMouseEnter={() => handleVideoHover(info)}
                                            onMouseLeave={() => setHoverElement(null)}
                                            onClick={() => openNewTab(info?.id)}
                                        >
                                            <div className='w-[108px] h-[58px] relative'>
                                                <img
                                                    className='w-[108px] h-[58px] object-cover rounded'
                                                    src={info?.cover_photo}
                                                />
                                                <GoPlay
                                                    color={hoverElement === info?.id ? 'red' : 'white'}
                                                    style={{
                                                        transition: 'all 300ms',
                                                        position: 'absolute',
                                                        left: '50%',
                                                        top: '50%',
                                                        transform: 'translate(-50%, -50%)',
                                                    }}
                                                    size={24}

                                                />
                                            </div>
                                            <div className='flex-1'>
                                                <h1 className={`text-sm md:text-lg font-bold leading-[22px] line-clamp-2 text-${hoverElement === info?.id ? 'primary' : '[#333]'} transition-all duration-300`}>{info?.name}</h1>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            {/* ----Video List End---*/}

                            {/* <div className='h-[250px] w-[300px] mx-auto bg-gray-200 mb-8 flex justify-center items-center font-extrabold text-[36px]'>
                                300*250
                            </div> */}

                            {/* Video List when there is no right sided add */}
                            <div className='flex flex-col gap-4 lg:pl-4'>
                                {
                                    videos?.slice(5, 9).map((info, i) => (
                                        <div
                                            key={i}
                                            className='flex gap-2 border-b last:border-0 border-gray4 pb-2 cursor-pointer'
                                            onMouseEnter={() => handleVideoHover(info)}
                                            onMouseLeave={() => setHoverElement(null)}
                                            onClick={() => openNewTab(info?.id)}
                                        >
                                            <div className='w-[108px] h-[58px] relative'>
                                                <img
                                                    className='w-[108px] h-[58px] object-cover rounded'
                                                    src={info?.cover_photo}
                                                />
                                                <GoPlay
                                                    color={hoverElement === info?.id ? 'red' : 'white'}
                                                    style={{
                                                        transition: 'all 300ms',
                                                        position: 'absolute',
                                                        left: '50%',
                                                        top: '50%',
                                                        transform: 'translate(-50%, -50%)',
                                                    }}
                                                    size={24}

                                                />
                                            </div>
                                            <div className='flex-1'>
                                                <h1 className={`text-sm md:text-lg font-bold leading-[22px] line-clamp-2 text-${hoverElement === info?.id ? 'primary' : '[#333]'} transition-all duration-300`}>{info?.name}</h1>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    )
                }

            </div>
        </Section>
    )
}

export default Video