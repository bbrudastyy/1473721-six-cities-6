import React from 'react';
import PropTypes from 'prop-types';
import Form from '../form/form';
import Comment from '../comment/comment';
import CommentProps from '../comment/comment.prop';
import {connect} from 'react-redux';
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

const Reviews = ({comments, id, authorizationStatus}) => {
  return <section className="property__reviews reviews">
    <h2 className="reviews__title">Reviews · <span className="reviews__amount">{comments.length}</span></h2>
    <ul className="reviews__list">
      {getCommentContainer(comments)}
    </ul>
    {authorizationStatus === AuthorizationStatus.AUTH ? <Form id={id} /> : ``}
  </section>;
};

Reviews.propTypes = {
  comments: PropTypes.arrayOf(CommentProps),
  id: PropTypes.number.isRequired,
  authorizationStatus: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus
});

export {Reviews};
export default connect(mapStateToProps, null)(Reviews);
