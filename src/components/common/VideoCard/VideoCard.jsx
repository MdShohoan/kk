import { GoPlay } from 'react-icons/go';
import cn from '../../../lib/cn';
import { useState } from 'react';

function Card({ story, className }) {
    const [hoverElement, setHoverElement] = useState('')
    const openNewTab = (id) => {
        window.open(`https://www.kalerkantho.com/video/${id}`, "_blank")
    }

    return (
        <div
            className={cn('cursor-pointer group text-lg text-[#333] h-full', className)}
            key={story?.id}
            onClick={() => openNewTab(story?.id)}
            onMouseEnter={()=> setHoverElement(story?.id)}
            onMouseLeave={()=> setHoverElement('')}
        >
            <div className='overflow-clip rounded-lg relative'>
                <img
                    className='mb-3 h-44 w-full object-cover group-hover:scale-105 transition-all duration-500 border-b'
                    src={story?.cover_photo}
                />
                <GoPlay
                    color={hoverElement === story?.id ? 'red' : 'white'}
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