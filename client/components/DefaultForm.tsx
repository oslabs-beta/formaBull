import React from "react";
import { useForm } from "react-hook-form";

type Inputs = {
  example: string,
  exampleRequired: string,
};

export default function DefaultForm() {
  const { register, handleSubmit, watch, errors } = useForm<Inputs>();
  const onSubmit = (data : any) => console.log(data);

  console.log(watch("firstName")) // watch input value by passing the name of it
  console.log(watch("lastName"))
  
  return (
    <div className = 'default-form'>
    {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
    <form onSubmit={handleSubmit(onSubmit)}>
    {/* register your input into the hook by invoking the "register" function */}
    <label>Name </label>
      <input name="firstName" defaultValue="test" ref={register} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <label>Last Name</label>
      <input name="lastName" ref={register({ required: true })} />
      {/* errors will return when field validation fails  */}
      <label>Age</label>
      <input name="age" ref={register({ required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
    </div>
  );
}
