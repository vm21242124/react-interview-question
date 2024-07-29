import styled from "styled-components";

export const WriteBlogContainer = styled.div`
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

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const TitleInput = styled.input`
  font-size: 2rem;
  padding: 5px;
  border: none;
  border-bottom: 2px solid black;
  width: 80%;
  &:focus {
    outline: none;
  }
`;

export const EditButton = styled.button`
  padding: 5px 10px;
  background-color: green;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const OptionsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

export const OptionButton = styled.button`
  padding: 10px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  margin-top: 20px;
`;

export const SaveCancelContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 10px;
`;

export const SaveButton = styled.button`
  padding: 5px 10px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const CancelButton = styled.button`
  padding: 5px 10px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;