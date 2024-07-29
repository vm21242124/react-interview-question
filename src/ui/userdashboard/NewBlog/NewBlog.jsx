import { BlogHeaderContainer, DraftButtons, DraftItem, DraftsBlogs, IconButton, NewBlogContainer } from "./NewBlog.styles";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import EmptyContainer, { IconWrapper, NewBlogButton } from "../components/EmptyContainer.jsx";
import { useContext } from "react";
import { UserDashBoardContenxt } from "../UserDashboard.jsx";

const initialDrafts = [
    { id: 1, title: 'Draft 1' },
    { id: 2, title: 'Draft 2' },
    { id: 3, title: 'Draft 3' },
  ];
  const NewBlog = () => {
    const {setCurrTab}=useContext(UserDashBoardContenxt);

  return (
    <NewBlogContainer>
        <BlogHeaderContainer>
            <NewBlogButton onClick={()=>setCurrTab("Write Blog")}>
            <IconWrapper>
                <FaPlus />
            </IconWrapper>
            New Blog
            </NewBlogButton>
        </BlogHeaderContainer>
        {initialDrafts.length===0 && <EmptyContainer/>}
        <DraftsBlogs>
        {initialDrafts.map(draft => (
            <DraftItem key={draft.id}>
            <span>{draft.title}</span>
            <DraftButtons>
                <IconButton>
                <FaEdit />
                </IconButton>
                <IconButton >
                <FaTrash />
                </IconButton>
            </DraftButtons>
            </DraftItem>
        ))}
        </DraftsBlogs>
  </NewBlogContainer>
  )
}

export default NewBlog