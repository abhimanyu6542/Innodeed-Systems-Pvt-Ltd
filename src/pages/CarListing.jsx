import React, {useState} from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import carData from "../assets/data/carData";
import "../styles/car-item.css";


const CarListing = () => {

  const [newCar, setNewCar]=useState([]);
    const SUV = () => {
     const newData =carData.filter((item)=>item.bodyType=== "suv")
     setNewCar(newData);
    }

    const estate = () => {
      const newData =carData.filter((item)=>item.bodyType=== "estate")
      setNewCar(newData);
     }
     const sedan = () => {
      const newData =carData.filter((item)=>item.bodyType=== "sedan")
      setNewCar(newData);
     }

     const allcar = () => {
      const newData =carData.map((item)=>item)
      setNewCar(newData);
     }
     


  return (
    <Helmet title="Cars">
      <CommonSection title="Car Listing" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <span className=" d-flex align-items-center gap-2">
                  <i class="ri-sort-asc"></i> Filter By 
                  </span> 
                   <button className="header__btn btn " onClick={allcar}>All Car</button> 
                
                   <button className="header__btn btn " onClick={SUV}>SUV</button>
                   <button className="header__btn btn " onClick={estate}>Estate</button>
                   <button className="header__btn btn " onClick={sedan}>Sedan</button>
              </div>
            </Col>

            {newCar.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
