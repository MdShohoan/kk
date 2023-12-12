function List({info}) {
    return (
        <div
            className='flex gap-3 border-b last:border-0 border-gray4 pb-2 cursor-pointer'
        >
            <img src={info?.image} className='h-[64px] w-[112px] flex justify-center items-center rounded-lg' />
            <h6 className={`text-sm hover:text-blue-500 text-[#666] font-normal transition-all duration-300`}>{info?.title}</h6>
        </div>
    )
}

export default List