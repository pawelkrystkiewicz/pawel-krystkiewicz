export type Achievement = {
  company: string
  project?: string
  entries: { description: string; source?: { link: string; text: string }[] }[]
}

export type WorkPeriod = { month: number; year: number }

export type Experience = {
  company: string
  role: string
  start: WorkPeriod
  end?: WorkPeriod
  location: string
  id: number
  stack?: string[]
  industry?: string
  link?: string
}
