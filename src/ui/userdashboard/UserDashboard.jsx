import styled from "styled-components"
import LeftMenu from "../common/LeftMenu/LeftMenu"
import NewBlog from "./NewBlog/NewBlog";
import { createContext,  useState } from "react";
import MainDashboard from './MainDashboard/MainDashboard'
import YourBlogs from "./YourBlogs/YourBlogs";
import Profile from "./Profile/Profile";
import WriteBlog from "./writeblog/WriteBlog";
import { Provider } from "react-redux";
import { store } from "../../redux/store";


const DashboarContainer=styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserDashBoardContenxt= createContext();



const UserDashboard = () => {
  const [ currTab,setCurrTab ]=useState("Dashboard");
  const data={
    currTab,
    setCurrTab
  }

  return (
    <Provider store={store}>
    <UserDashBoardContenxt.Provider value={data}>
      <DashboarContainer>
        <LeftMenu/>
        {currTab==="Dashboard" && <MainDashboard/>}
        {currTab==="New Blog"&& <NewBlog/>}
        {currTab==="Your Blogs" && <YourBlogs/>}
        {currTab==="Profile" && <Profile/>}
        {currTab==="Write Blog" &&<WriteBlog/>}
      </DashboarContainer>
    </UserDashBoardContenxt.Provider>
    </Provider>
      
  )
}

export default UserDashboard