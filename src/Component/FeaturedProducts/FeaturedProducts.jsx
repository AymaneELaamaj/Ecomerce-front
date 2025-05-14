import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import robe from "../../assets/robe.jpg"; // Assurez-vous d'avoir l'extension correcte
import baby from "../../assets/baby.jpg"; // Assurez-vous d'avoir l'extension correcte

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      title: "T-Shirt Homme",
      price: "29.99€",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      title: "Robe Été",
      price: "49.99€",
      image: robe // Utilisation de l'image importée
    },
    {
      id: 3,
      title: "Ensemble Enfant",
      price: "39.99€",
      image: baby // Utilisation de l'image importée
    }
  ];

  return (
    <section className="py-5 bg-white">
      <Container>
        <h2 className="text-center mb-5 fw-bold">Produits Populaires</h2>
        <Row>
          {products.map((product) => (
            <Col key={product.id} md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Img 
                  variant="top" 
                  src={product.image} 
                  alt={product.title} 
                  style={{ height: "300px", objectFit: "cover" }}
                />
                <Card.Body className="text-center">
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text className="text-muted">{product.price}</Card.Text>
                  <Button variant="outline-primary">Voir le produit</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-4">
          <Button variant="primary" size="lg">
            Voir tous les produits
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProducts;