import thumbnail1 from '../../assets/videoThumbnail/thumbnail1.png'
import thumbnail2 from '../../assets/videoThumbnail/thumbnail2.png'
import Title from './../common/Title/Title';
import { FaPlay } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


function Video() {
    const data = [
        { title: 'নির্বাচন কি সঠিক হবে ?', thumbnail: thumbnail1 },
        { title: 'সরকার পোশাকশিল্প ধ্বংসের নীলনকশা বাস্তবায়ন করছে : রিজভী', thumbnail: thumbnail2 },
        { title: 'সরকার পোশাকশিল্প ধ্বংসের নীলনকশা বাস্তবায়ন করছে : রিজভী', thumbnail: thumbnail2 },
        { title: 'সরকার পোশাকশিল্প ধ্বংসের নীলনকশা বাস্তবায়ন করছে : রিজভী', thumbnail: thumbnail2 },
        { title: 'সরকার পোশাকশিল্প ধ্বংসের নীলনকশা বাস্তবায়ন করছে : রিজভী', thumbnail: thumbnail2 },
        { title: 'সরকার পোশাকশিল্প ধ্বংসের নীলনকশা বাস্তবায়ন করছে : রিজভী', thumbnail: thumbnail2 },
    ]

    return (
        <section className='mb-24'>
            <div className="container mx-auto">
                <Title text={'ভিডিও'} underline='type1' />
                <div className='mb-5 md:m-10' />
                <div className="grid grid-cols-3 gap-8">
                    <div>
                        <div
                            className='h-full mb-3 rounded flex justify-center items-center'
                            style={{
                                backgroundImage: `url(${data[0]?.thumbnail})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
                        >
                            <FaYoutube color='#FF0000' size={68}/>
                        </div>
                        <h6 className='text-primary font-extrabold text-2xl'>{data[0]?.title}</h6>
                    </div>
                    <div className='flex flex-col gap-4'>
                        {
                            data?.slice(1, 5).map((info, i) => (
                                <div key={i} className='flex gap-2 border-b border-gray4 pb-2'>
                                    <div
                                        className='h-[50px] w-[104px] flex justify-center items-center rounded'
                                        style={{
                                            backgroundImage: `url(${info.thumbnail})`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                        }}
                                    >
                                        <FaPlay color='white' size={20} />
                                    </div>
                                    <h6 className='text-sm text-gray2 font-normal'>{info?.title}</h6>

                                </div>
                            ))
                        }
                    </div>
                    <div className='h-[250px] w-[300px] mx-auto bg-gray-200 mb-8 flex justify-center items-center font-extrabold text-[36px]'>
                        300*250
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Video