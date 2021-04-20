export interface Todo {
  id: number,
  title: string,
  isCompleted: boolean,
  assignedTo: string,
  priority: number,
  dueDate: Date,
  startTime?: Date,
  minutesElapsed?: number
}
