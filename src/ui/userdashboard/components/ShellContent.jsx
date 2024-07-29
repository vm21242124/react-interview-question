import { CancelButton, SaveButton, SaveCancelContainer } from "../writeblog/WriteBlog.styles";
import PropTypes from 'prop-types';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";


const ShellContentConatainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const modules = {
  toolbar: [[{ list: "ordered" }, { list: "bullet" }], [{ align: [] }]],
};
const ShellContent = (props) => {
  const Save = () => {};
  const Cancel = () => {};
    return(
    <ShellContentConatainer>
     <ReactQuill style={{ width: "90%" }} modules={modules} />
      <SaveCancelContainer>
        <SaveButton onClick={() => Save()}>Save</SaveButton>
        <CancelButton onClick={() => Cancel()}>Cancel</CancelButton>
      </SaveCancelContainer>
    </ShellContentConatainer>
    );
};

  ShellContent.propTypes = {
    setIndex: PropTypes.func,
    setContent: PropTypes.func,
  };
  export default ShellContent;