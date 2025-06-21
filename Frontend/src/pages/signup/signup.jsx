import "./signup.css";
import Navber from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { set, useForm } from "react-hook-form"
export default function Signup(){
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors,isSubmitting },
      } = useForm();

    const onSubmit = async(data) => {
        if(data.Password === data.Confirm_Password){
            let r= await fetch("http://localhost:8080/signup" ,{method:"Post",  headers: {
                "Content-Type": "application/json", 
              }, body:JSON.stringify(data)});
            let respon= await r.text();
            console.log(data,respon);
        }else{
            setError("passE",{message:"your Password did not match!!"});
        }
    }
 




    return(<>
    <Navber/>
    <div className="signup-container">
      <form  onSubmit={handleSubmit(onSubmit)} className="signup-form">
      <h2 style={{textAlign:"center"}}>Signup</h2>
      {isSubmitting&& <div style={{textAlign:"center",color:"green"}}>Loading...</div>}
      {errors.passE && <div style={{textAlign:"center",color:"red"}}>{errors.passE.message}</div>}
      {errors.username && <span>This field is required</span>}
      {errors.password && <span>This field is required</span>}
      {errors.Email && <span>This field is required</span>}
        <input
           type="text"
          {...register("username",{required:true})}
          placeholder="Username"
          required
        />

        <input
        type="Email"
          placeholder="Email"
          required
          {...register("Email", { required: true })} 
        />

        <input
        {...register("Password", { required: true })}
          placeholder="Password"
          required
        />

        <input
        {...register("Confirm_Password", { required: true })}
          placeholder="Confirm Password"
          required
        />

        <button type="submit" disabled={isSubmitting}>Sign Up</button>

      </form>
    </div>
<Footer/>
    </>);
}