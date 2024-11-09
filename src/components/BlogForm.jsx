// src/components/BlogForm.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const BlogFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  background-color: #f8f2f7;
`;

const FormWrapper = styled.div`
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 600px;
  padding: 2rem;
  color: #4a4a4a;
`;

const Title = styled.h2`
  color: #8c6c83;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-top: 8px;
  margin-bottom: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fefcfd;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  margin-top: 8px;
  margin-bottom: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  min-height: 100px;
  background-color: #fefcfd;
`;

const ImagePreview = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-top: 10px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #8c6c83;
  border: none;
  border-radius: 8px;
  color: #ffffff;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #a37e9c;
  }
`;

const BlogForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) {
      setErrorMessage('Please fill in all fields');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    if (image) formData.append('image', image);

    try {
      const token = localStorage.getItem('token');
      const response = await fetch('https://korean-skincare-blog-backend.onrender.com/api/blog', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) throw new Error('Failed to create post');

      navigate('/admin');
    } catch (error) {
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <BlogFormContainer>
      <FormWrapper>
        <Title>Create a New Blog Post</Title>
        <form onSubmit={handleFormSubmit}>
          <Input
            type="text"
            placeholder="Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextArea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Input type="file" accept="image/*" onChange={handleImageChange} />
          {imagePreview && <ImagePreview src={imagePreview} alt="Selected Image Preview" />}
          <SubmitButton type="submit">Post Blog</SubmitButton>
          {errorMessage && <div>{errorMessage}</div>}
        </form>
      </FormWrapper>
    </BlogFormContainer>
  );
};

export default BlogForm;
