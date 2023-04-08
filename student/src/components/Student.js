import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import uuid from 'react-uuid'
function Student() {
  const [msg,setMsg]=useState('')
  const [birth,setbirth]=useState('')
  const [school,setschool]=useState('')
  const [div,setdiv]=useState('')
  const [gender,setgender]=useState('')
  const [id,setId]=useState('')
 let submit=async(e)=>{
    e.preventDefault();
    // let id=uuid()
    setId(uuid(id).slice(0,4))
    console.log(id);
    // let uniqueId=id.slice(0,4)
    //   console.log(uniqueId)
    try{
      alert('submit')
      alert()
      await axios.post("http://localhost:8000/",{
        msg,birth,school,div,gender,id
      })
    }
    catch(e){
      console.log(e);
    }
   
   
  }
  
  return (
    <>
      <h1 style={{marginTop:'-6px',color:'bisque'}} className='text-center '>Student Details</h1>
      <Row>
        {/* <Col>
        <img  style={{width:'190px'}} src='https://img.icons8.com/bubbles/512/student-male.png'/>
        </Col> */}
        <Col>
       
    <Form action='post' className='border border-3 p-3'>
      <Form.Group className="mb-5" controlId="formBasicEmail" required="aA">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control onChange={(e)=>{setMsg(e.target.value)}}  type="email" placeholder="Enter your name" required='aA' />
        <Form.Text className="text-muted">
          {/* We'll never share your email with anyone else. */}
        </Form.Text>
      </Form.Group>
      <label className='mt-2' for="birthday">Date of Birth:</label>
  <input onChange={(e)=>{setbirth(e.target.value)}} style={{color:'white'}} type="date" id="birthday" name="birthday"/>
  &nbsp; &nbsp; &nbsp; <br/> <br/>
  <label for="class">Select a class:</label>
<select onChange={(e)=>{setschool(e.target.value)}} name="class" id="class">
  <option value="1">1</option>
  <option value="II">II</option>
  <option value="III" disabled>III</option>
  <option value="IV" selected>IV</option>
  <option value="V" selected>V</option>
  <option value="VI" selected>VI</option>
  <option value="VII" selected>VII</option>
  <option value="VIII" selected>VIII</option>
  <option value="IX" selected>IX</option>
  <option value="X" selected>X</option>
</select>
<br/> <br/>
<label>select for division:</label>
<select onChange={(e)=>{setdiv(e.target.value)}} name="division" id="division">
  <option value="A">A</option>
  <option value="B">B</option>
  <option value="C" >C</option>
  </select>
      {/* <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group> */}
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <br/> <br/>
       <label> please select gender:</label>
      <br/> 
      <input onChange={(e)=>{setgender(e.target.value)}} className='' type="radio" id="gender" name='gender'  value="male"/> 
 <label for="male">male</label><br/>
 <input onChange={(e)=>{setgender(e.target.value)}} type="radio" id="gender" name='gender'  value="female"/> 
 <label for="female">female</label> 
<br/> <br/> 



      <Button onClick={submit} variant="primary"  type="submit"  >
        Submit
      </Button>
      
    </Form>
  
</Col>

      </Row>
    </>
  )
}

export default Student
