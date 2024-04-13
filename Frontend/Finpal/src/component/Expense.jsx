import React, { useEffect, useState } from "react";
import { Box, Divider, Paper, Stack, Typography } from "@mui/material";
import axios from 'axios';  // Ensure axios is installed or use another fetch method

export default function Expense() {
  const [data, setData] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8080/expense');
        if (Array.isArray(response.data)) {
          const processedData = [];
          let sum = 0;

          for (const entry of response.data) {
            for (const [dateKey, amount] of Object.entries(entry.data)) {
              const formattedAmount = amount / 1000;
              processedData.push({
                label: new Date(dateKey).toLocaleString(), // Convert timestamp to a readable format
                amount: `RS ${formattedAmount}k`, // Assuming amount is in the smallest unit
                isHighlighted: false  // Set default or implement logic to determine highlighting
              });
              sum += formattedAmount;
            }
          }

          setData(processedData);
          setTotalAmount(sum);
        } else {
          console.error('Data fetched is not an array:', response.data);
        }
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []);  // Empty dependency array means this effect runs only once after the initial render

  return (
    <Paper elevation={3} sx={{ padding: 2 }}>
      <Box display={"flex"} justifyContent={"space-between"} mb={4} width={350}>
        <Box>
          <Typography variant="body" color={"gray"}>
            Expenses
          </Typography>
          <Typography variant="h6">{`RS ${totalAmount}k`}</Typography> {/* Dynamically displayed */}
        </Box>
        <Box mt={4} >
            <Typography variant="body" color={"Blue"}>
                view all
            </Typography>
        </Box>
      </Box>
       <Box>
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <Stack direction="row" justifyContent="space-between" >
            <Typography variant="body2" color={item.isHighlighted ? "gray" : "inherit"}>
              {item.label}
            </Typography>
            <Typography variant="body2" color={item.isHighlighted ? "gray" : "inherit"}>
              {item.amount}
            </Typography>
          </Stack>
          {index < data.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </Box>
    </Paper>
  );
}
