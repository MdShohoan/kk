import BangladeshMap from "../components/common/BangladeshMap/BangladeshMap"
import Layout from "../components/common/Layout/Layout"
import Title from "../components/common/Title/Title"
import DivisionNavigator from '../components/common/DivisionNavigator/DivisionNavigator'

function DistrictNavigationPage() {
  return (
    <Layout>
      <section className="mb-12">
        <div className="container">
          <div className="mb-8">
            <Title text={'জেলা ভিত্তিক নির্বাচনী তথ্য'} underline="type2"/>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="col-start-1 col-end-2 border p-8">
              <DivisionNavigator/>
            </div>
            <div className="col-start-2 col-end-3 border">
              <BangladeshMap />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default DistrictNavigationPage