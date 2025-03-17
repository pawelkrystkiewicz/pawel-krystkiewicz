'use client'

import { IconContext } from '@phosphor-icons/react'

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <IconContext.Provider value={{ size: 24, weight: 'bold' }}>
      {children}
    </IconContext.Provider>
  )
}
