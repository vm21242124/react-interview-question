import { useContext } from "react"
import {  CompanyName, DepartmentTitle, HelpCenter,  LeftMenuContainer,  Logo, LogoContainer, MenuIcon, MenuItem, MenuText } from "./LeftMenu.styles"
import { menuItems } from "./LeftMenuData"
import { UserDashBoardContenxt } from "../../userdashboard/UserDashboard"

const LeftMenu = () => {
  const { setCurrTab } =useContext(UserDashBoardContenxt);
  return (
    <LeftMenuContainer>
        <LogoContainer>
          <Logo src="logo.png" alt="Logo" />
          <CompanyName>Rocks Company </CompanyName>
        </LogoContainer>
        {menuItems.map((item, index) => (
          item.title ? (
            <DepartmentTitle key={index}>{item.title}</DepartmentTitle>
          ) : (
            <MenuItem key={index} onClick={()=>setCurrTab(item.text)}>
              {item.icon && <MenuIcon>{item.icon}</MenuIcon>}
              <MenuText >{item.text}</MenuText>
            </MenuItem>
          )
        ))}
        <HelpCenter>
          <MenuIcon>❓</MenuIcon>
          <MenuText>Help Center</MenuText>
        </HelpCenter>
      </LeftMenuContainer>
  )
}

export default LeftMenu;