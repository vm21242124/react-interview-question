import ReactQuill from "react-quill";
import { CancelButton, SaveButton, SaveCancelContainer } from "../writeblog/WriteBlog.styles";
import PropTypes from 'prop-types';
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";

const ImageContentConatainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const modules = {
  toolbar: [[{ list: "ordered" }, { list: "bullet" }], [{ align: [] }]],
};

const ImageContent = (props) => {
    const Save = () => {};
    const Cancel = () => {};
    return(

    <ImageContentConatainer>
           <ReactQuill style={{ width: "90%" }} modules={modules} />

      <SaveCancelContainer>
        <SaveButton onClick={() => Save()}>Save</SaveButton>
        <CancelButton onClick={() => Cancel()}>Cancel</CancelButton>
      </SaveCancelContainer>
    </ImageContentConatainer>

    );
}


  ImageContent.propTypes = {
    setIndex: PropTypes.func,
    setContent: PropTypes.func,
  };

  export default ImageContent;