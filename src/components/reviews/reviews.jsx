import React from 'react';
import PropTypes from 'prop-types';
import Form from '../form/form';
import Comment from '../comment/comment';
import {useSelector} from 'react-redux';
import {AuthorizationStatus} from '../../utils/utils';

const getCommentContainer = (comments) => {
  if (comments) {
    return <ul className="reviews__list">
      {comments.map((comment, i) => <Comment key={`comment_${i}`} comment={comment} />)}
    </ul>;
  } else {
    return ``;
  }
};

const Reviews = ({id}) => {

  const {authorizationStatus} = useSelector((state) => state.USER);
  const {comments} = useSelector((state) => state.DATA);

  return <section className="property__reviews reviews">
    <h2 className="reviews__title">Reviews · <span className="reviews__amount">{comments.length}</span></h2>
    <ul className="reviews__list">
      {getCommentContainer(comments)}
    </ul>
    {authorizationStatus === AuthorizationStatus.AUTH ? <Form id={id} /> : ``}
  </section>;
};

Reviews.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Reviews;
