import { Button } from "@chakra-ui/react"
import { useRecoilState } from "recoil"
import { todosState } from "../../atoms/TodoListAtom"

interface Props {
	index: number
}

const DeleteBtn = (props: Props) => {
	const [todos, setTodos] = useRecoilState(todosState)

	const deleteTodo = () => {
		console.log(typeof props.index)
		const copyTodos = JSON.parse(JSON.stringify(todos))
		const newTodos = copyTodos.filter(
			(copyTodo, index: number) => index !== props.index
		)
		console.log(newTodos)

		setTodos(newTodos)
	}

	return (
		<Button size="xs" ml="5" mb="1" colorScheme="red" onClick={deleteTodo}>
			X
		</Button>
	)
}

export default DeleteBtn
