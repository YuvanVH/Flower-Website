// CommentsInfo.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/CommentInfo.css';

const Comments = ({ flowerId }) => {
  const [comments, setComments] = useState([]);
  const [editingCommentId, setEditingCommentId] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5001/comments/${flowerId}`)
      .then(response => {
        setComments(response.data);
      })
      .catch(error => {
        console.error('Error fetching comments:', error);
      });
  }, [flowerId]);

  const handleEdit = (commentId) => {
    setEditingCommentId(commentId);
  };

  const handleCancelEdit = () => {
    setEditingCommentId(null);
  };

  const handleUpdate = (commentId, updatedComment) => {
    axios.put(`http://localhost:5001/comments/${commentId}`, updatedComment)
      .then(response => {
        const updatedComments = comments.map(comment => {
          if (comment.id === commentId) {
            return response.data.comment;
          }
          return comment;
        });
        setComments(updatedComments);
        setEditingCommentId(null);
      })
      .catch(error => {
        console.error('Error updating comment:', error);
      });
  };

  const handleDelete = (commentId) => {
    axios.delete(`http://localhost:5001/comments/${commentId}`)
      .then(() => {
        setComments(comments.filter(comment => comment.id !== commentId));
      })
      .catch(error => {
        console.error('Error deleting comment:', error);
      });
  };

  return (
    <div className="comments-container">
      <h2>Comment about the flower here below!</h2>
      <Formik
        initialValues={{ title: '', comment: '' }}
        validationSchema={Yup.object({
          title: Yup.string().required('Title is required'),
          comment: Yup.string().required('Comment is required').max(50, 'Comment must be at most 50 characters'),
        })}

        onSubmit={(values, { setSubmitting, resetForm }) => {
          if (editingCommentId) {
            handleUpdate(editingCommentId, values);
          } else {
            axios.post('http://localhost:5001/comments', { ...values, flowerId })
              .then(response => {
                setComments([...comments, { id: response.data.id, ...values }]);
                resetForm();
              })
              .catch(error => {
                console.error('Error adding comment:', error);
              })
              .finally(() => {
                setSubmitting(false);
              });
          }
        }}
      >
        {({ values, isSubmitting, handleChange }) => (
          <Form className="comment-form">
            <div>
              <label id="commentTop" htmlFor="title">Title</label>
              <Field type="text" name="title" value={values.title} onChange={handleChange} />
              <ErrorMessage name="title" component="div" className="error-message" />
            </div>

            <div>
              <label htmlFor="comment">Comment (max 50 characters)</label>
              <Field as="textarea" name="comment" maxLength="50" value={values.comment} onChange={handleChange} />
              <ErrorMessage name="comment" component="div" className="error-message" />
            </div>

            <button type="submit" disabled={isSubmitting}>{editingCommentId ? 'Update Comment' : 'Add Comment'}</button>

            {editingCommentId && <button className="cancelCommentEdit" type="button" onClick={handleCancelEdit}>Cancel</button>}
          </Form>
        )}
      </Formik>

      <ul className="comments-list">
        {comments.map(comment => (
          <li key={comment.id} className="comment-item">
            {editingCommentId === comment.id ? (
              <>
                <p>Editing comment...</p>
                <p><a href="#commentTop">Scroll upp</a> to edit the comment</p>
              </>
            ) : (
              <>
                <div className="comment-info">
                  <h3>{comment.title}</h3>
                  <p>{comment.comment}</p>
                  <p id="CommentTimeLine">{comment.created_at}</p>
                </div>
                <button onClick={() => handleEdit(comment.id)}>Edit</button>
                <button onClick={() => handleDelete(comment.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
