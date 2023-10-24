import React from "react";
import styles from "../../styles/Review.module.css";
import appstyles from "../../App.module.css"
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Col, Media, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { Link, useHistory} from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";

const Review = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    book_title,
    book_author,
    caption,
    book_category,
    rating,
    review_body,
    image,
    updated_at,
    reviewPage,
    setReviews,
    likes_count,
    like_id,
    comments_count,
    human_readable_category,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/reviews/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/reviews/${id}/`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  const handleLike = async () => {
    try {
      const { data } = await axiosRes.post("/likes/", { review: id });
      setReviews((prevReviews) => ({
        ...prevReviews,
        results: prevReviews.results.map((review) => {
          return review.id === id
            ? { ...review, likes_count: review.likes_count + 1, like_id: data.id }
            : review;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnlike = async () => {
    try {
      await axiosRes.delete(`/likes/${like_id}/`);
      setReviews((prevReviews) => ({
        ...prevReviews,
        results: prevReviews.results.map((review) => {
          return review.id === id
            ? { ...review, likes_count: review.likes_count - 1, like_id: null }
            : review;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card className={styles.Review}>

      <Row className= {styles.reviewRow}>
        <Card.Body>
            <Media className="align-items-center justify-content-between">
              <Link to={`/profiles/${profile_id}`} className="font-weight-bold text-dark">
                  <Avatar src={profile_image} height={55} />
                  {owner}
              </Link>
              <div className="d-flex align-items-center">
                  <span className="pr-4">{updated_at}</span>
                  {is_owner && reviewPage && (
                    <MoreDropdown
                      handleEdit={handleEdit}
                      handleDelete={handleDelete}
                    />
                  )}
              </div>
            </Media>
        </Card.Body>
      </Row>

      <Row className= {styles.reviewRow}>

        <Col className={styles.HideOnSmallScreen}>
            <Link to={`/reviews/${id}`}>
                <Card.Img src={image} alt={book_title} />
            </Link>
        </Col>

        <Col className= {`text-muted ${styles.ReviewBackground}`}>
          <Link to={`/reviews/${id}`} className= {styles.HideOnLargeScreen}>
              <Card.Img src={image} alt={book_title} />
          </Link>
          <Card.Body className= {styles.ReviewSummary}>

            {book_title && 
                <Card.Title className={styles.ReviewTitle}> {book_title}</Card.Title>}
            
            <div className="mx-auto">
              
              {book_author && 
                <Card.Text><strong>Author: </strong>{book_author}</Card.Text>}
              {book_category && 
                <Card.Text><strong>Category: </strong>{human_readable_category}</Card.Text>}
              {caption && 
                <Card.Text className={`px-3, ${styles.ReviewCaption}`}>" {caption} "</Card.Text>}
              {rating &&  
              <Card.Text>
                {rating}/5
                <i className= {`fa-solid fa-star ${styles.Star}`} />
              </Card.Text>}
            </div>

            <div className= {`text-right pb-3 pr-3 ${styles.ReviewBar}`}>
              
              {is_owner ? (
                  <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>You can't like your own review!</Tooltip>}
                  >
                  <i className="far fa-heart" />
                  </OverlayTrigger>
              ) : like_id ? (
                  <span onClick={handleUnlike}>
                      <i className={`fas fa-heart ${styles.Heart}`} />
                  </span>
              ) : currentUser ? (
                  <span onClick={handleLike}>
                      <i className={`far fa-heart ${styles.HeartOutline}`} />
                  </span>
              ) : (
                  <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>Log in to like reviews!</Tooltip>}
                  >
                      <i className="far fa-heart" />
                  </OverlayTrigger>
              )}

              {likes_count}
                <Link to={`/reviews/${id}`}>
                    <i className="far fa-comments" />
                </Link>
              {comments_count}
            </div>
          </Card.Body>
        </Col>

      </Row>
      {reviewPage &&
      <Row className= {styles.ReviewRow}>
        <Card.Body className={styles.ReviewBody}>
        <Card.Title className="font-weight-bold pb-2">Review:</Card.Title>
            
            {review_body && <Card.Text className={appstyles.BodyFont}>{review_body}</Card.Text>}
        </Card.Body>
      </Row>}

    </Card>
  );
};

export default Review;