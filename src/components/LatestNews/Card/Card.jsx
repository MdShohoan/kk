import cn from '../../../lib/cn';
function Card({ story, className }) {
    const openNewTab = (url) => {
        window.open(url, "_blank")
    }
    return (
        <div
            className={cn('cursor-pointer group text-lg text-[#333] h-full', className)}
            key={story?.n_id}
            onClick={() => openNewTab(story?.detailsUrl)}
        >
            <div className='overflow-clip rounded-lg'>
                <img
                    className='mb-3 h-44 w-full object-cover group-hover:scale-105 transition-all duration-500 border-b'
                    src={story?.thumb_image}
                />
            </div>
            <h1 className='group-hover:text-primary transition-all duration-300'>{story?.n_head}</h1>
        </div>
    )
}

export default Card