import styles from './card.module.css'
import CountUp from '../CountUp/CountUp';
import { useRef} from 'react';
import useIsVisible from '../../../hooks/useIsVisible ';

export default function Card({ data }) {
    const elemRef = useRef();
    const isVisible = useIsVisible(elemRef);

    return (
        <div className={styles.card}>
            <img className={styles.cardImage} src={data?.image} alt={data?.title + 'image'} />
            <div ref={elemRef}>
                {isVisible && <CountUp end={data?.count}/>}
            </div>
            <h6 className={styles.title}>{data?.title}</h6>
        </div>
    )
}
