import React, { useState } from "react"
import { Button, Input, Flex, ListItem, UnorderedList } from "@chakra-ui/react"
import { useRecoilState } from "recoil"
import { todosState } from "../../atoms/TodoListAtom"

const AddForm = () => {
	const [todoName, setTodo] = useState("")
	const [todos, setTodos] = useRecoilState(todosState)

	const addTodo = () => {
		console.log(todoName)
		const newTodos = [
			...todos,
			{
				id: new Date().getTime().toString(16),
				todoName: todoName,
			},
		]
		setTodos(newTodos)
		setTodo("")
	}

	return (
		<React.Fragment>
			<Flex>
				<Input
					value={todoName}
					size="md"
					borderColor="blue.200"
					onChange={(e) => setTodo(e.target.value)}
				/>
				<Button colorScheme="teal" ml={4} onClick={addTodo}>
					Add
				</Button>
			</Flex>
		</React.Fragment>
	)
}

export default AddForm
