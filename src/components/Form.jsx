import React,{useEffect, useState,useRef} from 'react'


const Form = () => {
     const [form,setForm]=useState({
         userName:"",
         email:"",
         password:"",
         age: 0,
         IsIndian:false,
        //  gender:"",
        //  resume:"",
        //  city:""
         
     })
     
     const ref = useRef()
     

     const handleChange = (e=>{
         let {name,type,value,checked,file}=e.target
        //  console.log(typeof(e.target))
        //  console.log(e.target)
        // console.log(name,type,value,checked)

        if(type=="checkbox"){
            console.log(checked)
            setForm({
                ...form,
                [name]:checked
            })
        }else if(type=='file'){
            console.log(file)
            setForm({
                ...form,
                [name]:value
            })
        }else{
              
            setForm({
                ...form,
                [name]:value
            })
        }
        

       
     })

     const handleSubmit= (e)=>{
        e.preventDefault()

        if(!form.userName){ ref.current.focus()

        }
        console.log(form)
    }

    //  useEffect(()=>{
    //      console.log(form)
    //  },[form])
        
  return (
    <div>Form
        <form onSubmit={handleSubmit}>
        <div>
            <div>
                <label htmlFor="">Name</label>
                <input ref={ref} type="text" placeholder='enter name' name='userName' value={form.name}
                 onChange={handleChange} />

            </div>

            <div>
                <label htmlFor="">Email</label>
                <input type="email" placeholder='enter email' name="email" value={form.email}
                 onChange={handleChange} 
                   
                />
                
            </div>

            <div>
                <label htmlFor="">Password</label>
                <input type="password" name="password" placeholder='enter pass'  
                value={form.password} onChange={handleChange} 
                />
                
            </div>

            <div>
                <label htmlFor="">Age</label>
                <input type="number" placeholder='enter age' name="age" form={form.age}
                onChange={handleChange}  />
                
            </div>

            <div>
                <input type="checkbox" name="IsIndian" form={form.IsIndian}
                onChange={handleChange}  />
                <label htmlFor="">Is Indian</label>
                
            </div>

            <div>
                <input type="radio" name="gender" value="Male"
                onChange={handleChange}  />
                <label htmlFor="">Male</label>
                
            </div>
            
            <div>
                <input type="radio" name="gender" value="Female"
                onChange={handleChange}  />
                <label htmlFor="">Female</label>
                
            </div>

            <div>
                <label htmlFor="">Resume</label>
                <input type="file" name="resume" 
                onChange={handleChange}  />
                
            </div>

            <div>
                <label htmlFor="">City</label>
                <select name="city" value={form.city} onChange={handleChange}>
                    <option value="kolkata">Kolkata</option>
                    <option value="delhi">Delhi</option>
                    <option value="bangalore">Bangalore</option>
                    <option value="chennai">Chennai</option>
                </select>
                
            </div>
             
             <button type='submit'>Submit</button>
        </div>
        </form>
    </div>
  )
}

export default Form