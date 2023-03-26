import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockDiet } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import LineChart from "../../components/LineChart";
import StatBox from "../../components/StatBox";
import { useState } from "react";
const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [buttonValue, setButtonValue] = useState("Monday")
  const handleOnclick = (btnvalue)=>{
        setButtonValue(btnvalue)
  }
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <div>
          <h1>
            level<span style={{color:"yellow"}}>Up</span> User 1
          </h1>
          <p>Welcome to your dashboard</p>
        </div>

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="You are 50% "
            subtitle="close to your goal"
            progress="0.50"
          />
        </Box>
        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Calorie Counter
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                {new Date().toLocaleDateString()}
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Your Prescribed Diet
            </Typography>
          </Box>
          {
          mockDiet.filter((data)=>{
            return buttonValue === data.id
          }).map((diet, i)=>{
            return(
              <Box
              key={`${diet.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {diet.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {diet.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{diet.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
                width="6rem"
                height="auto"
                color="black"
              >
                {diet.cost}
              </Box>
            </Box>
           )
          })
         }
        </Box>
        <Box
         gridColumn="span 4"
        >
          <Box display="flex" gap="20px">
            <Button onClick={()=>handleOnclick("Monday")} size="large" variant="outlined" color="secondary">Monday</Button>
             <Button onClick={()=>handleOnclick("Tuesday")} size="large" variant="outlined" color="secondary">Tuesday</Button>
              <Button onClick={()=>handleOnclick("Wednesday")}  size="large" variant="outlined" color="secondary">Wednesday</Button>
               <Button  onClick={()=>handleOnclick("Thursday")} size="large" variant="outlined" color="secondary">Thursday</Button>
                <Button  onClick={()=>handleOnclick("Friday")} size="large" variant="outlined" color="secondary">Friday</Button>
                 <Button  onClick={()=>handleOnclick("Saturday")} size="large" variant="outlined" color="secondary">Saturday</Button>
                  <Button  onClick={()=>handleOnclick("Sunday")} size="large" variant="outlined" color="secondary">Sunday</Button>
          </Box>
            
        </Box>
        <Box>
        
        </Box>

        </Box>
        
    </Box>
  );
};

export default Dashboard;
