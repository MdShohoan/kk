import LatestNews from "../components/LatestNews/LatestNews"
import UpazilaSelect from "../components/UpazilaSelect/UpazilaSelect"
import Video from "../components/Video/Video"
import Layout from "../components/common/Layout/Layout"
import Schedule from "../components/common/Schedule/Schedule"

function UpazilaElectionHome() {
    return (
        <Layout>
            <Schedule />
            <UpazilaSelect/>
            <Video />
            <LatestNews />
        </Layout>
    )
}

export default UpazilaElectionHome