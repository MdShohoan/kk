import cn from "../../../lib/cn"

function SeatNoCard({ className, seatNo }) {
    return (
        <div
            className= {cn('mx-auto mt-4 rounded-full border-[4px] w-24 h-24 flex justify-center items-center text-primary font-semibold text-lg bg-primary-background border-[#cbc3db]', className)}
        >

            <div>
                <div className='text-center font-[600] text-2xl'>{seatNo}</div>
                <div className='text-sm font-[600] text-center text-primary'>আসন নং</div>
            </div>
        </div>
    )
}

export default SeatNoCard