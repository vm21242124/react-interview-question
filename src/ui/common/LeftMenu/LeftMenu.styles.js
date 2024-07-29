import styled from 'styled-components';

// Container for the whole left menu
const LeftMenuContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #f8f9fc;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0,0,0,0.1);
`;

// Logo and company name
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

const CompanyName = styled.h1`
  font-size: 18px;
  color: #333;
`;

// Menu items
const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  margin-bottom: 10px;
  cursor: pointer;
  color: #666;
  font-size: 14px;
  border-radius: 5px;

  &:hover {
    background-color: #e0e4e8;
  }
`;

const MenuIcon = styled.span`
  margin-right: 10px;
`;

const MenuText = styled.span``;

const DepartmentTitle = styled.div`
  margin-top: 20px;
  font-size: 12px;
  color: #999;
  text-transform: uppercase;
`;

const HelpCenter = styled.div`
  margin-top: auto;
  padding: 10px 15px;
  cursor: pointer;
  color: #666;
  font-size: 14px;
  border-radius: 5px;

  &:hover {
    background-color: #e0e4e8;
  }
`;
export {CompanyName,DepartmentTitle,HelpCenter, LeftMenuContainer,Logo,LogoContainer, MenuIcon,MenuItem,MenuText,}