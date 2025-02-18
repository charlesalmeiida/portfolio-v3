export function DateAndTheme() {
  return (
    <div className="flex items-center gap-4">
      <strong className="strong p-theme bg-theme bg-opacity-80  rounded-md">
        React
      </strong>
      <div className="w-1 h-1 bg-gray03 block opacity-60 rounded-full"></div>
      <span className="text-gray03 opacity-70 font-medium font-inter">
        26 de dezembro, 2024
      </span>
    </div>
  )
}
