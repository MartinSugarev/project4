import { Select, Grid, Container, MenuItem } from "@mui/material";
import Card from '../card/Card'
import styles from '../trending/Trending.module.scss'

export default function Trending({cards = []}){

return (
    <Container className={styles.container} >
         <div className={styles.wrapper}>
         <h1>Trending</h1>
         <Select value=""  displayEmpty>
             <MenuItem value="" disabled >This week</MenuItem>   
             <MenuItem value={10}>Ten</MenuItem>
             <MenuItem value={20}>Twenty</MenuItem>
             <MenuItem value={30}>Thirty</MenuItem>
         </Select>
         </div> 
         <Grid container spacing={1}>
               {cards.cards.map((c) => {
                   const { name, mediaUrl, user, price, currency } = c
                   return <Grid item > <Card name={name} mediaUrl={mediaUrl} user={user} price={price} currency={currency}   /> </Grid>
               })}
         </Grid>
    </Container>
    
)

}