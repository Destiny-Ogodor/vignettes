import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const CircularProgress = ({ percentage, label, startPercentage = 0 }) => {
  const [progress, setProgress] = useState(startPercentage); // Start progress at startPercentage
  const requestRef = useRef(); // Ref to store the animation frame ID
  const startTimeRef = useRef(); // Ref to store the animation start time

  const animate = (timestamp) => {
    if (!startTimeRef.current) startTimeRef.current = timestamp; // Initialize start time on first frame
    const elapsedTime = timestamp - startTimeRef.current; // Calculate elapsed time
    const duration = 2000; // Animation duration in milliseconds (2 seconds)

    // Calculate progress fraction (0 to 1)
    const progressFraction = Math.min(elapsedTime / duration, 1);

    // Update progress from startPercentage to target percentage
    const currentProgress =
      startPercentage + (percentage - startPercentage) * progressFraction;
    setProgress(currentProgress);

    // Continue animation until duration is reached
    if (progressFraction < 1) {
      requestRef.current = requestAnimationFrame(animate);
    }
  };

  useEffect(() => {
    // Start the animation immediately
    const startAnimation = () => {
      startTimeRef.current = performance.now(); // Set start time to now
      requestRef.current = requestAnimationFrame(animate);
    };

    // Use a small timeout to ensure the animation starts immediately
    const timeoutId = setTimeout(startAnimation, 0);

    // Cleanup: Cancel the animation frame and timeout when the component unmounts
    return () => {
      clearTimeout(timeoutId);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [percentage, startPercentage]); // Restart animation if percentage or startPercentage changes

  const radius = 80; // Radius of the circle
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex flex-row items-center gap-4">
      {/* Progress Bar */}
      <svg className="h-32 w-32" viewBox="0 0 200 200">
        {/* Background Circle */}
        <circle
          className="text-gray-200"
          stroke="currentColor"
          strokeWidth="10"
          fill="transparent"
          r={radius}
          cx="100"
          cy="100"
        />
        {/* Progress Circle */}
        <circle
          className="text-siteRed transition-all duration-1000 ease-out"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinecap="round"
          fill="transparent"
          r={radius}
          cx="100"
          cy="100"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 100 100)"
        />
        {/* Percentage Text (Fixed) */}
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="text-4xl font-bold text-gray-800 sm:text-4xl"
        >
          {`${percentage}%`} {/* Display the target percentage */}
        </text>
      </svg>

      {/* Label */}
      <span className="text-lg font-semibold text-gray-600 sm:text-xl">
        {label}
      </span>
    </div>
  );
};

// Prop-type validation
CircularProgress.propTypes = {
  percentage: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  startPercentage: PropTypes.number, // Optional prop for starting percentage
};

export default CircularProgress;
