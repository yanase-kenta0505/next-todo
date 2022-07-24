export interface TodoState {
  id:string,
  todoName:string
}

export interface Index {
	index: number
}

export interface TodosState {
  todos : TodoState[]
}