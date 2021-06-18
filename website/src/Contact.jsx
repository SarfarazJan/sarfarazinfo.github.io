import React, {useState} from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname:'',
    phone:'',
    email:'',
    msg:'',
  });
  const InputEvent =(event) => {
    const { name, value}= event.target;
    setData((preVal)=>{
      return {
          ...preVal,
          [name]:value,
      }
    })
  }
  const formSubmit = (e) =>{
    e.preventDefault();
    alert(` My name is ${data.fullname} My mobile is ${data.phone} and my email is ${data.email} and my message is ${data.msg} `);
  }
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form action="" onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                <input type="text" class="form-control" name="fullname" value={data.fullname} onChange={InputEvent} id="exampleFormControlInput1" placeholder="Enter your name" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" name="" value={data.email} onChange={InputEvent} id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                <input type="number" class="form-control" name="phone" value={data.phone} onChange={InputEvent} id="exampleFormControlInput1" placeholder="Eenter Mobile Number" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                <textarea class="form-control" name="msg" value={data.msg} onChange={InputEvent} id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-outline-primary" type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;