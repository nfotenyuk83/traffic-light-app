import { useState, useEffect } from 'react';
import type { LightColor, LightDurations } from '@/types/traffic';

export default function TrafficLight() {
  const [activeLight, setActiveLight] = useState<LightColor>('green');
  const [timer, setTimer] = useState<number>(8.5);

  // Light cycle durations in milliseconds
  const durations: LightDurations = {
    red: 8500,
    yellow: 3000,
    green: 8500
  };

  useEffect(() => {
    const cycleTimeout = setTimeout(() => {
      switch(activeLight) {
        case 'green':
          setActiveLight('yellow');
          setTimer(3);
          break;
        case 'yellow':
          setActiveLight('red');
          setTimer(8.5);
          break;
        case 'red':
          setActiveLight('green');
          setTimer(8.5);
          break;
      }
    }, durations[activeLight]);

    return () => clearTimeout(cycleTimeout);
  }, [activeLight]);

  // Update timer display every 100ms
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => Math.max(0, prev - 0.1));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const lights: LightColor[] = ['red', 'yellow', 'green'];

  const getProgressWidth = (): number => {
    const maxTime = activeLight === 'yellow' ? 3 : 8.5;
    return (timer / maxTime) * 100;
  };

  return (
    <div className={`traffic-container ${activeLight}`}>
      <div className="traffic-light">
        {lights.map((light) => (
          <div 
            key={light}
            className={`light ${light} ${activeLight === light ? 'active' : ''}`}
          />
        ))}
      </div>

      <div className="info">
        <p className="status">The light is {activeLight}.</p>
        <p className="timer">{timer.toFixed(1)}s</p>
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${getProgressWidth()}%` }}
          />
        </div>
      </div>

      <div className="cycle-info">
        <p>Complete cycle: 20 seconds</p>
        <p>Green & Red: 8.5s • Yellow: 3s</p>
      </div>
    </div>
  );
}
