import styled from 'styled-components';
import 'react-quill/dist/quill.snow.css';
// import ReactQuill from 'react-quill';

// Container for the whole blog input section
export const NewBlogContainer = styled.div`
  width: 70%;
  min-height: 90vh;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid blue;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const DraftsBlogs = styled.div`
  width: 90%;
  padding: 1rem;
  background-color: black;
`;

export const BlogHeaderContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 80%;
  padding: 20px;
`;

export const DraftItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  color: white;
`;

export const DraftButtons = styled.div`
  display: flex;
  gap: 10px;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1.2rem;
  &:hover {
    color: #ccc;
  }
`;
