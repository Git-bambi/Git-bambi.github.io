import Clock from './Clock';
import TimeCounter from './TimeCounter';
interface StatisticsProps {
  seconds: number;
  visits: number;
}

const Statistics = ({ seconds, visits }: StatisticsProps) => {
  return (
    <div>
      <TimeCounter seconds={seconds} />
      <Clock />
      <div>
        Ilość wizyt na stronie: {visits}
      </div>
    </div>
  )
}

export default Statistics;