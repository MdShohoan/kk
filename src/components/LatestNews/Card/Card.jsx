import { RiAdminFill } from "react-icons/ri";
import { FaCommentAlt } from "react-icons/fa";
import { colors } from "../../../theme";

function Card({ news }) {
    return (
        <div>
            <img src={news?.image} alt="News image" className="w-full rounded block" />
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
            <h3 className="text-center font-semibold text-primary text-base">{news?.title}</h3>
        </div>
    )
}

export default Card