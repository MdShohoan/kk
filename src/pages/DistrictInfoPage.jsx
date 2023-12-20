import Layout from "../components/common/Layout/Layout"
import total_voter from '../assets/election/total-voter.png'
import total_candidate from '../assets/election/total-seat.png'
import male_voter from '../assets/election/male-voter.png'
import female_voter from '../assets/election/female-voter.png'
import Card from '../components/common/CardCountUP/CardCountUP'
import districtList from '../assets/data/districtsList/districtsList'
import { ScrollRestoration, useParams } from "react-router-dom"
import Title from "../components/common/Title/Title"
import Chart from "react-apexcharts";
import ColorBoxes from "../components/common/ColorBoxes/ColorBoxes"
import districtData from '../assets/data/districts.json'

import Section from '../components/common/Section/Section'
import DistrictNavigator from "../components/common/DistrictNavigator/DistrictNavigator"
import toBengaliDigits from "../lib/toBanglaDigits"
import toEnglishDigits from "../lib/toEnglishDigits"
import { useEffect, useState } from "react"

function DistrictInfoPage() {
  const [latestData, setLatestData] = useState({})
  const { districtNo } = useParams()
  const [update, setUpdate] = useState(0)

  console.log(update)
  useEffect(() => {
    //11th election data of current district
    const eleventhData = getDistrictDataByDistrictNo(districtNo)?.find((element) => element.ElectionNo === 11)
    setLatestData(eleventhData)
  }, [districtNo])

  useEffect(()=>{
    setUpdate((prev)=>prev+1)
  }, [districtNo])

  //Find district name by districtNo
  function findDistrictById() {
    for (const division of districtList) {
      const foundDistrict = division.districts.find(district => district?.districtCode === districtNo);

      if (foundDistrict) {
        return foundDistrict.districtName;
      }
    }
  }

  //Find current district data by districtNO
  function getDistrictDataByDistrictNo(districtNo){
    return districtData?.data?.filter((district) => district?.districtNo == districtNo)
  }



  const districtCounterData = [
    { count: latestData?.totalVoter, title: 'মোট ভোটার', image: total_voter },
    { count: latestData?.maleVoter, title: 'পুরুষ ভোটার', image: male_voter },
    { count: latestData?.femaleVoter, title: 'নারী ভোটার ', image: female_voter },
    { count: latestData?.totalSeat, title: 'মোট আসন', image: total_candidate },
  ]

  console.log(districtCounterData, 'District counter data')

  const colors = ['#66c2a5', '#8da0cb', '#e78ac3', '#a6d854']
  const labels = ['আ. লীগ জোট', 'বিএনপি জোট', 'জাতীয় পার্টি', 'অন্যান্য']

  const chartData = [...getDistrictDataByDistrictNo()]?.map((district) => {
    return {
      electionNo: district?.ElectionNo,
      series: [
        toEnglishDigits(district?.bal || 0),
        toEnglishDigits(district?.bnp || 0),
        toEnglishDigits(district?.jp || 0),
        toEnglishDigits(district?.ao || 0),
      ]
    }
  })

  const options = {
    chart: {
      type: 'donut',
      width: '200px'
    },
    colors: colors,
    labels: labels,
    legend: {
      show: false
    },
    dataLabels: {
      enabled: true,
      textAnchor: "middle",
      style: { colors: ["white"], fontWeight: '400' },
      formatter: function (val, opt) {
        const key = opt?.seriesIndex
        const series = opt?.w?.config?.series
        return toBengaliDigits(series[key])
      },
      // dropShadow: { enabled: true }
    },
    tooltip: {
      style: {
        fontSize: '12px',
      },
      y: {
        formatter: function (val) {
          return toBengaliDigits(val)
        }
      }
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: false,
            total: {
              show: true,
              label: 'মোট',
              formatter: (value) => toBengaliDigits(value?.config?.series.reduce((acc, curr) => acc + curr))
            }
          }
        },
        startAngle: -90,
        endAngle: 90,
        offsetY: 10,
        offsetX: 0
      }
    },
    grid: {
      padding: {
        bottom: -80
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: '100%'
        },
        legend: {
          position: 'bottom'
        }
      }
    }],
  }

  return (
    <Layout>
      <ScrollRestoration />
      <Section>
        <div className='container'>
          <div className='mb-4'>
            <span
              className='inline-block rounded-lg bg-primary-light text-2xl py-[6px] px-4 mb-2'
            >
              {findDistrictById()} জেলা
            </span>
            <div className='bg-gray1 h-[2px]' />
          </div>

          {/* ------------District information counter start---------- */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8'>
            {
              districtCounterData.map((singleData, i) => (
                <Card key={i} type='type1' data={singleData} />
              ))
            }
          </div>
          {/* -----------District information counter end------- */}
        </div>
      </Section>

      <Section>
        <div className="container">
          <Title>
            বিগত নির্বাচনে জেলার দলীয় অবস্থান
          </Title>
          <div className="mb-5">
            <ColorBoxes />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-8">
            {
              chartData.map((element, i) => (
                <div key={i}>
                  <div key={i} className="relative flex justify-center items-center border rounded">
                    <Chart options={options} series={element?.series} type="donut" width={'300px'} />
                    <span
                      className="block absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/4"
                    >
                      {toBengaliDigits(element.electionNo)}ম
                    </span>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </Section>
      <Section>
        <div className="container">
          <Title>
            জেনে নিন আপনার জেলা সম্পর্কে
          </Title>
          <DistrictNavigator className='lg:grid-cols-4' />
        </div>
      </Section>
    </Layout>
  )
}

export default DistrictInfoPage