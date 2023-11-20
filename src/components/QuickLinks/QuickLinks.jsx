import { MdOutlineEventSeat  } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdGitCompare } from "react-icons/io";
import { MdOutlineAddReaction } from "react-icons/md";
import { colors } from "../../theme";


function QuickLinks() {
    const quickLinks = [
        { title: 'আসন', subtitle: 'জেনে নিন আপনার আসন সম্পর্কে', icon: MdOutlineEventSeat },
        { title: 'ম্যাপ ', subtitle: 'নির্বাচনের তথ্য জানতে ম্যাপ উপর ক্লিক করুন', icon: FaMapMarkerAlt},
        { title: 'ফলাফল', subtitle: ' নির্বাচনের  ফলাফল', icon: MdOutlineAddReaction},
        { title: 'হার-জিত', subtitle: 'দেখুন কে কোথায় জিতেছিল', icon: IoMdGitCompare },
    ]

    return (
        <section className="mb-12 md:mb-24 bg-primary-light p-8">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16">
                    {
                        quickLinks.map((link, i) => {
                            let Icon = link?.icon || MdOutlineEventSeat 
                            return (
                                <div key={i} className="flex justify-start lg:justify-center items-center gap-3">
                                    <div><Icon size={32} style={{color: colors?.primary?.default}}/></div>
                                    <div>
                                        <span className="block text-primary font-bold text-base mb-1">{link.title}</span>
                                        <span className="block text-xs text-gray1 font-normal">{link.subtitle}</span>
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