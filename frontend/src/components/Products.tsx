import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Products() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/api/products/`);
      const data = await response.json();
      setProducts(data);
    })();
  }, []);

  const _delete = async (pk: number) => {
    if (window.confirm("Press OK to confirm delete action.")) {
      await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/api/products/${pk}`, {
        method: "DELETE",
      });

      setProducts(products.filter((p) => p.id !== pk));
    }
  };

  return (
    <Container fluid="md">
      <Container>
        <Row>
          <Col align="left"><h4>Products Table</h4></Col>
          <Col align="right"><a href="/products/create/">Add Product</a></Col>
        </Row>
      </Container>
      <Table responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th align="right">Name</th>
            <th align="right">Product ID</th>
            <th align="right">Description</th>
            <th align="right">Colour</th>
            <th align="right">Size</th>
            <th align="right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr
              key={product.id}
            >
              <td>
                {product.id}
              </td>
              <td align="left">{product.name}</td>
              <td align="left">{product.product_id}</td>
              <td align="left">{product.description}</td>
              <td align="left">{product.colour}</td>
              <td align="left">{product.size}</td>
              <td align="right">
                <div>
                  <a href={`/products/${product.id}/view`}>View</a>
                </div>
                <div>
                  <a href={`/products/${product.id}/update`}>Update</a>
                </div>
                <div>
                  <a href="/#" onClick={() => _delete(product.id)}>Delete</a>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
