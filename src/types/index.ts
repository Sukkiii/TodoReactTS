export interface CalendarType {
  today: Date
}

export interface ColorType {
  colors?: string[]
  color?: string
}

export interface ScheduleType {
  id: number
  title: string
  value: string
  isDone: boolean
}
