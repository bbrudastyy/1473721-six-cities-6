import React from 'react';
import PropTypes from 'prop-types';
import Form from '../form/form';
import Comment from '../comment/comment';

const getCommentContainer = (comments) => {
  if (comments) {
    return <ul className="reviews__list">
      {comments.map((comment, id) => <Comment key={`comment_${id}`} comment={comment} />)}
    </ul>;
  } else {
    return ``;
  }
};

const Reviews = ({comments}) => {
  return <section className="property__reviews reviews">
    <h2 className="reviews__title">Reviews · <span className="reviews__amount">{comments.length}</span></h2>
    <ul className="reviews__list">
      {getCommentContainer(comments)}
    </ul>
    <Form />
  </section>;
};

Reviews.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object)
};

export default Reviews;
