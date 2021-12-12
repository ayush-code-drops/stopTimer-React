import { useEffect, useState } from "react";

function StopWatch({ intial }) {
  const [timer, setTimer] = useState(intial);

  useEffect(() => {
    const id = setInterval(() => {
      setTimer((prev) => {
        if (prev - 1 === 0) {
          clearInterval(id);
        }
        return prev - 1;
      });
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      <h2>{timer}</h2>
    </div>
  );
}

export default StopWatch;
