'use client';
import { useState } from "react"
import Display from "./components/Display"
import Keypad from "./components/Keypad"

export default function Home() {
  const [input, setInput] = useState("")
  const [result, setResult] = useState("")

  const handleInput = (value) => {
    setInput((prev) => prev + value)
  }

  const handleClear = () => {
    setInput("")
    setResult("")
  }

  const handleCalculate = () => {
    try {
      const output = eval(input)
      setResult(output.toString())
    } catch {
      setResult("Erro")
    }
  }

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-80">
      <h1 className="text-2xl font-normal text-left mb-4 text-gray-800">Calculadora</h1>
        <Display input={input} result={result} />
        <Keypad onInput={handleInput} onClear={handleClear} onCalculate={handleCalculate} />
      </div>
    </main>
  )
}
