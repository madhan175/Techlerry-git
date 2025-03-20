import { useState, useEffect } from 'react';

interface HealthData {
  heartRate: number;
  steps: number;
  lastHeartRateChange: number;
  stepsGoalPercentage: number;
}

export function useHealthData() {
  const [healthData, setHealthData] = useState<HealthData>({
    heartRate: 75,
    steps: 8432,
    lastHeartRateChange: 2,
    stepsGoalPercentage: 84,
  });

  useEffect(() => {
    // Simulate real-time health data updates
    const interval = setInterval(() => {
      setHealthData(current => {
        const heartRateChange = Math.floor(Math.random() * 5) - 2; // -2 to +2
        const newHeartRate = Math.max(60, Math.min(100, current.heartRate + heartRateChange));
        const newSteps = current.steps + Math.floor(Math.random() * 10);
        const newPercentage = Math.min(100, (newSteps / 10000) * 100);

        return {
          heartRate: newHeartRate,
          steps: newSteps,
          lastHeartRateChange: heartRateChange,
          stepsGoalPercentage: Math.floor(newPercentage),
        };
      });
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return healthData;
}