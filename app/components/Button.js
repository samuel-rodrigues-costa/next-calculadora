export default function Button({ label, onClick, className = "" }) {
    return (
      <button
        onClick={onClick}
        className={`px-4 py-2 bg-gray-200 rounded-lg text-lg hover:bg-gray-300 ${className}`}
      >
        {label}
      </button>
    )
  }
  