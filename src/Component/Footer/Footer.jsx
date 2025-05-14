import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h5>myShop</h5>
            <p className="text-muted">
              Votre destination pour la mode tendance à des prix abordables.
            </p>
          </Col>
          <Col md={2} className="mb-4">
            <h5>Boutique</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-muted">Hommes</a></li>
              <li><a href="#" className="text-muted">Femmes</a></li>
              <li><a href="#" className="text-muted">Enfants</a></li>
            </ul>
          </Col>
          <Col md={2} className="mb-4">
            <h5>Aide</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-muted">Contact</a></li>
              <li><a href="#" className="text-muted">FAQ</a></li>
              <li><a href="#" className="text-muted">Livraison</a></li>
            </ul>
          </Col>
          <Col md={4} className="mb-4">
            <h5>Newsletter</h5>
            <div className="mb-3">
              <input 
                type="email" 
                className="form-control" 
                placeholder="Votre email" 
              />
            </div>
            <button className="btn btn-primary">S'abonner</button>
          </Col>
        </Row>
        <hr className="my-4 bg-secondary" />
        <div className="text-center text-muted">
          <small>© 2023 myShop. Tous droits réservés.</small>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;