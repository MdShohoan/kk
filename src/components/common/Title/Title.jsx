function Title({ text, underline = 'type2' }) {

    if (underline === 'type1') {
        return (
            // <h4
            //     className="text-center relative pb-1 text-lg sm:text-2xl font-bold leading-relaxed after:w-[25%] after:bottom-[1px] after:left-[38%] after:absolute after:h-[1px] after:bg-primary before:w-[12%] before:h-[3px] before:bg-primary before:absolute before:bottom-0 before:left-[44%] text-gray-700"
            // >
            //     {text || 'No title'}
            // </h4>
            <h4
                className={
                    `text-center relative py-4 px-3 pb-3 text-lg sm:text-2xl font-bold text-gray-700
                    before:w-[12px] before:h-[12px] before:bg-primary before:absolute before:bottom-[-3px] before:left-[50%] before:-translate-x-2/4 before:rotate-45
                    after:w-[25%] after:h-[3px] after:absolute after:bottom-[1px] after:left-[50%] after:-translate-x-1/2 after:bg-gradient-to-r after:from-primary after:to-primary after:via-transparent`
                }
            >
                {text || 'No title'}
            </h4>
        )
    }

    else if (underline === 'type2') {
        return (
            <h4
                className='text-center relative py-4 px-3 pb-3 text-lg sm:text-2xl font-bold before:w-[12%] before:h-[3px] before:bg-primary before:absolute before:bottom-[1px] before:left-[44%] after:w-[25%] after:h-[1px] after:bg-primary after:absolute after:bottom-[1px] after:left-[38%] text-gray-700'
            >
                {text || 'No title'}
            </h4>

        )
    }

}


//   .line {
//     position: relative;
//     margin-bottom: 2rem;
//     margin-top: 2rem;

//     &:before {
//       display: block;
//       content: '';
//       width: 12px;
//       height: 12px;
//       background-color: #DFCEB9;
//       position: relative;
//       transform: rotate(45deg) translateX(-50%);
//       left: 50%;
//       top: 10px;
//     }

//     &:after {
//       content: '';
//       position: absolute;
//       left: 50%;
//       transform: translateX(-50%);
//       width: 100%;
//       max-width: 780px;
//       height: 3px;
//       background: 
//         linear-gradient(to right,
//           #DFCEB9 0%,
//           #DFCEB9 45%,
//           rgba(0,0,0,0) 45%,
//           rgba(0,0,0,0) 55%,
//           #DFCEB9 55%,
//           #DFCEB9 100%);
//     }
//   }

//   h1.special {
//     .line;

//     &:before, &:after {
//       position:absolute;
//       top:100%;
//     }
//   }

// h1 {
//     font-size: 48px;
//     font-family: Roboto;
//     line-height: 1.5em;
//     letter-spacing: 6px;
//     font-weight: 900;
//     font-style: normal;
//     text-align: center;
//     color: rgb(78,96,115);
//     position:relative;
//   }

export default Title