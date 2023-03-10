import ListGroup from 'react-bootstrap/ListGroup';

function StyleExample() {
  return (
    <ListGroup>
      <ListGroup.Item>List</ListGroup.Item>
      <ListGroup.Item variant="primary">femme</ListGroup.Item>
      <ListGroup.Item variant="secondary">Fille</ListGroup.Item>
      <ListGroup.Item variant="success">Garcon</ListGroup.Item>
      <ListGroup.Item variant="danger">Homme</ListGroup.Item>
      <ListGroup.Item variant="warning">Chaussures</ListGroup.Item>
      <ListGroup.Item variant="info">bijoux</ListGroup.Item>
      <ListGroup.Item variant="light">jouet</ListGroup.Item>
      <ListGroup.Item variant="dark">maisson</ListGroup.Item>
    </ListGroup>
  );
}

export default StyleExample;