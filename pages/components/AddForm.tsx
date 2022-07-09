import React from "react"
import { Button, Input, Flex } from "@chakra-ui/react"

const AddForm = () => {
	return (
		<React.Fragment>
			<Flex>
				<Input size="md" borderColor="blue.200" />
				<Button colorScheme='teal' ml={4}>Add</Button>
			</Flex>
		</React.Fragment>
	)
}

export default AddForm
