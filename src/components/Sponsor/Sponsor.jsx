import Section from '../common/Section/Section'
function Sponsor() {
    const data = ['', '', '', '']
    return (
        <Section className="mb-12 md:mb-24">
            <div className='container'>
                <div className="bg-primary-light p-8">
                    <h6 className="text-center mb-5 text-base font-bold text-primary">সহযোগিতায় </h6>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-4">
                        {
                            data.map((_, i)=>(
                                <div key={i} className="w-full h-[130px] bg-sky-600 rounded"></div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Sponsor