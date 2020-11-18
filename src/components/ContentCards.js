import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { LinkContainer } from "react-router-bootstrap";
import AspectRatio from "./AspectRatio";
import Nav from "react-bootstrap/Nav";
import client from './../client'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import './ContentCards.css'
function ContentCards(props) {
  let [blogData, setBlogData] = useState([])
  useEffect(() => {

    async function fetchData() {

      const data = await client.getEntries().then(({ items }) => {
        // console.log("items", items)

        setBlogData(items)
        // console.log("data", items[0].fields.title)

      });
    }
    fetchData()
  }, [])

  return (
    <Row className="justify-content-center">

      {blogData.map((i, index) => {
        const data={
          title:i.fields.title,
          discription:i.fields.discription,
          thumbnial:i.fields.thumbnail.fields.file.url,
          id:i.sys.id,
          updatedAt:i.sys.updatedAt

        }
        return (

          <Col xs={12} md={6} lg={6} className="py-3" key={index}>
            {console.log("i",i.sys.updatedAt)}
            <LinkContainer to={`/all-blogs/${data.id}/`}>
            <Card as="a" text="dark" className="text-decoration-none">
              <AspectRatio ratio={1 / 0.75}>
                <Card.Img src={data.thumbnial} alt={data.title} variant="top" />
              </AspectRatio>
              <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>{data.updatedAt.toLocaleString()}</Card.Text>
                <Card.Text className="textLimit">{documentToReactComponents(data.discription)}</Card.Text>
                

                <LinkContainer to={`/all-blogs/${data.id}/`}>
                  <Nav.Link>Read more...</Nav.Link>
                </LinkContainer>
              </Card.Body>
            </Card>
          </LinkContainer>
          </Col>
        )
      })}
    </Row>
  );
}

export default ContentCards;
