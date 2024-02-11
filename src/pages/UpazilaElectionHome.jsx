import LatestNews from "../components/LatestNews/LatestNews"
import Video from "../components/Video/Video"
import Layout from "../components/common/Layout/Layout"
import Schedule from "../components/common/Schedule/Schedule"

function UpazilaElectionHome() {
    return (
        <Layout>
            <Schedule/>
           <LatestNews/>
           <Video/>
        </Layout>
    )
}

export default UpazilaElectionHome