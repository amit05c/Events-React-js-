import React,{useState} from 'react'


const Form = () => {
     const [form,setForm]=useState({
         name:"",
         email:"",
         password:"",
         age: ""
     })

     const handleChange = (e=>{
         console.log(e.target.value)
     })
        
  return (
    <div>Form
        <div>
            <div>
                <label htmlFor="">Name</label>
                <input type="text" placeholder='enter name'
                value={form.name} onChange={handleChange} />

            </div>

            <div>
                <label htmlFor="">Email</label>
                <input type="email" placeholder='enter email' 
                value={form.email} onChange={handleChange} 
                   
                />
                
            </div>

            <div>
                <label htmlFor="">Password</label>
                <input type="password" placeholder='enter pass'  
                value={form.password} onChange={handleChange} 
                />
                
            </div>

            <div>
                <label htmlFor="">Age</label>
                <input type="number" placeholder='enter age' 
                onChange={handleChange}  />
                
            </div>
        </div>
    </div>
  )
}

export default Form