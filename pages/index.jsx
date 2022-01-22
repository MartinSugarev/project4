import Header from "../src/components/header/Header";
import Avatar from '../src/components/Avatar'



export default function Index() {
  return (
    <>
    <Header />
    <Avatar size={90} verified={true}  url={require('../public/images/avatar.png')} />
    </>
  )

  
}
