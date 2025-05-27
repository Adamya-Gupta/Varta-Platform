import { useEffect, useState } from "react";
import { getUserCheckIns, postUserCheckIn } from "../lib/api";
import { format } from "date-fns";

const generateDateGrid = (checkInDates) => {
  const today = new Date();
  const start = new Date(today);
  start.setFullYear(today.getFullYear() - 1);
  start.setDate(start.getDate() - start.getDay());

  const dates = [];
  let current = new Date(start);

  while (current <= today) {
    const dateStr = format(current, "yyyy-MM-dd");
    dates.push({
      date: dateStr,
      checkedIn: checkInDates.includes(dateStr),
    });
    current.setDate(current.getDate() + 1);
  }
  return dates;
};


const Graph = ({ userId }) => {
  const [checkIns, setCheckIns] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasCheckedInToday, setHasCheckedInToday] = useState(false);

  useEffect(() => {
    const fetchCheckIns = async () => {
      if (!userId) return;
      setLoading(true);
      try {
        const data = await getUserCheckIns(userId);
        const dates = data?.dates || [];
        setCheckIns(dates);
        setHasCheckedInToday(
          dates.includes(format(new Date(), "yyyy-MM-dd"))
        );
      } catch (err) {
        console.error("Error fetching check-in data:", err);
        setError("Failed to load check-in data.");
      } finally {
        setLoading(false);
      }
    };

    fetchCheckIns();
  }, [userId]);

  const handleCheckIn = async () => {
    if (!userId) return;
    setLoading(true);
    try {
      await postUserCheckIn(userId);
      const updated = await getUserCheckIns(userId);
      const updatedDates = updated?.dates || [];
      setCheckIns(updatedDates);
      setHasCheckedInToday(
        updatedDates.includes(format(new Date(), "yyyy-MM-dd"))
      );
    } catch (err) {
      console.error("Failed to check in", err);
      setError("Check-in failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const dateGrid = generateDateGrid(checkIns);
  const weeks = [];
  for (let i = 0; i < dateGrid.length; i += 7) {
    weeks.push(dateGrid.slice(i, i + 7));
  }

  const dayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="p-6 bg-base-200 rounded-lg hidden xl:inline-block w-full">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">Check-In Tracker</h2>

      {error && (
        <div className="alert alert-error mb-4">
          <span>{error}</span>
        </div>
      )}

      <button
        className="btn btn-primary mb-4"
        onClick={handleCheckIn}
        disabled={loading || hasCheckedInToday}
      >
        {hasCheckedInToday ? "Already Checked In Today" : loading ? "Checking in..." : "Check In"}
      </button>

      <div className="overflow-x-auto">
        <div className="flex justify-center">
          <div className="flex flex-col justify-between mr-2 text-xs ">
            {dayLabels.map((label, i) => (
              <span key={i}>{i % 2 === 1 ? label : ""}</span>
            ))}
          </div>

          <div className="flex">
            {weeks.map((week, i) => (
              <div key={i} className="flex flex-col gap-1 mr-1">
                {week.map((day, j) => (
                  <div
                    key={j}
                    title={day.date}
                    className={`w-4 h-4 rounded-sm transition-colors duration-300 ${
                      day.checkedIn ? "bg-primary" : "bg-gray-700"
                    }`}
                  ></div>
                ))}
              </div>
            ))}
          </div>
        </div>
        {/* Label months correctly later */}

        {/* <div className="mt-2 flex justify-start gap-10 text-xs pl-6">
          {["Jan", "Apr", "Jul", "Oct"].map((month, i) => (
            <span key={i}>{month}</span>
          ))}
        </div> */}

      </div>
    </div>
  );
};

export default Graph;
