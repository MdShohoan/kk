import { GoPlay } from "react-icons/go"
import cn from "../../../lib/cn"

function List({ story, className }) {
    const openNewTab = (id) => {
        window.open(`https://www.kalerkantho.com/video/${id}`, "_blank")
    }
    return (
        <div
            onClick={() => openNewTab(story?.id)}
            className={cn('flex gap-3 border-b border-gray4 pb-2 cursor-pointer font-bold text-sm text-[#333]', className)}
        >
            <div className="relative h-[64px] w-[112px]">
                <img src={story?.cover_photo} className='h-[64px] w-[112px] flex justify-center items-center rounded-lg' />
                <GoPlay
                    // color={hoverElement === info?.id ? 'red' : 'white'}
                    color='red'
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
            <h1 className={` hover:text-primary transition-all duration-300 flex-1`}>
                {story?.name}
            </h1>
        </div>
    )
}

export default List