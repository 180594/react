import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Carsxample() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMPoTBV4Vsb3tUROOHDXsyLjnHWeE_szYlgg&usqp=CAU" />
        <Card.Body>
          <Card.Title>ensemble fille</Card.Title>
          <Card.Text>
            prix=120d
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnfrMmJJFPCFUcEKNHvEDs8-otaYrrjNhVhA&usqp=CAU" />
        <Card.Body>
          <Card.Title>ensemble fille</Card.Title>
          <Card.Text>
            prix=150d
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT12YCzqEe4ECrIkfKpUODbD7CXXSq9fi82g&usqp=CAU" />
        <Card.Body>
          <Card.Title>robe fille</Card.Title>
          <Card.Text>
            prix=150d
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default Carsxample;