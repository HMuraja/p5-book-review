import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import NotFoundImg from "../assets/page_not_found.jpg";
import styles from "../styles/PageNotFound.module.css"

const PageNotFound = () => {
  return (
    <Row className='mt-3'>
        <Col>
            <Image
                className={styles.NotFoundImg}
                src={NotFoundImg}
                alt="Page not found image"
                rounded
            />
        </Col>
    </Row>
  )
}

export default PageNotFound