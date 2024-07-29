import styled from "styled-components";
import {
  CancelButton,
  SaveButton,
  SaveCancelContainer,
} from "../writeblog/WriteBlog.styles";
import PropTypes from "prop-types";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";

const TextContentConatainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const modules = {
  toolbar: [[{ list: "ordered" }, { list: "bullet" }], [{ align: [] }]],
};

const TextContent = (props) => {
  const [value,setValue]=useState("");
  const handlechange=(e)=>{
    setValue(e)
  }
  const Save = () => {
    props.setIndex(prev=>prev+1);
    props.setContent({index:props.index+1,type:"text",value});
  };
  const Cancel = () => {};
  return (
    <TextContentConatainer>
      <ReactQuill style={{ width: "90%" }} modules={modules} onChange={handlechange}/>
      <SaveCancelContainer>
        <SaveButton onClick={() => Save()}>Save</SaveButton>
        <CancelButton onClick={() => Cancel()}>Cancel</CancelButton>
      </SaveCancelContainer>
    </TextContentConatainer>
  );
};

TextContent.propTypes = {
  setIndex: PropTypes.func,
  index:PropTypes.number,
  setContent: PropTypes.func
};

export default TextContent;
