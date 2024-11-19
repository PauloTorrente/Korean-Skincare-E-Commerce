import React, { useState } from 'react';
import styled from 'styled-components';
import usePostApi from '../api/usePostApi';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f7f7;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  color: #333;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 24px;
  color: #5e5c5c;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Label = styled.label`
  font-size: 16px;
  color: #4d4d4d;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  &:focus {
    border-color: #b5a5a5;
  }
`;

const Textarea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  resize: vertical;
  &:focus {
    border-color: #b5a5a5;
  }
`;

const Button = styled.button`
  padding: 12px;
  font-size: 18px;
  background-color: #d1b5a5;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #b39485;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
`;

const ProductUpload = () => {
  const { postData, error, isLoading } = usePostApi();
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    inStock: true,
    category: '',
    brand: '',
    description: '',
    image: null,
  });
  const [fileError, setFileError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.type !== 'image/webp') {
        setFileError('Only .webp files are allowed.');
        setFormData({ ...formData, image: null });
      } else {
        setFileError('');
        setFormData({ ...formData, image: file });
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.image) {
      alert('Please upload a valid .webp image.');
      return;
    }

    const productData = new FormData();
    Object.keys(formData).forEach((key) => {
      productData.append(key, formData[key]);
    });

    await postData({
      route: 'api/products',
      payload: productData,
      method: 'POST',
    });

    if (!error) {
      alert('Product uploaded successfully!');
      setFormData({
        name: '',
        price: '',
        inStock: true,
        category: '',
        brand: '',
        description: '',
        image: null,
      });
    } else {
      alert(`Failed to upload product: ${error}`);
    }
  };

  return (
    <Container>
      <Title>Upload a New Product</Title>
      <Form onSubmit={handleSubmit}>
        <Label>Product Name</Label>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <Label>Price</Label>
        <Input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />

        <Label>In Stock</Label>
        <Input
          type="checkbox"
          name="inStock"
          checked={formData.inStock}
          onChange={() => setFormData({ ...formData, inStock: !formData.inStock })}
        />

        <Label>Category</Label>
        <Input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        />

        <Label>Brand</Label>
        <Input
          type="text"
          name="brand"
          value={formData.brand}
          onChange={handleChange}
          required
        />

        <Label>Description</Label>
        <Textarea
          name="description"
          rows="4"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <Label>Product Image</Label>
        <Input
          type="file"
          name="image"
          onChange={handleFileChange}
          required
        />
        {fileError && <ErrorMessage>{fileError}</ErrorMessage>}

        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Uploading...' : 'Upload Product'}
        </Button>
      </Form>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default ProductUpload;
