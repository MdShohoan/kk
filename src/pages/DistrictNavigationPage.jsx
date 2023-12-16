import BangladeshMap from "../components/common/BangladeshMap/BangladeshMap"
import DistrictNavigator from "../components/common/DistrictNavigator/DistrictNavigator"
import Layout from "../components/common/Layout/Layout"
import Title from "../components/common/Title/Title"
import { ScrollRestoration} from "react-router-dom"
import Section from '../components/common/Section/Section'
function DistrictNavigationPage() {
  return (
    <Layout>
      <ScrollRestoration />
      <Section>
        <div className="container">
          <div className="mb-8">
            <Title text={'জেলা ভিত্তিক নির্বাচনী তথ্য'} underline="type1" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="col-span-full md:col-start-1 md:col-end-2 border p-2 md:p-8 md:pt-4">
              <div className='text-center font-medium text-lg text-[#333] mb-8'>
                নির্বাচনের তথ্য জানতে নিজ বিভাগ হতে জেলার উপর ক্লিক করুন
              </div>
              <DistrictNavigator className='lg:grid-cols-2'/>
            </div>
            <div className="col-span-full md:col-start-2 md:col-end-3 border">
              <div className='text-center py-4 font-medium text-lg text-[#333]'>
                নির্বাচনের তথ্য জানতে জেলার উপর ক্লিক করুন
              </div>
              <BangladeshMap />
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  )
}

export default DistrictNavigationPage