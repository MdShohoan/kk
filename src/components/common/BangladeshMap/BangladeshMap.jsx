import { Link } from 'react-router-dom'
import districtPaths from '../../../assets/data/districtsPaths/districtsPaths'

function BangladeshMap() {
	return (
		<div>
			<svg
				version="1.1"
				id="Layer_1"
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				x="0px"
				y="0px"
				viewBox="0 0 800 1000"
				style={{
					enableBackground: 'new 0 0 800 1000'
				}}
				xmlSpace="preserve"
			>
				{
					districtPaths.map((district) => {
						return (
							<Link to={`/districts/${district?.districtCode}`} key={district?.districtCode}>
								<g className='hover:fill-[#a8baad] fill-[#d2e9d8] transition-all duration-500 stroke-[#a8baad] stroke-2'>
									{
										district.paths.map((path, i) => (
											<path key={i} d={path} className='' />
										))
									}
								</g>
								<text
									transform={district?.transform}
									className="pointer-events-none text-xs"
								>
									{district?.districtName}
								</text>
							</Link>
						)
					})
				}

				{/* <path className="st0 fill-red-600" d="M453.9,472.5c0-0.1,0.1-0.1,0.1-0.2c0,0-0.1,0-0.1-0.1C453.9,472.3,453.9,472.4,453.9,472.5z" />

				<path className="st0" d="M491.7,429.9c0.4-0.4,0.8-0.8,1-1.3c0.2-0.7,0.2-1.5,0.1-2.2c-0.1,0.2-0.1,0.4-0.2,0.7
	C492.4,427.9,492.2,429,491.7,429.9z" />

				<path className="st0" d="M314.2,354.8c-0.1-0.3-0.2-0.5-0.4-0.7C313.9,354.3,314,354.6,314.2,354.8z" />
				<path className="st0" d="M302.6,443.1c-0.2,0.1-0.4,0.3-0.6,0.4l0,0v0c0.4,0.8,2.6,0.3,3,1c-0.1-1-0.2-2.1-0.2-3.1
	c-0.3,0.3-0.7,0.6-1,0.9C303.4,442.6,303,442.8,302.6,443.1z" />
				<path className="st0" d="M309,343.8C309,343.8,309,343.8,309,343.8c0.1,0,0-0.1,0-0.2C309,343.7,309,343.7,309,343.8z" />


				<path className="st0" d="M88.8,385.7v0.1c0,0,0,0,0,0C88.9,385.8,88.9,385.8,88.8,385.7z" />
                <path className="st0" d="M89,386.1c0-0.1-0.1-0.2-0.1-0.2C88.9,386,88.8,386.1,89,386.1z" />


				<path className="st0 fill-red-600" d="M192.8,489.1c-0.7,0-1.4,0-2.1,0" />
				<path className="st0 test fill-yellow-300" d="M280.3,301.4c-0.2,0.6-0.4,1.3-0.5,2C280,302.7,280.3,302.1,280.3,301.4z" />
                <path className="st0 test fill-yellow-300" d="M438.6,603.4c0.1-0.3,0.1-0.6,0.2-0.8c-0.1,0-0.3,0.1-0.4,0.1C438.5,602.9,438.6,603.1,438.6,603.4z" />
                <path className="st0 test fill-yellow-300" d="M302,443.5c-0.3,0.2-0.6,0.4-0.8,0.5C301.4,443.9,301.7,443.7,302,443.5L302,443.5z" />
                <path className="st0 test fill-yellow-300" d="M294.1,229.2c0.3,0.2,0.6,0.4,1,0.5c0-2.7-0.2-5.4-0.3-8.2c-0.1-2.1-0.6-3.7-1.5-4.9c0.4,1.6,0.8,3.2,0.9,4.5
	C294.2,222.7,295,227,294.1,229.2z" />
				<path className="st0" d="M463.4,471.2c0,0.5,0.1,1,0.2,1.4C464,472.6,463.5,472.1,463.4,471.2z" />
                <path className="st0" d="M299.1,192c0,0.6,0,1.1-0.1,1.7C299.1,193.2,299.2,192.6,299.1,192z" />
                <path className="st0" d="M294.5,210.7c0.6-1,0.8-2.1,1-3.3c-0.8,1.1-1.7,2.1-2.3,3.2C293.7,210.6,294.1,210.6,294.5,210.7z" /> */}

			</svg>
		</div>
	)
}

export default BangladeshMap