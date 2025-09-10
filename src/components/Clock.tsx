import { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (num: number): string =>
    num < 10 ? "0" + num : num.toString();

  return (
    <div className="clock">
      {formatTime(time.getHours())}:{formatTime(time.getMinutes())}:
      {formatTime(time.getSeconds())}
    </div>
  );
}

export default Clock;
