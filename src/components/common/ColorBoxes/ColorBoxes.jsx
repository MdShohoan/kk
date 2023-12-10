function ColorBoxes() {
    const colors = ['#66c2a5', '#8da0cb', '#e78ac3', '#a6d854']
    const labels = ['আ. লীগ জোট', 'বিএনপি জোট', 'জাতীয় পার্টি', 'অন্যান্য']
    return (
        <div className="flex justify-center flex-col md:flex-row gap-6">
            {
                ['', '', '', ''].map((_, i) => (
                    <div key={i} className="flex justify-center items-center gap-2">
                        <span style={{ background: colors[i] }} className="inline-block h-3 w-3 text-xs" />
                        <span className="text-xs">{labels[i]}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default ColorBoxes