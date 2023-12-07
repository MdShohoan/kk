import Layout from "../components/common/Layout/Layout"
import total_voter from '../assets/election/total-voter.png'
import total_candidate from '../assets/election/total-seat.png'
import male_voter from '../assets/election/male-voter.png'
import female_voter from '../assets/election/female-voter.png'
import Card from '../components/common/CardCountUP/CardCountUP'
import districtList from '../assets/data/districtsList/districtsList'
import { useParams } from "react-router-dom"
import Title from "../components/common/Title/Title"
import Chart from "react-apexcharts";

function DistrictInfoPage() {
  const { districtNo } = useParams()

  //Find district by id
  function findDistrictById() {
    for (const division of districtList) {
      const foundDistrict = division.districts.find(district => district?.districtCode === districtNo);

      if (foundDistrict) {
        return foundDistrict.districtName;
      }
    }
  }

  function convertToBanglaNumber(number) {
    const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

    // Function to convert each digit of the number
    function convertDigit(digit) {
      if (digit >= 0 && digit <= 9) {
        return banglaDigits[digit];
      } else {
        return digit; // If not a digit, return as is (for decimal point, etc.)
      }
    }

    // Convert the number to a string and then convert each digit
    const banglaNumber = number.toString().split('').map(convertDigit).join('');

    return banglaNumber;
  }


  const seatData = [
    { count: '১০৪১৯০৪৮০', title: 'মোট ভোটার', image: total_voter },
    { count: '৫২৫৪৭৩২৯', title: 'পুরুষ ভোটার', image: male_voter },
    { count: '৫১৬৪৩১৫১', title: 'নারী ভোটার ', image: female_voter },
    { count: '১৮৪৮', title: 'মোট প্রার্থী', image: total_candidate },
  ]

  const colors = ['#66c2a5', '#8da0cb', '#e78ac3', '#a6d854']
  const labels = ['আ. লীগ জোট', 'বিএনপি জোট', 'জাতীয় পার্টি', 'অন্যান্য']

  const data = [
    {
      series: [4, 1, 1]
    },
    {
      series: [2, 2, 2]
    },
    {
      series: [5, 1]
    },
    {
      series: [0, 4, 2]
    },
    {
      series: [4, 1, 1]
    },
    {
      series: [2, 2, 2]
    },

  ]


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
      style: { colors: ["white"], fontWeight:'400'},
      formatter: function (val, opt) {
        const key = opt?.seriesIndex
        const series = opt?.w?.config?.series
        return convertToBanglaNumber(series[key])
      },
      // dropShadow: { enabled: true }
    },
    tooltip: {
      style: {
          fontSize: '12px',
      },
      y: {
          formatter: function (val) {
              return convertToBanglaNumber(val)
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
              formatter: (value) => convertToBanglaNumber(value?.config?.series.reduce((acc, curr) => acc + curr))
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
      <section className='mb-12 md:mb-24'>
        <div className='container'>
          <div className='mb-4'>
            <span
              className='inline-block rounded-lg bg-primary-light text-2xl py-[6px] px-4 mb-2'
            >
              {findDistrictById()} জেলা
            </span>
            <div className='bg-gray1 h-[2px]' />
          </div>

          {/* ------------Seat information counter start---------- */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-7'>
            {
              seatData.map((singleData, i) => (
                <Card key={i} type='type1' data={singleData} />
              ))
            }
          </div>
          {/* -----------Seat information counter end------- */}
        </div>
      </section>

      <section className="mb-12 md:mb-24">
        <div className="container">
          <div className="mb-12">
            <Title text={'বিগত নির্বাচনে জেলার দলীয় অবস্থান'} />
          </div>
          <div className="flex justify-center flex-col	md:flex-row gap-6 mb-16">
            {
              ['', '', '', ''].map((_, i) => (
                <div key={i} className="flex justify-center items-center gap-2">
                  <span style={{ background: colors[i] }} className="inline-block h-3 w-3 text-xs" />
                  <span className="text-xs">{labels[i]}</span>
                </div>
              ))
            }
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-8">
            {
              data.map((element, i) => (
                <div key={i}>
                  <div key={i} className="relative flex justify-center items-center border rounded">
                    <Chart options={options} series={element?.series} type="donut" width={'300px'} />
                    <span
                      className="block absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/4"
                    >
                      ১০ম
                    </span>
                  </div>
                  {/* <div className="border h-4">

                  </div> */}
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default DistrictInfoPage