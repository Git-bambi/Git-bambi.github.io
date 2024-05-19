interface TimeCounterProps {
  seconds: number;
}

const TimeCounter = ({ seconds }: TimeCounterProps) => {
  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <h1>Czas od wejścia na strone: {formatTime(seconds)}</h1>
    </div>
  );
};

export default TimeCounter;