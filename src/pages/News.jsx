import { useEffect, useState } from 'react'
import Layout from '../components/common/Layout/Layout'
import axios from 'axios'
function News() {
    const [news, setNews] = useState([])
    const url = 'https://bn-api.kalerkantho.com/api/election?page=1'
    // const url = 'https://bn-api.kalerkantho.com/api/gallery_cat/3?page=1'


    const fetchData = async ()=>{
        const res = await axios.get(url)
       setNews(res?.data?.data)

    }

    const openNewTab = (url)=>{
        window.open(url, "_blank")
    }

    useEffect(()=>{
        fetchData()
    }, [])

    console.log(news)
  return (
   <Layout>
       <div>
        {
            news.map((newsItem, i)=>{
                // thumb_image
                // main_image
                return(
                    <div key={i}>
                        <h1>{newsItem?.n_head}</h1>
                        {/* <img src={newsItem?.main_image}/> */}
                        <img src={newsItem?.thumb_image}/>
                        <span onClick={()=>openNewTab(newsItem?.detailsUrl)}>Details</span>
                    </div>
                )
            })
        }
       </div>
   </Layout>
  )
}

export default News