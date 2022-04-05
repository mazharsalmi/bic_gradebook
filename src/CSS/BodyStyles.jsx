
import { makeStyles } from "@mui/styles"
  
    export const UseStyles = makeStyles(theme => ({
        header: {
          backgroundColor: theme.palette.primary.light,
          color: '#fff',
          padding: '10px 24px !important',
      
          [theme.breakpoints.down('450')]: {
            padding: ' 10px 0px !important',
          },
        },
    }))
      