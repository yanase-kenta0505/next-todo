import { atom } from "recoil"

interface TodoState {
  id:string,
  todoName:string
}

// 以下のリンクを参考に型を定義
// https://recoiljs.org/docs/api-reference/core/atom/
export const todosState = atom<TodoState[]>({
	key: "todosState",
	default: [] 
}) 
