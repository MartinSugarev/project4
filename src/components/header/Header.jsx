import { Grid, Button, Input } from "@mui/material";
import Logo from "../logo/Logo.jsx";
import styles from "./Header.module.scss";
import SearchIcon from '@mui/icons-material/Search';


export default function Header() {
  return (
    
  <div className={styles.wrapper}>
    <Grid container  className={styles.container}>
      <Grid item>
          <Logo type={'default'} className={styles.logo}/> 
      </Grid>
      <Grid item >
          <Input startAdornment={<SearchIcon/>} className={styles.input} placeholder="Find items, users and activities" />
      </Grid>
      <Grid item >
      <Button variant="text">Home</Button>
      <Button variant="text">Activity</Button>
      <Button variant="outlined">Explore</Button>
      </Grid>
    </Grid>
  </div>
         
  );
}
