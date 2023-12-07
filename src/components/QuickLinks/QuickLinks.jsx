import { MdOutlineEventSeat } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdGitCompare } from "react-icons/io";
import { MdOutlineAddReaction } from "react-icons/md";
import { colors } from "../../theme";
import { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import clsx from "clsx";

function QuickLinks() {
    const [hoverLink, setHoverLink] = useState(null)

    const setSubtitleHoverColor = (link) => {
        return hoverLink === link.id ? 'text-blue-500' : 'text-gray1'
    }

    const quickLinks = [
        { id: 'seat', title: 'আসন', subtitle: 'জেনে নিন আপনার আসন সম্পর্কে', icon: MdOutlineEventSeat },
        { id: 'map', title: 'ম্যাপ ', subtitle: 'নির্বাচনের তথ্য জানতে ম্যাপ উপর ক্লিক করুন', icon: FaMapMarkerAlt },
        { id: 'result', title: 'ফলাফল', subtitle: ' নির্বাচনের  ফলাফল', icon: MdOutlineAddReaction },
        { id: 'win-lose', title: 'হার-জিত', subtitle: 'দেখুন কে কোথায় জিতেছিল', icon: IoMdGitCompare },
    ]

    return (
        <section className="mb-12 md:mb-24 bg-primary-light px-0 py-6 md:p-8">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16">
                    {
                        quickLinks.map((link, i) => {
                            let Icon = link?.icon || MdOutlineEventSeat
                            return (
                                <div
                                    onMouseEnter={() => setHoverLink(link?.id)}
                                    onMouseLeave={() => setHoverLink(null)}
                                    key={i}
                                    className="flex flex-col sm:flex-row justify-center md:justify-start lg:justify-center items-center gap-3 cursor-pointer"
                                >
                                    <div>
                                        <Icon
                                            size={32}
                                            style={{
                                                color: hoverLink === link.id ? colors.primary.contrast : colors?.primary?.default,
                                                transition: 'all 300ms'
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <div className="flex items-center justify-center md:justify-start gap-x-2 gap-y-4 mb-1">
                                            <span
                                                className={clsx(
                                                    `transition-all duration-300 block font-bold text-base text-primary`,
                                                    {
                                                        'text-primary-contrast': hoverLink === link.id
                                                    }
                                                )}>
                                                {link.title}
                                            </span>
                                            <div className="md:hidden">
                                                <FaExternalLinkAlt
                                                    size={12}
                                                    style={{
                                                        color: hoverLink === link.id ? colors.primary.contrast : colors?.primary?.default,
                                                        transition: 'all 300ms',
                                                        fontWeight: 700,
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <span className={`transition-all duration-300 text-center md:text-left block text-xs ${setSubtitleHoverColor(link)} font-normal`}>
                                            {link.subtitle}
                                        </span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default QuickLinks