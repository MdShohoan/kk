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

  const colors = [
    { light: '#85ceb7', dark: '#66c2a5' },
    { light: '#a4b3d5', dark: '#8da0cb' },
    { light: '#eca1cf', dark: '#e78ac3' },
    { light: '#b8e076', dark: '#a6d854' }
  ]

  const headingCellStyle = `text-sm leading-4 text-[#000] font-normal bg-[#f0f0ed] rounded py-2 border-b border-gray-300 mr-1`
  return (
    <div>
      <Title>
        ১১তম নির্বাচনের বেসরকারি ফলাফল
      </Title>
      <div className="max-w-[300px] md:max-w-[500px] mx-auto bg-white p-4 text-center rounded-[10px] shadow-[0_0_16px_#0000009c]">
        <div>
          <div className="grid grid-cols-5 mb-1 [&>*:last-child]:mr-0">
            <div className={"col-start-1 col-end-4 " + headingCellStyle}>দল / জোট</div>
            <div className={headingCellStyle}>এগিয়ে</div>
            <div className={headingCellStyle}>জয়ী</div>
          </div>

          {data?.map((party, i) => (
            <div key={party?.name} className="grid grid-cols-5 mb-1 text-sm md:text-base font-semibold text-[#333] [&>*:last-child]:mb-0">
              <div style={{ background: colors[i]?.light }} className="rounded-tl rounded-bl py-2 flex justify-center items-center">
                <img src={party?.logo} className="h-7 mx-auto" />
              </div>
              <div style={{ background: colors[i]?.dark }} className="col-start-2 col-end-4 mr-1 rounded-tr rounded-br flex justify-center items-center">{party?.name}</div>
              <div style={{ background: colors[i]?.light }} className={`mr-1 rounded flex justify-center items-center`}>{party?.ahead}</div>
              <div style={{ background: colors[i]?.dark }} className="rounded flex justify-center items-center">{party?.won}</div>
            </div>
          ))}
        </div>
      </div>
    </div>

  )
}

export default UnofficialResult