import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from 'react-bootstrap'
import client from './../client'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import './singleBlog.css'
import {
  useParams
} from "react-router-dom";
function SingleBlog(props) {
  const { blogID } = useParams()
  console.log("blogID", blogID)


  let [blogData, setBlogData] = useState()
  useEffect(() => {

    async function fetchData() {

      await client.getEntries().then(({ items }) => {
        // console.log("items", items[0].sys.id)


        items.forEach((singleItem) => {
          if (singleItem.sys.id === blogID) {

            setBlogData(singleItem)
            console.log("singleItem", singleItem)



          }

        })


      });
    }
    fetchData()
  }, [blogID])

  if (!blogData) {
    return <h3>Loading....</h3>

  }
  return (
    <Container>
      <Row>

        <Col className="mt-5 mb-5">


          <Card  style={{ width: '60%' }} className="singleBlog m-auto shadow">
            <Card.Img variant="top" src={blogData.fields.thumbnail.fields.file.url} />
            <Card.Body>
              <h2>{blogData.fields.title}</h2>
              <Card.Text>{blogData.sys.updatedAt}</Card.Text>

              {documentToReactComponents(blogData.fields.discription)}.


            </Card.Body>
          </Card>


        </Col>
      </Row>
    </Container>
  );
}

export default SingleBlog;
