import { EditIcon } from "@chakra-ui/icons"
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Button,
	Flex,
	Input,
} from "@chakra-ui/react"
import React, { useState } from "react"
import { useRecoilState } from "recoil"
import { todosState } from "../../atoms/TodoListAtom"

const EditBtn = ({ index }) => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [todos, setTodos] = useRecoilState(todosState)
	const [todoName, setTodo] = useState(
		() => JSON.parse(JSON.stringify(todos))[index].todoName
	)
	const editTodoName = () => {
		const copyTodos = JSON.parse(JSON.stringify(todos))
		const newTodos = copyTodos.map((copyTodo, i) => {
			if (i !== index) {
				return copyTodo
			} else {
				copyTodo.todoName = todoName
				return copyTodo
			}
		})
		setTodos(newTodos)
		onClose()
	}

	return (
		<React.Fragment>
			<Button onClick={onOpen} size="xs" ml="5" mb="1" colorScheme="blue">
				<EditIcon />
			</Button>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Edit TodoName</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<React.Fragment>
							<Flex>
								<Input
									value={todoName}
									size="md"
									borderColor="blue.200"
									onChange={(e) => setTodo(e.target.value)}
								/>
							</Flex>
						</React.Fragment>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme="blue" mr={3} onClick={onClose}>
							Cancel
						</Button>
						<Button colorScheme="teal" onClick={editTodoName}>
							Save
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</React.Fragment>
	)
}

export default EditBtn
