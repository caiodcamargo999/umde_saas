'use client';

interface PerformanceHeaderProps {
  selectedPeriod: string;
  setSelectedPeriod: (period: string) => void;
}

export const PerformanceHeader = ({ selectedPeriod, setSelectedPeriod }: PerformanceHeaderProps) => {
  return (
    <div className="mb-8 flex justify-between items-center">
      <h1 className="text-3xl font-bold text-white">Performance</h1>
      <div className="flex items-center gap-2">
        {["7d", "30d", "90d", "1a"].map((period) => (
          <button
            key={period}
            onClick={() => setSelectedPeriod(period)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
              selectedPeriod === period
                ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
            }`}
          >
            {period === "7d" && "7 dias"}
            {period === "30d" && "30 dias"}
            {period === "90d" && "90 dias"}
            {period === "1a" && "1 ano"}
          </button>
        ))}
      </div>
    </div>
  );
};
