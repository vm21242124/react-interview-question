import React, { useState } from 'react';
import styled from 'styled-components';

const ContactSectionContainer = styled.section`
  background-image: url('/path-to-your-background-image.jpg'); /* Replace with your image path */
  background-size: cover;
  background-attachment: fixed;
  padding: 80px 0;
`;

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

const ContactRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const FormContainer = styled.div`
  flex: 1;
  max-width: 500px;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  text-align: left;
  margin-bottom: 20px;
`;

const Subtitle = styled.h3`
  font-size: 1.5rem;
  text-align: left;
  margin-bottom: 40px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 1rem;
  margin-bottom: 8px;
  display: block;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

const Textarea = styled.textarea`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  resize: vertical;
  min-height: 100px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        consent: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <ContactSectionContainer id="contact">
            <ContactContainer>
                <ContactRow>
                    <FormContainer>
                        <Title>Get in touch</Title>
                        <Subtitle>We're here to <span style={{ color: '#007bff' }}>help</span></Subtitle>
                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label htmlFor="name">
                                    Name <span style={{ color: 'red' }}>*</span>
                                </Label>
                                <Input
                                    required
                                    id="name"
                                    name="name"
                                    placeholder="Jane Smith"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="email">
                                    Email address <span style={{ color: 'red' }}>*</span>
                                </Label>
                                <Input
                                    required
                                    id="email"
                                    name="email"
                                    placeholder="email@website.com"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="phone">
                                    Phone number
                                </Label>
                                <Input
                                    id="phone"
                                    name="phone"
                                    placeholder="+1 234 567 890"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="message">
                                    Message
                                </Label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    placeholder="Your message"
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                            </FormGroup>
                            <CheckboxContainer>
                                <Checkbox
                                    type="checkbox"
                                    id="consent"
                                    name="consent"
                                    checked={formData.consent}
                                    onChange={handleChange}
                                />
                                <Label htmlFor="consent">
                                    I agree to the terms and conditions
                                </Label>
                            </CheckboxContainer>
                            <Button type="submit">Submit</Button>
                        </Form>
                    </FormContainer>
                </ContactRow>
            </ContactContainer>
        </ContactSectionContainer>
    );
};

export default Contact;
