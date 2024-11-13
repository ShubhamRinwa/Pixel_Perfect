import React from 'react'
import LoadingStyle from '../styles/components/Loadingicon.module.css'
export default function Loadingicon() {
  return (
  <div className={LoadingStyle.container}>
        <div className={LoadingStyle.spinner}> <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div>
         <div className={LoadingStyle.text}>Loading...</div>
       
</div>
  
  )
}
