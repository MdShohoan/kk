import Gap from "../common/Gap/Gap"
import Title from "../common/Title/Title"
import AwamiLeagueLogo from '../../assets/partyLogo/AwamiLeagueLogo.webp'
import BNPLogo from '../../assets/partyLogo/BNPLogo.webp'
import JatiyoPartyLogo from '../../assets/partyLogo/JatioyoPartyLogo.webp'

function UnofficialResult() {

  const data = [
    { name: 'আ. লীগ জোট', logo: AwamiLeagueLogo, ahead: '০', won: '২৬৬' },
    { name: 'বিএনপি জোট', logo: BNPLogo, ahead: '০', won: '৭' },
    { name: 'জাতীয় পার্টি', logo: JatiyoPartyLogo, ahead: '০', won: '২২' },
    { name: 'অন্যান্য', logo: '', ahead: '০', won: '৪' },
  ]

  const headingCellStyle = `text-sm leading-4 text-[#000] font-normal bg-[#f0f0ed] rounded py-2 border-b border-gray-300 mr-1`
  return (
    <div className="container mx-auto">
      <Title text={'নির্বাচনের বেসরকারি ফলাফল'} underline="type1" />
      <Gap />
      <div className="max-w-sm mx-auto bg-white p-4 text-center rounded-[10px] shadow-[0_0_16px_#0000009c]">
        <div>
          <div className="grid grid-cols-5 mb-1">
            <div className={"col-start-1 col-end-4 " + headingCellStyle}>দল / জোট</div>
            <div className={headingCellStyle}>এগিয়ে</div>
            <div className={headingCellStyle}>জয়ী</div>
          </div>

          {data?.map((party) => (
            <div key={party?.name} className="grid grid-cols-5 mb-1">
              <div className="bg-[#b3d0df] rounded-tl rounded-bl py-2 border border-[#99c0d4]">
                <img src={party?.logo} className="h-7 mx-auto" />
              </div>
              <div className="col-start-2 col-end-4 bg-[#99c0d4] mr-1 rounded-tr rounded-br py-1">{party?.name}</div>
              <div className="bg-[#b3d0df] mr-1 rounded py-1">{party?.ahead}</div>
              <div className="bg-[#99c0d4] rounded py-1">{party?.won}</div>
            </div>
          ))}
        </div>
      </div>
      <Gap></Gap>
    </div>
  )
}

export default UnofficialResult