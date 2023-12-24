import { useEffect, useState } from 'react';
import Title from './../common/Title/Title';
import { GoPlay } from "react-icons/go";
import Section from '../common/Section/Section';
import axios from 'axios';

function Video() {
    const [hoverElement, setHoverElement] = useState(null)

    const handleVideoHover = (video) => {
        setHoverElement(video.id)
    }

    const openNewTab = (id) => {
        window.open(`https://www.kalerkantho.com/video/${id}`, "_blank")
    }

    const [videos, setVideos] = useState([])


    const fetchData = async () => {
        const url = 'https://bn-api.kalerkantho.com/api/gallery_cat/3?page=1'
        const res = await axios.get(url)
        setVideos(res?.data?.data)

    }

    useEffect(() => {
        fetchData()
    }, [])

    console.log(videos[0], '=============1st video')

    return (
        <Section>
            <div className="container mx-auto">
                <Title>
                    ভিডিও
                </Title>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* ----Big video Start---- */}
                    <div
                        className='h-full md:flex flex-col cursor-pointer'
                        onMouseEnter={() => handleVideoHover(videos[0])}
                        onMouseLeave={() => setHoverElement(null)}
                        onClick={() => openNewTab(videos[0]?.id)}
                    >
                        {/* <div
                            className='md:h-full rounded flex justify-center items-center relative'
                            style={{
                                backgroundImage: `url(${data[0]?.thumbnail})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
                        >
                            <span className='inline-block py-16 md:p-0'>
                                <GoPlay
                                    color={hoverElement === 1 ? 'red' : 'white'} size={48}
                                    style={{ transition: 'all 300ms' }}
                                />
                            </span>
                        </div> */}
                        <div className='relative'>
                            <img src={videos[0]?.cover_photo} className='w-full h-auto md:h-[250px] object-cover md:w-full xl:w-full xl:h-auto rounded-lg' />
                            <span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                                <GoPlay
                                    color={hoverElement === videos[0]?.id ? 'red' : 'white'} size={48}
                                    style={{ transition: 'all 300ms' }}
                                />
                            </span>
                        </div>
                        <h1
                            className={`text-${hoverElement === videos[0]?.id ? 'primary-contrast' : 'primary'} font-extrabold text-2xl pt-3 transition-all duration-300`}
                        >
                            {videos[0]?.name}
                        </h1>
                    </div>
                    {/* ----Big video End---- */}


                    {/* ----Video List Start---*/}
                    <div className='flex flex-col gap-4'>
                        {
                            videos?.slice(1, 5).map((info, i) => (
                                <div
                                    key={i}
                                    className='flex gap-2 border-b last:border-0 border-gray4 pb-2 cursor-pointer'
                                    onMouseEnter={() => handleVideoHover(info)}
                                    onMouseLeave={() => setHoverElement(null)}
                                    onClick={() => openNewTab(info?.id)}
                                >
                                    <div
                                        className='h-[50px] w-[104px] flex justify-center items-center rounded'
                                        style={{
                                            backgroundImage: `url(${info?.cover_photo})`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                        }}
                                    >
                                        <GoPlay
                                            color={hoverElement === info?.id ? 'red' : 'white'}
                                            style={{ transition: 'all 300ms' }}
                                            size={24}

                                        />
                                    </div>
                                    <h1 className={`text-sm text-${hoverElement === info?.id ? 'primary' : '[#666]'} font-normal transition-all duration-300`}>{info?.name}</h1>
                                </div>
                            ))
                        }
                    </div>
                    {/* ----Video List End---*/}

                    <div className='h-[250px] w-[300px] mx-auto bg-gray-200 mb-8 flex justify-center items-center font-extrabold text-[36px]'>
                        300*250
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Video