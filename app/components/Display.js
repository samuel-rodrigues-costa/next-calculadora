export default function Display({ input, result }) {
    return (
      <div className="mb-4 text-right text-xl min-h-[48px]">
        <div className="text-gray-500">{input}</div>
        <div className="font-bold text-black">{result}</div>
      </div>
    )
  }
  