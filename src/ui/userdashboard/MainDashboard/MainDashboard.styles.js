import styled from "styled-components";
const DashboardContainer = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #fff;
  overflow-y: auto;
`;

const DashboardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const DashboardTitle = styled.h2`
  font-size: 24px;
  color: #333;
`;

const DashboardSummary = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const SummaryBox = styled.div`
  flex: 1;
  background-color: #f0f4f8;
  padding: 20px;
  margin-right: 20px;
  border-radius: 8px;

  &:last-child {
    margin-right: 0;
  }
`;

const SummaryTitle = styled.div`
  font-size: 16px;
  color: #666;
`;

const SummaryValue = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: #333;
`;

// Chart and other sections
const ChartSection = styled.div`
  margin-bottom: 20px;
`;

const ChartTitle = styled.h3`
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
`;

const EmployeeList = styled.div`
  margin-bottom: 20px;
`;

const EmployeeItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #f0f4f8;

  &:last-child {
    border-bottom: none;
  }
`;

const EmployeeAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const EmployeeDetails = styled.div`
  flex: 1;
`;

const EmployeeName = styled.div`
  font-size: 14px;
  color: #333;
`;

const EmployeeEmail = styled.div`
  font-size: 12px;
  color: #999;
`;

const Schedule = styled.div``;

const ScheduleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const ScheduleTitle = styled.h3`
  font-size: 18px;
  color: #333;
`;

const ScheduleDate = styled.div`
  font-size: 14px;
  color: #666;
`;

const ScheduleItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #f0f4f8;

  &:last-child {
    border-bottom: none;
  }
`;

const TaskTime = styled.div`
  font-size: 14px;
  color: #333;
  margin-right: 10px;
`;

const TaskDescription = styled.div`
  font-size: 14px;
  color: #666;
`;
export {ChartSection,ChartTitle,DashboardContainer,DashboardHeader,DashboardSummary,DashboardTitle,EmployeeAvatar,EmployeeDetails,EmployeeEmail,EmployeeItem,EmployeeList,EmployeeName,Schedule,ScheduleDate, ScheduleHeader,ScheduleItem,ScheduleTitle,SummaryBox,SummaryTitle,SummaryValue,TaskDescription,TaskTime}