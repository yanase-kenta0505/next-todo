import type { NextPage } from "next"
import AddForm from "./components/AddForm"
import { Container } from "@chakra-ui/react"

const Home: NextPage = () => {
	return (
		<Container maxW='container.sm' mt={8}>
			<AddForm />
		</Container>
	)
}

export default Home
