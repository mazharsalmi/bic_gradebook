import React from 'react'
import  UseStyles  from '../CSS/UseStyles';

export default function Header() {
  const classes= UseStyles();
  console.log(classes())
  return (
    <div className={classes.Header} >Header</div>
  )
}
