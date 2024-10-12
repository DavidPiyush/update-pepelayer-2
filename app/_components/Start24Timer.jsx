import { useEffect, useState } from "react";

function Start24Timer() {
  const [remainingTime, setRemainingTime] = useState(24 * 60 * 60 * 1000); // Initialize with 24 hours in milliseconds

  useEffect(() => {
    // Function to start the timer
    const startTimer = () => {
      const endTime = Date.now() + remainingTime; // Calculate the end time

      const timer = setInterval(() => {
        const timeLeft = endTime - Date.now(); // Calculate remaining time

        if (timeLeft <= 0) {
          clearInterval(timer); // Clear the timer
          //   console.log("Timer reset! Starting a new 24-hour countdown.");
          setRemainingTime(24 * 60 * 60 * 1000); // Reset to 24 hours
        } else {
          // Update the remaining time state
          setRemainingTime(timeLeft);
        }
      }, 1000); // Update every second

      // Cleanup function to clear the interval on unmount
      return () => clearInterval(timer);
    };

    const timerId = startTimer(); // Start the timer

    return () => {
      clearInterval(timerId); // Cleanup on component unmount
    };
  }, [remainingTime]);

  // Convert remaining time to hours, minutes, and seconds for display
  const hours = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  return (
    <div>
      <p className="text-[1.2em] text-[#ff6347]">{`${hours} : ${minutes} : ${seconds}`}</p>
    </div>
  );
}

export default Start24Timer;
