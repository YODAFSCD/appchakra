import * as React from 'react'

import { Card, CardBody, Stack, Heading, Text,  Button, CardFooter, Image, Divider, ButtonGroup } from '@chakra-ui/react'

function App() {
  return (
<Card maxW='sm'>
  <CardBody>
    <Image
      src='http://cdn.shopify.com/s/files/1/0261/3533/0891/products/jabon-lava-todo-floral-x2u-1_1024x.jpg?v=1667429110'
          alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>PRODUCTO</Heading>
      <Text>
      Producto comercializado por Distribuidora Prolimec, precios sujetos a cambios en más o menos, dependiendo la temporada o promociones.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $4
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
  )
}

export default App;
