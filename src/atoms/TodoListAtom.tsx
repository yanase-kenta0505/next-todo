import { atom } from "recoil"
import { TodoState } from "../types/todosType" // 以下のリンクを参考に型を定義
// https://recoiljs.org/docs/api-reference/core/atom/
export const todosState = atom<TodoState[]>({
	key: "todosState",
	default: [] 
}) 
