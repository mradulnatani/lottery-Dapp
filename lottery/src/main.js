import React from 'react'

export default function main() {
    function getData(e){
        e.preventDefault();
    }
  return (
    <div>
      <br/>
      <span style={{padding:"100px"}}>Want to earn some heavy money?</span>
      <br/>
      <spam style={{padding:"100px"}}>If Yes then here is a chance......</spam>
      <br/>
      <b style={{marginLeft:"100px",border:"10px"}}>Disclimer: This application is managed by the manager of the D-App company, all the care of you privacy and security will be taken care during the game.</b>
      <br/>
      <br/>
      <form style={{marginLeft:"200px"}}>
        <br/>
        Enter amount of Ether:<input type='text'></input>
        <button type='submit' onClick={getData} style={{margin:"10px", width:"100px"}}>Enter</button>
      </form>
    </div>
  )
}
