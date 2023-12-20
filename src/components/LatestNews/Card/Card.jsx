import { clsx } from 'clsx';
import { useState } from "react";
import cn from '../../../lib/cn';
function Card({ news, className }) {
    const [isHovered, setIsHovered] = useState(false)
    return (
        <div
            className={cn('cursor-pointer', className)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="overflow-clip rounded-lg mb-4">
                <img
                    src={news?.image}
                    alt="News image"
                    className={clsx(
                        "w-full rounded block transition-all duration-500 object-cover",
                        {
                            "scale-105": isHovered === true,
                        }
                    )}
                />
            </div>

            <h1
                className={
                    clsx(
                        "font-semibold text-lg transition-all duration-300",
                        {
                            'text-blue-500': isHovered === true,
                            'text-primary': isHovered === false
                        }
                    )
                }
            >
                {news?.title}
            </h1>
        </div>
    )
}

export default Card