import React from "react";

const Form = (props) => {
    return(
        <div>
            <form onSubmit={props.handleSubmit}>
                <input type="text" name="fName" value={props.fName} placeholder="First Name" onChange={props.handleChange}/>
                <input name="lName" value={props.lName} placeholder="Last Name" onChange={props.handleChange}/>
                <input name="email" value={props.email} placeholder="Email" onChange={props.handleChange}/>
                <input name="birthPlace" value={props.birthPlace} placeholder="Place of Birth" onChange={props.handleChange}/>
                <input name="phone" value={props.phone} placeholder="Phone" onChange={props.handleChange}/>
                <input name="favFood" value={props.favFood} placeholder="Favorite Food" onChange={props.handleChange}/>

                 {/* name and value match the part of state they are meant to update */}
                 {/* need an onChange attribute for the input as well */}
                <textarea name="about" value={props.about} placeholder="Tell us about yourself" onChange={props.handleChange}/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form;