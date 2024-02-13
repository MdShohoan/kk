import styles from './CardCountUP.module.css'
import CountUp from '../CountUp/CountUp';
import { useRef } from 'react';
import useIsVisible from '../../../hooks/useIsVisible ';

export default function Card({ data, type = 'type1' }) {
    const elemRef = useRef();
    const isVisible = useIsVisible(elemRef);

    const type1 = (
        <div className={styles.card}>
            <div className='bg-primary-light py-4'>
                <div  className='m-auto mb-4 rounded-full border-[3px] border-[#cbc3db] p-5 block h-24 w-24'>
                    <img
                        className='h-full w-full'
                        src={data?.image}
                        alt={data?.title + 'image'}
                    />
                </div>
            </div>
            <div className='px-4 py-8'>
                <div ref={elemRef}>
                    {isVisible && <CountUp end={data?.count} />}
                </div>
                <h6 className={styles.title}>{data?.title}</h6>
            </div>
        </div>
    )

    const type2 = (
        <div>Type 2</div>
    )


    if (type === 'type1') {
        return type1
    }
    else if (type === 'type2') {
        return type2
    }
    else {
        return type1
    }
}
