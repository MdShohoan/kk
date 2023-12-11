function List({info}) {
    return (
        <div
            className='flex gap-2 border-b border-gray4 pb-2 cursor-pointer'
        >
            <img src={info?.image} className='h-[50px] w-[104px] flex justify-center items-center rounded' />
            <h6 className={`text-sm hover:text-blue-500 text-[#666] font-normal transition-all duration-300`}>{info?.title}</h6>
        </div>
    )
}

export default List