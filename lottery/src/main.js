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
      <br/>

      <button style={{width:"80px" ,marginLeft:"150px", marginRight:"50px"}} value={true}>Yes</button>
      <button style={{width:"80px"}}value={false}>No</button>
      <form style={{marginLeft:"200px"}}>
        <br/>
        Enter The public key:<input type='text'></input>
        <button type='submit' onClick={getData} style={{margin:"10px", width:"100px"}}>Enter</button>
      </form>
    </div>
  )
}
