import type { NextPage } from "next"
import AddForm from "./components/AddForm"
import { Container } from "@chakra-ui/react"
import ListTodos from "./components/ListTodos"
import { useRecoilState } from "recoil"
import { todosState } from "../atoms/TodoListAtom"
import EditModal from "./components/EditModal"

const Home: NextPage = () => {
	const [todos, setTodo] = useRecoilState(todosState)
	
	return (
		<Container maxW='container.sm' mt={8}>
			<AddForm />
			<ListTodos todos={todos}/>
		</Container>
	)
}

export default Home
