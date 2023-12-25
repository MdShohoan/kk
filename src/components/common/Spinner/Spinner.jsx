import cn from "../../../lib/cn"
import styles from './Spinner.module.css'
function Spinner({className}) {
  return (
    <div className={cn('flex justify-center items-center h-[calc(100vh-62px)]', className)}>
        <span className={styles.loader}/>
    </div>
  )
}

export default Spinner