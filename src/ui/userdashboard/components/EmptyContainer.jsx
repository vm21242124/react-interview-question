
import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';

const EmptyContainerdiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  justify-content: center;
  color: white;
`;

const EmptyMessage = styled.p`
  font-size: 1.2rem;
  color: black;
  margin-bottom: 20px;
`;

export const NewBlogButton = styled.button`
  padding: 10px 20px;
  color: white;
  background-color: green;
  outline: none;
  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 1.2rem;

  &:hover {
    background-color: darkgreen;
  }
`;

export const IconWrapper = styled.span`
  margin-right: 10px;
`;

const EmptyContainer = () => (
  <EmptyContainerdiv>
    <EmptyMessage>No drafts available. Start by creating a new blog!</EmptyMessage>
    <NewBlogButton >
      <IconWrapper>
        <FaPlus />
      </IconWrapper>
      New Blog
    </NewBlogButton>
  </EmptyContainerdiv>
);

export default EmptyContainer;
