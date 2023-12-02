import './SeatMap.css'
import seatPaths from '../../../assets/data/seatPaths/seatPaths'
const SeatMap = ({selectedParty, selectedYear}) => {
	console.log(selectedParty, selectedYear)

	//  const colors = {bal: '#66c2a5', bnp: '#8da0cb', jp:'#e78ac3', ao: '#a6d854'}
	const data = [
        {
            seatNo: '1',
            year: '2018',
            win: 'bal'
        }
    ]

	

	const setFillColor = (seatNo) =>{
		if(data.find((seat)=>seat.seatNo === seatNo)){
			return  "fill-[#8da0cb] stroke-red-600 stroke-3"
		}
		else return `fill-[#66c2a5] stroke-red-600 stroke-3`
	}
	return (
		<div style={{ width: '75%' }} className='mx-auto'>
			<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1500 1800" style={{ enableBackground: "new 0 0 1500 1800" }} xmlSpace="preserve">
				{
					seatPaths.map((seat, i) => {
						if (seat?.seatNo === '101') {
							return (
								<polygon key={i} id="st_101" className={setFillColor(seat?.seatNo)} points={seat?.paths[0]} />
							)
						}
						else if (seat?.paths.length > 1) {
							return (
								<g key={seat.seatNo}>
									{
										seat?.paths.map((path, i) => (
											<path key={i} className={setFillColor(seat?.seatNo)} d={path} />
										))
									}
								</g>
							)
						}
						else {
							return (
								<path key={seat?.seatNo} id="st_57" className={setFillColor(seat?.seatNo)} d={seat.paths[0]} />
							)
						}
					})
				}

				{/* Red marker start */}
				<g>
					<rect x="1193.6" y="621.3" className="st1" width="218.1" height="267.5" />
					<path className="st2" d="M715.3,836.7h-40.6v57.5h40.6V836.7z M714.3,893.2h-38.6v-55.5h38.6V893.2z" />
					<path className="st2" d="M1192.6,620.3v133.8l0.4-0.1l0.2,1l-0.6,0.2v134.6h220.1V620.3H1192.6z M1411.7,888.8h-218.1V621.3h218.1
						V888.8z"/>
					<polygon className="st2" points="714.9,871.5 714.9,872.5 1192.6,755.2 1192.6,754.1 	" />
					<polygon className="st2" points="1193,754 1192.6,754.1 1192.6,755.2 1193.2,755 	" />
				</g>
				{/* Red marker end */}

				{/* Seat no start */}
				<g>
					<text transform="matrix(1 0 0 1 233.3739 151.369)" className="st3 st4 st5">১</text>
					<g>
						<text transform="matrix(1 0 0 1 205.1892 234.3353)" className="st3 st4 st5">৩</text>
					</g>
					<g>
						<text transform="matrix(1 0 0 1 255.8684 203.7962)" className="st3 st4 st5">২</text>
					</g>
					<g>
						<text transform="matrix(1 0 0 1 241.5736 285.6678)" className="st3 st4 st5">৬</text>
					</g>
					<g>
						<text transform="matrix(1 0 0 1 220.7831 347.3958)" className="st3 st4 st5">৭</text>
					</g>
					<g>
						<text transform="matrix(1 0 0 1 163.6029 288.2659)" className="st3 st4 st5">৫</text>
					</g>
					<g>
						<text transform="matrix(1 0 0 1 150.6057 234.3353)" className="st3 st4 st5">৪</text>
					</g>
					<g>
						<text transform="matrix(1 0 0 1 285.7572 330.4998)" className="st3 st4 st5">৯</text>
					</g>
					<g>
						<text transform="matrix(1 0 0 1 344.8871 430.5648)" className="st3 st4 st5">১১</text>
					</g>
					<g>
						<text transform="matrix(1 0 0 1 252.62 362.9896)" className="st3 st4 st5">৮</text>
					</g>
					<g>
						<text transform="matrix(1 0 0 1 511.8778 251.8787)" className="st3 st4 st5">২৫</text>
					</g>
					<g>
						<text transform="matrix(1 0 0 1 314.677 367.7045)" className="st3 st4 st5">১০</text>
					</g>
					<g>
						<text transform="matrix(1 0 0 1 481.8767 560.5183)" className="st3 st4 st5">৩৬</text>
					</g>
					<g>
						<text transform="matrix(1 0 0 1 314.1018 208.9959)" className="st3 st4 st5">১২</text>
					</g>
					<g>
						<text transform="matrix(1 0 0 1 530.0702 383.7835)" className="st3 st4 st5">২৮</text>
					</g>
					<g>
						<text transform="matrix(1 0 0 1 498.2303 338.9485)" className="st3 st4 st5">২৭</text>
					</g>
					<g>
						<text transform="matrix(1 0 0 1 485.8871 479.9476)" className="st3 st4 st5">৩৩</text>
					</g>
					<g>
						<text transform="matrix(1 0 0 1 354.6328 198.5983)" className="st3 st4 st5">১৬</text>
					</g>
					<g>
						<text transform="matrix(1 0 0 1 395.6303 373.5551)" className="st3 st4 st5">২৩</text>
					</g>
					<g>
						<text transform="matrix(1 0 0 1 344.8871 488.3914)" className="st3 st4 st5">৩৪</text>
					</g>
					<g>
						<text transform="matrix(1 0 0 1 490.6529 304.4993)" className="st3 st4 st5">২৬</text>
					</g>
					<g>
						<text transform="matrix(1 0 0 1 424.8098 489.6932)" className="st3 st4 st5">৩২</text>
					</g>
					<g>
						<text transform="matrix(1 0 0 1 364.3817 528.0297)" className="st3 st4 st5">৩৫</text>
					</g>
					<g>
						<text transform="matrix(1 0 0 1 409.1127 268.206)" className="st3 st4 st5">১৭</text>
					</g>
					<g>
						<text transform="matrix(1 0 0 1 439.5453 421.3903)" className="st3 st4 st5">৩১</text>
					</g>
					<g>
						<text transform="matrix(1 0 0 1 338.3867 337.973)" className="st3 st4 st5">২০</text>
					</g>
					<g>
						<text transform="matrix(1 0 0 1 483.287 391.5775)" className="st3 st4 st5">২৯</text>
					</g>
					<g>
						<text transform="matrix(1 0 0 1 397.5784 413.4842)" className="st3 st4 st5">২৪</text>
					</g>
					<g>
						<text transform="matrix(1 0 0 1 440.4032 342.845)" className="st3 st4 st5">২২</text>
					</g>
					<g>
						<text transform="matrix(1 0 0 1 300.0531 283.0677)" className="st3 st4 st5">১৩</text>
					</g>
					<g>
						<text transform="matrix(1 0 0 1 337.0912 251.2283)" className="st3 st4 st5">১৪</text>
					</g>
					<g>
						<text transform="matrix(1 0 0 1 383.705 298.6633)" className="st3 st4 st5">১৯</text>
					</g>
					<text transform="matrix(1 0 0 1 481.877 763.8958)" className="st4 st5">৬৭</text>
					<g>
						<text transform="matrix(1 0 0 1 474.7683 433.8137)" className="st3 st4 st5">৩০</text>
					</g>
					<g>
						<text transform="matrix(1 0 0 1 412.4637 528.0297)" className="st3 st4 st5">৩৭</text>
					</g>
					<g>
						<text transform="matrix(1 0 0 1 586.6005 486.4461)" className="st3 st4 st5">১৪৫</text>
					</g>
					<g>
						<text transform="matrix(1 0 0 1 531.6952 466.3016)" className="st3 st4 st5">১৩৮</text>
					</g>
					<g>
						<text transform="matrix(1 0 0 1 524.1843 563.8516)" className="st3 st4 st5">১৪০</text>
					</g>
					<g>
						<text transform="matrix(1 0 0 1 446.437 292.9396)" className="st3 st4 st5">১৮</text>
					</g>
					<g>
						<text transform="matrix(0.9962 -8.680832e-02 8.680832e-02 0.9962 335.4821 296.664)" className="st3 st4 st5">১৫</text>
					</g>
					<g>
						<text transform="matrix(1 0 0 1 505.5143 514.8976)" className="st3 st4 st5">১৩৯</text>
					</g>
					<text transform="matrix(1 0 0 1 666.3054 1132.3134)" className="st4 st5">১২১</text>
					<g>
						<text transform="matrix(1 0 0 1 387.3532 334.7081)" className="st3 st4 st5">২১</text>
					</g>
					<text transform="matrix(1 0 0 1 676.2671 611.8505)" className="st4 st5">১৪৯</text>
					<text transform="matrix(1 0 0 1 466.9268 1145.7789)" className="st4 st5">১০০</text>
					<text transform="matrix(1 0 0 1 1134.3162 1507.2294)" className="st3 st6 st5"></text>
					<text transform="matrix(1 0 0 1 624.8772 507.8872)" className="st4 st5">১৪৪</text>
					<text transform="matrix(1 0 0 1 684.6067 507.8871)" className="st4 st5">১৪৬</text>
					<text transform="matrix(1 0 0 1 772.2781 511.5537)" className="st4 st5">১৫৭</text>
					<text transform="matrix(1 0 0 1 860.8008 530.6278)" className="st4 st5">২২৪</text>
					<text transform="matrix(1 0 0 1 779.7358 560.5182)" className="st4 st5">১৫৮</text>
					<text transform="matrix(1 0 0 1 735.551 546.2245)" className="st4 st5">১৬১</text>
					<text transform="matrix(1 0 0 1 684.6067 557.2704)" className="st4 st5">১৪৭</text>
					<text transform="matrix(1 0 0 1 927.0771 512.1107)" className="st4 st5">২২৭</text>
					<text transform="matrix(1 0 0 1 978.2041 536.4781)" className="st4 st5">২২৮</text>
					<text transform="matrix(1 0 0 1 1073.2749 511.5537)" className="st4 st5">২৩২</text>
					<text transform="matrix(1 0 0 1 1159.6938 534.5295)" className="st4 st5">২৩৩</text>
					<text transform="matrix(1 0 0 1 1102.0232 576.7639)" className="st4 st5">২৩৪</text>
					<text transform="matrix(1 0 0 1 1049.4426 549.4722)" className="st4 st5">২২৯</text>
					<text transform="matrix(1 0 0 1 1059.7288 602.101)" className="st4 st5">২৩১</text>
					<text transform="matrix(1 0 0 1 1018.6931 604.7031)" className="st4 st5">২৩০</text>
					<text transform="matrix(1 0 0 1 1032.3394 661.2329)" className="st4 st5">২৩৭</text>
					<text transform="matrix(1 0 0 1 1088.2205 674.8779)" className="st4 st5">২৩৬</text>
					<text transform="matrix(1 0 0 1 1124.7996 624.1964)" className="st4 st5">২৩৫</text>
					<text transform="matrix(1 0 0 1 971.2976 602.2777)" className="st4 st5">২২৬</text>
					<text transform="matrix(1 0 0 1 968.7129 671.3032)" className="st4 st5">২৩৯</text>
					<text transform="matrix(1 0 0 1 962.1663 758.2111)" className="st4 st5">২৪২</text>
					<text transform="matrix(1 0 0 1 927.0781 720.0361)" className="st4 st5">২৪১</text>
					<text transform="matrix(1 0 0 1 921.229 674.2267)" className="st4 st5">২৪০</text>
					<text transform="matrix(1 0 0 1 915.3845 599.8684)" className="st4 st5">২২৫</text>
					<text transform="matrix(1 0 0 1 849.1047 608.2778)" className="st4 st5">১৬০</text>
					<text transform="matrix(1 0 0 1 856.2522 682.6748)" className="st4 st5">১৬৫</text>
					<text transform="matrix(1 0 0 1 881.5933 763.8958)" className="st4 st5">২৪৩</text>
					<text transform="matrix(1 0 0 1 861.4497 788.3241)" className="st4 st5">২৪৪</text>
					<text transform="matrix(1 0 0 1 877.3721 822.3756)" className="st4 st5">২৪৫</text>
					<text transform="matrix(1 0 0 1 385.5739 602.2777)" className="st4 st5">৩৯</text>
					<text transform="matrix(1 0 0 1 354.6326 581.3112)" className="st4 st5">৩৮</text>
					<text transform="matrix(1 0 0 1 446.5742 633.2939)" className="st4 st5">৪০</text>
					<text transform="matrix(1 0 0 1 428.0572 596.8683)" className="st4 st5">৪২</text>
					<text transform="matrix(1 0 0 1 117.0572 616.3992)" className="st4 st5">৪৩</text>
					<text transform="matrix(1 0 0 1 163.6031 595.6052)" className="st4 st5">৪৪</text>
					<text transform="matrix(1 0 0 1 138.606 661.2329)" className="st4 st5">৪৫</text>
					<text transform="matrix(1 0 0 1 184.6061 663.1823)" className="st4 st5">৫২</text>
					<text transform="matrix(1 0 0 1 231.7168 703.7959)" className="st4 st5">৫৩</text>
					<text transform="matrix(1 0 0 1 233.777 678.1351)" className="st4 st5">৫৪</text>
					<text transform="matrix(1 0 0 1 279.9102 646.6128)" className="st4 st5">৫৫</text>
					<text transform="matrix(1 0 0 1 283.1591 688.5237)" className="st4 st5">৫৬</text>
					<text transform="matrix(1 0 0 1 280.3139 740.5042)" className="st4 st5">৫৭</text>
					<text transform="matrix(1 0 0 1 319.8412 745.0514)" className="st4 st5">৫৮</text>
					<text transform="matrix(1 0 0 1 323.4429 686.8989)" className="st4 st5">৫৯</text>
					<text transform="matrix(1 0 0 1 378.4278 678.1276)" className="st4 st5">৬০</text>
					<text transform="matrix(1 0 0 1 220.131 549.4724)" className="st4 st5">৪৬</text>
					<text transform="matrix(1 0 0 1 257.8175 507.8875)" className="st4 st5">৪৭</text>
					<text transform="matrix(1 0 0 1 275.2111 548.4739)" className="st7">
						<tspan x="0" y="0" className="st4 st5">৪</tspan>
						<tspan x="6.8" y="0" className="st3 st4 st5">৮</tspan>
					</text>
					<text transform="matrix(1 0 0 1 257.8175 606.0016)" className="st4 st5">৪৯</text>
					<text transform="matrix(1 0 0 1 309.8175 587.8093)" className="st4 st5">৫০</text>
					<text transform="matrix(1 0 0 1 333.5937 627.4462)" className="st4 st5">৫১</text>
					<text transform="matrix(1 0 0 1 421.9601 565.3925)" className="st4 st5">৪১</text>
					<text transform="matrix(1 0 0 1 372.324 720.7118)" className="st4 st5">৬১</text>
					<text transform="matrix(1 0 0 1 502.8275 637.2939)" className="st4 st5">৬২</text>
					<text transform="matrix(1 0 0 1 499.5004 692.5172)" className="st4 st5">৬৩</text>
					<text transform="matrix(1 0 0 1 431.7097 676.7982)" className="st4 st5">৬৪</text>
					<text transform="matrix(1 0 0 1 461.2415 719.5818)" className="st4 st5">৬৫</text>
					<text transform="matrix(1 0 0 1 511.8777 737.2556)" className="st4 st5">৬৬</text>
					<text transform="matrix(1 0 0 1 467.6923 802.3241)" className="st4 st5">৬৮</text>
					<text transform="matrix(1 0 0 1 539.168 845.7672)" className="st4 st5">১৬৮</text>
					<text transform="matrix(1 0 0 1 471.5919 840.5692)" className="st4 st5">৬৯</text>
					<text transform="matrix(1 0 0 1 419.6096 756.3241)" className="st4 st5">৭০</text>
					<text transform="matrix(1 0 0 1 353.6112 783.8241)" className="st4 st5">৭১</text>
					<text transform="matrix(1 0 0 1 404.664 816.527)" className="st4 st5">৭২</text>
					<text transform="matrix(1 0 0 1 238.1112 888.8241)" className="st4 st5">৭৩</text>
					<text transform="matrix(1 0 0 1 270.1112 851.6135)" className="st4 st5">৭৪</text>
					<text transform="matrix(1 0 0 1 289.0072 802.3241)" className="st4 st5">৭৫</text>
					<text transform="matrix(1 0 0 1 334.4921 831.4716)" className="st4 st5">৭৬</text>
					<text transform="matrix(1 0 0 1 348.2928 861.3242)" className="st4 st5">৭৭</text>
					<text transform="matrix(1 0 0 1 389.7207 860.5476)" className="st4 st5">৭৮</text>
					<text transform="matrix(1 0 0 1 303.1112 893.8241)" className="st4 st5">৭৯</text>
					<text transform="matrix(1 0 0 1 266.5893 930.5946)" className="st4 st5">৮০</text>
					<text transform="matrix(1 0 0 1 391.1752 904.8958)" className="st4 st5">৮১</text>
					<text transform="matrix(1 0 0 1 351.3839 925.6874)" className="st4 st5">৮২</text>
					<text transform="matrix(1 0 0 1 296.1112 994.2393)" className="st4 st5">৮৩</text>
					<text transform="matrix(1 0 0 1 368.9142 980.9177)" className="st4 st5">৮৪</text>
					<text transform="matrix(1 0 0 1 309.1112 1084.3241)" className="st4 st5">৮৫</text>
					<text transform="matrix(1 0 0 1 342.6112 1053.6912)" className="st4 st5">৮৬</text>
					<text transform="matrix(1 0 0 1 373.476 1038.7469)" className="st4 st5">৮৭</text>
					<text transform="matrix(1 0 0 1 417.0114 1032.8983)" className="st4 st5">৮৮</text>
					<text transform="matrix(1 0 0 1 380.6112 1085.5306)" className="st4 st5">৮৯</text>
					<text transform="matrix(1 0 0 1 387.3532 1120.9426)" className="st4 st5">৯০</text>
					<text transform="matrix(1 0 0 1 431.7097 940.6343)" className="st4 st5">৯১</text>
					<text transform="matrix(1 0 0 1 449.1112 990.6638)" className="st4 st5">৯২</text>
					<text transform="matrix(1 0 0 1 488.4851 1080.3317)" className="st4 st5">৯৩</text>
					<text transform="matrix(1 0 0 1 478.7393 1032.8983)" className="st4 st5">৯৪</text>
					<text transform="matrix(1 0 0 1 531.374 1132.314)" className="st4 st5">৯৫</text>
					<text transform="matrix(1 0 0 1 530.0709 1175.1986)" className="st4 st5">৯৬</text>
					<text transform="matrix(1 0 0 1 492.3784 1228.4788)" className="st4 st5">৯৭</text>
					<text transform="matrix(1 0 0 1 535.2687 1246.6731)" className="st4 st5">৯৮</text>
					<text transform="matrix(1 0 0 1 449.1112 1231.0796)" className="st4 st5">৯৯</text>
					<text transform="matrix(1 0 0 1 457.6073 1122.9697)" className="st4 st5">১০১</text>
					<text transform="matrix(1 0 0 1 483.9364 1121.2679)" className="st4 st5">১০২</text>
					<text transform="matrix(1 0 0 1 428.0572 1147.9098)" className="st4 st5">১০৩</text>
					<text transform="matrix(1 0 0 1 411.158 1226.5291)" className="st4 st5">১০৪</text>
					<text transform="matrix(1 0 0 1 380.6112 1159.2793)" className="st4 st5">১০৫</text>
					<text transform="matrix(1 0 0 1 335.4821 1162.2042)" className="st4 st5">১০৬</text>
					<text transform="matrix(1 0 0 1 355.2753 1214.8348)" className="st4 st5">১০৭</text>
					<text transform="matrix(1 0 0 1 357.2318 1272.6663)" className="st4 st5">১০৮</text>
					<text transform="matrix(1 0 0 1 626.1111 1318.8241)" className="st4 st5">১০৯</text>
					<text transform="matrix(1 0 0 1 602.4832 1290.2102)" className="st4 st5">১১০</text>
					<text transform="matrix(1 0 0 1 651.6111 1275.3241)" className="st4 st5">১১১</text>
					<text transform="matrix(1 0 0 1 718.4636 1250.7476)" className="st4 st5">১১২</text>
					<text transform="matrix(1 0 0 1 701.7078 1299.3534)" className="st4 st5">১১৩</text>
					<text transform="matrix(1 0 0 1 630.459 1404.9189)" className="st4 st5">১১৪</text>
					<text transform="matrix(1 0 0 1 741.6111 1169.9987)" className="st4 st5">১১৫</text>
					<text transform="matrix(1 0 0 1 774.8577 1240.7451)" className="st4 st5">১১৬</text>
					<text transform="matrix(1 0 0 1 782.0679 1284.9701)" className="st4 st5">১১৭</text>
					<text transform="matrix(1 0 0 1 772.8958 1334.1099)" className="st4 st5">১১৮</text>
					<text transform="matrix(1 0 0 1 626.1111 1097.8752)" className="st4 st5">১১৯</text>
					<text transform="matrix(1 0 0 1 628.7761 1134.2621)" className="st4 st5">১২০</text>
					<text transform="matrix(1 0 0 1 703.6111 1111.4911)" className="st4 st5">১২২</text>
					<text transform="matrix(1 0 0 1 680.1064 1170.0001)" className="st4 st5">১২৩</text>
					<text transform="matrix(1 0 0 1 685.9075 1209.6364)" className="st4 st5">১২৪</text>
					<text transform="matrix(1 0 0 1 613.2375 1214.8348)" className="st4 st5">১২৫</text>
					<text transform="matrix(1 0 0 1 635.9822 1185.27)" className="st4 st5">১২৬</text>
					<text transform="matrix(1 0 0 1 576.2045 1154.407)" className="st4 st5">১২৭</text>
					<text transform="matrix(1 0 0 1 604.1436 1166.8583)" className="st4 st5">১২৮</text>
					<text transform="matrix(1 0 0 1 568.9447 1277.538)" className="st4 st5">১২৯</text>
					<text transform="matrix(1 0 0 1 588.874 628.7441)" className="st4 st5">১৩০</text>
					<text transform="matrix(1 0 0 1 547.2883 663.1823)" className="st4 st5">১৩১</text>
					<text transform="matrix(1 0 0 1 591.1492 678.1354)" className="st4 st5">১৩২</text>
					<text transform="matrix(1 0 0 1 576.8533 715.1632)" className="st4 st5">১৩৩</text>
					<text transform="matrix(1 0 0 1 545.0146 743.4286)" className="st4 st5">১৩৪</text>
					<text transform="matrix(1 0 0 1 552.4866 790.5361)" className="st4 st5">১৩৫</text>
					<text transform="matrix(1 0 0 1 604.7937 783.4906)" className="st4 st5">১৩৬</text>
					<text transform="matrix(1 0 0 1 617.1394 733.3567)" className="st4 st5">১৩৭</text>
					<text transform="matrix(1 0 0 1 541.1161 599.8684)" className="st4 st5">১৪১</text>
					<text transform="matrix(1 0 0 1 591.1492 576.7639)" className="st4 st5">১৪২</text>
					<text transform="matrix(1 0 0 1 588.874 536.4781)" className="st4 st5">১৪৩</text>
					<text transform="matrix(1 0 0 1 726.1006 602.101)" className="st4 st5">১৪৮</text>
					<text transform="matrix(1 0 0 1 635.3323 604.0521)" className="st4 st5">১৫০</text>
					<text transform="matrix(1 0 0 1 644.3794 651.1356)" className="st4 st5">১৫১</text>
					<text transform="matrix(1 0 0 1 684.6067 652.1359)" className="st4 st5">১৫২</text>
					<text transform="matrix(1 0 0 1 732.7974 633.2939)" className="st4 st5">১৫৩</text>
					<text transform="matrix(1 0 0 1 752.9412 656.6841)" className="st4 st5">১৫৪</text>
					<text transform="matrix(1 0 0 1 718.824 702.8176)" className="st4 st5">১৫৫</text>
					<text transform="matrix(1 0 0 1 664.6111 697.8241)" className="st4 st5">১৫৬</text>
					<text transform="matrix(1 0 0 1 784.7808 620.2977)" className="st4 st5">১৫৯</text>
					<text transform="matrix(1 0 0 1 769.3411 692.4218)" className="st4 st5">১৬২</text>
					<text transform="matrix(1 0 0 1 773.7329 728.1584)" className="st4 st5">১৬৩</text>
					<text transform="matrix(1 0 0 1 805.5691 676.1776)" className="st4 st5">১৬৪</text>
					<text transform="matrix(1 0 0 1 823.5967 737.2556)" className="st4 st5">১৬৬</text>
					<text transform="matrix(1 0 0 1 817.2681 776.2412)" className="st4 st5">১৬৭</text>
					<text transform="matrix(1 0 0 1 576.2045 882.8041)" className="st4 st5">১৬৯</text>
					<text transform="matrix(1 0 0 1 583.3524 837.9696)" className="st4 st5">১৭০</text>
					<text transform="matrix(1 0 0 1 657.5818 930.5946)" className="st4 st5">১৭১</text>
					<text transform="matrix(1 0 0 1 685.3645 960.1265)" className="st4 st5">১৭২</text>
					<text transform="matrix(1 0 0 1 740.2708 940.6343)" className="st4 st5">১৭৩</text>
					<text transform="matrix(1 0 0 1 614.9758 908.1454)" className="st4 st5">১৭৪</text>
					<text transform="matrix(1 0 0 1 653.9111 882.8037)" className="st4 st5">১৭৫</text>
					<text transform="matrix(1 0 0 1 684.061 907.5243)" className="st4 st5">১৭৬</text>
					<text transform="matrix(1 0 0 1 1309.1309 856.1632)" className="st4 st5">১৭৭</text>
					<text transform="matrix(1 0 0 1 1336.1111 832.121)" className="st4 st5">১৭৮</text>
					<text transform="matrix(1 0 0 1 1283.5105 838.1073)" className="st4 st5">১৭৯</text>
					<text transform="matrix(1 0 0 1 1266.1443 821.0233)" className="st4 st5">১৮০</text>
					<text transform="matrix(1 0 0 1 1275.2224 806.1313)" className="st4 st5">১৮১</text>
					<text transform="matrix(1 0 0 1 1312.9446 793.2987)" className="st4 st5">১৮২</text>
					<text transform="matrix(1 0 0 1 1315.1313 745.0513)" className="st4 st5">১৮৩</text>
					<text transform="matrix(1 0 0 1 1269.9448 780.5043)" className="st4 st5">১৮৪</text>
					<text transform="matrix(1 0 0 1 1248.1079 802.3242)" className="st4 st5">১৮৫</text>
					<text transform="matrix(1 0 0 1 1230.2781 780.0139)" className="st4 st5">১৮৬</text>
					<text transform="matrix(1 0 0 1 1225.886 753.3154)" className="st4 st5">১৮৭</text>
					<text transform="matrix(1 0 0 1 1250.9446 745.0513)" className="st4 st5">১৮৮</text>
					<text transform="matrix(1 0 0 1 1241.2856 716.4635)" className="st4 st5">১৮৯</text>
					<text transform="matrix(1 0 0 1 1276.8442 740.5039)" className="st4 st5">১৯০</text>
					<text transform="matrix(1 0 0 1 1307.1614 675.1871)" className="st4 st5">১৯১</text>
					<text transform="matrix(1 0 0 1 652.6746 840.5693)" className="st4 st5">১৯২</text>
					<text transform="matrix(1 0 0 1 621.6863 832.121)" className="st4 st5">১৯৩</text>
					<text transform="matrix(1 0 0 1 648.9792 788.3241)" className="st4 st5">১৯৪</text>
					<text transform="matrix(1 0 0 1 679.0935 831.1465)" className="st4 st5">১৯৫</text>
					<text transform="matrix(1 0 0 1 689.5869 764.0573)" className="st4 st5">১৯৬</text>
					<text transform="matrix(1 0 0 1 736.3708 766.0056)" className="st4 st5">১৯৭</text>
					<text transform="matrix(1 0 0 1 715.9021 817.6648)" className="st4 st5">১৯৮</text>
					<text transform="matrix(1 0 0 1 765.3386 852.3148)" className="st4 st5">১৯৯</text>
					<text transform="matrix(1 0 0 1 744.4944 837.1211)" className="st4 st5">২০০</text>
					<text transform="matrix(1 0 0 1 773.9573 804.1804)" className="st4 st5">২০১</text>
					<text transform="matrix(1 0 0 1 771.7852 768.7692)" className="st4 st5">২০২</text>
					<text transform="matrix(1 0 0 1 805.9805 832.0637)" className="st4 st5">২০৩</text>
					<text transform="matrix(1 0 0 1 715.9019 861.3242)" className="st4 st5">২০৪</text>
					<text transform="matrix(1 0 0 1 751.6914 877.2557)" className="st4 st5">২০৫</text>
					<text transform="matrix(1 0 0 1 735.5508 895.7982)" className="st4 st5">২০৬</text>
					<text transform="matrix(1 0 0 1 696.4609 920.5946)" className="st4 st5">২০৭</text>
					<text transform="matrix(1 0 0 1 715.2534 909.4451)" className="st4 st5">২০৮</text>
					<text transform="matrix(1 0 0 1 495.6328 880.2029)" className="st4 st5">২০৯</text>
					<text transform="matrix(1 0 0 1 438.4525 882.8041)" className="st4 st5">২১০</text>
					<text transform="matrix(1 0 0 1 499.5004 980.9177)" className="st4 st5">২১১</text>
					<text transform="matrix(1 0 0 1 541.1161 969.8682)" className="st4 st5">২১২</text>
					<text transform="matrix(1 0 0 1 535.2684 917.8903)" className="st4 st5">২১৩</text>
					<text transform="matrix(1 0 0 1 591.7971 951.6785)" className="st4 st5">২১৪</text>
					<text transform="matrix(1 0 0 1 545.0145 1017.955)" className="st4 st5">২১৫</text>
					<text transform="matrix(1 0 0 1 540.4653 1064.7371)" className="st4 st5">২১৬</text>
					<text transform="matrix(1 0 0 1 586.9249 1084.8823)" className="st4 st5">২১৭</text>
					<text transform="matrix(1 0 0 1 621.6863 986.7664)" className="st4 st5">২১৮</text>
					<text transform="matrix(1 0 0 1 609.9917 1025.7528)" className="st4 st5">২১৯</text>
					<text transform="matrix(1 0 0 1 635.9819 1058.9061)" className="st4 st5">২২০</text>
					<text transform="matrix(1 0 0 1 664.6111 982.8662)" className="st4 st5">২২১</text>
					<text transform="matrix(1 0 0 1 691.865 1009.506)" className="st4 st5">২২২</text>
					<text transform="matrix(1 0 0 1 690.5645 1059.5387)" className="st4 st5">২২৩</text>
					<text transform="matrix(1 0 0 1 1021.4126 720.7118)" className="st4 st5">২৩৮</text>
					<text transform="matrix(1 0 0 1 829.9409 854.6981)" className="st4 st5">২৪৭</text>
					<text transform="matrix(1 0 0 1 873.3982 867.859)" className="st4 st5">২৪৬</text>
					<text transform="matrix(1 0 0 1 791.1543 872.2571)" className="st4 st5">২৪৮</text>
					<text transform="matrix(1 0 0 1 777.6323 949.7292)" className="st4 st5">২৪৯</text>
					<text transform="matrix(1 0 0 1 784.7808 906.5205)" className="st4 st5">২৫০</text>
					<text transform="matrix(1 0 0 1 829.24 900.7188)" className="st4 st5">২৫১</text>
					<text transform="matrix(1 0 0 1 831.5623 934.7855)" className="st4 st5">২৫২</text>
					<text transform="matrix(1 0 0 1 864.7009 934.7855)" className="st4 st5">২৫৩</text>
					<text transform="matrix(1 0 0 1 884.6377 956.226)" className="st4 st5">২৫৪</text>
					<text transform="matrix(1 0 0 1 820.4983 962.0001)" className="st4 st5">২৫৫</text>
					<text transform="matrix(1 0 0 1 851.0347 984.167)" className="st4 st5">২৫৬</text>
					<text transform="matrix(1 0 0 1 856.9048 1030.3)" className="st4 st5">২৫৭</text>
					<text transform="matrix(1 0 0 1 886.1418 1053.6912)" className="st4 st5">২৫৮</text>
					<text transform="matrix(1 0 0 1 901.1406 1009.506)" className="st4 st5">২৫৯</text>
					<text transform="matrix(1 0 0 1 801.4241 986.7664)" className="st4 st5">২৬০</text>
					<text transform="matrix(1 0 0 1 750.991 978.9797)" className="st4 st5">২৬১</text>
					<text transform="matrix(1 0 0 1 757.4553 1022.6501)" className="st4 st5">২৬২</text>
					<text transform="matrix(1 0 0 1 773.9578 1049.5941)" className="st4 st5">২৬৩</text>
					<text transform="matrix(1 0 0 1 812.0664 1025.7533)" className="st4 st5">২৬৪</text>
					<text transform="matrix(1 0 0 1 958.3069 1064.8375)" className="st4 st5">২৬৫</text>
					<text transform="matrix(1 0 0 1 954.3782 1104.8013)" className="st4 st5">২৬৬</text>
					<text transform="matrix(1 0 0 1 947.1682 1133.3)" className="st4 st5">২৬৭</text>
					<text transform="matrix(1 0 0 1 840.666 1075.7762)" className="st4 st5">২৬৮</text>
					<text transform="matrix(1 0 0 1 882.5725 1080.9819)" className="st4 st5">২৬৯</text>
					<text transform="matrix(1 0 0 1 862.1038 1106.9731)" className="st4 st5">২৭০</text>
					<text transform="matrix(1 0 0 1 863.4009 1171.948)" className="st4 st5">২৭১</text>
					<text transform="matrix(1 0 0 1 894.2661 1140.1149)" className="st4 st5">২৭২</text>
					<text transform="matrix(1 0 0 1 870.0728 1304.6251)" className="st4 st5">২৭৩</text>
					<text transform="matrix(1 0 0 1 802.9719 1059.5387)" className="st4 st5">২৭৪</text>
					<text transform="matrix(1 0 0 1 773.7329 1089.4498)" className="st4 st5">২৭৫</text>
					<text transform="matrix(1 0 0 1 809.47 1112.8223)" className="st4 st5">২৭৬</text>
					<text transform="matrix(1 0 0 1 816.137 1178.1793)" className="st4 st5">২৭৭</text>
					<text transform="matrix(1 0 0 1 981.8892 1155.9015)" className="st4 st5">২৭৮</text>
					<text transform="matrix(1 0 0 1 1032.3391 1168.0507)" className="st4 st5">২৭৯</text>
					<text transform="matrix(1 0 0 1 1008.7512 1204.3855)" className="st4 st5">২৮০</text>
					<text transform="matrix(1 0 0 1 1047.7341 1223.3873)" className="st4 st5">২৮১</text>
					<text transform="matrix(1 0 0 1 1078.199 1228.4789)" className="st4 st5">২৮২</text>
					<text transform="matrix(1 0 0 1 1120.3784 1249.5928)" className="st4 st5">২৮৩</text>
					<text transform="matrix(1 0 0 1 1096.561 1263.974)" className="st4 st5">২৮৪</text>
					<text transform="matrix(1 0 0 1 1066.9043 1262.5022)" className="st4 st5">২৮৫</text>
					<text transform="matrix(1 0 0 1 1040.5315 1269.9237)" className="st4 st5">২৮৬</text>
					<text transform="matrix(1 0 0 1 1047.7341 1290.424)" className="st4 st5">২৮৭</text>
					<text transform="matrix(1 0 0 1 1100.4033 1287.424)" className="st4 st5">২৮৮</text>
					<text transform="matrix(1 0 0 1 1071.9116 1308.0245)" className="st4 st5">২৮৯</text>
					<text transform="matrix(1 0 0 1 1126.6885 1318.8245)" className="st4 st5">২৯০</text>
					<text transform="matrix(1 0 0 1 1126.6892 1372.1066)" className="st4 st5">২৯১</text>
					<text transform="matrix(1 0 0 1 1090.6553 1381.9359)" className="st4 st5">২৯২</text>
					<text transform="matrix(1 0 0 1 972.0625 1244.3514)" className="st4 st5">২৯৩</text>
					<text transform="matrix(1 0 0 1 1102.5098 1434.2323)" className="st4 st5">২৯৪</text>
					<text transform="matrix(1 0 0 1 1088.2202 1489.3817)" className="st4 st5">২৯৫</text>
					<text transform="matrix(1 0 0 1 1126.6887 1526.4701)" className="st4 st5">২৯৬</text>
					<text transform="matrix(1 0 0 1 1134.3167 1594.8635)" className="st4 st5">২৯৭</text>
					<text transform="matrix(1 0 0 1 1083.3467 1045.2452)" className="st4 st5">২৯৮</text>
					<text transform="matrix(1 0 0 1 1168.2776 1165.7725)" className="st4 st5">২৯৯</text>
					<text transform="matrix(1 0 0 1 1208.9048 1439.588)" className="st4 st5">৩০০</text>
				</g>
				{/* Seat no end */}
				{/* <g className="maps-special-notes">
                    <path className="st0" d="M369.5,249.8c-0.5,0.4-1.1,0.5-1.9,0.2c-3.8-1.5-4.8-23.9-5.9-26.2c-0.1-0.2-0.1-0.6-0.1-1.1
	c0.5-4.2,6.4-16.4-1.2-19.3c-8.5-3.2-13.8-13.7-13.8-17c0-2-2.6-6.1-4.7-9c-6.6,1.9-18.6,1.7-19.5-4.7c-1-7.2-13.1-6.8-15.1-5.3
	s2.7,7.9-1.9,11.2s-7.9,5.8-10.5-1.4s0-16.3-4.6-16.3c-3,0-7.5,1.1-10,0.6c-0.2,0.8-0.3,1.6-0.5,2.6c-2.3,11.8,4.1,14,7.2,19
	s-2.4,1.4-1.9,11.8c0.5,10.4-5.9,28.2-5.9,28.2c1.7,2.6,1.7,5.4,0.9,8.1l0,0l0,0c-1.5,4.8-5.6,9-7.7,10.8l2.8,22.4l5.9,0.6l7.9,6.6
	l5.2,27.5l7.2,0.7l-1.4-0.1c0.1,2.4,0.5,6,2.1,9.9c0.2,0.4,0.3,0.9,0.5,1.3c1,0,2.2,0,3.4,0c3.2,0,5.3,9.8,5.3,9.8h4.6
	c0,0,1.5,2.8,5.9,2s0-1.3,1.9-10.5s1.3-8.5,0.7-9.8c-0.6-1.3,7.7-2.6,11.8-2.6s14.4-2.7,16.3-4.6s7.3,1.3,7.9-0.7s7.2-13.7,5.2-17
	c-1.4-2.3-1.5-10.8-1.4-15.9c1.6-1.9,3.1-3.4,4.1-3.3c2.6,0.2,5.6-1.2,5.6-1.2L369.5,249.8z"/>
                    <path className="st0" d="M267,243.1c-3.2,0-7.4-0.3-10.1-0.3c-4,0-10.9-9.4-11-13.6c-1.2-0.2-2.4-0.4-3.4-0.2c-2.3,0.4-5.9,9.8-7.2,11.8
	s-5.3-2-9.2-1.3s-5.9,10-5.9,15.1s2,2.5,1.3,3.9s-7.2,5.9-7.8,7.8c-0.1,0.4-0.3,0.7-0.5,1c0,2.3-0.3,4.5-0.9,4.9
	c-0.2,0.1-0.5,0.2-0.8,0.4c0.2,0.3,0.5,0.6,0.8,1c-0.3-0.4-0.6-0.7-0.8-1c-1.8,0.8-5,2-4.4,4.2c0.7,2.6,2.4,5.9-3.9,6.6
	s-14.4-0.7-17.1,5.2c-2.6,5.9-4.1,24.6-1.3,29.5s11.3,7.9,9.9,11.8c-1.2,3.4,0.7,7.5-3.3,9.5c11.1,7.6,6.9,18.7,6.9,18.7
	s14.8,19.4,32.2,24.6c0,0,0,0,0-0.1c1.4,0.4,2.7,0.7,4.1,1c19.1,2.9,13.5,11.4,26.9,9.8s-11.9-6.3,11.5-8.4c0,0-0.4,3.9,4.2,3.1
	s0-7.8,0-7.8s0.4,0.2,0.9,0.5 M278.2,380.8c1.4,0.7,4,1.8,5,0.9c0.5-0.5,1.4-1.1,2.5-0.9l0,0c1.6,0.2,3.6,2,4.9,8
	c2.3,10.1,5.1,10.1,2.2,25l3.7,3.2c0,0,0.1,0.4,0.2,1h0.2c1.1,3.7,6.5,16.7,30.9,24.5c0,0,11.6-1.9,10.9,6.8
	c5.8,1.2,15.6,3.6,19.2,6.4c5.1,4.1,16,0,17.6,0s13.6,6.8,15,6.5s19.7,2,20.4,2.7s1.9-2,1.3-2.7s-9.6-13.6-9.9-14.4s4.6-4.6,4.6-4.6
	s-1.3-1.9-3.9-3.2c-2.6-1.3-10.9-13.7-11.1-17.7s-16.4-9.2-16.4-10.5s0-5.3-1.3-6.6s-9.2-19.6-9.9-20.9c-0.4-0.8,0-5.7,0.4-9.2
	c-1.3,1-2.2,1.6-2.2,0.3c0-1,0.2-2,0.4-2.9h-0.1c0.2-1.3,0.4-2.5-0.4-3.3c-1.3-1.3-25.3-17.6-25.3-17.6l-0.9-9.3l-13.1-8.5l-2.7-7.8
	l3.5-3.2l-0.3-0.7c-0.3,0.3-0.8,0.4-1.8,0.6c-4.4,0.8-5.9-2-5.9-2h-4.6c0,0-2.1-9.8-5.3-9.8c-1.3,0-2.4,0-3.4,0
	c-0.2-0.4-0.3-0.9-0.5-1.3c-1.6-3.9-2-7.6-2.1-9.9l-5.8-0.6l-5.2-27.5l-7.9-6.6l-5.9-0.6l-2.8-22.4c-0.5,0.4-0.9,0.7-1.1,0.8
	c-0.5,0.3-2.2,0.3-4.3,0.3"/>
                    <path className="st0" d="M422,289.1l3.9,8l-1.3,0.6l7.9,2.1l4.6,4.5l17,2.1v-9.3l6.5-1.2l5.3,7.1c0,0,7.1-2.7,7.2-9.1s4.3-7.4,5.2-8.8
	c0.9-1.4,0.7-4.2-2.6-6.3c-3.3-2.1-7.7-8.1-9.1-12.2s-7.3-9.4-8.1-11.4c-0.5-1.2,0.1-4.2,0.7-6.5c-0.6,0-1.2,0-1.8,0
	c0,0-1.2-0.7-2.9-1.7l-0.1,0.1l0.1-0.1c-3.6-2.3-9.2-6.3-8.8-9.2c0.5-4.2-14.6,9.6-19.8,5c-1.8-1.6-6-5.6-10.8-10.1
	c-0.1,0.1-0.3,0.1-0.4,0.2l0.4-0.2c-8.8-8.1-19.7-17.9-22.8-17.9c-4.8,0-17.4-7-17.4-33s-11.5-37.3-18.4-48.5c0,0-12.5,0.7-15.8-2.6
	s-5.1-10.2-10.4-9.1s-11.9,7.7-11.8,11.1s-2.6,10.3,3.6,13.8s15.8,6.8,14.3,10.3s-5.5,5.9,2.4,8.6c7.9,2.7,10.9,8.4,5.4,11.1
	c-0.6,0.3-1.4,0.6-2.3,0.9c2.1,3,4.7,7.1,4.7,9c0,3.3,5.3,13.8,13.8,17s0.2,18.1,1.3,20.4c1.1,2.3,2.1,24.7,5.9,26.2
	c0.7,0.3,1.3,0.2,1.8-0.2l4.4,7.3l10.8,4.7l20.4,16.3l6.6,1.8l10.3,9L422,289.1c0.1-0.1,0.1-0.2,0.2-0.3"/>
                    <path className="st0" d="M657.1,497.7c0,0,0.6-16.6,0.8-24.6c-1.1-0.3-2.2-0.6-3.4-0.9c-11.6-3.1-22.4-5.8-31.6-8.5v-0.1
	c-12.2-3.5-21.3-6.9-25.3-10.6c-3.9-3.7-10.8-7.5-17.4-9.8c-2.1,3.3-6.7,10.5-8.2,10.8c-1.9,0.3-5.5,1.5-5.7,2.1s-4.1,21.1-4.1,21.1
	l4.6,2.6l-2.6,18.2c2.3,4.2,5.3,9.8,6.5,11.3c0.5,0.7,1.2,1,2,1.2c-1.7,2.4-4.3,5.8-7.2,7.4c-4.8,2.6-1.3,10.5-1.3,12.5
	c0,0.5-0.1,1-0.3,1.4l2.9,7.1l-0.1,0.9c1.8-0.1,3.6-0.3,4.7-0.3c2.6,0,4.8,6.3,4.8,6.3s13.2,6.2,15.5,6.2s29.5,2.6,29.5,2.6l0.3-1
	c5,1.6,18.5,5.8,19.9,7c2,1.3,8.4-0.8,10.6-2.7s0.4-8.6-1.4-11.1s4.2-4.8,4-6.6s-5.9-3.9-5.9-3.9s3.4-6.7,2.6-14.4
	c-0.8-7.7,5.9-8.6,8.5-8.8s3.2-6.2,3.8-8.8S657.1,497.7,657.1,497.7z"/>
                    <path className="st0" d="M413.4,706.6c-3.3-1.3-4.6-12.6-5.3-16.4c-0.4-2.2-4.1-4.2-7.1-5.8c0.9-0.2,1.6-0.4,2-0.7
	c2-1.3,5.2-7.9,4.6-9.8c-0.6-1.9,15-23,13.1-24.3c-1.2-0.8-1.7-7.2-1.9-11.6c-3.6-0.8-8.2-3.4-9.7-4.8c-2.2-2-8.7,2.2-10.7,5
	s-6.3,8.9-7.2,4.1s-3.9-14.3-7.5-15s-6.3,9-8.9,5.8c-2.5-3.1-2.5-9.9-2.6-12.2c-1.4,1.6-3.8,3.9-5.9,4.4c-3.3,0.7-7,8.9-5.9,14.4
	s0.7,11.1,1,12.3c0.3,1.1-6,4.6-9.3,4.7c0,0.1,0,0.1,0,0.2c-0.3,0-0.6,0-0.9-0.1c-2.7-0.7-11.8-3.9-11.1-4.6
	c0.7-0.7-10-7.2-13.4-7.8c-0.5,2.8-1,6.6-1,7.8c0,1.9-2.3,4.4-8.5,3.3c-3.8-0.7-7.3,1.1-9.5,3c3.3,2.6,7.1,5.9,7.5,6.8
	c0.6,1.7-5.2,5.3-6.6,6.6s0.7,18.3,0.7,21s-5.2,11.1-7.7,11.5c-2,0.3-3.4,3.7-5,5l0,0c-0.4,0.3-0.7,0.5-1.1,0.5c-0.3,0-0.6,0-1,0
	c2.1,4.4,5.8,11.1,8.9,12.7c4.6,2.3,8.2,11.9,8.2,13.5c0,1.5-6.2,3.9-7.5,7.2s-3.7,12.1-2.7,13.8s6.7,4.6,4.6,8.5
	c-1.5,2.9-4.7,6.1-6.5,7.6c2.2,0.9,4.6,1.9,6.1,2.2c3.5,0.7,7.2-2.4,11.6-3.9s17.7,1.3,19.6-2s-0.6-4.6,0.3-7.2
	c0.9-2.6,6.4,1.2,6.9,3.3c0.6,2.1,12.8-3.1,15.8-3.3c1-0.1,1.7-1.1,2-2.6c2.9-0.3,7.3-0.7,10.3-0.7c4.7-0.1,4-3.9,7.3-7.2
	s7.5-1.3,9.8-3.3s5.2-7.7,6.4-11.3c1.2-3.6,6.1-7.6,6.1-7.6s9.1-15.1,11.7-16.4C416,711.9,416.7,707.9,413.4,706.6z"/>
                    <path className="st0" d="M1008.7,748.6c-2.3-1.7-6-15-7.8-22.3c0.1,0,0.2,0,0.3,0c4.6-0.6,5.2-12.8,5.1-15.8c-0.2-2.9-4.5-6.6-5.8-8.6
	s2.9-16,3.3-20.3c0.4-4.3-0.4-10.9,0.8-15.7s7-15.7,5.7-19s1.1-8.5,3.9-9.7c1.7-0.8,2.3-4.5,2.5-7.1c-2.9-1.1-6.4-2-7.7-2.9
	c-0.9-0.6-0.3-3.5,0.8-7c-3.2-0.4-7.6-1-10.7-1.5c-5.3-0.7-11,2.6-14.3,4s-8.4-1.7-11.8-2c-2.9-0.3-8.4-1.7-10-3.6
	c-2.8,1.5-5.7,3-6.4,3c-0.8,0.1-3.5-0.7-6.3-2.2l-0.1,0.1c-1.8-1-3.5-2.3-4.7-3.8c-3.2-4-9.2-1.3-8.6,0.7s-7.8,7.9-9.8,9.8
	c-2,1.9-6.3,12.8-7.5,13.4s-5.6,6.3-13.4,8.9c-1.1,0.4-2,0.4-3,0.1c-2.6,6.2-7.9,17.9-10.5,19.5c-3.6,2.2,4.9,6.6,4.9,6.6
	s9.9,4.4,9.9,7.8c0,3.3-6.6,9.9-5.3,11.2c1.1,1.1,4.9,4.5,6.2,7.4c-3,0.9-6.6,2.4-6.2,4.4c0.7,3.3-0.4,9.9-3.4,11.1
	c-3.1,1.3-10.8,9.7-8.7,11.2s4.9,11.7,8.2,12.4s16.4,1,17.1,2.4c0.3,0.8,2.9,2.3,5.4,3.7l0.1-0.1c-1,1.4-1.5,2.6-1,3.2
	c2,2.6-2.7,6.9-2.3,9.2c0.3,2.2,2.8,13.4,2.3,16.3s0.7,14.5,3.3,17.4s-1.3,8.8-1,10.8c0.2,1.2,2.5,5.1,4.3,8.1
	c2.8-1.5,5-2.2,5.9-1.5c3.9,2.6,11.3,6.5,13.1,4.6s2.5-21.7,0.6-25.6c-1.9-3.9-8.2-17.2,39.3-3.3c34.7,10.1,30.8-16.3,29.2-29.9
	C1012.8,752.1,1010.4,749.8,1008.7,748.6z M921.5,743.9L921.5,743.9C921.4,743.9,921.5,743.9,921.5,743.9z"/>
                    <path className="st0" d="M649,878.9c-0.1-0.1,4.3-11.3,4.3-12.5c0-0.9-0.8-10.1-1.1-14c-1.8,0.3-4.6,0.7-5.5,0.3
	c-1.3-0.7-13.1,3.3-14.1,3.4c-0.5,0.1-3.7-4.4-6.7-8.8l0,0c-3.1-4.5-6-9-6-9l-14.5-19.7l-1.9-9.8l-9-5.4c-0.2,1.6-0.8,2.6-2.7,2.7
	c-3.4,0.1-9.4-5.1-12.6-3.8c-3.2,1.3-6.6,3.9-8.5,5.2c-0.3,0.2-0.6,0.5-1,0.8l0,0c-2.2,1.9-5.7,5.4-9.5,5.1
	c-4.4-0.4-12.6,0.9-19.6,0s-11.5,1.7-9.9-1.4c1.1-2.1,1.1-7,2.8-10.9l-7.7,1.8H517c0.5,3.6-4.1,12-5.9,12.5c-0.1,0-0.3,0.1-0.6,0.1
	l11.1,37.2l11.1,3.9l17,22.3c0,0,0-0.1,0.1-0.2c4.2,9.2,19,21.2,19,21.2l22.3,7.6c0,0,13-20.1,13.7-21.4s24-5.9,24-5.9l18.6,8.5
	l9.1-1.9C656.5,886.8,649.1,879,649,878.9z"/>
                    <path className="st0" d="M336.2,878.9c0-3.3-2-11.1-3.3-11.8s-7.2-5.9-12.5-4.6s-7.8-6.5-9.8-8.5c-1.1-1.1-6.6-3.7-11.4-5.9
	c-1.5,2.7-2.9,4.9-3.7,5.3c-2.7,1.3-7.8,15.7-9.1,16.3c-1.3,0.6-9.2,10.5-9.9,10.5c0.4,3.7,0.6,8.4-0.6,9.2
	c-0.3,0.2-0.7,0.4-1.2,0.6l-0.1-0.1c-3.4,1.5-11.3,4.1-11.9,5.6c-0.7,1.7-10.5,8.2-15.1,9.5c-3.1,0.9-5.3,6.8-6.4,10.6
	c0.8,2,10.5,26.2,28.8,35.3c0,0,18-7.9,4.5,9.2c-0.4,0.5-0.7,0.9-1,1.3c-0.9,3.1-2.7,11.2-1.8,20.6c4.3-0.4,12.4-1.2,15.1-0.6
	c3.6,1,21.2-9.4,25.8-11.4c4.6-2,5.7-26,5.2-30.2c-0.3-2.9,1.1-4.9,1.9-5.9c-0.9-0.7-0.9-2.3-0.7-3.6c1.1,0.3,2,0.7,2.8,1
	c4,1.9,7.2-5.9,9.8-9.8c2.6-3.9,3.9-27.7,4.6-31.4S336.2,882.2,336.2,878.9z"/>
                    <path className="st0" d="M684.7,1190.1c0.3-2,1.8-3.4-3.4-3.4s-8.4-5.8-10.2-8.2s-9.3-4.8-11.8-10.1c-1.4-3-0.3-6.8,0.9-9.5
	c-1.9-1.4-4-3.2-5.5-4.4c-2,0.3-4.4,0.7-5.7,0.9c-2.6,0.3-8.8-6.6-11.5-5.2c-2.3,1.2-1.6,4.1-3,5.4c1.1,2.6,2.4,5.7,2.4,5.7
	s-8.7,10.9-8.5,15.7s-11.3,3.5-11.8,7.9c-0.5,4.2,2.9,9.3,2.7,11.5l0,0c0,0.1,0,0.2-0.1,0.3c-0.7,1.9-13.7,3.8-13.1,7.2
	s-4.7,16-0.7,19.5s10.8,4,10.5,7.3s-2.9,8.5-7.2,9.2s-7.4,0.7-8.6,5.3c-0.9,3.5-4.1,11.6-6.8,15.1c2.4,2,5,4,7.6,4.7
	c2.9,0.7,4.7,3.2,5.6,5.8c2.4-0.6,6.1-1.4,7.5-0.8c2.1,0.9,8.5-8.5,11.1-12.4s11.8-10.7,11.8-13.1s0.6-9.8,2.6-12.4
	c1.1-1.4,2.4-4,3.4-6.2c0.9,0.6,1.6,0.9,1.8,0.9c0.6,0,10.5-5.9,13.4-8s10.9-9,10.9-11s5.2-3.9,9.8-3.9s7.9-4.6,8.5-6.6
	S684.4,1192.1,684.7,1190.1z"/>
                    <path className="st0" d="M1045,1125.3c2.6,5.3,5.6,21.2,13.2,19.6s20.9,4.6,19.6,13.1s8.5,12.8,13.8,15.7s9.1-11.1,14.8-14.3
	s-4.3-19.6,0.2-29.6s7.2-13.7,16.4-18.3s12.9-19.4,13.8-21s-9.2-25.5-2-28.8s21.8-7.9,17-11.1s-15.7-59-15.7-59l-14.4-13.1
	c0,0,19.7-17.7,19-21.6c-0.7-3.9-4.6-27.5-4.6-27.5l-11.6-26.2c-0.9,0.1-2.1-0.1-3.5-0.7c-9-3.9-19-21.3-22.9-22.8
	s-8.8,11.8-7.8,24.1s9.1,46.6,5.2,49.8s-25.6,15.1-29.5,20.3s-13.1-1.3-13.1,1.3s-9.8,21.5-5.9,32.7s15.7,48.5,13.1,53.1
	c-2,3.6-18,18.9-29.1,25.4c3.4,7.7,5.8,20.4,6.6,28.7C1038.7,1126.5,1042.4,1120,1045,1125.3z"/>
                    <path className="st0" d="M1096.8,1182.2c-1.6,5.2,2,8.6,3.3,16.1s5.5,22.8,9.2,22.7s4.5-20.1,6.5-24.5s14.2-4.8,17.6,0.9
	s9.5,24,9.9,30.7s0.1,10.7,0.2,16.2s-2.8,13.1,2.1,16.8s26.3,9.4,29.8,5.7s19.7-2.6,24.3-1.3s38.1,25,38.5,30.8s3.9,52.2,9.3,57
	c4.7,4.2,14.6,41.3,24.7,49.6c0.1-0.2,0.1-0.4,0.2-0.5c2-2.6,2.6-14.5,0-24.3s-15.6-47.9-13.7-51.7s5.2-4.5,6.5-2.6
	s5.8,3.1,0.6-15.8s-5-38.9-11.1-60.2s-8.7-80.7-12.4-88.5s-12-8.8-14.5-29.5s-23.6-27.5-22.9-39.3s-2.4-52.6-4.9-64.3
	s8.8-10.4,8.8-13s-5.9-20.2-5.2-25.5c0.7-5.3-24.2-76-24.2-76s0.7-7.5,0.6-19.7s-5.2-15.5-9.5-13s-1.6,6.4-3.6,9.7
	s0.8,11.6-4.6,11.2c-5.4-0.4-3.8-14.4-7.8-14.4s-5.4-8.6-8.5-9.3s-6.4,11.7-12.4,14.4c-5,2.3-4.2,11.9-9.1,12.6l11.6,26.2
	c0,0,3.9,23.6,4.6,27.5s-19,21.6-19,21.6l14.4,13.1c0,0,10.9,55.8,15.7,59s-9.8,7.8-17,11.1s2.9,27.2,2,28.8s-4.6,16.4-13.8,21
	s-11.9,8.3-16.4,18.3s5.6,26.4-0.2,29.6c-4.2,2.3-7.3,10.4-10.8,13.5C1096.7,1175.9,1097.6,1179.6,1096.8,1182.2z"/>
                    <path className="st0" d="M1292,1559c-0.5-2.6-17.6-60.2-19.6-85.8c-1.9-24.6-2-64.9-0.2-70.3c-10.1-8.3-20-45.4-24.7-49.6
	c-5.4-4.8-8.9-51.2-9.3-57s-33.9-29.5-38.5-30.8s-20.8-2.4-24.3,1.3c-3,3.1-18.4-0.4-26.2-3.8c-1.2,2.4-2.1,5.4-1,8.1
	c2.1,5.2,2,8.6,1.7,16.8s2.7,26.2,5.2,33.9s-3.1,13.7-1.2,18s4.7,1.2,3.6,7s6,7.7,7.4,11.1s4,12.3-0.6,15.6s-9.3,8.8-8.6,10.8
	s-5.4,9-11.8,8.9c-6.3-0.1-7.9,2.5-7.1,7.9s0.5,18.5,7.8,19.6s9.1-1.8,14.4-6.5s9.9,2.7,4.6,8.5s-28.8,21.2-22.6,31.8
	s7.9,13.4,14.1,18.7s1.6,16.7,7,22.1s11.3,4,12,11.9s5.5,25-1.5,24.3s-22.7-6.6-22.7,0.6s2.6,16.7,5.4,22.1s6.8,10.6,5.1,15.1
	c-1.6,4.3-2.7,12.9,2.6,18.8c2.5-3.2,7.8-6.4,7.8-13.5c0-11-9.9-29.5,3.3-31.3s7.2-23.7,16.4-21.7s15.5-10.6,20.3-13.7
	s13.2,28.9,19.7,30.8s26.4-7.6,29.4-4.6s6.6,29.5,9.2,33.4s13.9,0.2,15.7-5.9S1292.5,1561.6,1292,1559z"/>
                    <path className="st0" d="M780.4,873.7c0.9-0.9,1.4-2.2,1.7-3.5c-0.5-0.6-1.8-2.3-2.4-4.4c-0.7-2.6-3.3-3.5-5.9-5.2
	c-2.6-1.7-7,1.7-7.8,3.9s-8.2-5.5-9.2-6.9s0.6-4.9,1.3-6.9c0.4-1.1,0-2.9-0.5-4.4c-1-0.9-3.2-2.6-4.7-1.5c-2,1.4-0.7,7.2-3.3,7.9
	c-0.9,0.2-1.5-0.3-1.9-1c0,0,0-0.1,0.1-0.1c-1.1-1.7-1.2-4.8-0.8-6.1c0.6-2-2.7-5.8-4-6.5c-0.9-0.5-5.7-2.3-8.8-3.4
	c-0.4,0.9-0.9,1.5-1.7,1.5c-2,0.1-8.5,2.5-9.1,5.1c-0.5,2.1-5.9,3.5-9.2,3.9c-0.6,1.2-1.3,2.9-1.3,3.3c0,0.7,0.2,5.1,1,5.9
	s1,4.9,1,6.6s-1.3,5.2-1.3,6.5s1.5,2,1.7,4.6s2.3,3.3,2.3,5.9c0,2.6,2,6.5,2.6,7.2c0.3,0.4,1.2,1.3,2,2c-2.5,1.4-6,3.6-5.4,4.6
	c0.1,0.1,0.2,0.3,0.4,0.5l-5.5,1.5l-5.8,4.8l4.4,6.9l-4,3.4l-13.5,5.6c2.8,5.4,7.4,13.8,8.3,12.8c0.6-0.7-0.4,1.5-1.5,3.8l11.8,2.8
	c0.2-0.6,0.5-1.4,0.9-2.1l-1.9-1.9l0,0l1.8,1.8c0.6-1.4,1.5-2.7,2.6-3.2c2.5-1.3,7.9-1.4,10-0.9c1.4,0.4,4.8,0.1,6.8-0.1
	c-0.1,1.5,0.1,2.9,1.6,2.9c2.7,0-0.9-7.1,2.6-9.1s9.3-0.7,12.5-3.3c1.8-1.4,4.5-4.3,6.7-6.5l-0.8-0.7l1.3-10.5l8-4.7
	c0.4,0.4,0.8,0.7,1.1,0.8c2.7,0.6,4.1,4.6,7.9,3.9s7.8-1.9,8.5-3.9c0.4-1.1,0.7-4.4,0.9-7c-0.5-0.3-1-0.6-1.5-0.9
	C775.2,886.1,777.7,876.3,780.4,873.7z M723.5,887.4c-0.4,0.2-0.8,0.4-1.2,0.7C722.7,887.8,723.1,887.6,723.5,887.4z"/>
                    <path className="st1" d="M264.1,166.8" />
                    <path className="st1" d="M264.1,166.7" />
                    <path className="st0" d="M225,195c-0.6,0.5-1.3,0.7-2.2,0.6c-4-0.6-4.6-3.9-5.9-5.9s-12.4,0.6-13.7,2s-12.5-1.4-15.1-2s-3.1,5.2-8.5,5.1
	c-3.4-0.1-8.6-3.9-12-6.8c2.3-1.2,12.4-7.2,8.8-11.5c-4-4.8,2-17.9,9.7-19s5.3-5.3,5.3-5.3c14.3-4.1,5.4-14.7,10.4-10
	c4.9,4.7,6.7,3.7,8.8,3.2c2.2-0.6,7,3.2,7.5,0.3s-6.3-25.5-8.4-28.2c-2.1-2.7-11.9-1.3-15.7-2.6c-3.8-1.3-7-4.6-11.8-5.9
	s-3.2,3.8-3.2,3.8c0.5,8-2,6.7-2,6.7c-7.4-9.4-4.6-13.8-2-15.1c2.6-1.3,9.8-26.1,9.8-26.1c2.9-0.8,4-1.4,4-1.4
	c-2.5-0.7-2.7-2.1-2.7-2.1l2.1-1.2c1-4.5,4.7-4.7,4.7-4.7c1.5,0,1.2,7.4,1.5,11s1,9.5,5.5,14.8s4.6-1.5,8.5-0.8c4,0.7,3.4,6,7,5.3
	s1.9,6.8,6.2,8.5s5.8,5.9,8.4,9.8c2.6,3.9,4.6-2.1,11.8-3.3s0.1,9.2,9.9,12.5s8.5,10.5,7.8,13.8s8.4,7.9,13.8,7.2
	c5.1-0.6,5.9,5.9,5.3,10.5c0,0-0.1,0.5-0.1,0.7c-0.3,1.6,0.5,2.3,1.8,2.6c-0.1,0.7-0.3,1.6-0.5,2.6c-2.3,11.8,4.1,14,7.2,19
	s-2.4,1.4-1.9,11.8s-5.9,28.2-5.9,28.2c5.4,8.6-6.6,19-7.9,19.7s-9.8,0-14.4,0s-13.1-12.5-10.5-15.1s2.5-5.4,0-12.5
	s-10.1-8.4-15.1-11.1C228.1,202.4,226,197.9,225,195L225,195"/>
                    <path className="st0" d="M147.4,299.7c2.6-1,4.7-1.5,6-0.6c3.9,2.5,21.1,31.2,35.4,38.7c0.9,0.5,1.8,1,2.6,1.6c4-2,2.1-6.1,3.3-9.5
	c1.4-3.9-7.1-6.9-9.9-11.8s-1.3-23.6,1.3-29.5c2.7-5.9,10.8-4.5,17.1-5.2s4.6-4,3.9-6.6c-0.7-2.6,3.9-3.9,5.2-4.6
	c0.6-0.3,0.8-2.6,0.9-4.9c0.2-0.3,0.4-0.6,0.5-1c0.6-1.9,7.1-6.4,7.8-7.8s-1.3,1.2-1.3-3.9s2-14.4,5.9-15.1c3.9-0.7,7.9,3.3,9.2,1.3
	s4.9-11.4,7.2-11.8c1-0.2,2.2,0.1,3.4,0.2c0-0.7,0.1-1.2,0.5-1.5c2.6-2.6,2.5-5.4,0-12.5s-10.1-8.4-15.1-11.1
	c-3.2-1.7-5.3-6.2-6.3-9.1c-0.6,0.5-1.3,0.7-2.2,0.6c-4-0.6-4.6-3.9-5.9-5.9s-12.4,0.6-13.7,2s-12.5-1.4-15.1-2s-3.1,5.2-8.5,5.2
	c-0.4,0-0.8-0.1-1.2-0.1l0,0c-3.4-0.7-7.8-4-10.9-6.6c-0.3,0.2-0.5,0.3-0.5,0.3s-24.7,6.8-35.3,15c0,0-8.7,20.4,0,21
	c0,0,3.5,8.8-8.6,16.5s-13.8,47.6-10.4,53s3.3,9.8,15,10.8c7.7,0.6,14.6-3.1,19.6-4.9L147.4,299.7z"/>
                    <path className="st0" d="M472.4,347.6c-0.7-0.6-3.9-2.6-4.5-6.6s-0.7-11.8-3-13s-1-7.9-2.3-9.9c-0.9-1.4-5.7-8-8.5-11.7l-17-2.1
	l-4.6-4.5l-7.9-2.1l-0.4,0.2l0,0l1.7-0.8l-4-8.2l-10.3-9l-6.6-1.8l-20.4-16.3l-10.7-4.7c0,0-3,1.4-5.6,1.2c-1-0.1-2.5,1.4-4.1,3.3
	c-0.1,5.1,0,13.6,1.4,15.9c2,3.3-4.6,15-5.2,17c0,0.1-0.1,0.2-0.2,0.3c-1.1,1.3-6-1.4-7.7,0.4c-1.9,1.9-12.2,4.6-16.3,4.6
	s-12.4,1.3-11.8,2.6c0.6,1.3,1.2,0.6-0.7,9.8c-1.5,7.1,0.8,9-0.1,9.9l0.3,0.7l-3.5,3.2l2.7,7.8l13.1,8.5l0.9,9.3
	c0,0,24,16.3,25.3,17.6s0,3.9,0,6.2c0,1.3,1,0.7,2.4-0.4h0.1l-0.1,0.1c-0.4,3.5-0.8,8.4-0.4,9.2c0.7,1.3,8.6,19.6,9.9,20.9l0.1,0.1
	v-0.1c1.2,1.4,1.2,5.2,1.2,6.5s16.2,6.5,16.4,10.5c0.2,4,8.5,16.4,11.1,17.7c2.6,1.3,3.9,3.2,3.9,3.2s-0.3,0.2-0.6,0.5
	c5-0.2,12-0.5,12.4-0.5c0.6,0.1,5.3-1.8,6.1-4.5s-0.2-11.8,1-13.8c1.1-1.8,12.4-23,14.8-26.9h0.1c-0.1,0.1-0.2,0.3-0.3,0.5
	c4.5-1.5,8.6-7.6,9.1-7.6c0.6,0,0.7-8.5,0-10.5s-4.6-2.6-5.9-2.6s-2-3.9-2-3.9s-0.9-0.5-1.9-1.3c3.8-3.9,10.4-9.4,13.1-9.8
	c3.9-0.6,8.5-0.7,9.2-4s6.8-4.6,7.2-7.2C469.4,350.1,471.1,348.7,472.4,347.6L472.4,347.6z M360.5,295.1c-0.1-0.1-0.2-0.2-0.3-0.3
	C360.3,294.9,360.4,295,360.5,295.1L360.5,295.1z"/>
                    <path className="st0" d="M551.3,326.7C551.3,326.7,551.4,326.7,551.3,326.7c-1.6-3.3-2.9-5.8-2.9-7.3c0-4.4-2.3-11.9-2.7-17.2
	c-0.2,0.2-0.3,0.5-0.5,0.8v-0.1c0.1-0.2,0.3-0.4,0.4-0.6c-0.2-2.2,0-4.1,0.8-5c0.8-1,1.9-3.7,3-7l0,0c2.5-7.2,5.5-17.6,8.5-21.2
	c4.5-5.2-9.9-16.3-11.6-22.9S542,224,536.7,219s-11.9-18-15.5-17.4s-12.4-5.3-12.9-10.5s-9.8-8-10.4-2.7s6,7.5-1.2,12
	s-11.7,11.8-5.3,17.6c6.4,5.8,11,10.3,7.2,13.1c-2.4,1.8-7.7,2.9-11.1,5c-1.9,1.2-3.3,2.7-3.3,4.8c0,5.9,2,15.4-5.3,15.7
	c-7.2,0.3,10-7.3-19.7-7.8c-0.6,2.3-1.1,5.3-0.7,6.5c0.8,2,6.7,7.3,8.1,11.4s5.8,10.1,9.1,12.2c3.3,2.1,3.5,4.9,2.6,6.3
	s-5.1,2.4-5.2,8.8s-7.1,9.1-7.2,9.1V303l-5.2-7l-6.5,1.2v9.3c2.8,3.8,7.6,10.3,8.5,11.7c1.2,2-0.1,8.7,2.2,9.9s2.4,9,3,13
	s3.8,6,4.5,6.6s2.5,3.1,2.4,8.5c-0.2,5.4,4.2,10.8,6.2,11.6s10,3.6,13.2,2.2c0.4-0.2,0.9-0.4,1.5-0.7c3.3,3.1,9,7.9,9.5,7.9
	c0.7,0,6.1,2.6,5.9,5.5s0.8,5.2-0.7,6.8c-1.5,1.6,4.1,5.3,4.7,7.9c0.6,2.6-5.8,12.7-3.3,14.4c2.3,1.5,1.7,2.9,0.8,3.2
	c1.5,1.4,3.1,2.7,3.7,2.7c1.3,0.1,6.5-1.2,7.9,0.1c1.3,1.3,0.7,3.9,3.3,3.9s10.4-5.2,8.1-8.1c-2.2-3-4-7-1.5-6.3
	c1.7,0.5,7.6,3.3,11.9,4.9c0.7-8.7,3.1-18.8,9-29.8C568,358.1,557.1,337.7,551.3,326.7z"/>
                    <path className="st0" d="M521.8,432.3c-0.1,0-0.1,0-0.2,0c1,0,1.3-0.9,1.3-0.9s-2.6-3.8-1.3-4.5c0.9-0.5,4.2-3.2,5.8-5.3
	c-2.5,0-1.9-2.6-3.3-3.9c-1.3-1.3-6.6,0-7.9,0c-0.6,0-2.2-1.3-3.6-2.6c0.9-0.3,1.6-1.6-0.8-3.3c-2.5-1.7,3.9-11.8,3.3-14.4
	s-6.2-6.3-4.7-7.9s0.5-3.9,0.7-6.8s-5.2-5.5-5.9-5.5c-0.5,0-6.3-4.8-9.6-8c-0.5,0.3-1.1,0.6-1.5,0.8c-3.2,1.4-11.2-1.4-13.2-2.2
	s-6.3-6.2-6.2-11.6c0.2-5.2-1.5-7.7-2.3-8.4c-1.4,1-3.1,2.4-3.3,3.8c-0.4,2.6-6.5,3.9-7.2,7.2c-0.7,3.3-5.3,3.4-9.2,4
	c-2.7,0.4-9.3,5.9-13.1,9.8c1,0.8,1.9,1.3,1.9,1.3s0.7,3.9,2,3.9s5.2,0.6,5.9,2.6c0.5,1.4,0.6,6.2,0.4,8.7l0,0
	c-0.1,1-0.2,1.7-0.4,1.7c-0.5,0-4.6,6.1-9.1,7.6c-2.8,4.7-13.6,24.7-14.6,26.5c-1.2,2-0.2,11.1-1,13.8s-5.5,4.5-6.1,4.5
	c-0.4,0-7.5,0.3-12.4,0.5c-1.3,1-4.2,3.5-4,4.1c0.3,0.8,9.3,13.7,9.9,14.4c0.2,0.2,0.2,0.7,0.1,1.2h0.1c-0.2,0.9-0.9,1.8-1.4,1.5
	c-0.7-0.7-19-3-20.4-2.7c-0.2,0-0.5,0-0.9-0.2c-1.6,4-3.8,9.7-4,10.6c-0.3,1.4,0.4,4.7,1.7,6s15,20.9,18.3,22.9s7.9-7.9,9.2-7.2
	c1.3,0.7,5.9,3.3,7.2,4.6c1.3,1.3,9.9,11.9,11.8,12.5s10.2-6.5,11.3-5.3c1.1,1.3,5.7,3.3,7,3.3s13.7,7.5,15.1,6.6
	c0.9-0.6,1.8-1.3,2.2-1.7c0.1,0,0.1,0,0.2,0c-0.2,0.2-0.4,0.4-0.8,0.6l26,0.4l7.7-1.3l-3.3-11.8l14.4-36.7l13.1-3.9l1.6-11.8
	L521.8,432.3z"/>
                    <path className="st0" d="M405.6,501.5c-3.3-2-17-21.6-18.3-22.9c-0.2-0.2-0.3-0.4-0.5-0.6c0,0,0,0,0.1,0c-1-1.5-1.5-4.2-1.3-5.4
	c0.2-0.9,2.4-6.6,4-10.6c-3.2-1.1-12.7-6.3-14.1-6.3c-1.6,0-12.5,4.1-17.7,0c-3.6-2.8-13.4-5.2-19.2-6.4c-0.1,0.7-0.2,1.6-0.5,2.5
	c0,0-11.9-1.8-13.7,7.2c-1.8,8.8,1.9,16.8-6.8,20.6c-0.2,3.7-0.4,9-0.4,10.2c0,2,3.9,6.3,3.9,8.5s0,12.4,0.7,13.8
	c0.7,1.4,13.7,1.2,15,0.6c0.7-0.3,2.6,1.1,4.5,2.7l0,0v0.1c-0.2-0.1-0.4-0.3-0.5-0.4c-0.7,6.4-2.1,17.4-3.4,17.9
	c-1.9,0.7-0.7,19.6-0.7,20.3c0,0.1-0.1,0.1-0.1,0.2l0.8,1.1l-3.3,11.8l-0.4,0.6c3.3,0.5,7,0.9,9,0.7c3.9-0.4,17.7-9.8,17.7-9.8
	s-2-7.9-2-9.2s1.4-7.2,1.4-7.2l3.9-5.9l4.6,5.9l15,0.1l-1.3-4.7l9.9-14.4l3.7-1.3l4.1-10.5l6.1-9.1
	C405.7,501.6,405.6,501.5,405.6,501.5z"/>
                    <path className="st0" d="M519,583.4c-5.3-5.2-11.6-24.4-10.2-26.2s1.6-4.6,0-7.8c-1.2-2.3-0.3-10.6,0.3-14.9l-1.8-0.2L504,524l-3.6-9.6
	l-5.6,0.9l-26-0.4c-0.4,0.3-1,0.7-1.5,1.1c-1,0.6-8-3.3-12.2-5.3c-0.1,0.1-0.1,0.3-0.2,0.4h-0.1c0-0.1,0.1-0.2,0.2-0.4
	c-1.5-0.7-2.6-1.3-2.9-1.3c-1.3,0-5.9-2-7-3.3s-9.4,5.9-11.3,5.3c-1.9-0.6-10.5-11.2-11.8-12.5s-5.9-3.9-7.2-4.6
	c-1.3-0.7-5.6,8.7-9,7.3l-6.1,9.1l-4.1,10.5l-3.7,1.3l-9.9,14.4l1.3,4.7h-1.1l-0.1-0.1h-13.8l-4.6-5.9l-3.9,5.9c0,0-1.4,5.9-1.4,7.2
	s2,9.2,2,9.2s-13.8,9.4-17.7,9.8c-2,0.2-5.7-0.2-8.9-0.7l-2.9,4.6l-2,8.6l-1.3,13.1c0,0-1.3,1.7-2.6,3.3c2.3,1,4.6,1.9,5.2,1.9
	c1.4,0,6.9-5.9,9.2-7.2c2.3-1.3,12.5-3.9,15.8-3.9s5.9,17,7.2,18.3c1.3,1.3,5.2-2.6,8.5-3.9c0.2-0.1,0.4-0.2,0.6-0.5c0,0,0,0,0,0.1
	c1,1.2,2,2.7,2,3.7c0.1,2-3.9,8.5-3.3,10.4s1.9,3.3,2,5.3s0,9.2,2.6,12.4s5.3-6.5,8.9-5.8s6.6,10.2,7.5,15s5.2-1.3,7.2-4.1
	s8.5-7,10.7-5c1.5,1.4,6.1,4,9.7,4.8c0.2,4.4,0.7,10.7,1.9,11.5c0.3,0.2,0.2,0.8-0.2,1.6c4,0.1,10,0.2,11.2-0.1
	c1.8-0.5,12.6-0.2,15.2,2.3s8.9-0.4,15.7-0.1c6.8,0.3,17-0.4,21.6-2.2s3.6-8.5,3.2-12.3c-0.3-3.8-8.7-3.6-10.4-12.7
	c-1-4.9,1.3-9.9,3.5-13.3l0,0c2.6,1.8,10.2,1.1,12.9,2.1c3.3,1.3,6.6-6.6,9.4-8.3s5.4-16.6,5.4-16.6h9.1
	C517.3,590,524.3,588.6,519,583.4z"/>
                    <path className="st0" d="M209.8,599.8l-5.9-9.8l-16.4-1.3c0,0,7.3-10.5,7.3-11.2s-6.6-3.1-6.6-3.1l-0.7-4.7l15.1-2
	c0,0,6.3-19.2,3.3-22.3s-9.2,4-9.2,4l-4.6-9.3c0,0-5.1-2.9-8.6-5.1c0,0,1.3,7.4-3.8,7.1c-5.1-0.3-10.8-4.7-15.1,8.6
	c0,0,10.4,9.9-6.9,7.2c-0.6-0.1-18.7-29-29.8-19.7c-10.8,9-10.7,6.4-5.2,23.8l0.3,0.1v0.1l-0.5-0.1c0.2,0.6,0.4,1.2,0.6,1.8
	c0,0-24.7,30.4-35.3,47.2c-4.2,6.6,3.8,19.4,15.5,32.7h0.1c18.2,20.7,45.3,42.5,49.9,43.8c0.7,0.2,1.3,0.5,1.8,0.9l8-8.7l-5.9-11.2
	V649l14.6-9.8l14.2-5.3l0.5-6.8L186,627l0,0l2,0.5c0,0,3.8-8.5,5.2-7.9s10,2.3,10,2.3l7.1-16.6L209.8,599.8z"/>
                    <path className="st0" d="M373.5,605.1c0-1-1-2.5-2-3.7c-0.2,0.2-0.4,0.3-0.6,0.4c-3.3,1.3-7.2,5.2-8.5,3.9s-3.9-18.3-7.2-18.3
	c-3.3,0-13.5,2.6-15.8,3.9s-7.8,7.2-9.1,7.2c-0.6,0-2.9-0.9-5.2-1.9c0,0.1-0.1,0.1-0.1,0.2l0,0c1.4-1.7,2.7-3.5,2.7-3.5l1.3-13.1
	l2-8.6l3.2-5.2l3.3-11.8l-0.8-1.1l0,0c0.1-0.1,0.1-0.2,0.1-0.2c0-0.7-1.2-19.6,0.7-20.3c1.3-0.5,2.7-11.5,3.4-17.9
	c-1.8-1.4-3.5-2.7-4.1-2.4c-1.1,0.5-11,0.7-14.1-0.1l0,0c-0.5-0.1-0.8-0.3-0.9-0.5c-0.7-1.4-0.7-11.6-0.7-13.8s-3.9-6.5-3.9-8.5
	c0-1.3,0.2-6.5,0.4-10.2c-0.2,0.1-0.5,0.2-0.8,0.3c0,0-16.6-12.5-20.6-11.8s-1.9,15.8-24.2,6.9c-22.3-8.8-26.4-6.2-42,1.3
	c0,0-0.2-0.1-0.6-0.3c-3.2-1.9-19.5-11.5-25.6-9.8c-6.9,1.9-8.9,7.4-8.9,7.4s5.7,12,1.1,23.4c-4.6,11.4-1.1,27.5-12.6,38
	c3.4,2.2,8.6,5.1,8.6,5.1l4.6,9.3c0,0,6.2-7.1,9.2-4s-3.3,22.3-3.3,22.3l-15.1,2l0.7,4.7c0,0,6.6,2.4,6.6,3.1s-7.3,11.2-7.3,11.2
	l16.4,1.3l5.9,9.8l0.7,5.9l17,4.6c0,0,1.1-1,2.3-2.2h0.1c-0.1,0.1-0.2,0.2-0.3,0.3l12.4,3.3l-0.5,19.1l11.8-1l6.3,0.2l-1.3-4.6
	l9.2-5.3l19.4-1.6l3-1.2c2.4,2.9,6.7,7.4,11,8.7c6.5,2,15,6,15.7,9.9s7.1,8.5,9.8,8.5c2.7,0,14.5,7.1,13.8,7.8s8.4,3.9,11.1,4.6
	s10.6-3.5,10.2-4.7c-0.3-1.2,0.1-6.8-1-12.3s2.6-13.7,5.9-14.4c2.1-0.5,4.5-2.8,5.9-4.4c0-0.1,0-0.2,0-0.2c-0.1-2-1.4-3.4-2-5.3
	C369.6,613.6,373.6,607.1,373.5,605.1z"/>
                    <path className="st0" d="M326.3,644.4c-2.7,0-9.1-4.6-9.8-8.5c-0.7-3.9-9.2-7.9-15.7-9.9c-4.4-1.3-8.7-5.9-11.2-8.7l-2.9,1.2l-19.4,1.6
	l-9.2,5.3l1.3,4.6l-3.9-0.2l0,0l-2.3-0.1l-11.8,1v0.6h-0.1l0.6-19.7l-12.4-3.3c-1.1,1.1-2,2-2,2l-17-4.6l-0.1-0.5l-7.1,16.6
	c0,0-8.6-1.7-10-2.3s-5.2,7.9-5.2,7.9l-1.5-0.3l-0.5,6.8l-14.2,5.3l-14.6,9.8v19.6l5.9,11.2l-8,8.7c4.8,3.7,1.9,14.5,34.9,11
	c0,0,3.8-0.1,9.6,2.8c0.1-0.1,0.2-0.2,0.3-0.4c0,0,0.1,0,0.1,0.1c-0.1,0.1-0.2,0.2-0.2,0.3c5.4,2.7,12.5,7.9,19.8,18.1
	c0,0,16.2-4.3,31.7-3.1v-0.1c2.6,0.2,5.1,0.6,7.6,1.1c11.7,2.6,11.5,23.7,10.1,37.1c6.2,6.1,16,15.7,17.4,16.6
	c2,1.4,11.1,2.1,11.8,2.1s5.7-4.6,7.8-8.5c2.1-3.9-3.6-6.8-4.6-8.5s1.4-10.5,2.7-13.8c1.3-3.3,7.5-5.7,7.5-7.2s-3.6-11.1-8.2-13.5
	c-3.1-1.6-6.7-8.3-8.9-12.7c0.4,0,0.7,0,1,0c2,0,3.6-5.2,6.1-5.5c2.5-0.4,7.7-8.8,7.7-11.5s-2.1-19.7-0.7-21s7.2-4.9,6.6-6.6
	c-0.3-0.9-4.2-4.2-7.5-6.8c2.2-1.8,5.7-3.7,9.5-3c6.2,1.1,8.5-1.4,8.5-3.3c0-1.2,0.6-5,1-7.8C326.5,644.4,326.4,644.4,326.3,644.4z
	 M307.5,658.7L307.5,658.7C307.5,658.6,307.6,658.6,307.5,658.7C307.6,658.6,307.5,658.6,307.5,658.7z"/>
                    <path className="st0" d="M545.2,780c-2.3-9.4-0.1-9.2-2.7-13.1c-1.1-1.6-1.3-3.8-1.3-5.9c-0.5-0.2-0.9-0.5-1.3-0.7
	c-2.2-1.3-1.3-5.9-2.6-7.8c-1.3-1.9-0.5-14.7,0-16.4s-2.6-11.1-3.9-12.5c-0.9-1-1.4-7.7-1.6-11.6c-1-0.1-1.7-0.1-1.7-0.1l-1.8-7.5
	c0.3,0.1,0.5,0.2,0.5,0.2l1.3-5.9c0,0-1.3-3.2-2-5.2s-0.6-12.4-2.6-15.1s2-8.5,2.6-9.8s-1.9-3.9-1.9-6.5c0-1.1-0.2-3.2-0.4-5.3
	c5.3-3.3,11.1-8.6,10.2-10.5c-1.3-2.7-1.7-12.3,0-15.2c1.7-2.8,3.9-13.6,2-14.9s-2-11.8-1.4-13.9c0.6-2.1-1.3-7.6-1.9-9
	c-0.6-1.4-7.2-0.7-10.5-1.3c-1.6-0.3-3.5-1.5-5.1-2.7c-0.9,0.5-1.8,0.7-1.8,0.7h-9.1c0,0-2.5,15-5.4,16.6c-2.8,1.7-6.1,9.6-9.4,8.3
	c-2.7-1.1-10.3-0.4-12.9-2.1c-2.2,3.5-4.4,8.4-3.5,13.3c1.8,9.1,10.1,8.8,10.4,12.7c0.2,2.6,0.8,6.5-0.3,9.4l0,0l0,0
	c-0.5,1.3-1.4,2.4-2.9,3c-4.6,1.8-14.8,2.5-21.6,2.2c-6.8-0.3-13.1,2.6-15.7,0.1s-13.4-2.8-15.2-2.3c-1.2,0.3-7.2,0.2-11.2,0.1
	c-2,5.2-13.5,21-12.9,22.7c0.6,1.9-2.6,8.5-4.6,9.8c-0.5,0.3-1.2,0.5-2,0.7c3.1,1.5,6.8,3.6,7.2,5.8c0.7,3.8,2,15.1,5.3,16.4
	c1.3,0.5,1.9,1.4,2.1,2.4c2.5-0.2,5.4-0.4,7-0.4c3-0.1,11.2,1.8,16.5,1.8c1.9,3.6,4.3,8.7,3.9,9.9c-0.7,1.9-2.7,16.3,0.6,16.3
	c3.3,0,10.5,0.2,10.5,4.4s9.2,9.4,10.5,9.4c0.1,0,0.3-0.1,0.4-0.3l0,0v0.1c1.4,4.4,3.5,11.5,3.5,14.1c0,0.5-0.2,1-0.4,1.5
	c4.1,3.3,12.1,9.5,13.8,10.4c2.3,1.2,24,12.4,25.3,13c0.2,0.1,0.6,0.5,1,1.1c0,0,0.1,0,0.1-0.1c2,2.8,5.8,9.5,8,11.2
	c0.4,0.3,0.6,0.7,0.7,1.3h8.8l7.7-1.7c0.8-1.9,2-3.6,3.8-4.7C543.1,793,547.5,789.4,545.2,780z"/>
                    <path className="st0" d="M510.5,815.5L510.5,815.5L510.5,815.5c0.2,0,0.5-0.1,0.6-0.1c2-0.6,7.9-11.8,5.2-13.8s-7.8-11.8-9.1-12.4
	c-1.3-0.6-23-11.8-25.3-13c-1.7-0.9-9.7-7.1-13.8-10.4c-0.1,0.2-0.2,0.3-0.3,0.5c0.4-0.6,0.7-1.3,0.7-2c0-2.6-2.1-9.8-3.5-14.1
	c-0.1,0.2-0.3,0.3-0.4,0.3c-1.3,0-10.5-5.2-10.5-9.4s-7.2-4.4-10.5-4.4s-1.3-14.4-0.6-16.3c0.4-1.2-2-6.3-3.9-9.9
	c-5.3,0-13.6-1.9-16.5-1.9c-1.6,0-4.5,0.2-7,0.4c0.4,1.6-0.5,3.4-2.1,4.2c-2.6,1.3-11.7,16.4-11.7,16.4s-5,4-6.1,7.6
	s-4.2,9.3-6.4,11.3c-1.6,1.4-4.1,0.8-6.6,1.5c0.1,0.1,0.1,0.2,0.2,0.4h-0.1c-0.1-0.1-0.1-0.3-0.2-0.4c-1.1,0.3-2.2,0.8-3.2,1.8
	c-3.3,3.3-2.6,7.1-7.2,7.2c-2.9,0-7.5,0.4-10.4,0.7c-0.3,1.5-1,2.6-2,2.6c-3,0.2-15.2,5.4-15.8,3.3c-0.6-2.1-6-5.9-6.9-3.3
	c-0.9,2.6,1.6,3.9-0.3,7.2c-0.4,0.6-1.1,1-2.2,1.3c3.4,6.7,9.2,18.3,10.1,22.3c1.3,5.7,2.5,15.1,6.5,17.7s8.5,7.3,11.2,7.8
	c2.5,0.5,9.4,0.6,10.4,0.1c2.5,0.8,5.9-0.1,7.3-3.3c2-4.6,9.8-1.4,11.1-0.7s3.2,6.3,4.6,8.5s5.2,11.2,5.2,12.8s3.3-1,4-1.6
	s9.4,5.6,10.7,6.5c1.3,0.9,7.6-1.9,8.3-1.9s6.3-5.9,7.8-5.9l0,0l0,0c8.3,7.1,27.3,23.2,31.5,23.5c5.3,0.4,16.5,3,25.2,3.4
	c8.6,0.3,18.1-0.4,25.6-3.8c3.1-1.4,5.6-2.6,7.5-3.5L510.5,815.5z M372.9,818.6C372.9,818.7,372.9,818.7,372.9,818.6
	C372.9,818.7,372.9,818.6,372.9,818.6L372.9,818.6z"/>
                    <path className="st0" d="M302.8,840.3c-2.7,0.6-2.7-12.6-6.6-14.5s-7.8-9.7-12.8-9.8c-3.7,0-13.5,3.1-18.9,3.6c0.5,3.6,1.2,6.8,2.2,9.4
	c0,0-17.2,9.5-25.3,13.2c0,0.1,0.1,0.2,0.1,0.3l0,0c0-0.1,0-0.1-0.1-0.2c-1.2,0.5-2.2,1-2.9,1.2c0,0-17.4,3-16.4,62.9
	c0,0,3.4,10.7,11.2,11.3s7.9-2.1,7.9-2.1s0,0.1,0.1,0.1c1.1-3.8,3.3-9.7,6.4-10.6c4.6-1.3,14.4-7.8,15.1-9.5s11.1-4.9,13.1-6.2
	c1.2-0.8,1-5.5,0.6-9.2c0.7,0,8.6-9.9,9.9-10.5s6.4-15,9.1-16.3c1.6-0.8,5.1-7.8,7.6-13.2C303,840.2,302.9,840.3,302.8,840.3z"/>
                    <path className="st0" d="M424.6,838.6c-0.3,0.2-0.5,0.4-0.6,0.4c-0.7,0-7,2.8-8.3,1.9c-1.3-0.9-10-7.1-10.7-6.5s-4,3.1-4,1.6
	c0-1.6-3.8-10.5-5.2-12.8s-3.3-7.8-4.6-8.5c-1.3-0.7-9.1-3.9-11.1,0.7c-0.2,0.4-0.4,0.8-0.7,1.1c-1.6,2.3-4.5,2.8-6.7,2.2
	c-1.2,0.4-7.8,0.3-10.3-0.1c-0.2,0-0.4-0.1-0.5-0.1v-0.1c-2.7-0.9-6.9-5.2-10.6-7.7c-4-2.6-5.2-12-6.5-17.7
	c-0.9-4-6.7-15.6-10.1-22.3c-4.5,1.1-13.8-0.5-17.4,0.7c-0.2,0.1-0.5,0.2-0.7,0.2c0,0.2,0,0.3-0.1,0.5h-0.1c0-0.1,0-0.3,0.1-0.4
	c-4.1,1.5-7.6,4.3-10.9,3.7c-1.5-0.3-3.9-1.2-6.1-2.2c-0.6,0.5-1.1,0.9-1.3,0.9c-0.7,0-9.8-0.7-11.8-2c-1.4-0.9-11.2-10.5-17.4-16.6
	c-0.7,6.6-1.6,11.4-1.6,11.4s-5.5,32.3-2.9,52.8c5.5-0.5,15.3-3.7,18.9-3.6c5,0,8.9,7.8,12.8,9.7s3.9,15.1,6.6,14.5
	c0.1,0,0.2-0.1,0.3-0.1c-1.2,2.5-2.5,5.4-3.8,7.7c4.8,2.2,10.3,4.8,11.4,5.9c2,2,4.5,9.8,9.8,8.5c4.4-1.1,9.3,2.4,11.5,3.9
	c0-0.1,0-0.1,0.1-0.2l0,0c-0.1,0.2-0.1,0.3-0.2,0.4c0.4,0.3,0.8,0.5,1,0.7c1.3,0.7,3.3,8.5,3.3,11.8c0,3.1,0.6,7.1,0.1,10.7
	c3.1-0.2,6.7-0.7,8.6-1.4c3.6-1.7,2.2-9.8,3.7-11.3s14.5,11.1,15.8,12.4s10.4-5.2,10.4-6.6c0-0.6,0.1-1.5-0.1-2.4l0,0
	c0,0.1,0,0.3,0,0.4c4-0.9,11.4-3.2,14.4-5.2c3.9-2.7,17.1,5.3,19.7,5.3s8.5-9.6,9.8-11.2c1.3-1.6,5.9-18.3,6.8-21.6
	C426,846.2,425.3,841.9,424.6,838.6z"/>
                    <path className="st0" d="M427.1,900.9c-2.7-0.3-12.4-14.9-16.3-21c-0.7,0.6-1.4,1-1.9,1c-2.6,0-15.8-8-19.7-5.3
	c-3,2.1-10.4,4.4-14.4,5.2c0.1,0.8,0,1.4,0,1.9c0,1.4-9.2,7.9-10.4,6.6l-0.1-0.1c0,0.1,0,0.2-0.1,0.3l0,0c0-0.1,0-0.2,0.1-0.3
	c-1.6-1.6-14.2-13.8-15.7-12.3s-0.1,9.6-3.7,11.1c-1.9,0.8-5.5,1.2-8.6,1.4c0,0.2,0,0.4-0.1,0.5c-0.7,3.7-2,27.5-4.6,31.4
	s-5.8,11.7-9.8,9.8c-0.8-0.4-1.7-0.7-2.7-1c-0.3,1.5-0.3,3.1,0.6,3.8c-0.9,1-2.3,3-1.9,5.9c0.5,4.2-0.6,28.2-5.2,30.2
	s-22.2,12.4-25.8,11.4c-2.7-0.7-10.8,0.1-14.9,0.6c0.1,0.5,0.1,1.1,0.2,1.6c1.8,12.8-18.2,11.4-15.8,19c2.4,7.6,17,26.2,48.1,18.5
	c1.5-3.7,5.2-11.6,8.8-13.1c4.8-2,8.2-10.9,9.9-13.8c1.7-2.9,13.3-5.9,14-8.8c0.3-1.7,2.7-3.8,5.2-5.8l9,21.9l15.7,9.1l16.7-7.2
	l5.5-5.9l10.5-13.8l2-18.3l10.4-3.8c-0.6-2.2-0.6-4.5-0.6-6c0-1.8-1.7-6-3.1-9.3c2.1-1.3,6-14.1,7.7-20.1c3.2,0.7,5.4-3.7,5.9-6
	c0.5-2.1,7.4-13.5,9-20.5C429.7,900.4,428.4,901,427.1,900.9z M319.9,934.1l-0.1-0.1l0,0L319.9,934.1L319.9,934.1z"/>
                    <path className="st0" d="M471.1,1091.2l-11-12.9c0,0-15.3-13.8-16.2-13.5c-0.6,0.2-7.4-5.3-11.5-8.6c0.6-3.1,0.7-8.2,0.7-8.2l7.2-3.3
	l1.3-22.3l2.4-8.5c-3-2-12.5-8.2-14.1-9.8c-1.9-1.9-8.6-0.7-10.3,0c-1.7,0.7-7.4-8.6-7.4-8.6l-12.5-11.9v0.1L389.6,997
	c0.1,0,0.2,0.1,0.2,0.2l0,0c-0.1-0.1-0.2-0.1-0.2-0.2l-0.4,0.5l-5.5,5.9l-16.7,7.2l-0.5-0.3c-0.1,0.2-0.1,0.3-0.2,0.5
	c0.1-0.2,0.1-0.4,0.2-0.6l-15.2-8.8l-9-22c-2.5,2.1-4.9,4.2-5.3,5.9c-0.6,2.9-12.3,5.9-14,8.8c-1.7,2.9-5.1,11.8-9.9,13.8
	c-3.6,1.5-7.3,9.4-8.9,13.2c0.1,0,0.3-0.1,0.4-0.1c0,0,13.7,8.9,24.3,7.2l-1.3,1.5c0.1,0,0.3,0.1,0.4,0.1c0,0,0,0,0,0.1
	c-0.1,0-0.2-0.1-0.3-0.1l-30.2,33.2l-0.6,38l10.1,8.5l21.3-0.6l0.3-6.9l21.2,2.9c0.1,0.1,0.9-0.4,1.8-1.3l0,0l-0.1,0.1
	c3.9,1.5,10.1,2.9,9.9,3.5c0,0.1,0.1,0.2,0.4,0.2l0,0c-0.1,0-0.2,0-0.3-0.1c1.5,3.9,3.2,9,2.8,10.4c-0.7,2.2,0.5,13.1,4.5,15.5
	s9.9,3.8,14.8,3.8c2.6,0,6,0,9,0.4l11.6-9l15.4,4.8l3.7-15.2l10.5-13.8l13.1-18.8l18.3,19.3l8.8-12.8L471.1,1091.2z"/>
                    <path className="st0" d="M488.8,990.3c0-2,3.3-9.3,3.3-11.8c0-2.6-2.6-16.8-2.6-18s-6.2-12.9-11.2-13.4s-14.4-2-14.4-2L461,951
	c0.1,0.3,0.2,0.6,0.3,0.8l0,0c-1.2-2.8-2.1-8.2,0.7-10.1c3.9-2.6,5.4-8.4,3.9-10.2c-0.9-1-1.5-4.6-1.8-7.4c-2.6-1-5.2-3-6.1-5.4
	c-1.2-3.4-3-10-5.1-10.7c-2.2-0.7-9.9-8.2-14.5-10c-2.8-1.1-5.2,0.4-7.4,1.5c-1.6,7-8.5,18.4-9,20.5c-0.5,2.3-2.7,6.7-5.9,6
	c-1.7,6-5.6,18.9-7.8,20.1c1.4,3.3,3.1,7.5,3.1,9.3c0,1.6,0.1,4.2,0.8,6.5c0-0.1-0.1-0.3-0.1-0.4l-10.4,3.8l-2,18.2l12.5,11.9
	c0,0,5.7,9.3,7.4,8.6s8.4-1.9,10.3,0s15,10.5,15,10.5l5.3-0.1c0,0,5.2-11,8.5-10.4s10.5,3.2,10.5,3.2s5.2-5.8,6.5-6.5
	s9.1-5.9,13.1-3.3c4,2.6,5.3,3.3,5.3,3.3S488.8,992.3,488.8,990.3z"/>
                    <path className="st0" d="M507.3,1055c-1.2-2.9,7.8-2.2,13.6-5.1c4.4-2.2,7.1-10.8,8.4-15.7c-3.5,0.6-7.9,0.9-11,2.6
	c-4.6,2.6-10.4,1.9-9.8-2c0.3-2.2,2-6.6,3.4-10.1c-1.1-1.6-2.1-4.9-5.4-4.9c-5.2,0-10.7-1.3-8.3-5.2s1.7-7.9-0.6-8.5
	c-1.1-0.3-2.5-2.9-4.2-5.6c-0.7-0.4-2.2-1.3-4.6-2.9c-4-2.6-11.8,2.6-13.1,3.3s-6.5,6.5-6.5,6.5s-7.2-2.6-10.5-3.2
	c-3.3-0.6-8.5,10.4-8.5,10.4l-5.3,0.1c0,0-0.3-0.2-0.9-0.6l-2.4,8.5l-1.3,22.3l-1.5,0.7c-0.1,0-0.2-0.1-0.3-0.1l-5.4,2.5
	c0,0-0.1,5.1-0.7,8.2c4.1,3.3,10.9,8.8,11.5,8.6c0.9-0.2,16.2,13.5,16.2,13.5l11,12.9l15.1,3.9h39.4l11.7-5.2L507.3,1055z"/>
                    <path className="st0" d="M575.5,1195.2c-2,0-4.1-1.3-5.9-2.7c0,0.1-0.1,0.1-0.1,0.2l0,0c0.6-0.8,1.1-1.3,1.4-1.7c1.2-1.2-9.8-8.5-6-10.4
	s5.3-5.9-3.7-8.2s4.4-8.6,5.7-10.5c0.3-0.5,0.3-1.2,0.1-1.9c0.6,0,1,0,1.2,0c1.3,0,0-3.9-1.3-8.5s2.6-7.9,2-9.2s4.5-4.6,5.8-7.9
	c0.8-1.9,1.5-5.4,2.1-8.1l-1.4,0.3l-23.6-9.2l-5.3-13.9c-1.3,1.5-2.7,2.6-4.1,1.5c-1.9-1.6-4.8-10.5-7-14.2l-9.7,4.3h-0.3l-1.1,11.8
	l-6.6,11.8l-0.6,15.1l-15.1,17c0,0-9.8,2.1-12.5,3c-1.1,2.2-3,6.7-2.5,10.1c0.6,4.6-1.2,5.5-5.3,9.2c-1.9,1.7-3.5,3.2-4.8,4.8
	c0,0.1,0.1,0.1,0.1,0.2l0,0c0-0.1-0.1-0.1-0.1-0.2c-1.5,1.9-2.4,3.8-2.4,6.3c0,4.6-6.9,8.2,1.7,20.2s5.8,24.4,5.8,24.4l10.4,25.1
	l1.2,10.4c0.1,0,0.2,0.1,0.2,0.1s3.6,8.2-2.3,16.1s-6.1,7-7.6,22.4c0,0-10.8,4.7-10.1,7.1c0.7,2.4,13.4,15.6,12.5,20.7
	s-10,31.3-11.4,35.3s-5,27.2-3.7,30.5s-0.6,12.9-1.9,15.1s1,6.8,1.9,9.8s0.7,3.1-0.6,6.5c-1.3,3.4-1,6.2,1.3,9.9s1.1,7.1,5.1,7.8
	s9.9,1.3,10.6,0s-7-10.4-4.6-13.7c2.4-3.3,6.6-4.6,4.6-7.9s-7.1-10.2-9.5-11.1s-5.8-2.1-5.2-4.4s5.4,3.1,8.8,5.8
	c3.4,2.7,7.5,6.1,8.2,7.5s-1.7,10-0.3,10.7c1.4,0.7,13.8,5.2,14.8,2.9s13.2-3.2,8.1-11.4c-5.1-8.2-21.1-17.8-20.8-23
	c0.3-5.2,2.6-7.2,3.1-6s-1.4,8.7,2.6,10s6.6-0.8,6.6-0.8s-0.8,5.1,0.6,6.1s6-0.6,6.2-0.4s2.7,0.2,2.7,0.2s0.5,2.4,1.4,2.9
	c0.8,0.5,8.6,0.2,9.9-1.9v-0.1c0.1-0.2,0.1-0.3,0.1-0.5c0-2.6,4,2.1,5.4,1.4s0.3,2.8,1,3.5s12.5-0.6,15.3-2.7s2.1-10.1,3.8-9.7
	s11-6.5,9.1-12.4s-4.4-36.6-9.1-38.6s0.6-2,0.6-2s6.5-1.6,7.2-4.1s5.1-6,5.1-8.3c0-1.8,0.9-10.9,0.4-15.5c-0.2-0.7-0.5-1.5-0.7-2.3
	c-0.3-0.4-0.3-0.6-0.1-0.4c-1.8-5.4-4.3-11.6-6.5-15.9c-4.2-8,4.1-27.5,6.6-31.5s1.9-12.4-0.7-15.7s0-10.5,2-13.1s12.7-7.1,11.8-9.2
	s-0.7-5.9,0.6-7.9s-1.5-4.8-2.6-7.2s7.3-13.8,8-17.1S580.1,1195.2,575.5,1195.2z"/>
                    <path className="st0" d="M486.1,1095.1l-12.2-3.1l-7.1,10.2l0.1,0.1l-1.7,2.5l-1.8-2l-0.3,0.3l0,0l0.3-0.3l-16.5-17.3l-13.1,18.8
	l-10.5,13.8l-3.7,15.2l-15.3-4.8l-11.6,9c2.7,0.3,5.2,1,6.4,2.2c2.6,2.6,12.3,5.2,12,8.5s5,11.1,5,13.1c0,0.7-0.3,2-0.7,3.4
	c-0.9,3-2.5,6.6-4.2,7.1c-2.5,0.7-12,2.9-10.7,5s11.7,8.4,6,10.5c-3.4,1.3-6.8,0.9-9.8,0.6l2,15.9l-4.1,11.1c0,0,3.8,11.5,5.2,14.4
	s1,7.3-1.8,9.9s-2.2,18.5-5.2,19.6c-0.1,0-0.2,0-0.3,0.1c2.4,4.8,5.1,10.1,5.5,11.2c0.7,2,6.2,5.9,5.6,8.1s-0.2,6.2,2.2,7.5
	c2.4,1.3,3.1,2.9,2.4,7.6s0.1,8.2,1.5,10.2c0.8,1.1,1.6,3.9,2.2,6.1c0.8,0.1,5,0.7,3.4,4c-1.8,3.6-10.1,12.6-10.8,16.6
	c-0.7,4-3.9,8.8-3.9,9.5s9.7-2.8,10.6,4.1s-11.8,0.8,8.4,29l0.9,1.8c0,0-1.9-16.7,3.5-22c1.8-1.8,3-3.1,3.8-4.1
	c1.6-3.3,3-5.8,2.6-4.7c-0.7,1.6-0.9,2.6-2.6,4.7c-2,4-4.3,9.3-4.3,11.2c0,3.5,0.1,21.3,6.3,29c6.2,7.7-5.7,24.2-7,28.7
	s2,24.8,7.9,25.5s24.9-12.9,24-19.4s-5.1-10.1-1.9-20.8c3.2-10.7-6.2-8.1-6.8-10.9s0.1-6.6-2-9.4s-5.2-2.7-4-6.8
	c0,0,8.6,6.5,8.3,9.8c-0.3,3.3,0.7,7.8,4,6.8s13.5,0.2,11-11.4s-9.8-22.6-9.7-25.1s1.1-5.4,1.8-3.4s3.4,5.4,4.1,5.4s6.5-4.2,6.2-8.3
	s-3.2-17.2-6.8-21.1s-5.6-10-6.4-12.9s-3.5-18.4-1.1-21.6s0.3-17.4-6.3-23.1s1.9-11.7,0.7-13.9c-1.2-2.2-1.7-4.9-1.2-6.4
	c0,0,0,0,0.1,0.1c0,0.2,0.1,0.4,0.1,0.6c1.3,1.7,4.8,6.6,2.6,10.4c-2.6,4.6,4.6,19,7.9,21s-3.1,17.1-1.2,22.2s0,9.1,5.6,15.1
	s4.1,17.6,6.1,19s2.9,12.6-0.7,19.7s3.3,9.2,3.3,9.2l6.6-17.7c0,0,7.1-13.4,6.8-17.5c-0.3-4.1-8.9-16-9.5-18.6s0-7.5,4-10.4
	s7-19,7-19s9.9-12.5,9.5-16.7c-0.3-3.1,0.3-3.5,0.6-3.5l-1.2-10.4l-10.3-25.1c0,0,2.7-12.5-5.8-24.4s-1.7-15.6-1.7-20.2
	s3.1-7.4,7.2-11.1s5.9-4.6,5.3-9.2c-0.4-3.4,1.5-7.9,2.5-10.1c-0.3,0.1-0.6,0.2-0.6,0.3h-0.1c0.8-0.7,13.1-3.3,13.1-3.3l15.1-17
	l0.6-15.1l6.6-11.8l1.1-11.8L486.1,1095.1L486.1,1095.1z"/>
                    <path className="st0" d="M425.5,1393c-0.7-5.3-4.9-14.7-4.9-14.7l-13.2-20.3l-4.5-11.7c0,0,5.2-4,4.5-4.7s-9.5,1.4-9.5,1.4
	s-2.2-1.9-1.4-4.3c0.8-2.4,4.2-9,3.5-10.1s11.6-10.6,11.6-13.1s0-5.8,0-5.8h0.1c-0.6-2.2-1.4-5-2.2-6.1c-1.3-2-2.1-5.5-1.4-10.2
	s0-6.3-2.4-7.6c-2.4-1.3-2.8-5.3-2.2-7.5s-4.9-6.1-5.6-8.1c-0.4-1.1-3.2-6.5-5.5-11.2c-0.1,0-0.2,0-0.3,0c0.2,0,0.5-0.1,0.6-0.1
	c3-1.1,2.4-17,5.2-19.6c2.8-2.6,3.2-7,1.8-9.9s-5.2-14.4-5.2-14.4l4.1-11.1l-2-15.9c-0.1,0-0.2,0-0.3,0c0,0,0,0,0-0.1
	c3.1,0.2,6.6,0.7,10.1-0.6c5.7-2.1-4.7-8.4-6-10.5s8.2-4.3,10.7-5s5-8.5,5-10.5s-5.2-9.8-5-13.1s-9.4-5.9-12-8.5s-10.5-2.6-15.4-2.6
	s-10.8-1.4-14.8-3.8s-5.2-13.3-4.5-15.5c0.4-1.3-1.4-6.5-2.8-10.4c-0.1,0-0.2-0.1-0.1-0.2c0.2-0.6-6-2.1-9.9-3.5
	c-0.8,0.9-1.6,1.3-1.6,1.3l-21.3-2.9l-0.3,6.8l-21.3,0.6l0.1,0.1c0,0-3.9,9.4,12.8,14.3c7.2,2.1,5.6,7.7,1.7,14c-0.1,0-0.2,0-0.2,0
	c-5.1,8.1-14,17.3-12.5,21.5c2.6,7.4,12.8,12.4,12.8,12.4s-11.2,10.5-5.2,21.1c0.5,0.9,0.9,1.7,1.2,2.5c0.1,0,0.1-0.1,0.2-0.1v0.1
	c-0.1,0-0.2,0.1-0.2,0.1c3.4,8.8-3.8,12.4-3.8,12.4l7.1,4.6l7.2,20.3c0,0-0.1,0.6-0.3,1.6l0,0c-1,6.7-3.7,31.7,8.8,47.7l-7.3,2.1
	l20.4,28.9l-0.7,11.6l7.8-2.1c0,0-3.7,9-13.9,18c0,0,16.6,31.2,8.5,48.4l-1,5c0,0,7.8,10,6.3,22.9s16.9,5.6,16.9,5.6l5.1-10.6
	c0,0-2-12.4,2.5-16.9c4.4-4.5-12.3-4.3-12.3-4.3l-4.9-10.7c0,0,2.7-6,4.1-7.4s4.7-5.6,4.7-5.6l0.1-5.4c0,0,5.1,0.8,2.3,5.6
	c-2.8,4.8-9,10.9-8.4,14.3s4.5,7.3,10.1,6.2c5.6-1.1,9.4,2.7,7.3,7.5s-1.1,20-5.5,22.9s12.8,22.7,10,31.5s-4.3,14.2-4.3,14.2
	s17.1,2.1,22.4-8.2c5.3-10.3-6-13.7-4-20.4s-2.7-18.8-3.4-22.2c-0.7-3.4-0.8-12.7,1.2-14.8s4.9-5.3,1.4-5.9s-5-4.3-8.4-5
	s-6.5,0.9-8.7-3.4s-2.8-4.6-0.7-6.7s-2.9,2.6,6.7,6.2s7.6,5.5,11.7,5.6s4.5,7.9,2.4,10.7c-2.1,2.8-0.6,17.3,2.3,17.1
	c2.9-0.2,1.1-15.1,5.1-17S426.2,1398.3,425.5,1393z"/>
                    <path className="st0" d="M683.9,1312.2c-1.7-2,0.1-6.2-1.8-10s-5.2-7.3-6.3-6.3s-10.1,3-10.1,1s-11.1-3.3-13.7,0s-2,7.9-6.6,7.9
	c-3.4,0-11.8-6.1-16.3-9.6v0.1l0,0c0.5-2.9,0.3-6.7,0-10.2c-0.7-6.6,4.3-12.1,7-12.8s4.2-17.3,5.5-19.9s7.2-9.9,8.5-11.8
	s0.5-7.7-1.4-7.2c-1.2,0.3-5.5-1.1-8.5-2.2c-0.2,0.3-0.4,0.6-0.6,0.9c-2,2.6-2.6,10-2.6,12.4s-9.2,9.2-11.8,13.1s-9,13.3-11.1,12.4
	c-1.4-0.6-5.1,0.2-7.5,0.8c0.7,2.2,0.7,4.5-0.1,5.5c-1.6,2.3-8.8,5.1-9.5,10.1s-4.2,17.8-7.8,21s-11.5,15.6-15.5,14.4
	c-2.8-0.9-6,1.8-7.6,3.5c1.5,3.3,2.6,7.7,1.4,12c-2.6,9.8,0.8,22.3,6.5,33.2c0,0,0.3,16.4,9,14c8.7-2.5-0.2-20.8,0-22.7
	s3.4-8.1,7.8-9.5s4.6-11.3,3.6-16s4-10.5,6.6-11.8s2.8-0.1,0-3.9s-1.4-5.9-1.4-5.9s0.9,0.2,2,0.5c-0.1-0.1-0.1-0.2-0.2-0.3
	c0,0,0,0,0.1,0c0.1,0.1,0.1,0.2,0.1,0.2c1.7,0.4,4,1.1,4.6,1.5c1.1,0.7,1.5,8.3-1.9,11c-3.3,2.7-5.4,7.6-4.7,11.9s0.9,12.2-2.8,14.3
	s-10.4,1.6-9,6.1s4.3,11.9,9,11.8s8.4,0.5,8.6-0.1c0.2-0.6,4.4-20.2,8.9-22.5s14.9-12.1,14.8-14.8s5.3-3.9,9.2-3.3s5.8-0.1,6.5-3.3
	s2.8-4.4,3.4-3.2s0.8,9.8-4,11.1s-9.9-1-11.8,0.4c-2,1.4-16.3,17.2-18.3,21.2s-5,20.5-11.2,22.9s-7.8,17.6-2.6,21.6
	s13.8,1.3,17.7-3.9c0.8-1,1.3-1.7,1.8-2.2c0.6-2.1,0.9-4.5,2.1-6.7c1.9-3.6,5.9-2.9,5.3-10.1c-0.6-7.2,2.6-6.5,6.5-7.5
	s4.6-9.6,9.1-12.3s-2.8-9.4-3.2-11.6s5.2,0,7.2,0s4.9,10.1,9.9,11.5s8.8-8.2,11.5-13.1s6.8-5,9.4-9.6s-0.1-11.2,1.3-16.4
	S685.6,1314.2,683.9,1312.2z"/>
                    <g>
                        <path className="st0" d="M763.4,1214.7c-2.1-1.2-6.6-3.6-8.5-3.6c-2.7-0.1-7.4-1.3-13.3-5.9c-5.9-4.6-8.3,0.9-8.4,3.9s-8.8,7-13.1,7.8
		s-9.2,2.1-12.6,3.5s-2.5,8-2.6,11.7c-0.1,2.1-1.4,3.7-2.5,4.8c-0.7-0.3-1.4-0.6-2-0.9c-2.6-1.7-9.8-6.7-13.1-9.2s-6.2,5.2-9.1,8.5
		s-7.2-1.3-11.8,0s-7.2,0.6-9.3,3.3c-1.2,1.6-4.3,1.3-6.6,0.7c-0.1,0.5-0.3,0.9-0.5,1.3c-1.3,1.9-7.2,9.2-8.5,11.8
		s-2.8,19.2-5.5,19.9s-7.7,6.2-7,12.8c0.4,3.4,0.5,7.2,0.1,10.1c4.5,3.5,12.9,9.6,16.3,9.6c4.6,0,4-4.6,6.6-7.9s13.7-2,13.7,0
		s9,0,10.1-1c0.1-0.1,0.2-0.1,0.3-0.1c0-0.1,0-0.2,0-0.2l0,0c0,0.1,0,0.2,0,0.2c1.3-0.2,4.2,3,6,6.4c1.9,3.8,0.1,8,1.8,10
		s-3.7,2.4-5.1,7.6c-1.3,4.7,0.8,10.4-0.7,14.9l0,0c-0.2,0.5-0.4,1-0.6,1.5c-2.6,4.6-6.7,4.7-9.4,9.6s-6.5,14.5-11.5,13.1
		s-7.9-11.5-9.9-11.5s-7.6-2.2-7.2,0s7.7,8.9,3.2,11.6s-5.2,11.3-9.1,12.3s-7.1,0.3-6.5,7.5s-3.4,6.5-5.3,10.1
		c-1.2,2.2-1.5,4.6-2.1,6.7c1.9-1.9,1.5,0.2,1.5,0.2s-3.3,6.8-5.3,8c-1.9,1.2-7,9.8,6.1,15.8s26.1,4.1,30.6-3.5s15.2-25.3,16.1-32.3
		s5-17.6,5.9-20.8s2.1-9.8,4.2-11.7s7.9-4.5,9.2-6.6s-0.4-3.7,0.4-7.6c0-0.1,0-0.2,0.1-0.4l0,0c0.7-3.6,0.8-4.8,2.7-7.5
		c2-2.8,3.9-2,3.3-4.8s2.3,4-0.5,6.8c-2.6,2.6-2.2,7.5-2.1,9.8c0,0.2,0,0.3,0,0.5c0,1.9-7.1,9.7-9.1,13s-4.2,8.5-4.1,11.1
		s17.7-13.9,18.1-15.1c0.3-0.9,2.1-3.4,4-4.8h0.1c0.8-0.6,1.5-0.9,2.2-0.9c2.3,0.1,16.3-18.2,16.3-20.2s-0.8-7.5-0.7-9.7
		s2.1,5.4,2.1,5.4s6.3-5.7,7.7-10.7s19.6-22.1,21-26.1c0.9-2.6,2.1-6.8,3-10.8h-0.1c0.5-2.2,0.9-4.3,1.1-5.9
		c0.6-4.5-0.8-7.9-1.4-9.8s3.3,0.1,4.6,1.4s1.3-19,1.3-19.7s2.7-5.5,2.6-11.8c-0.1-4.1,0.9-6.2,1.5-7.7c0.1-1.7,0.2-2.6,0.3-2.1
		c0.2,0.7,0,1.3-0.3,2.1c0,0.2,0,0.5,0,0.7C762.4,1218.3,762.9,1216.4,763.4,1214.7z"/>
                        <path className="st0" d="M747.6,1297.8c-1.9,1.2-9.4,8.3-9.2,12.4s-9.4,21.5-13.7,25.2s-8,13.9-11.2,15.2c-0.3,0.1-0.6,0.3-1.1,0.5
		c0,0.1,0.1,0.2,0.1,0.2l0,0c0-0.1-0.1-0.2-0.1-0.2c-5.2,2.5-21.5,11.9-25.1,17.9c-3.9,6.5-14.6,24.4-16.3,29.1s3.5,10.9,6.1,10.8
		s13.3-5.7,13.5-7.4s0.3,2.8,2,2.8s8.5-2.4,12.6-5.2s4.4-6.8,7.1-9.7s9.5-9.8,11.7-13.2c0.9-1.3,2.1-3,3.4-4.9l0,0l0,0
		c2.1-2.9,4.7-6.3,7.1-9.5c3.8-5.2,5.7-5.2,8.6-10.4c-0.2-2.1-0.5-5-0.2-5.3c0.5-0.6,0.1-7.9,0.1-7.9l-1.9-17c0,0,3.8-9.4,4.5-10.7
		s6.6-11.6,6.6-11.6l-3.1-3.8C748.7,1296.5,748.2,1297.5,747.6,1297.8z"/>
                        <path className="st0" d="M734.3,1371.6c-1.6,2.4-3,4.3-4.2,5.1c-3.7,2.3-7.5,12.6-9.4,15.2s-3.8,7.8-7.1,9.7s-9.4,7-10.1,9.1
		s0.9,3.4,2.2,2.8s9.6-5.6,10.5-6.5s3.2-5.2,5.2-7.2s4-2.4,4-2.4s0.6,2.4-2.1,4.9s-8.4,10-9.8,13.2c-1.4,3.1-5.6,3.6-3.5,5.2
		s11.9-1.9,14.6-3.9c2.6-2,5.9-6.5,8.5-8.5s2.4-7,1.5-8.1s4.8,0.5,5.9-0.7s4.5-17.8,6.4-22c0.4-0.8,0.9-1.7,1.5-2.5
		c-2-1.4-5.1-3.4-6.3-3.4C741.1,1371.6,737.1,1371.6,734.3,1371.6z"/>
                    </g>
                    <path className="st0" d="M817.1,1247.5c-0.6-0.9-5.8-6-11.7-13c-0.1,0.1-0.1,0.1-0.2,0.2l0,0l0.1-0.1c-7.5-8.9-16-20.7-17.1-30.6
	c-1.4-11.6-8.4-17.3-14.1-24.7c-0.1,0-0.2,0-0.3,0l0,0c0.1,0,0.2,0,0.3,0c-3-3.9-5.6-8.2-7-14.1c-4-17.3-5.7-19.6-4.4-22.2
	c0.3-0.6,0.6-1.2,0.9-2l-9.6-0.8h-13.6l-9.1,5.7l-5.2,10.3l-0.8,5.7l-2.5,3.3c1,1.4,1.7,2.8,1.9,4.2c0.6,5.1,1.6,8.4,0,10.8
	c-1,1.5-1.8,4-2.2,5.7c0.3,0.3,0.6,0.7,0.9,1.2c2.6,4,9.7,12.3,10.4,12.3c0.4,0,1.4,2.5,2.1,4.6c1.3-0.8,3.2-0.7,5.8,1.3
	c5.9,4.6,10.6,5.8,13.2,5.8c1.9,0,6.4,2.4,8.5,3.6c-0.5,1.7-0.9,3.6-1.3,5.2c-0.2,5-0.3,15-0.3,17.3c0,1.8-0.6,8.2-0.9,13.7
	c-0.3,4.1-0.4,7.7-0.2,8.8c0.6,2.5-10.1,23.2-9.8,24.6c0.2,1-0.6,7.2-1.8,10.9l3.1,3.7h0.3c0,0,0,0.1,0.1,0.1h-0.4
	c0,0-5.9,10.3-6.6,11.6s-4.5,10.7-4.5,10.7l1.9,17c0,0,0.4,7.3-0.1,7.9c-0.3,0.4-0.1,3.3,0.2,5.3c0.1-0.1,0.2-0.3,0.2-0.4
	c3-5.6,7-19.1,5.6-22.6s-2.1-7.2-1.3-11.2s2.6-5,5.9-7.8s1.8-3.9,3.3-9.9c0.1-0.4,0.2-0.7,0.3-1.1h0.1c1.8-5.1,6.4-6.7,7.5-14.7
	c0.8-5.5-0.1,3.5-1.7,11.8c0.2,0,0.4,0.1,0.6,0.2c-0.2-0.1-0.5-0.1-0.7-0.2c-0.9,4.6-2,8.9-3.2,10.3c-3.3,4.2-8.5,8.8-8.3,19
	s-1.2,21.7-6.9,29.8c-3.7,5.4-7.2,12.2-10.3,17c2.8,0,6.7,0,7.9,0s4.4,2,6.3,3.4c2.5-3.3,6.9-6.2,10.9-6.4c3.8-0.1,8.6-0.1,11.4-1.4
	c1.9-1.7,3.3-3.9,1.9-1.6c-0.4,0.7-1.1,1.2-1.9,1.6c-0.4,0.4-0.9,0.8-1.4,1c-2.5,1.5-12.2,4.3-14.6,6.6s-3.7,7.3-3.3,11.6
	s-2.8,11.1-1.7,10.9s11-1,11.6-2.9s9.9-11,10.5-15s-0.6-7,3.3-11.4s9.4-8.8,10.9-13.5s9.1-12.7,11-16.4c1.6-3.2,6.6-20.2,8.3-28.2
	c-0.1-0.1-0.2-0.1-0.3-0.2c0,0,0,0,0-0.1c0.1,0.1,0.3,0.2,0.4,0.4c0.3-1.2,0.5-2.3,0.6-3c0.7-5.4,4.2-13.8,3.5-19.1
	s-0.5-30.4,3.5-32.8S818.5,1249.6,817.1,1247.5z M761.3,1251c-0.1,0-0.2-0.1-0.3-0.1C761.1,1250.9,761.2,1250.9,761.3,1251
	L761.3,1251z"/>
                    <path className="st0" d="M763.5,1132.7c-2.9-2.8-14.1-9.3-14.1-11.3s-1.8-9.6-5.6-18.4c-3.7-8.4-13.7-12.3-13.8-19.8
	c-1-0.7-1.9-1.4-2.1-2.2c-0.6-2.1-5.6,4.2-9.6,4.3s-2.8,4.6-4.8,6.5c-1,1-3.6,1.5-5.8,1.8c0,0-0.1,0-0.1-0.1l0,0
	c0.7-1.4-8.5-5-10.4-8.2s1.9-8.5,1.9-8.5l-20.5-8.2l-0.4,2.3l-6.6,3.7c0,0,4.5,13.9,2.6,15.9c-1.1,1.2-4.8,3-8.3,4.1l0.2,0.2l0,0
	l-0.2-0.2c-2.4,0.7-4.8,1.1-6.1,0.5c-3.3-1.3-11.7-8.9-9.7-18.5s-11.2-5.8-11.9-6.4c-0.5-0.4-9.4,4-14.8,6.7l1,7.1l-18.2,21.4
	c0,0,0.1,0,0.1,0.1c0,0,0,0-0.1,0.1h-0.1l-0.8,0.9l-12,16.2c3.3,3.3,7.2,7.5,6.8,8.6c-0.7,1.9,2.7,7.2,4.6,8.5s26.2,17.1,28.8,16.4
	s1.2-4.5,3.9-5.9s8.8,5.5,11.5,5.2c1.4-0.2,3.8-0.6,5.7-0.9c0,0-0.1,0-0.1-0.1l0,0c1.5,1.3,3.6,3.1,5.6,4.5
	c-1.2,2.7-2.3,6.5-0.9,9.5c2.5,5.3,10,7.7,11.8,10.1s5,8.2,10.2,8.2c4.6,0,4,1.1,3.5,2.8c0.1,0,0.2,0,0.3,0l0,0c-0.1,0-0.1,0-0.2,0
	c-0.1,0.2-0.1,0.4-0.1,0.7c-0.3,2,3.2,5.2,2.6,7.2s-3.9,6.6-8.5,6.6s-9.8,1.9-9.8,3.9s-8,8.9-10.9,11s-12.8,8-13.4,8
	c-0.2,0-0.9-0.3-1.8-0.9c-0.8,1.8-1.9,3.9-2.8,5.3c3,1.1,7.3,2.5,8.5,2.2c1.6-0.4,2.4,3.5,1.9,5.9c2.3,0.5,5.4,0.8,6.6-0.7
	c2.1-2.7,4.7-2,9.3-3.3s8.9,3.3,11.8,0s5.8-11,9.1-8.5s10.5,7.5,13.1,9.2c0.6,0.4,1.3,0.7,2,1c1.2-1.1,2.6-2.8,2.6-4.9
	c0.1-3.7-0.7-10.3,2.6-11.7s8.2-2.8,12.6-3.5c4.3-0.8,13-4.8,13.1-7.8c0.1-1.7,0.9-4.2,2.6-5.2c-0.7-2.1-1.7-4.6-2.1-4.6
	c-0.7,0-7.8-8.3-10.4-12.3c-0.3-0.5-0.7-0.9-1-1.3c0.4-1.7,1.2-4.1,2.2-5.6c1.6-2.5,0.6-5.8,0-10.9c-0.2-1.4-0.9-2.8-1.9-4.1
	l2.5-3.3l0.8-5.7l5.2-10.3l9.1-5.7H754l9.6,0.8C764.8,1138.3,765.7,1134.9,763.5,1132.7z"/>
                    <path className="st0" d="M634.5,1155.6c-0.2,0.2-0.5,0.4-0.9,0.5c-2.6,0.7-26.9-15.1-28.8-16.4c-0.2-0.1-0.4-0.3-0.6-0.5
	c0,0.1-0.1,0.1-0.1,0.2l0,0c0-0.1,0.1-0.1,0.1-0.2c-1.9-1.8-4.7-6.3-4-8c0.4-1.1-3.5-5.3-6.8-8.7l-0.3,0.4l-16.4,3.4
	c-0.5,2.6-1.3,6.2-2.1,8.1c-1.3,3.3-6.4,6.6-5.8,7.9s-3.3,4.6-2,9.2s2.6,8.5,1.3,8.5c-0.2,0-0.6,0-1.2,0c0.2,0.7,0.3,1.4-0.1,1.9
	c-1.3,1.9-14.7,8.2-5.7,10.5s7.5,6.4,3.7,8.2s7.2,9.2,6,10.4c-0.3,0.3-0.7,0.8-1.2,1.5c1.8,1.5,3.9,2.7,5.9,2.7
	c4.6,0,7.2,3.3,6.5,6.6s-9.1,14.7-8,17.1s3.8,5.2,2.6,7.2s-1.5,5.8-0.6,7.9s-9.8,6.6-11.8,9.2s-4.6,9.8-2,13.1
	c0.6,0.8,1.1,1.8,1.5,3.1l0,0l0,0c1.2,4,1.1,9.6-0.8,12.6c-2.5,4-10.8,23.5-6.6,31.5c2.2,4.3,4.7,10.5,6.5,15.9c0,0,0.1,0,0.1,0.1
	c0.2,0.2,0.4,0.5,0.5,1c0.7,1,1.7,2.7,2.6,4.7c1.6-1.6,4.8-4.3,7.6-3.4c4,1.2,11.9-11.2,15.5-14.4s7.1-16,7.8-21s7.9-7.8,9.5-10.1
	s0-9.9-5.5-11.3c-2.8-0.7-5.6-3-8.2-5.2c0.2,0.2,0.4,0.3,0.6,0.5c2.7-3.6,5.9-11.6,6.8-15.1c1.2-4.6,4.3-4.6,8.6-5.3
	s6.9-5.8,7.2-9.2s-6.5-3.9-10.5-7.3s1.3-16.1,0.7-19.5s12.4-5.3,13.1-7.2s-3.1-7.4-2.6-11.8s12-3.1,11.8-7.9s8.5-15.7,8.5-15.7
	S635.6,1158.2,634.5,1155.6z"/>
                    <path className="st0" d="M664.5,728.7l-0.8,0.2l-13.1-16.4l2.7-18.3l-4-4l0.2-1.6l0,0l0.9-6.6l-1.8-0.3l3.3-8.5l-25-20.4l0,0
	c1.2-2.9,1.2-6.5-2.5-10.4l2-7.9l-1.6-30.5l-10.8-4.8l-1.8-11.4l-2.8,0.2l-11.8,4l-12.2,12.7c0,0-6-3.5-6.8-3.9
	c-0.6-0.2-3.8-3-5.8-4.8c0,0.2,0,0.3-0.1,0.5c-0.7,2-9.1,4-10.8,5.6s-3,6.1-1.7,7.5s4.3,7.3,2.8,8.6s-7.5,7.8-8.9,9.1
	c-0.3,0.3-0.7,0.9-1,1.7c0.1,0,0.2,0.1,0.3,0.1l0,0c-0.1,0-0.2-0.1-0.3-0.1c-1.3,2.5-2.7,6.7-2.7,6.7l-7.2,11.4l-8.2,2
	c-1.8,2.4-5.6,5.5-9.2,7.7c0.2,2.1,0.4,4.2,0.4,5.3c0,2.6,2.5,5.2,1.9,6.5s-4.6,7.1-2.6,9.8s1.9,13.1,2.6,15.1c0.3,0.9,0.7,2,1.1,3
	h0.1c0.5,1.2,0.9,2.2,0.9,2.2l-1.3,5.9c0,0-0.2-0.1-0.5-0.2l1.8,7.5c0,0,0.6,0.1,1.5,0.1c0.2,3.9,0.7,10.5,1.6,11.5
	c1.4,1.5,4.5,10.9,4,12.6c-0.5,1.7-1.3,14.5,0,16.4s0.4,6.5,2.6,7.8c0.4,0.3,1,0.6,1.7,0.9v0.1c-0.2-0.1-0.3-0.1-0.4-0.2
	c0,2,0.2,4.2,1.3,5.8c2.6,3.9,0.4,3.7,2.7,13.1c2.3,9.4-2.1,13-7.9,16.4s-5,12.4-6.6,15.6s2.9,0.5,9.9,1.4s15.2-0.4,19.6,0
	s8.6-4.6,10.5-5.9s5.3-3.9,8.5-5.2s9.2,3.9,12.6,3.8c3.4-0.1,2.5-3.2,3-7.1v-0.1c2.3,0.6,5.5,1.4,6,1.4c0.7,0,11.3-3.4,14.5-0.7
	c1.8,1.5,8.7,0.7,14.4-0.2c-0.3-0.4-0.5-0.7-0.7-1.1c-2-3.3,6.6-12.4,7.9-14.4s10.7-5.9,11.8-6.8c1-0.8-2-7.5-2-7.5l3.4-16.9
	l1.2,1.1l7.9-5.9l7.8-10.5L664.5,728.7z"/>
                    <path className="st0" d="M641.5,560.5c-1.5-1.1-15-5.4-20-7l-0.3,1.1c0,0-27.2-2.6-29.5-2.6s-15.5-6.2-15.5-6.2s-2.2-6.3-4.8-6.3
	c-1.1,0-2.9,0.1-4.7,0.3v0.2l0,0l0.1-1.1l-2.9-7c0.2-0.4,0.3-0.9,0.3-1.5c0-2-3.5-9.9,1.3-12.5c2.9-1.6,5.6-5,7.2-7.4
	c-0.8-0.1-1.5-0.5-2-1.1c-1.1-1.6-4.2-7.1-6.5-11.3l2.6-18.2l-4.6-2.6c0,0,3.9-20.5,4.1-21.1c0.2-0.6,3.8-1.8,5.7-2.1
	c1.5-0.3,6.1-7.5,8.2-10.8c-5.1-1.7-10.1-2.5-13.4-1.3c-7.5,2.6-17.1,7.9-17.1,2c0-3.8-4.9-15.5-3.7-31.8
	c-4.3-1.5-10.2-4.4-11.9-4.9c-2.5-0.7-0.7,3.3,1.5,6.3c2.3,3-5.5,8.1-8.1,8.1c0,0,0,0-0.1,0c-1.6,2.1-4.9,4.8-5.8,5.3
	c-1.3,0.7,1.3,4.5,1.3,4.5s-0.3,0.8-1.2,0.9l6.6,17.5l-1.6,11.8l-13.1,3.9l-6.6,16.7h0.2l-7.8,20l3.3,11.8l-2.3,0.4l3.6,9.6
	l3.2,10.2l2.1,0.2l0,0H509c-0.6,4.4-1.5,12.6-0.3,14.9c1.6,3.2,1.4,6.1,0,7.8s4.9,20.9,10.2,26.2c0.5,0.5,0.9,1,1.2,1.4l0.3-0.1
	l0.1,0.1l-0.3,0.1c1.6,2.4,0.3,3.8-1.1,4.5c1.6,1.2,3.5,2.4,5.1,2.7c3.3,0.6,9.9,0,10.5,1.3s2.5,6.8,1.9,9
	c-0.6,2.1-0.5,12.6,1.4,13.9s-0.3,12.1-2,14.9s-1.3,12.5,0,15.2c0.3,0.6-0.1,1.6-1,2.7l8.2-2l7.2-11.5c0,0,2.4-7,3.7-8.3
	s7.4-7.8,8.9-9.1s-1.5-7.2-2.8-8.6c-1.3-1.4,0-6,1.7-7.5c1.7-1.6,10.1-3.6,10.8-5.6c0-0.1,0.1-0.3,0.1-0.5c0.1,0,0.1,0,0.2,0
	c2,1.7,5.1,4.4,5.7,4.7c0.8,0.4,6.8,4,6.8,4l12.2-12.7l11.8-4l17-1.3l9.2-9.8l6.6-16.1C641.9,560.7,641.7,560.6,641.5,560.5z
	 M564.2,498.3L564.2,498.3L564.2,498.3L564.2,498.3z"/>
                    <path className="st0" d="M800.5,644.5c-1.8-0.2-3.8-0.7-5.2-1.2c-2.8-1.1-3.1-5.5-8.4-6.1c-3.1-0.3-3.7-2.1-3.8-3.9l0,0
	c-0.1-1.4,0-2.9-0.3-4c-0.8-2.6-9-5.9-11-7.9c-1.8-1.8-0.9-7.1-2.1-10.1c-0.1-0.4-0.3-0.7-0.5-1c-2-2.6,4.9-7.2,5.9-9.2
	s-7.8-8.5-3.3-9.1c2.1-0.3,3.4-1.5,4-2.7l-1.3-0.6l-16.7-7.1l2.9,2.5c0,0-11.7-0.6-12.4-1.3s-10.2-2.7-10.4-3.3
	c-0.1-0.6-4.1-19.6-4.1-19.6l-7.2-3.3l-0.2,0.1l0,0l0.2-0.1l1.4-11.2l-6.7-8.9l-1.6-14.5c0,0,0,0-0.1,0l0,0c0.4,0,0.8-0.1,1-0.1
	c3.2,0,5.9-2,7.9-4.3s14.4,2.3,16.4,1.6s0.6-5.9,0-9.8c-0.6-3.9-3.9-5.2-3.9-5.2l6.2-24.5c-11.8,0.5-28.8,2.1-48.2,6.1
	c0,0-15.8-6-41.1-12.8c-0.1,8-0.8,24.6-0.8,24.6s7.1,4,6.5,6.6s-1.2,8.6-3.8,8.8s-9.3,1.1-8.5,8.8c0.1,0.8,0.1,1.5,0.1,2.3
	c0.1,0,0.1,0,0.2,0v0.1c-0.1,0-0.2,0-0.3,0c0,6.7-2.7,12.1-2.7,12.1s5.7,2.1,5.9,3.9s-5.8,4.1-4,6.6c1.6,2.1,3.1,7.2,2.1,9.9l0,0
	c-0.2,0.5-0.4,0.9-0.7,1.2c-2,1.7-7.3,3.5-9.8,2.9l-2.7,6.5c0,0,0,0,0.1,0.1l-4,9.5l-9.2,9.8l-14.2,1.1l1.8,11.4l10.8,4.8l1.6,30.5
	l-0.2,0.9l-1.8,7c3.7,3.9,3.7,7.5,2.5,10.4l25.1,20.4l-3.3,8.5l1.9,0.4c0,0,0,0,0,0.1h-0.2l-1.2,8.2l4,3.9l-2.7,18.3l13.1,16.4
	l19-4.6c0,0,7.9,2.8,9.2,2.6c1.2-0.1,10.5-15,11.8-15s13.6,5.7,13.8,6.5c0-0.1,0-0.4-0.1-0.7c0,0,0,0,0.1,0v0.1l7.8,9.8
	c0,0,11.1,9.1,11.8,9.8c0.5,0.5,12.1-1.5,20-2.8c-2.7-5.3-8.2-22.1-8.2-22.1l7.3-15l-0.7-0.1l-0.7-8.5l-14.4-9.1
	c0,0-1.9-5.9-2.6-9.1c0,0,0,0,0.1-0.1l0.5,0.6L750,670l13.1,5.9l7.9-9.2l5.2,5.3l19.8-8.7l-0.1-4.4L800.5,644.5z"/>
                    <path className="st0" d="M903.5,611c-1.3-1.9-9.1-4.6-12-4.9c-3-0.3-8.9-10.8-7-14.1c1.4-2.3,4-12.4,5.3-17.7c-2,0.7-3.8,1.1-4.5,0.3
	c-1.8-2-0.6,7.5-4.3,7.9c-3.7,0.3-3.7-10.9-3.7-12.2s-3.3-1.9-4.6-6.5s-8-10.1-13.7-9.8s-7,4.2-11.2,1.9c-0.5-0.3-1.1-0.5-1.7-0.7
	l0,0c-4.3-1.5-10.1-1.5-11-5.7c-1-4.8,3.5-6,2.9-8.6c-0.4-1.8-6.8-6.4-10.5-9.4c0,0.1-0.1,0.1-0.1,0.2l0,0
	c2.6-3.8,6.9-14.1,3.5-16.4c-4-2.7-0.4-13.7,0.1-13.1c0.4,0.6,7.7,1.6,5.2-2s-5.3-8.6-4-11.8c0.9-2.1,3.2-7.4,4.1-10.9
	c-16.4,3.3-27,5.6-30.9,4.4c-6.6-2-37.5-1.3-41.4-2c-1.7-0.3-7.6-0.5-16.6-0.2l-6.2,24.5c0,0,3.3,1.3,3.9,5.2
	c0.5,3.1,1.4,6.9,0.9,8.8l0,0c-0.2,0.5-0.4,0.9-0.9,1c-2,0.7-14.4-3.8-16.4-1.6c-2,2.3-4.7,4.3-7.9,4.3c-0.3,0-0.6,0-1,0.1l1.6,14.5
	l6.7,8.9l-1.4,11.2l7.2,3.3c0,0,4,19,4.1,19.6s9.7,2.6,10.4,3.3s12.4,1.3,12.4,1.3l-2.8-2.3l16.6,7l1.3,0.6c-0.6,1.2-1.9,2.3-4,2.6
	c-4.5,0.6,4.3,7.1,3.3,9.1s-7.9,6.6-5.9,9.2c2,2.6,0.6,9.1,2.6,11.1s10.1,5.3,11,7.9c0.8,2.6-1.2,7.3,4.1,7.9c5.3,0.6,5.5,5,8.4,6.1
	c2.8,1.1,8,1.8,9.3,1.1s10.4-4.6,14.4-4.6c2.1,0,4.4-1.3,6.1-2.5l24.7,0.5c0,0,4.2-8.1,5.9-5.9s15.8,6,18.4,5.3
	c2.6-0.7,7.5-8.8,12.4-8.6c2.1,0.1,5.2,0.6,7.9,1.1c2.2-3.1,8.6-8.2,9.1-10.2C904.1,617,904.8,612.9,903.5,611z M824.9,637.3
	L824.9,637.3L824.9,637.3L824.9,637.3z"/>
                    <path className="st0" d="M908.5,699.6c-1.3-3-5.1-6.4-6.2-7.4c-1.3-1.3,5.3-7.9,5.3-11.2s-9.9-7.8-9.9-7.8s-8.5-4.4-4.9-6.6
	c2.6-1.6,7.9-13.3,10.5-19.5c-6-1.5-9.6-13.7-9.5-15.8c0-0.4,0.3-1,0.7-1.6c-2.8-0.5-5.8-1-7.9-1.1c-4.9-0.2-9.8,7.9-12.4,8.6
	s-16.7-3.1-18.4-5.3s-5.9,5.9-5.9,5.9l-18.6-0.4c0,0.2,0,0.4-0.1,0.7c-0.1,0-0.2,0-0.3,0c0-0.3,0-0.5,0.1-0.8l-6.1-0.1
	c-1.7,1.2-3.9,2.5-6.1,2.5c-4,0-13.1,3.9-14.4,4.6c-0.7,0.4-2.3,0.3-4.1,0.1l-4.4,14.3l0.1,4.7l-19.6,8.6l-5.2-5.3l-7.9,9.2
	l-13.1-5.9l-11.8,1.3l-0.6-0.7c0.5,3.2,2.6,9.3,2.6,9.3l14.4,9l0.7,8.5l0.5,0.1l-7.2,14.8c0.1,0.2,7.3,22.5,9.3,23.8
	s15.8,4.6,16.7,4.6s14.1-4,14.1-4l4.6,7.9l6.5,13.1l0.7-0.7c1.5,3.2,4,8.3,5.9,9.2c2.8,1.3,3.8,5.3,3.7,7.4c-0.2,2.2,9,10.4,12.7,11
	s13.7,7.2,13.7,7.2l6.6,5.9l13.6-9.4l-12.6-27.2l14.1-16.1c-0.1-0.1-0.3-0.2-0.4-0.4c0,0,0,0,0.1,0c1.7,2.3,9,3.8,10.2,2
	c1.3-2,10-10.5,14.4-10.5c2.5,0,7.6-1.3,11.5-2.7c-1.5-3-2.8-6.3-4-7.1c-2.2-1.5,5.6-9.9,8.7-11.2c3.1-1.3,4.1-7.8,3.4-11.1
	C901.9,702,905.5,700.5,908.5,699.6z"/>
                    <path className="st0" d="M769.2,934c-0.7-1.3-8.5-16.4-8.5-16.4l-5.7-5.2c-2.1,2.3-4.9,5.1-6.7,6.5c-3.2,2.6-9,1.3-12.5,3.3
	s0,9.1-2.6,9.1c-1.5,0-1.7-1.5-1.6-3c-1.9,0.2-5.4,0.5-6.8,0.1c-2-0.5-7.5-0.3-10,0.9c-1.6,0.8-2.8,3.6-3.4,5.4l0.4,0.1
	c0,0,0,0-0.1,0.1l-12.1-3c-0.1,0.1-0.1,0.2-0.2,0.3l0,0c1.2-2.5,2.3-4.8,1.7-4.1c-1.3,1.4-9.8-15.6-10.5-17s-10,1.5-13.6,1.5
	c-2.7,0-10.9-7.2-15.1-11l-21.7,29.2c0,0-3.1,3.5-6.1,6.8c2.2,3.7,1.7,7.8,1.4,9.4l11.2,5.9l12.5,6.6v3.3l17.7,3.9l19.6,7.2
	l19.5-1.5l0.1-0.5c0.1,0,0.2,0,0.3,0c2.8,2.2,7.1,5.2,8.8,5.8c2,0.7,3,0.5,3.8,1.3l4.1-7.8c0,0.1,5.1-8.9,5.2-9.2
	c0.1-0.3,2.7-11,2.7-11s4,0,8.1-1.4s11.8-3.1,14.3-1.9c1.6,0.8,5.3,1.6,7.7,2c0.3-1.6,1.1-3.1,2-4
	C775.2,943.7,769.9,935.3,769.2,934z"/>
                    <path className="st0" d="M722,888.1c-0.7-0.7-1.6-1.6-1.9-2c-0.6-0.7-2.6-4.6-2.6-7.2c0-2.6-2-3.3-2.3-5.9c-0.3-2.6-1.7-3.3-1.7-4.6
	s1.3-4.8,1.3-6.5s-0.2-5.8-1-6.6s-1-5.2-1-5.9c0-0.4,0.7-2.1,1.3-3.3c-0.8,0.1-1.5,0.1-2,0.1c-2.4-0.1-3.2-9.2-5.9-9.9
	c-0.4-0.1-0.7-0.3-1.1-0.7L699,839l-7.2,1.3l-1.9-3.3l-7.9,2l-1-0.3l0,0l-1.9-0.6l-1.6-12.1l0.5-5.6c-0.4,0.1-0.7,0.1-1.1,0.2
	c-7.5,1.1-9.5-3.5-15.3-4.1s-4.4-11.6-4.4-12.9s-11.1,2.6-15.3,3.9c-0.8,0.3-1.7,0.2-2.7-0.2l0,0c-3.4-1.1-7.4-5.2-9.4-8
	c-5.7,1-12.6,1.7-14.4,0.2c-3.2-2.7-13.8,0.7-14.5,0.7c-0.5,0-3.7-0.8-6-1.4c0,0,0,0,0,0.1c-0.2,1.7-0.2,3.2-0.3,4.4l9,5.4l1.8,9.9
	l14.5,19.7c0,0,11.7,18,12.7,17.8s12.8-4.1,14.1-3.4c0.8,0.4,3.6,0.1,5.4-0.3c0.1,0.9,0.2,2,0.3,3.2l0.6,0.3v0.1l-0.6-0.3
	c0.4,4.3,0.9,10,0.9,10.8c0,1.2-4.5,12.4-4.3,12.5s7.5,7.9,7.5,7.9l-2.8,0.6l-0.1-0.1l-6.2,1.3l-18.6-8.5c0,0-23.3,4.6-24,5.9
	c-0.6,1.1-9.4,14.7-12.5,19.6c4.7,3.6,11.5,9.3,11.2,10.6c-0.4,2,10.4,11.9,22.9,15.7c4,1.2,6.4,3.3,7.7,5.5c3-3.3,6.1-6.8,6.1-6.8
	l21.8-29.3c0,0,0,0,0.1,0l-0.1,0.2c4.2,3.8,12.4,11,15.1,11c0.5,0,1.1-0.1,1.8-0.2l0.1-0.1c4.2-0.6,11-2.5,11.6-1.3
	c0.2,0.4,1.1,2.1,2.2,4.3l13.5-5.6l4.1-3.3l-4.4-7l5.6-4.8l5.5-1.5c-0.1-0.1-0.2-0.3-0.3-0.4C716,891.7,719.5,889.5,722,888.1z"/>
                    <path className="st0" d="M769.9,774.7c-1,0-3.3-3.2-3.3-3.2l0.7-13.8l-2.7-19.4c-3-0.8-5.7-1.7-6.5-2.2c-0.3-0.2-0.6-0.7-1-1.5
	c-7.8,1.4-19.5,3.3-20,2.8c-0.4-0.4-3.8-3.2-6.8-5.7l-0.2,0.3c0,0,0,0-0.1,0l0.2-0.3c-2.6-2.1-5-4.1-5-4.1l-7.8-9.8
	c0,0.3,0,0.5,0,0.5c-0.2-0.8-12.5-6.5-13.8-6.5s-10.6,14.9-11.8,15c-1.2,0.2-9.2-2.6-9.2-2.6l-18.2,4.4l2.5,8.7l-0.9,1.2l0,0
	l-6.9,9.3l-7.9,5.9l-1.2-1.1l-3.4,16.9c0.1,0.1,3.1,6.8,2,7.6c-1,0.8-10.5,4.8-11.8,6.8s-9.9,11.1-7.9,14.4s8.8,10.5,12.9,9.2
	c4.2-1.3,15.3-5.2,15.3-3.9s-1.4,12.3,4.4,12.9c5.8,0.6,7.8,5.2,15.3,4.1c0.5-0.1,0.9-0.1,1.4-0.2v0.1c-0.1,0-0.1,0-0.2,0l-0.5,5.6
	l1.6,12l3,0.9l7.9-2l1.9,3.3l7.2-1.3l6.1-3.4c0.3,0.3,0.7,0.6,1.1,0.7c2.7,0.7,3.5,9.8,5.9,9.9c2.4,0.1,10.6-1.4,11.2-4
	s7.1-5,9.1-5.1s2.1-4.1,4-5.4s3.9-3.9,8.1-5.2c4.2-1.3,3.8-13.1,6.3-14.8c1.8-1.2,7.5-6.7,10.7-9.9c-2.2-3.5-4.7-7.4-6.2-9.6
	l-0.6-14.2h15.7C770.5,778,770.9,774.7,769.9,774.7z"/>
                    <path className="st0" d="M842.5,797l-5.7-5.1c0,0-1.2-0.8-2.9-1.9h-0.3c0,0,0-0.1-0.1-0.1h0.2c-0.2-0.1-0.4-0.2-0.6-0.4
	c-0.2-0.2-0.5-0.4-0.8-0.5c-3.1-1.9-7.2-4.2-9.4-4.4c-3.8-0.5-12.9-8.8-12.7-11s-0.8-6.1-3.7-7.4c-1.9-0.9-4.4-6-5.9-9.2l-0.7,0.7
	l-6.5-13.1l-4.6-7.9c0,0-13.1,4-14.1,4c-0.6,0-5.8-1.2-10.3-2.4l2.7,19.4l-0.7,13.8c0,0,2.3,3.2,3.3,3.2s0.6,3.3,0.6,3.3h-15.7
	l0.3,7.4h0.1l0.3,6.8c1.6,2.4,4.5,6.7,6.8,10.5l0,0c-0.2-0.3-0.3-0.5-0.5-0.8c-3.2,3.2-8.9,8.7-10.7,9.9c-2.5,1.7-2.1,13.5-6.3,14.8
	s-6.2,3.9-8.1,5.2c-1.1,0.8-1.6,2.6-2.3,3.9c3.1,1.1,7.9,3,8.8,3.4c1.2,0.6,4.5,4.4,3.9,6.4s0,7.9,2.6,7.2s1.3-6.5,3.3-7.9
	s5.2,2,5.2,2s0.3-0.2,0.9-0.5v0.1c-0.5,0.3-0.9,0.5-0.9,0.5s-0.2-0.2-0.5-0.5c0.5,1.4,0.9,3.2,0.5,4.3c-0.7,2-2.3,5.5-1.3,6.9
	s8.4,9.1,9.2,6.9s5.2-5.6,7.8-3.9s5.2,2.6,5.9,5.2c0.7,2.6,2.6,4.6,2.6,4.6s5.9-7.2,5.9-9.8s0.7-15.1,8.2-15.1c5,0,9.2-2,11.5-3.3
	c-0.4,0-0.9-0.1-1.4-0.3h0.1c0.8,0.2,1.5,0.3,2,0.3c1.9,0,10.5,2.6,13.8,1.3s8.5-10,10.3-12.4s7.4-15.1,8-15.7
	c0.6-0.6-0.6-6.6-1.2-9.8C839.1,803.5,841.1,799.6,842.5,797z"/>
                    <path className="st0" d="M549.8,878.7c-0.1,0.1-0.1,0.2-0.1,0.2l-17-22.3l-11.1-3.9c-1.9,0.9-4.4,2.1-7.5,3.5c-7.5,3.4-17,4.2-25.6,3.8
	c-5.8-0.2-12.7-1.5-18.2-2.4c0,0.1,0,0.3,0,0.4c0,0,0,0-0.1,0l0,0c0-0.2,0-0.4,0-0.5c-2.8-0.5-5.2-0.8-6.9-1
	c-4.2-0.3-23.2-16.4-31.5-23.5c-1.3,0-5.5,4.3-7.2,5.5c0.7,3.3,1.4,7.6,0.9,9.5c-0.9,3.3-5.5,20-6.8,21.6c-1.1,1.3-5,7.7-7.9,10.2
	c3.9,6.2,13.6,20.8,16.3,21c3.4,0.4,6.8-4.5,11.3-2.7c4.6,1.8,12.3,9.3,14.5,10s3.9,7.3,5.1,10.7s5.8,6,9.2,6s14.7-5.2,20.3-4.6
	c4.5,0.5,13.4,0.1,17.2-1.8l0,0c0.4,0.8,0.8,1.4,1.2,1.8c2.5,2.2,15.4,3.3,15.7,2.9c0.3-0.3,0-24.2,2.6-23.9s10.5-6.4,13.1-9.1
	c1.9-2,12.7-2,18.8-2.4C553.5,884.7,551.1,881.5,549.8,878.7z M504.6,918.1L504.6,918.1L504.6,918.1L504.6,918.1z"/>
                    <path className="st0" d="M626.4,932c-12.4-3.8-23.3-13.7-22.9-15.7c0.3-1.3-6.6-6.9-11.2-10.6c-0.7,1.1-1.1,1.8-1.1,1.8l-18.2-6.1
	c-0.2-0.1-0.4-0.2-0.6-0.2h-0.1l0,0h-0.1v-0.1l-3.4-1.1c0,0-6.9-5.7-12.7-12.2c-6.1,0.3-16.9,0.4-18.8,2.4
	c-2.6,2.7-10.5,9.4-13.1,9.1s-2.2,23.6-2.6,23.9c-0.2,0.2-3.3,0-6.7-0.4l0,0l0,0v-0.1c-3.7-0.5-7.7-1.3-9-2.5
	c-0.4-0.4-0.8-1-1.2-1.8c-3.9,1.8-12.7,2.3-17.2,1.8c-5.6-0.6-16.9,4.6-20.3,4.6c-1,0-2-0.2-3.1-0.6c0.3,2.8,0.9,6.3,1.8,7.4
	c1.5,1.8,0,7.6-3.9,10.2c-2.6,1.7-2.1,6.3-1,9.2l2.9-5.9c0,0,9.5,1.5,14.4,2s11.2,12.2,11.2,13.4s2.6,15.4,2.6,18s-3.3,9.8-3.3,11.8
	s5.3,10.5,5.3,10.5s-0.2-0.1-0.7-0.4c1.7,2.8,3.1,5.4,4.2,5.7c2.2,0.6,3,4.6,0.6,8.5s3.1,5.2,8.3,5.2c5.2,0,4.6,7.8,7.9,5.2
	c3.3-2.6,9.1-18.3,9.8-19.6s12.4-5.9,13.8-7.2c0.4-0.4,0.3-1.4-0.2-2.6c14.2-3.2,27,2.6,29.6,2.7c2.8,0.2,9.9-6.6,6.6-8.6
	c-0.2-0.1-0.3-0.3-0.5-0.4c0,0,0,0,0-0.1c8.3,0.9,20.9,13,20.9,13l7-9.8l10.4,5.9l3.4-16.4l13-24.9l7-9.2
	C635.3,947.7,638.8,935.8,626.4,932z"/>
                    <path className="st0" d="M620.5,1057.1l-10.9-5.2l-1.5,1.9l-13.1-2.6l-11.8,5.3l-0.4-0.4l0,0l0,0l-0.1-0.1l0,0l-6.6-6l5.9-8.5l0.9-6.9
	c-0.1,0-0.2,0.1-0.3,0.1c0-0.1,0-0.1,0.1-0.2c0.5-0.2,0.9-0.3,1.1-0.3c2.6-0.6,12.5-13.1,13.1-17.7c0.4-3-1.6-10.3-3.1-15.1
	c-2.8-2.5-13.3-11.7-20.4-12.4c0.2,0.3,0.4,0.5,0.7,0.6c3.3,2-3.8,8.8-6.6,8.6c-2.6-0.1-15.4-5.9-29.6-2.7c0.5,1.3,0.7,2.2,0.2,2.7
	c-1.4,1.3-13.1,5.9-13.8,7.2s-6.5,17-9.8,19.6c-1.2,0.9-1.8,0.5-2.5-0.3c-1.4,3.5-3.1,8-3.4,10.1c-0.7,3.9,5.1,4.6,9.7,2
	c3-1.7,7.3-2,10.7-2.6c0.1,0.1,0.2,0.2,0.3,0.3c-1.2,4.9-4,13.3-8.3,15.5c-5.7,2.9-14.6,2.2-13.7,5l30.1,35l-2,0.9
	c2.2,3.6,5,12.5,7,14.1c1.3,1.1,2.8,0.1,4-1.4l5.3,13.8l23.6,9.2l17.8-3.7l12.3-16.6l19-22.3L620.5,1057.1z"/>
                    <path className="st0" d="M666.4,1044.7l-4.6-13.1l-6.7-3.1l0.1-0.2l-7.4-18.2l3.8-10.7l4.3-20.9L648,972l11.2-5.3v-7.2L635.5,947
	c-0.1,0.5-0.2,0.7-0.2,0.7l-7,9.2l-13,24.9l-3.4,16.3c0,0,0,0-0.1,0l0,0v0.1l0,0v-0.1l-10.3-5.8l-7,9.7c0,0-0.2-0.2-0.7-0.6
	c1.5,4.8,3.5,12.2,3.1,15.1c-0.6,4.6-10.5,17.1-13.1,17.7c-0.2,0-0.6,0.2-1,0.3l-0.9,6.9l-5.9,8.5l7.2,6.6l11.8-5.3l13.1,2.6
	l1.7-2.1l0,0l-0.2,0.2l10.9,5.2l2.9,19.8c5.4-2.7,14.3-7.1,14.8-6.7c0.7,0.6,13.9-3.2,11.9,6.4s6.4,17.2,9.7,18.5s12.5-2.6,14.4-4.6
	s-2.6-15.9-2.6-15.9l6.6-3.7l1.9-10.5v-11L666.4,1044.7z"/>
                    <path className="st0" d="M750,1024.4c-2.4-9.6-15.1-15.3-12.8-23.3s4.6-6.3,4.6-6.3c-0.2-2.3-0.8-5.6-1.7-6.8c-1.4-1.8-9.2-5.1-10.2-7.5
	s-1.9-1.8-4.6-2.7c-1.8-0.6-6.3-3.9-9.1-6l-0.2,0.6l-16.9,1.3c-0.1,0-0.2,0-0.3,0c-0.5,0-0.9,0-1.3,0.1l-0.9,0.1l-19.6-7.2
	l-17.7-3.9v3.9L648,972l7.9,6.5l-4.3,20.9l-3.8,10.7l7.4,18.2l-0.2,0.2l6.8,3.1l4.6,13.1l13.6,4.7v11l-1.5,8.2l20.5,8.2
	c0,0-3.8,5.3-1.9,8.5s11.1,6.8,10.4,8.2v0.1c2.3-0.3,4.9-0.8,5.9-1.8c2-1.9,0.8-6.3,4.8-6.5s9-6.5,9.6-4.3c0.2,0.8,1.1,1.6,2.1,2.2
	c0-0.4,0-0.7,0-1.1c0.9-8.2-16.5-15.7,1.9-30.1c2.9-2.3,5.4-4.2,7.5-6c0.4-0.3,0.8-0.6,1.2-1C750.9,1036.1,752,1032.3,750,1024.4z
	 M681.3,1049.9l-0.9-0.4L681.3,1049.9L681.3,1049.9z"/>
                    <path className="st0" d="M1020.2,511c1.4-3.6,9.7-4.9,8.5-12.8c-0.7-4.6-3.8-10.1-6.2-13.9c-10.9,2.6-17.9,4.4-19.4,3.4
	c-3.9-2.6-0.6-11.1-3.9-11.1s-9.1,3.9-13.7,5.2c-2.8,0.8-7,2.2-10.9,3v0.1c-2.6,0.5-5,0.7-6.9,0.3c-3-0.8-24.1-9.2-49.4-13.4l0,0
	c-13.5-2.2-28.2-3.3-41.9-1.3c-15.8,2.3-29.2,4.9-40.1,7.1c-0.9,3.5-3.3,8.8-4.1,10.9c-1.3,3.2,1.5,8.2,4,11.8
	c2.5,3.6-4.8,2.6-5.2,2s-4.1,10.4-0.1,13.1c3.4,2.2-0.7,12.2-3.3,16.1c3.6,2.9,10,7.5,10.4,9.3c0.6,2.6-3.9,3.8-2.9,8.6
	s8.5,4.2,12.7,6.5s5.5-1.6,11.2-1.9s12.4,5.2,13.7,9.8s4.6,5.2,4.6,6.5s0,12.5,3.7,12.2s2.4-9.8,4.3-7.9c0.7,0.8,2.5,0.5,4.5-0.3
	c-1.3,5.3-3.9,15.4-5.3,17.7c-1.9,3.2,4,13.7,7,14c2.9,0.3,10.8,3.1,12,4.9c1.3,1.9,0.6,6,0,8.5s-9.7,9.3-9.8,11.8
	s4.7,18.3,12.5,15.7s12.2-8.4,13.4-8.9s5.5-11.5,7.5-13.4s10.4-7.8,9.8-9.8s5.4-4.7,8.6-0.7s9.8,6.2,11.1,6.1c0.6-0.1,3.6-1.6,6.4-3
	c1.6,1.9,7.1,3.3,10,3.6c3.4,0.3,8.5,3.4,11.8,2s9-4.7,14.3-4c3.1,0.4,7.5,1,10.7,1.5c1.8-5.7,5-12.8,5.8-14.3
	c1.3-2.3,3.7-11.2,1.3-13.4s-4.1-6.5-2-8.8c1.6-1.7-2-7.1-4-9.8c0,0,0,0-0.1,0l0,0c2.4-2,4.4-4.8,5.5-6.7c2-3.7,3.9-8.1,3.2-10.1
	s2.6-11.8,4.6-13.1s2-7.8,1.3-11.1s-3.3-2.4-3.8-5s-0.8-2.9-4-8.8S1018.8,514.6,1020.2,511z"/>
                    <path className="st0" d="M1223.9,540.9c-13-19.4-11.8-6.6-14.4-9.2s1.4-16.3-1.9-17c-3.1-0.7-35.5-21.8-50.3-21.3l0,0
	c-0.8,0-1.5,0.1-2.2,0.3c-13.5,3.1-7.4-20.5-58.3-19.7c-30.9,0.5-57.3,6.4-74.3,10.4c2.4,3.8,5.4,9.3,6.2,13.9
	c1.2,7.8-7.1,9.2-8.5,12.8s-5.8,2.2-2.6,8.2c3.2,5.9,3.5,6.2,4,8.8c0.2,0.9,0.6,1.3,1,1.7h0.1c1,0.7,2.2,1.1,2.7,3.2
	c0.7,3.3,0.7,9.7-1.2,11.1c0,0,0,0-0.1-0.1c-2,1.3-5.3,11.2-4.6,13.1c0.7,2-1.2,6.4-3.2,10.1c-1,1.9-3,4.6-5.4,6.7
	c2,2.8,5.6,8.2,4,9.9c-2.1,2.3-0.4,6.6,2,8.8s0,11.1-1.3,13.4s-8.9,19.8-6.6,21.3s11.8,3.2,11.8,5.9s13,5.8,14.5,4.6
	s13-14.9,15.3-13.6c2.3,1.2,14.5,0.8,14.7,0c0.1-0.4,1.2-2.3,2.2-3.9c0.5,0.3,0.9,0.6,1.1,0.6c2,0.6,13.2-1.3,15.8,0
	c2.6,1.3,5.1,3.4,9.1,3.4s10.8-1.9,13.8-2.1c1.9-0.1,2.7-7.4,3-12.9c-0.1,0-0.1,0-0.2,0.1l0,0c4.1-1.9,10.9-11.8,10.9-14.7
	c0-3.1,16-3.3,17.5-4.6s10-5.6,11.3-8.7c1-2.3,11.9-8.5,17.2-11.4c-3.7-5.4-6.2-13-5-17.3l0,0c0.7-2.5,2.6-3.9,6.1-3.3
	c11.8,2,29.4,16.5,34.7,15.2C1208.2,563.2,1236.9,560.3,1223.9,540.9z"/>
                    <path className="st0" d="M1170.9,574.3c-1.3-1.1-2.7-2.7-3.8-4.4c-5.3,2.9-16.2,9-17.2,11.4c-1.3,3.1-9.8,7.4-11.3,8.7
	s-17.5,1.5-17.5,4.6c0,2.9-6.7,12.6-10.8,14.6c-0.3,3.9-0.8,8.7-1.7,11.2l0,0c-0.4,1-0.8,1.6-1.3,1.6c-3,0.1-9.8,2-13.8,2.1
	c-0.3,0-0.6,0-0.9,0c-3.5-0.2-5.8-2.1-8.2-3.3c-2.6-1.3-13.8,0.6-15.8,0c-0.3-0.1-0.6-0.3-1.1-0.6c-1,1.7-2.1,3.6-2.2,4
	c-0.1,0.8-12.4,1.2-14.7,0c-2.3-1.2-13.8,12.5-15.3,13.6s-14.5-1.9-14.5-4.6c0-1.2-1.8-2.2-4.1-3c-0.2,2.6-0.8,6.3-2.5,7.1
	c-2.8,1.2-5.2,6.4-3.9,9.7s-4.5,14.1-5.7,19c-0.6,2.7-0.7,5.9-0.7,9l0,0c0,0.1,0,0.1,0,0.2l-0.1-0.1c0,2.5,0.1,4.8-0.1,6.7
	c-0.4,4.3-4.6,18.2-3.3,20.3c1.3,2,5.6,5.7,5.8,8.6c0.2,2.9-0.5,15.2-5.1,15.8c-0.1,0-0.2,0-0.3,0c2,7,5.6,20.4,7.9,22.1
	c1.7,1.3,4,3.5,5.9,5.4c-0.6-5.1-0.8-8.3,1.3-7.3c8,3.8,16.4,19.3,21.8,18.2s-2.6-26.9,9.2-23.6c7.4,2.1,14,11.1,19.3,17.5
	c0-0.1,0-0.2-0.1-0.3c0.1,0,0.1,0.1,0.2,0.1c0,0,0,0,0,0.1c3.1,3.8,5.7,6.8,7.6,6.8c5.2,0,12.2-36.7,9.8-49.1
	c-2.4-12.4,10.4-4.8,14.4-4.7s0.1-16.3,12.5-15c7.2,0.8,17.7-0.9,25.1-3.8v0.1c5.4-2.1,9.2-4.9,8.9-8c-0.6-7.2-5.5-32.1,14.4-22.3
	c0,0,5.4-43.9,8.6-49.8S1178.8,580.9,1170.9,574.3z"/>
                    <path className="st0" d="M926.5,809.7c-1.3-2.2-2.9-4.9-3.7-6.7c0,0-0.1,0-0.2,0c-0.3-0.6-0.4-1.1-0.4-1.4c-0.3-2,3.6-7.9,1-10.8
	c-2.6-2.9-3.8-14.5-3.3-17.4s-2-14.1-2.3-16.3c-0.4-2.2,4.3-6.6,2.3-9.2c-0.5-0.6,0-1.7,0.9-3.1c-2.5-1.4-5.1-2.9-5.4-3.7
	c-0.6-1.5-13.8-1.7-17.1-2.4c-1.5-0.3-2.9-2.7-4.2-5.3c-3.9,1.4-9.1,2.7-11.5,2.7c-4.4,0-13.1,8.5-14.4,10.5
	c-1.1,1.7-7.6,0.5-9.8-1.6l-6.2,7.1c-0.3,0.2-0.5,0.5-0.6,0.8l-7.2,8.2l12.6,27.2l-13.6,9.4l-0.9-0.8c-1.4,2.6-3.4,6.6-3,8.6
	c0.4,2.3,1.1,5.8,1.3,8c0,0-0.1,0-0.1-0.1c0.1,1,0.1,1.7-0.1,1.9c-0.6,0.6-6.2,13.4-8,15.7s-7.1,11.1-10.3,12.4
	c-0.9,0.4-2.3,0.4-3.7,0.3v0.1c-0.1,0-0.2,0-0.3,0s-0.1,0-0.2,0c-3.7-0.3-8.4-1.6-9.7-1.6c-0.2,0-0.4,0-0.6,0
	c-2.3,1.4-6.5,3.3-11.5,3.3c-7.6,0-8.2,12.5-8.2,15.1s-5.9,9.8-5.9,9.8s-0.1-0.1-0.2-0.2c-0.3,1.3-0.8,2.6-1.7,3.5
	c-2.7,2.6-5.2,12.4,0,15.7s7.8,3.3,7.8,3.3s4.8,2.5,4.6-1.3s1.3-11.1,2.6-11.8s4,2.5,7.9,3.2s11.7,4.5,12.4,2c0.4-1.5,2-5.9,3.3-9.1
	c-0.6,0.3-1.1,0.5-1.3,0.6c-0.1,0-0.2,0.1-0.2,0.1c0.1,0,0.1,0,0.2-0.1c1.3-0.7,13.2-6.6,21-7.9c5.3-0.9,14.4-1.2,19.9-1.8l0,0h0.1
	c2.9,5.3,10.4,15.7,12.4,17.2c2.3,1.7,8.2,14.2,9.5,14.8c0.8,0.4,7.1,2.1,12.6,3.3c4.6-2.3,9.5-4.7,7.7-6.5
	c-2.6-2.7-18.1-14.8-9.2-17.7s15.8-1.3,15.8-5.3c0-3.9,6.3-28.7,1.2-37.8l0,0c-0.2-0.3-0.4-0.6-0.6-0.9
	C903.4,827.5,917.7,814.5,926.5,809.7z"/>
                    <path className="st0" d="M932.4,1015.2c-0.2-2.4-3.8-15.2-7.9-28.8l0,0c-1-3.2-2-6.5-2.9-9.7l0,0l0,0c-4.3-13.9-8.3-26.4-8.9-27
	c-0.5-0.5-4.9-6.8-9.9-14.6c-0.2-0.4-0.4-0.8-0.6-1.2c0,0,0,0,0.1,0c-7.8-12.1-16.5-27-14.2-29c1.2-1,3.2-2.1,5.3-3.2
	c-5.5-1.2-11.8-2.9-12.6-3.3c-1.3-0.6-7.2-13.1-9.5-14.8c-0.9-0.7-3.1-3.4-5.5-6.6l-0.1,0.2c-0.1-0.2-0.3-0.4-0.4-0.6
	c-2.5-3.5-5.2-7.4-6.6-10c-5.6,0.7-14.7,1-19.9,1.8c-6.6,1.1-16.2,5.5-19.7,7.3c-1.3,3.3-2.9,7.6-3.3,9.1c-0.1,0.4-0.5,0.7-1,0.8
	c-2.3,0.5-8.2-2.2-11.4-2.8c-3.9-0.7-6.6-3.9-7.9-3.2c-1.3,0.7-2.8,8-2.6,11.8s-4.6,1.3-4.6,1.3s-2.1,0-6.3-2.4
	c-0.2,2.6-0.5,5.8-0.9,7c-0.3,0.8-1.1,1.5-2.2,2l0,0c-1.7,0.9-4,1.5-6.3,1.9c-3.8,0.7-5.2-3.3-7.9-3.9c-0.4-0.1-0.8-0.4-1.1-0.8
	l-8,4.7l-1.3,10.5l6.5,5.9c0,0,7.8,15.1,8.5,16.4s6,9.7,4,11.7s-3.2,6.7-1.1,10c2.1,3.3,8.6,11.9,10.4,12.1s7.1-5.6,9.7-5
	s9.1,1.3,9.1-2s0-3.3,2-4.6c1-0.7,3.6-1.2,5.9-1.5l-0.3,3.1l8.8,3.7l2.6,10.5l13.8,17.6l3.2-2.1l0,0c0.7,3.6,1.6,8,2,8
	c0.6,0,8.5,10.5,8.5,10.9s4.6,9.4,4.6,9.4l-0.4-0.1c1.1,0.9,2.3,1.8,3.1,2.1c0.2,0.1,0.4,0.1,0.7,0.1h-0.1c0.2,1.8,0.3,4.2-0.3,5.7
	c-1,2.7-4.9,9.3-4.9,13.9s-0.2,8.5-2.7,9.8s3.4,9.4,7.3,9.2s14.2,11.7,18,10.4c2.6-0.9,10.4-2.4,15-3.3c1.1,1.5,2.2,2.5,3.3,2.7
	c4.3,0.6,19.4,2.6,20.7,2.9c0.8,0.2,6.5-0.7,10.7-1.4c1.8,1.3,8.3,3.7,8.3,3.7l7.8-4.6l5.4-1.4
	C934.5,1057.5,932.9,1020.4,932.4,1015.2z M922.5,1067.6c-0.2-0.2-0.3-0.4-0.4-0.6C922.2,1067.2,922.3,1067.4,922.5,1067.6
	L922.5,1067.6L922.5,1067.6z"/>
                    <path className="st0" d="M855.7,1017.9c-0.2,0-0.5,0-0.7-0.1c-0.8-0.3-2-1.2-3.1-2.1l0.6,0.1c0,0-4.6-9.1-4.6-9.4s-7.9-10.9-8.5-10.9
	c-0.4,0-1.3-4.4-2-8l-3.2,2.1L820.4,972l-2.6-10.5l-8.8-3.7l0.3-3.1c-2.3,0.3-4.8,0.8-5.9,1.5c-2,1.3-2,1.3-2,4.6
	c0,1.9-2.2,2.5-4.6,2.5c-0.3-0.1-0.5-0.2-0.8-0.2c-0.2,0-0.5,0.1-0.7,0.1c-1.2-0.1-2.4-0.3-3.2-0.5c-2.6-0.6-7.9,5.2-9.7,5
	s-8.3-8.8-10.4-12.1c-1.2-1.8-1.3-4-0.9-6c-2.5-0.3-6.1-1.2-7.7-2c-2.4-1.2-10.2,0.5-14.3,1.9s-8.1,1.4-8.1,1.4s-2.6,10.7-2.7,11
	c-0.1,0.3-5.2,9.3-5.2,9.3L729,979c0.3,0.3,0.6,0.7,0.8,1.4c1,2.4,8.8,5.7,10.2,7.5c0.8,1,1.4,3.6,1.6,5.7c0.1,0,0.2,0.1,0.3,0.1
	c0,0.4,0.1,0.7,0.1,1.1c0.7,1,14.6,19.2,14.3,26.8c-0.3,7.7,1.3,21.5-2.2,27.7c-3.6,6.2-15.4-1.1-17.4,16.3s-3.4,14.5,5.2,22.5
	c2.1,1.9,4.3,4.6,6.6,7.6c2.1-1.4,5.2-3.8,6.7-5.1c2.2-2.1,3.9-4.9,3.8-9.7c0-4.8,4.4-8.7,5-10.8c0.4-1.4,3.3-2.4,5.2-2.9
	c-0.1-0.1-0.1-0.2-0.2-0.3l0,0c1.5,2.2,3.5,4.1,5.7,4.6c4,0.9,10.4-1.7,12.3-4s8.5-3.3,8.5-3.3l2-10.5l9.8-7.2c0,0,1.4-6.5,2-6.5
	c0.3,0,2.6-0.6,5.2-1.4c0.4-0.1,0.8-0.2,1.2-0.3c0.3,0.2,0.6,0.2,0.9,0.3c2,0.1,13.2,7.3,15.7,7.3c1.6,0,9.6,2.5,15.3,3.6
	c-0.3-1-0.3-1.9,0.4-2.3c2.5-1.3,2.7-5.2,2.7-9.8s3.9-11.2,4.9-13.9C856,1022.1,855.9,1019.7,855.7,1017.9z"/>
                    <path className="st0" d="M986.7,1074.2c-3.4-32.1-22.8-69.9-28.8-67.2c-6,2.8-16.3,25.3-3.3,55.3c0,0,0.1,0.8,0.1,1.8c0,0,0.1,0,0.1,0.1
	v0.1c-0.1,0-0.1-0.1-0.2-0.1c-0.1,2.5-1.4,6.3-9.2,2.1c-0.4-0.2-0.8-0.5-1.2-0.8l-5.4,1.4l-7.8,4.6c0,0-0.8-0.3-1.8-0.7l0,0
	c-2.1-0.8-5.2-2.1-6.5-3c-1.9,0.3-4.1,0.7-6,1l3.2,6c0,0,0.4,6.2,0,7.3s-5.1,6.2-4.6,10.4s2.3,7.2,2.4,10.4c0.1,2.8,1.1,8.1,0,10.3
	c2.4,0.7,5.8,1.4,8.8,0.7c5.3-1.3,7.1,1.6,9.1,4.2s2.8,6.1,1.3,9.8s-6.3,3.4-1.3,11.8s13,11,12.7,11.8c-0.1,0.5,0.3,1.9,0.7,3.1
	c2.4-0.8,4.2-1.4,7.4-0.4c3,0.9,7.5,3,11.5,5.7c0.6-2.1,0.9-4.7-0.2-6.5c-2-3.3-0.9-10.4-0.6-13.3c0.3-2.9,5-10.5,5.6-14.5
	c0.5-4-0.4-5.6-3-8.2c-1.4-1.4-1.1-3.5-0.5-5.1c0.7,1.4,2.2,2.4,5.1,1.3c3.9-1.4,8.6-1.3,9.8-3.4c0.5-0.8,0.9-2.1,1.3-3.4
	c3.7-1.2,5.3-7.1,8.5-8.4c1.6-0.6,3.6-2.9,5.2-5C993.1,1092.3,988.1,1087.4,986.7,1074.2z"/>
                    <g>
                        <path className="st0" d="M944.5,1155.7c1.9-0.2,3.3-0.7,4.6-1.1c-0.4-1.2-0.9-2.7-0.7-3.1c0.2-0.8-7.7-3.4-12.7-11.8s-0.2-8.1,1.3-11.8
		s0.7-7.2-1.3-9.8s-3.8-5.5-9.1-4.2c-2.9,0.7-6.3,0.1-8.8-0.7c0,0.1-0.1,0.2-0.2,0.3v-0.1c1.3-2.1,0.2-7.7,0.1-10.5
		c-0.1-3.2-1.8-6.2-2.4-10.4s4.2-9.3,4.6-10.4s0-7.3,0-7.3l-3.2-6c-2.3,0.3-4.2,0.6-4.7,0.4c-1.3-0.4-16.4-2.3-20.7-2.9
		c-1.1-0.1-2.2-1.2-3.3-2.7c-1.4,0.3-3,0.6-4.7,0.9l0,0c-4,0.8-8.3,1.7-10.2,2.4c-3.8,1.3-14.1-10.6-18-10.4
		c-2.8,0.1-6.8-4.1-7.7-6.9c-2.3-0.4-5-1.1-7.5-1.7c-0.8,0.5-1.7,1.2-1.9,2.1c-0.6,2,1.9,4-0.7,6.6s-0.3,7.6-3.7,7.7
		s-6.8,0.7-7.1,2.4c-0.3,1.7-3.3,1.1-2.2,3.6s3.2,4,0.6,5.3c-1.8,0.9-4,3.5-5.1,5.1c0.7,0.2,1.7,0.8,3.8,1.4c3.4,1,6,0.5,6.6,2.5
		c0.3,0.9,0.6,2.2,0.8,3.4c1.9,0,3.6,0.4,4.9,1.2c2.1,1.4,6.1,3.5,9.2,5.8l0,0c2.7,2.1,4.8,4.2,3.9,6.1c-1.9,3.9-3.3,9.9-3.2,13
		c0,0.8,0,1.6-0.1,2.5c0.1,0,0.2,0,0.3,0.1c-0.4,2.7-1.5,5.7-4.5,7.1c-3.9,2-6.7,1.7-7.1,7.2c-0.3,3.9-4.3,8.1-8.5,10.1
		c0.7,0.4,1.4,0.8,2,1c5.2,2.2,17.6,12,17.6,12s-3.4,10.2-0.7,11.1s10.4,9.7,7.8,13s0.8,14.3,1.3,19c0.4,3.4-0.2,8.1-1,10.4
		c4.8,8.3,16.4,23,22.7,27.6c7.2,5.3,15.1,8.7,17.5,4.2s4.3-17.4,9.8-19.4s9.9-1.8,11.3-6.4s7.7,9.8,9.8,13.1s14.5,2.9,15.2-3.3
		c0.6-6.3,3.2-5.6,3.2-5.6s3.1-5.5,1.6-11.5s-3.6-12.2-3.6-12.2l-6,0.1c0,0-7.7-0.8-9.9-5c-0.2-0.1-0.4-0.1-0.5-0.2
		c-0.1-0.2-0.2-0.5-0.3-0.7c-1.3-5.3,0.9-5.9-5.1-11.5s-1.9-4.4,0.6-7.5s2.2-0.5,5.7,5.5c2.7,4.7,2.2,9.3,6,12.4l6.6-9.2
		c0.1-0.1,1.9-12.4,1.5-12.9c-0.3-0.3,1.5-2.6,2.8-4.2C938.8,1157.7,939.8,1156.3,944.5,1155.7z"/>
                        <path className="st0" d="M900.5,1274.7c0.4-3.3-2.9-14.5-5.1-15.4s-4.1,2.1-7.6,2.2s-18.6-9.2-18.6-9.2s-0.7,2-0.7,4.6
		c0,2.7,0.3,4.1-1.4,7.6s-0.3,4.1,0.4,10.7s-0.1,11.7,0.1,18s-3.4,20.6-6,25.9s-9.8,18.3-12.4,19.6s-5.5,16.8-4.8,18.9
		s10.4,0.3,12.7,0.8s6.6-12.9,9.6-13.6s9-8.4,14.9-11.4s15.4-26.8,18.9-34.1S900.1,1278,900.5,1274.7z"/>
                        <path className="st0" d="M851.8,1298.9c-0.7-4.6,0.6-7.9,1.2-9.6c0.6-1.7,0.3,5.5,0.7,7.6s3.3-0.6,4-5.8s3.1-10.5,2.6-13.2
		s-4.3-4.2-6-6.1s-2.2,2.9-3.3,2.1s-3.2-3.1-3.2-3.1c0-0.8-3.6-3.8-3.5,0.6s0,19-4.8,27.5s-15.3,31.1-16.2,36.4s-0.8,9.6,1,10.7
		s6.7-5.7,9.1-10.4s10-15.8,12.2-20.7S852.5,1303.6,851.8,1298.9z"/>
                    </g>
                    <path className="st0" d="M853.7,1197.3c-0.5-4.7-3.9-15.7-1.3-19s-5.1-12.1-7.8-13s0.7-11.1,0.7-11.1s-12.4-9.8-17.6-12
	c-0.6-0.2-1.2-0.5-1.8-0.9c0-0.1,0-0.1,0-0.2c4.1-2,8-6.2,8.3-10c0.4-5.5,3.2-5.2,7.1-7.2s4.7-6.7,4.6-9.8s1.3-9.1,3.2-13
	s-9.1-9.3-13.2-11.9c-1.4-0.9-3.1-1.2-5-1.2c-0.3-1.2-0.6-2.5-0.8-3.4c-0.5-2-3.1-1.5-6.5-2.5c-2.4-0.7-3.4-1.4-4.2-1.6
	c0.1,0,0.3,0,0.4,0.1c1.1-1.6,3.3-4.2,5.1-5.1c2.6-1.3,0.5-2.8-0.6-5.3s1.9-1.9,2.2-3.6s3.7-2.3,7.1-2.4s1.1-5.1,3.7-7.7
	s0.1-4.6,0.7-6.6c0.3-0.9,1.1-1.6,1.9-2.1c-3.6-0.9-6.9-1.8-7.8-1.8c-2.5,0-13.7-7.2-15.7-7.3c-0.3,0-0.6-0.1-1-0.3
	c-2.9,0.8-5.9,1.7-6.2,1.7c-0.6,0-2,6.5-2,6.5l-9.8,7.2l-2,10.4c0,0,0,0,0,0.1l0,0c0,0,0,0,0-0.1v0.1c0,0-6.6,1-8.5,3.3
	s-8.3,4.9-12.3,4c-2.1-0.5-4-2.3-5.5-4.3c-1.9,0.5-4.8,1.5-5.2,2.9c-0.6,2.1-5,5.9-5,10.8c0,4.8-1.7,7.6-4,9.6
	c-1.5,1.3-4.6,3.7-6.7,5.1c7.3,9.4,15.6,22.2,23.5,28.2c4.9,3.7,11,12.5,16.8,21.6l0.1-0.1c0,0,0,0,0,0.1l0,0
	c6.7,10.5,12.8,21.4,16,25.6c5.9,7.9,43.7,26.4,46.5,33.4c0.4,0.9,0.9,2,1.6,3.2C853.5,1205.4,854.1,1200.7,853.7,1197.3z"/>
                    <g>
                        <path className="st0" d="M957.3,1173.4c-3.3-2.3-8.9-6.3-13.8-10.8c-0.7-0.6-1.2-1.2-1.7-1.7c-1.3,1.6-3.1,3.9-2.8,4.2
		c0.4,0.5-1.4,12.8-1.4,12.8l-6.6,9.2c1.1,0.9,2.6,1.7,4.6,2.3c9,2.7,16.2,5.3,17.3,0.4S960.6,1175.7,957.3,1173.4z"/>
                        <path className="st0" d="M989.8,1222.1c-4.2-6.8-4.7-7.7-9.6-14.9s-8.6-13-11.8-12.5s-6.6,2-6.6,2l-0.6,0.6c0,0-2.6,3.1-1.3,5.5
		s0.7,8.9,0,12.2s4.1,17.3,5.2,19s4.7,9.8,6.6,13.1s3.4,10.6,11,10.4s14.2-2.7,14.7-4.9s4.2-7.6,2.8-12.7S994,1228.9,989.8,1222.1z"/>
                        <path className="st0" d="M1164.9,1357.9c-1.4-3.4-8.5-5.3-7.4-11.1c0.1-0.6,0.2-1.2,0.2-1.6c-0.1,0-0.3,0-0.4-0.1c0.1,0,0.3,0,0.4,0.1
		c0.3-3.6-2.1-1.6-3.8-5.4c-1.9-4.3,3.7-10.3,1.2-18s-5.5-25.7-5.2-33.9c0.2-6.6,0.3-10.1-0.7-13.9h-0.1c-0.3-0.9-0.6-1.8-1-2.8
		c-1.1-2.6-0.2-5.7,1-8.1c-1.5-0.7-2.8-1.3-3.6-1.9c-4.9-3.7-2-11.3-2.1-16.8s0.2-9.5-0.2-16.2s-6.5-25-9.9-30.7s-15.6-5.3-17.6-0.9
		s-2.8,24.4-6.5,24.5c-1,0-1.9-1-2.8-2.5c0-0.1,0-0.1,0-0.2c-2.8-4.7-5.3-14.5-6.3-20.1c-1.3-7.5-4.9-10.9-3.3-16.1
		c0.8-2.6-0.1-6.4-1.1-9.4c-0.9,0.8-1.9,1.3-2.9,1.2l-0.1,0.1c-0.4,0-0.7-0.1-1.1-0.4c-5.3-2.9-15.1-7.2-13.8-15.7
		s-12-14.7-19.6-13.1s-10.6-14.3-13.2-19.6s-6.3,1.2-7.4-10.3c-0.8-8.3-3.2-21-6.6-28.7c-3,1.8-5.7,2.9-7.6,2.8
		c-3.7,0-10.1,3-16.6,4.1v0.1l0,0l0,0c-2.6,0.5-5.2,0.6-7.6,0.2c-1.6,2.1-3.6,4.3-5.2,5c-3.2,1.3-4.9,7.1-8.5,8.4
		c-0.4,1.2-0.8,2.5-1.3,3.4c-1.2,2.1-5.9,2-9.8,3.4c-3,1.1-4.4,0-5.1-1.4c-0.6,1.7-0.8,3.8,0.5,5.2c2.6,2.6,3.5,4.2,3,8.2
		c-0.6,4-5.3,11.6-5.6,14.5s-1.4,10,0.6,13.3c1.1,1.8,0.8,4.4,0.3,6.5c2.7,1.8,5.2,3.9,6.9,6c1.2,1.5,7.2,6.9,15.1,14.5
		c0,0,0,0,0.1,0c19.5,18.5,50.5,50,51.6,69.1c0.3,4.7,1.2,9.9,2.7,15.5l0,0v0.1l0,0c1.2,4.5,2.7,9.1,4.3,13.8
		c4.3,12.1,9.6,24.3,13.8,33.7v0.1c3.8,8.5,6.5,14.6,6.5,16.4c0,0.4,0.1,1,0.3,1.8h0.1c2.1,10.2,16.2,52,16.2,52s1.3,9.8,1.5,20.2
		c1.4-0.6,3.6-1.6,4.8-3.1c1.9-2.3,7.4-5.8,11.4-6.9s5.3-3.4,12.4-3.3c4.3,0.1,6.3-2.1,7.8-3.6c0,0,0-0.1-0.1-0.1
		c1-1,1.7-1.8,2.7-1.6c2.6,0.6-1.2,3.4,3.3,5.9s4.8,6.9,5.5,10.9c0.4,2.5,1.2,4.8,2.4,6.2c-0.3-2.5-0.4-4.9-0.7-6.5
		c-0.8-5.4,0.8-8,7.1-7.9c6.3,0.1,12.5-6.9,11.8-8.9s4-7.5,8.6-10.8S1166.3,1361.3,1164.9,1357.9z"/>
                    </g>
                    <g>
                        <path className="st0" d="M1188.5,1666.4c-6.6-9.6-8.6-35.2-7.6-41.2s-13.5-24.7-18.2-31.3c-1.7-2.4-1.1-4.1,0.3-5.8
		c-5.3-5.8-4.2-14.5-2.6-18.8c1.7-4.5-2.3-9.7-5.1-15.1c-1.8-3.5-3.5-8.6-4.5-13.8c-0.1,0-0.3,0-0.4,0c0.2,0,0.3,0,0.5,0
		c-0.6-2.9-0.9-5.7-0.9-8.3c0-7.2,15.7-1.3,22.7-0.6s2.1-16.4,1.4-24.3s-6.5-6.5-12-11.9s-0.9-16.8-7-22.1c-0.8-0.7-1.5-1.3-2.2-1.9
		c-0.3-0.3-0.6-0.6-0.9-0.8h0.1c-3.9-3.8-6-7.3-11.1-16c-6.2-10.6,17.2-26,22.6-31.8s0.7-13.1-4.6-8.4s-7.1,7.6-14.4,6.5
		c-5.1-0.8-6.5-7.3-7.1-13.1c-1.2-1.3-1.9-3.6-2.4-6.2c-0.7-4-1-8.3-5.5-10.9s-0.7-5.3-3.3-5.9s-3.4,5.3-10.5,5.2s-8.4,2.2-12.4,3.3
		s-9.5,4.6-11.4,6.9c-1.3,1.5-3.4,2.6-4.8,3.1c0.1,8.8-0.5,18.2-3.4,22.6l0,0l-0.1,0.1l0,0l-0.1,0.1c-6.4,9.5-9.5,19.5-8.8,24.8
		s7.8,10.8,7.5,13.2s-11.2,23.8-8.4,29.2s6.9,14.9,14.9,16.6s24-5.8,22.3-16.2c-0.2-1.1-0.3-1.9-0.3-2.5c0-0.9,0.2-1.1,0.4-0.7
		l0.1-0.2c0.1,0,0.2,0,0.2,0.1l-0.1,0.2c1,1.4,3,11.7-2.7,18.8c-8,9.9,6.6,21.5,10.5,31.4c1.5,3.8,2.6,10.1,3.5,17h-0.1
		c1.5,11.2,2.6,24.1,4.3,31.4c2.7,11.8,35.2,43.1,36.8,53.8s36.1,70.8,40.6,70.8S1195.1,1676,1188.5,1666.4z"/>
                        <path className="st0" d="M1079.8,1414.8c1.3-3.2,5.2-11,5.2-14.3s-0.5-12.3-1.9-13s-3.7-2.8-3.7-2.8s-4.8,2.6-5.5,4.6
		s-3.9,11.2-2.6,15.1s0.6,11.1,0.6,14.7c0,3.7-0.4,8.3-2.6,12.1s-3.9,10.2-1.3,10.5s6.8-10.2,7.4-12.3S1078.5,1418,1079.8,1414.8z"/>
                    </g>
                </g> */}
			</svg>
		</div>
	);
};

export default SeatMap;