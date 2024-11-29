import React, { useState } from 'react';
import styled from 'styled-components';

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

const RemoveButton = styled.button`
  padding: 5px 10px;
  font-size: 14px;
  background-color: #e57373;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
  &:hover {
    background-color: #d32f2f;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
`;

const ProductUpload = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    inStock: true,  // Ensure inStock is always set to true or false
    category: '',
    brand: '',
    description: '',
    images: [],
  });
  const [imageInput, setImageInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,  // Handle checkbox separately
    });
    console.log(`Updated field ${name}:`, value); // Log field change
  };

  const handleImageAdd = () => {
    console.log('Adding image:', imageInput); // Log image input value
    if (imageInput.trim() && imageInput.startsWith('http')) {
      setFormData((prev) => ({
        ...prev,
        images: [...prev.images, imageInput],
      }));
      setImageInput('');
      setError(''); // Clear previous error
    } else {
      setError('Please enter a valid image URL that starts with "http".');
    }
  };

  const handleImageRemove = (index) => {
    console.log(`Removing image at index ${index}`); // Log image removal
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form data before submit:', formData); // Log the form data

    if (formData.images.length === 0) {
      setError('At least one image URL is required.');
      console.log('Error: No images added');
      return;
    }

    setIsLoading(true);
    setError(''); // Clear previous errors

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('No token found.');
        setIsLoading(false);
        return;
      }

      console.log('Sending API request...');
      const formattedData = {
        ...formData,
        image_urls: formData.images,  // Update to match the API's expected field
      };

      const response = await fetch(
        'https://korean-skincare-blog-backend.onrender.com/api/products/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formattedData),
        }
      );

      const responseData = await response.json();
      console.log('API Response:', responseData); // Log the full API response

      if (!response.ok) {
        console.error('Failed API Request:', responseData);
        setError(responseData.message || 'Failed to upload product.');
        setIsLoading(false);
        return;
      }

      if (responseData.success) {
        alert('Product uploaded successfully!');
        setFormData({
          name: '',
          price: '',
          inStock: true,
          category: '',
          brand: '',
          description: '',
          images: [],
        });
        setIsLoading(false);
      } else {
        setError('Failed to upload product: ' + (responseData.message || 'Unknown error'));
        setIsLoading(false);
      }
    } catch (err) {
      console.log('Error during product upload:', err);
      setError(`Failed to upload product: ${err.message}`);
      setIsLoading(false);
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

        <Label>Image URLs</Label>
        <Input
          type="url"
          placeholder="Add an image URL"
          value={imageInput}
          onChange={(e) => setImageInput(e.target.value)}
        />
        <Button type="button" onClick={handleImageAdd}>
          Add Image
        </Button>

        <ul>
          {formData.images.map((url, index) => (
            <li key={index}>
              {url}{' '}
              <RemoveButton type="button" onClick={() => handleImageRemove(index)}>
                Remove
              </RemoveButton>
            </li>
          ))}
        </ul>

        <Button type="submit" disabled={isLoading || formData.images.length === 0}>
          {isLoading ? 'Uploading...' : 'Upload Product'}
        </Button>
      </Form>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default ProductUpload;
