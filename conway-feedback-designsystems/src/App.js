import { ChakraProvider } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useState } from "react";
import Card from "./components/Card";
import { Users } from "./UsersList";

function App() {
  const [usuarios, setUsuarios] = useState(Users);
  console.log(usuarios);
  return (
    <ChakraProvider resetCSS>
      {/* <Button colorScheme="teal" size="lg">
        Hello World!
      </Button> */}
      {usuarios.map((user) => {
        return <Card key={user.id} user={user} />;
      })}
    </ChakraProvider>
  );
}

export default App;
