export default function GameBreakdown() {
  return (
    <div className="">

      {/* Progress Bar */}
      <div className="flex h-2 mb-5">
        <div
          className="bg-cyan-700 h-full rounded-tl-sm rounded-bl-sm"
          style={{ width: "80%" }}></div>
        <div className="bg-red-700 h-full rounded-tr-sm rounded-br-sm" style={{ width: "20%" }}></div>
      </div>

      {/* Legend */}
      <div className="flex justify-between w-3/4 items-center">
        <div className="flex items-center space-x-1">

          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-gray-600 font-medium">PL</span>
            <span className="font-semibold text-md">
              8
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-1">

          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-gray-600 font-medium">Victories</span>
            <span className="font-semibold text-md">
              6
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-1">

          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-gray-600 font-medium">Lost</span>
            <span className="font-semibold text-md">
              2
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
