import { GoPlay } from 'react-icons/go';
import cn from '../../../lib/cn';
function Card({ story, className }) {
    const openNewTab = (id) => {
        window.open(`https://www.kalerkantho.com/video/${id}`, "_blank")
    }

    return (
        <div
            className={cn('cursor-pointer group text-lg text-[#333] h-full', className)}
            key={story?.n_id}
            onClick={() => openNewTab(story?.id)}
        >
            <div className='overflow-clip rounded-lg relative'>
                <img
                    className='mb-3 h-44 w-full object-cover group-hover:scale-105 transition-all duration-500 border-b'
                    src={story?.cover_photo}
                />
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
                    size={42}

                />
            </div>
            <h1 className='group-hover:text-primary transition-all duration-300'>{story?.name}</h1>
        </div>
    )
}

export default Card