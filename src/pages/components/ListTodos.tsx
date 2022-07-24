import { UnorderedList, ListItem } from "@chakra-ui/react"
import EditBtn from "./EditBtn"
import DeleteBtn from "./DeleteBtn"



const ListTodos = ({todos}) => {
	return (
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
					<EditBtn />
					<DeleteBtn index={index} />
				</ListItem>
			))}
		</UnorderedList>
	)
}

export default ListTodos
