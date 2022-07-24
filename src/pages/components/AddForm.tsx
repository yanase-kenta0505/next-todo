import React, { useState } from "react"
import { Button, Input, Flex, ListItem, UnorderedList } from "@chakra-ui/react"
import { useRecoilState } from "recoil"
import { todosState } from "../../atoms/TodoListAtom"
import DeleteBtn from "./DeleteBtn"
import { EditIcon } from "@chakra-ui/icons"
import EditBtn from "./EditBtn"

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
			<UnorderedList>
				{todos.map((todo: any, index: number) => (
					<ListItem
						width="90%"
						key={todo.id}
						mt={7}
						borderBottomColor="grey"
						borderBottomWidth="1px"
					>
						{todo.todoName}
						<EditBtn/>
						<DeleteBtn index={index}/>
					</ListItem>
				))}
			</UnorderedList>
		</React.Fragment>
	)
}

export default AddForm
