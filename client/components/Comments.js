import React from 'react';

export default class Comments extends React.Component {
  handleSubmit(event) {
    event.preventDefault();

    const {postId} = this.props.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;

    this.props.addComment(postId, author, comment);
    this.refs.commentForm.reset();
  }

  renderComment(comment, index) {
    return (
      <div className="comment" key={index}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button
            className="remove-comment"
            onClick={this.props.removeComment.bind(null, this.props.params.postId, index)}>
            &times;
          </button>
        </p>
      </div>
    );
  }

  render() {
    return (
      <div className="comments">
        {this.props.postComments.map(this.renderComment.bind(this))}

        <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" ref="author" placeholder="Your name" />
          <input type="text" ref="comment" placeholder="Your comment" />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}
