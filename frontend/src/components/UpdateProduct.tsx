import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Navigate, useParams } from 'react-router-dom';

export default function UpdateProduct(props: any) {
  const sizes = [
    {
      value: "Small",
    },
    {
      value: "Medium",
    },
    {
      value: "Large",
    },
  ] as { value: string }[];

  const { pk } = useParams();

  const [state, setState] = useState({
    name: "",
    product_id: "",
    colour: "",
    size: "",
    description: "",
  });

  console.log(pk);

  useEffect(() => {
    (async () => {
      const response = await fetch(`http://localhost:8000/api/products/${pk}`);
      const data = await response.json();
      setState(data);
    })();
  }, [pk]);

  const [redirect, setRedirect] = useState(false);

  const handleChange = (event: any) => {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/api/products/${pk}/`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(state),
    });
    if (!response.ok) {
      alert(`Something went wrong. Response: ${response.statusText}`)
    } else {
      alert("Product Updated Successfully! Redirecting you back to the Products page!!")
      setRedirect(true);
    }
  };

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <Container style={{ width: "30%" }}>
      <h4>Update Product</h4>
      <Form className='mt-2' noValidate onSubmit={handleSubmit}>
        <Row align="left">
          <Form.Group as={Col}>
            <Form.Label htmlFor="name">Name</Form.Label>
            <Form.Control
              type="text"
              id="name"
              name="name"
              value={state.name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="product_id">Product ID</Form.Label>
            <Form.Control
              type="text"
              id="product_id"
              name="product_id"
              value={state.product_id}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>
        <Row align="left">
          <Form.Group as={Col}>
            <Form.Label htmlFor="colour">Colour</Form.Label>
            <Form.Control
              type="text"
              id="colour"
              name="colour"
              value={state.colour}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="size">Size</Form.Label>
            <Form.Control as="select" name="size" value={state.size} onChange={handleChange}>
              <option>Select Size</option>
              {sizes && sizes.map((s) => (
                <option value={s.value} key={s.value}>
                  {s.value}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Row>
        <Row align="left">
          <Form.Group>
            <Form.Label htmlFor="description">Description</Form.Label>
            <Form.Control
              as="textarea"
              id="description"
              name="description"
              rows={10}
              value={state.description}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>
        <Button className="mt-2 mb-2" type="submit">Save</Button>
      </Form>
      <a href="/">Products</a>
    </Container>
  );
}
