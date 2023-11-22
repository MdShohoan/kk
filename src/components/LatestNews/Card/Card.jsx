import { RiAdminFill } from "react-icons/ri";
import { FaCommentAlt } from "react-icons/fa";
import { colors } from "../../../theme";
import { clsx } from 'clsx';
import { useState } from "react";
function Card({ news }) {
    const [isHovered, setIsHovered] = useState(false)
    return (
        <div
            className="cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="overflow-clip rounded">
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
            <span
                className="inline-block font-normal text-sm bg-primary text-primary-light py-[2px] px-6 relative left-2/4 -translate-x-2/4 -translate-y-2/4"
            >
                10 Dec, 2023
            </span>
            <div className="flex justify-center items-center gap-14 mb-3">
                <div className="flex items-center gap-2">
                    <RiAdminFill size={12} color={colors?.gray5} />
                    <span className="text-gray5 text-xs font-normal">ADMIN</span>
                </div>
                <div className="flex items-center gap-2">
                    <FaCommentAlt size={12} color={colors?.gray5} />
                    <span className="text-gray5 text-xs font-normal">5 COMMENTS</span>
                </div>
            </div>
            <h3
                className={
                    clsx(
                        "text-center font-semibold text-base transition-all duration-300",
                        {
                            'text-blue-500': isHovered === true,
                            'text-primary': isHovered === false
                        }
                    )
                }
            >
                {news?.title}
            </h3>
        </div>
    )
}

export default Card