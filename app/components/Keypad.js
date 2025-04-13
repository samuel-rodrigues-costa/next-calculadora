import Button from "./Button"

export default function Keypad({ onInput, onClear, onCalculate }) {
  const keys = [
    ["7", "8", "9", "/"],
    ["4", "5", "6", "*"],
    ["1", "2", "3", "-"],
    ["C", "0", "=", "+"],
  ]

  return (
    <div className="grid grid-cols-4 gap-2">
      {keys.flat().map((key) => {
        if (key === "C") return <Button key={key} label={key} onClick={onClear} />
        if (key === "=") return <Button key={key} label={key} onClick={onCalculate} />
        const isOperator = ["/", "*", "-", "+"].includes(key)
        return (
          <Button
            key={key}
            label={key}
            onClick={() => onInput(key)}
            className={isOperator ? "bg-orange-400" : ""}
          />
        )
      })}
    </div>
  )
}
