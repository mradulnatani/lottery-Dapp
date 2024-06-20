import React from 'react'

export default function main() {
    function getData(e){
        e.preventDefault();
    }
  return (
    <div style={{border:"10px"}}>
      <br/>
      <div>
      <span style={{padding:"100px"}}>Want to earn some heavy money?</span>
      <br/>
      <spam style={{padding:"100px"}}>If Yes then here is a chance......</spam>
      <br/>
      <b style={{marginLeft:"100px",border:"10px"}}>Disclimer: This application is managed by the manager of the D-App company, all the care of you privacy and security will be taken care during the game.</b>
      <br/>
      <br/>
      </div>
      <form style={{margin:"10px 500px 10px 500px"}}>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Amount</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Accept the terms and conditions</label>
  </div>
  <button type="submit" className="btn btn-primary" onClick={getData}>Enter the lottery</button>
</form>
    </div>
  )
}
