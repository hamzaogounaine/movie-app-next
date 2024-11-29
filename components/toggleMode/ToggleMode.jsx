import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import React from 'react'

const ToggleMode = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div>
      <Button className='absolute z-50 sm:right-10 right-5 bottom-5 sm:bottom-10 p-0 rounded-full h-10 w-10' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>{theme === 'dark' ? <Sun /> : <Moon />}</Button>
    </div>
  )
}

export default ToggleMode