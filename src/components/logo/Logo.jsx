import * as React from 'react';

export default function Logo({type}){


return(

type === 'default' ? <img src="./images/logo.svg"/> : <img src="./images/logo-muted.svg" />

)


}

Logo.defaultProps = {
    type: 'default'
}