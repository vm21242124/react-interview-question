import { useEffect } from "react"
import { ChartSection, ChartTitle, DashboardContainer, DashboardHeader, DashboardSummary, DashboardTitle, EmployeeAvatar, EmployeeDetails, EmployeeEmail, EmployeeItem, EmployeeList, EmployeeName, Schedule, ScheduleDate, ScheduleHeader, ScheduleItem, ScheduleTitle, SummaryBox, SummaryTitle, SummaryValue, TaskDescription, TaskTime } from "./MainDashboard.styles"

const MainDashboard = () => {

  return (
    <DashboardContainer>


        <DashboardHeader>
          <DashboardTitle>Dashboard</DashboardTitle>
          <div>
            {/* Date picker or other controls */}
          </div>
        </DashboardHeader>

        <DashboardSummary>

          <SummaryBox>
            <SummaryTitle>Total Reach</SummaryTitle>
            <SummaryValue>100</SummaryValue>
          </SummaryBox>
          <SummaryBox>
            <SummaryTitle>Current Month Impression</SummaryTitle>
            <SummaryValue>19</SummaryValue>
          </SummaryBox>
          <SummaryBox>
            <SummaryTitle>This Week</SummaryTitle>
            <SummaryValue>41</SummaryValue>
          </SummaryBox>
        </DashboardSummary>

        <ChartSection>
          <ChartTitle>Member Work Hours</ChartTitle>
          {/* Chart component */}
        </ChartSection>

        <EmployeeList>
          <EmployeeItem>
            <EmployeeAvatar src="avatar1.png" alt="Avatar" />
            <EmployeeDetails>
              <EmployeeName>Brooklyn Simmons</EmployeeName>

              <EmployeeEmail>brook.simmons@mail.com</EmployeeEmail>
            </EmployeeDetails>
            <div>Design</div>
          </EmployeeItem>
          <EmployeeItem>
            <EmployeeAvatar src="avatar2.png" alt="Avatar" />
            <EmployeeDetails>
              <EmployeeName>Cody Fisher</EmployeeName>
              <EmployeeEmail>cody.fisher@mail.com</EmployeeEmail>
            </EmployeeDetails>
            <div>Development</div>
          </EmployeeItem>
          <EmployeeItem>
            <EmployeeAvatar src="avatar3.png" alt="Avatar" />
            <EmployeeDetails>
              <EmployeeName>Ralph Edwards</EmployeeName>
              <EmployeeEmail>ralph.edwards@mail.com</EmployeeEmail>
            </EmployeeDetails>
            <div>UX Designer</div>
          </EmployeeItem>
        </EmployeeList>

        <Schedule>
          <ScheduleHeader>
            <ScheduleTitle>Trending Blogs</ScheduleTitle>
            <ScheduleDate >Jan 28, 2024</ScheduleDate>
          </ScheduleHeader>
          <ScheduleItem>
            <TaskTime>08:00</TaskTime>
            <TaskDescription>Online Interview with UI Candidate</TaskDescription>
          </ScheduleItem>
          <ScheduleItem>
            <TaskTime>09:35</TaskTime>
            <TaskDescription>Weekly meeting</TaskDescription>
          </ScheduleItem>
          <ScheduleItem>
            <TaskTime>10:00</TaskTime>
            <TaskDescription>Psychology test</TaskDescription>
          </ScheduleItem>
        </Schedule>
      </DashboardContainer>
  )
}

export default MainDashboard