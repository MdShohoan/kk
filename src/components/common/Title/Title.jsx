import cn from '../../../lib/cn'
function Title({children, underline = 'type1', className }) {

    if (underline === 'type1') {
        return (
            <h4
                className={
                    cn(`text-center w-fit relative pt-0 px-5 pb-3 text-lg sm:text-2xl font-bold text-gray-700 mx-auto mb-5 md:mb-10
                    before:w-[12px] before:h-[12px] before:bg-primary before:absolute before:bottom-[-3px] before:left-[50%] before:-translate-x-2/4 before:rotate-45
                    after:w-[100%] after:h-[3px] after:absolute after:bottom-[1px] after:left-[50%] after:-translate-x-1/2 after:bg-gradient-to-r after:from-primary after:to-primary after:via-transparent`,

                    className
                    )
                }
            >
                {children}
            </h4>
        )
    }

    // for hero text-base sm:text-xl
}
export default Title