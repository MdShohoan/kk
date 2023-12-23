import cn from "../../../lib/cn"

function List({ story, className }) {
    const openNewTab = (url) => {
        window.open(url, "_blank")
    }
    return (
        <div
            onClick={() => openNewTab(story?.detailsUrl)}
            className={cn('flex gap-3 border-b last:border-0 border-gray4 pb-2 cursor-pointer', className)}
        >
            <img src={story?.thumb_image} className='h-[64px] w-[112px] flex justify-center items-center rounded-lg' />
            <h1 className={`text-sm hover:text-blue-500 text-[#666] font-normal transition-all duration-300`}>
                {story?.n_head}
            </h1>
        </div>
    )
}

export default List