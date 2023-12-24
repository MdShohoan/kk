import cn from "../../../lib/cn"

function List({ story, className }) {
    const openNewTab = (url) => {
        window.open(url, "_blank")
    }
    return (
        <div
            onClick={() => openNewTab(story?.detailsUrl)}
            className={cn('flex gap-3 border-b border-gray4 pb-2 cursor-pointer font-bold text-sm text-[#333]', className)}
        >
            <img src={story?.thumb_image} className='h-[64px] w-[112px] flex justify-center items-center rounded-lg' />
            <h1 className={` hover:text-primary transition-all duration-300`}>
                {story?.n_head}
            </h1>
        </div>
    )
}

export default List