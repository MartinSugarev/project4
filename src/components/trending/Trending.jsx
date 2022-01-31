import { Select, Grid, Container, MenuItem } from "@mui/material";
import Card from '../card/Card'
import styles from '../trending/Trending.module.scss'

export default function Trending({cards = []}){

return (
    <div className={styles.container} >
        <Container  >
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
               {cards.map((card, index) => {
                  // const { name, mediaUrl, user, price, currency, timeLeft } = card
                   return <Grid key={index} item > <Card name={card.name} mediaUrl={card.mediaUrl} user={card.user} price={card.price} currency={card.currency} timeLeft={card.timeLeft}  /> </Grid>
               })}
          </Grid>
         </Container>
    </div>
    
)

}