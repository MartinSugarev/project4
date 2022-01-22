import Header from "../src/components/header/Header";
import Avatar from "../src/components/avatar/Avatar"
import avatartUrl from '../src/components//avatar/image/avatar.png'


export default function Index() {
  return ( 
   <>
       <Header />
       <Avatar size={{width: '90px', height: '90px'}} url={require('../src/components/avatar/image/avatar.png')} verified={false} />
  </>
  )
}
