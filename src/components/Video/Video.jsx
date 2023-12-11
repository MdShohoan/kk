import { useState } from 'react';
import thumbnail1 from '../../assets/videoThumbnail/thumbnail1.png'
import thumbnail2 from '../../assets/videoThumbnail/thumbnail2.png'
import Title from './../common/Title/Title';
import { GoPlay } from "react-icons/go";

function Video() {
    const [hoverElement, setHoverElement] = useState(null)

    const handleVideoHover = (element) => {
        setHoverElement(element.id)
    }

    const data = [
        { id: 1, title: 'নির্বাচন কি সঠিক হবে ?', thumbnail: thumbnail1 },
        { id: 2, title: 'সরকার পোশাকশিল্প ধ্বংসের নীলনকশা বাস্তবায়ন করছে : রিজভী', thumbnail: thumbnail2 },
        { id: 3, title: 'সরকার পোশাকশিল্প ধ্বংসের নীলনকশা বাস্তবায়ন করছে : রিজভী', thumbnail: thumbnail2 },
        { id: 4, title: 'সরকার পোশাকশিল্প ধ্বংসের নীলনকশা বাস্তবায়ন করছে : রিজভী', thumbnail: thumbnail2 },
        { id: 5, title: 'সরকার পোশাকশিল্প ধ্বংসের নীলনকশা বাস্তবায়ন করছে : রিজভী', thumbnail: thumbnail2 },
        { id: 6, title: 'সরকার পোশাকশিল্প ধ্বংসের নীলনকশা বাস্তবায়ন করছে : রিজভী', thumbnail: thumbnail2 },
    ]

    return (
        <section className='mb-12 md:mb-24'>
            <div className="container mx-auto">
                <Title text={'ভিডিও'} underline='type1' />
                <div className='mb-5 md:m-10' />
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* ----Big video Start---- */}
                    <div
                        className='h-full md:flex flex-col cursor-pointer'
                        onMouseEnter={() => handleVideoHover(data[0])}
                        onMouseLeave={() => setHoverElement(null)}
                    >
                        <div
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
                        </div>
                        <h6
                            className={`text-${hoverElement === 1 ? 'primary-contrast' : 'primary'} font-extrabold text-2xl pt-3 transition-all duration-300`}
                        >
                            {data[0]?.title}
                        </h6>
                    </div>
                    {/* ----Big video End---- */}


                    {/* ----Video List Start---*/}
                    <div className='flex flex-col gap-4'>
                        {
                            data?.slice(1, 5).map((info, i) => (
                                <div
                                    key={i}
                                    className='flex gap-2 border-b border-gray4 pb-2 cursor-pointer'
                                    onMouseEnter={() => handleVideoHover(info)}
                                    onMouseLeave={() => setHoverElement(null)}
                                >
                                    <div
                                        className='h-[50px] w-[104px] flex justify-center items-center rounded'
                                        style={{
                                            backgroundImage: `url(${info.thumbnail})`,
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
                                    <h6 className={`text-sm text-${hoverElement === info?.id ? 'blue-500' : '[#666]'} font-normal transition-all duration-300`}>{info?.title}</h6>
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
        </section>
    )
}

export default Video