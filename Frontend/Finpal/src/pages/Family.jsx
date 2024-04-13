import { Box, Paper, Typography } from "@mui/material";
import Sidenav from "../component/sidenav";

export default  function Family() {
    return (
        <Box>
            <Sidenav/>
           <Box>
            <Typography variant="h4" align="center" mt={4} ml={32}>
                Family Dashboard
            </Typography>
            <Paper elevation={3} sx={{ padding: 2, width: 350, ml: 32, mt: 4 }}>
                <Typography variant="body" color={"gray"}>
                    Total Members Portfolio
                </Typography>
                <Typography variant="h6">4</Typography>
            </Paper>

           </Box>
        </Box>
    )
}
