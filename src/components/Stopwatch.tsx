"use client";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";

export default function Stopwatch() {
  const [isRunning, setRunning] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    let Interval: NodeJS.Timeout;
    if (isRunning) {
      Interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
    return () => clearInterval(Interval);
  }, [isRunning]);

  const handleStart = () => {
    setRunning(true);
  };
  const handleStop = () => {
    setRunning(false);
  };
  const handleReset = () => {
    setRunning(false);
    setTime(0);
  };
  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor(time / 1000);
  const milliSeconds = Math.floor((time % 1000) / 10);
  return (
    <div>
      <Card className="w-full max-w-lg">
        <CardHeader className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold text-center">Stop Watch</h1>
          <p className="font-medium text-center">
            Track your time with this stopwatch.
          </p>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center gap-8 p-4">
          <div className="text-8xl font-bold">
            {minutes.toString().padStart(2, "0")}:
            {seconds.toString().padStart(2, "0")}.
            {milliSeconds.toString().padStart(2, "0")}
          </div>
          <div className="flex gap-4">
            <Button
              onClick={handleStart}
              className="px-6 py-2 text-lg font-medium rounded-lg"
            >
              Start
            </Button>
            <Button
              onClick={handleStop}
              className="px-6 py-2 text-lg font-medium rounded-lg"
            >
              Stop
            </Button>
            <Button
              onClick={handleReset}
              className="px-6 py-2 text-lg font-medium rounded-lg"
            >
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
