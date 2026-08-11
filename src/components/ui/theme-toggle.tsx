'use client'

import { useTheme } from "../theme-provider"
import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"

export function ThemeToggle() {
    const { theme, toggleTheme} = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <button className = "w-9 h-9 p-2"/>
    }

    return (
    <button
      type="button"
      onClick={toggleTheme}
      className="p-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer flex items-center justify-center"
      aria-label="Téma váltása"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-amber-400" />
      ) : (
        <Moon className="w-5 h-5 text-slate-700 dark:text-slate-200" />
      )}
    </button>
  )
}