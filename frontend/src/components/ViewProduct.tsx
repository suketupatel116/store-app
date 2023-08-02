import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import { useParams } from 'react-router-dom';

export default function ViewProduct(props: any) {

  const [state, setState] = useState({
    name: "",
    product_id: "",
    colour: "",
    size: "",
    description: "",
  });

  const { pk } = useParams();

  console.log(pk);

  useEffect(() => {
    (async () => {
      const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/api/products/${pk}`);
      const data = await response.json();
      setState(data);
    })();
  }, [pk]);

  return (
    <Container style={{ width: "30%" }}>
      <h4>Product Information</h4>
      <Table className='mt-2'>
        <tbody>
          <tr>
            <td>Product#</td>
            <td align="left">{pk}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td align="left">{state.name}</td>
          </tr>
          <tr>
            <td>Product ID</td>
            <td align="left">{state.product_id}</td>
          </tr>
          <tr>
            <td>Description</td>
            <td align="left">{state.description}</td>
          </tr>
          <tr>
            <td>Colour</td>
            <td align="left">{state.colour}</td>
          </tr>
          <tr>
            <td>Size</td>
            <td align="left">{state.size}</td>
          </tr>
        </tbody>
      </Table>
      <a className="mt-2" href="/">Products</a>
    </Container>
  );
}
