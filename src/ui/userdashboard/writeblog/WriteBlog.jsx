import  { useEffect, useState } from 'react';
import { FaPen, FaHeading, FaCode, FaImage, FaParagraph } from 'react-icons/fa';
import { ContentContainer, EditButton, OptionButton, OptionsContainer, TitleContainer, TitleInput, WriteBlogContainer } from './WriteBlog.styles';
import TextContent from '../components/TextContent';
import SubheadingContent from '../components/SubheadingContent';
import ShellContent from '../components/ShellContent';
import ImageContent from '../components/ImgeContent';
import { useDispatch } from 'react-redux';
import { addBlog } from '../../../redux/reducer';

const WriteBlog = () => {
  const [title, setTitle] = useState('My Blog Title');
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [content, setContent] = useState([]);
  const dispatch=useDispatch();

  const [index,setIndex]=useState(0);
  const [currInputType,setCurrInputType] =useState("");

  const handleAddContent = (type) => {
    setCurrInputType(type);
  };

  useEffect(()=>{
    dispatch(addBlog({ title: "new blog" ,content:content}));
  },[])

  return (
    <WriteBlogContainer>
      <TitleContainer>
        {isEditingTitle ? (
          <TitleInput
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={() => setIsEditingTitle(false)}
            autoFocus
          />
        ) : (
          <h1 onClick={() => setIsEditingTitle(true)}>{title}</h1>
        )}
        <EditButton onClick={() => setIsEditingTitle(true)}>
          <FaPen />
        </EditButton>
      </TitleContainer>

      <OptionsContainer>
        <OptionButton onClick={() => handleAddContent('text')}>
          <FaParagraph /> Text
        </OptionButton>
        <OptionButton onClick={() => handleAddContent('subheading')}>
          <FaHeading /> Subheading
        </OptionButton>
        <OptionButton onClick={() => handleAddContent('shell')}>
          <FaCode /> Shell
        </OptionButton>
        <OptionButton onClick={() => handleAddContent('image')}>
          <FaImage /> Image
        </OptionButton>
      </OptionsContainer>

      <ContentContainer>

          <div >
            {currInputType === 'text' && (
              <TextContent
                setIndex={setIndex}
                index={index}
                setContent={setContent}
              />
            )}
            {currInputType ===  'subheading' && (
              <SubheadingContent
                setIndex={setIndex}
                setContent={setContent}
              />
            )}
            {currInputType ===  'shell' && (
              <ShellContent
                setIndex={setIndex}
                setContent={setContent}
              />
            )}
            {currInputType ===  'image' && (
              <ImageContent
                setIndex={setIndex}
                setContent={setContent}
              />
            )}
          </div>
      </ContentContainer>
    </WriteBlogContainer>
  );
};

export default WriteBlog;
