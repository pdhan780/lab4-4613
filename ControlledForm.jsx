import { useState } from 'react';

const ControlledForm = (props) => {
	// initialize our state
 const [company, setCompany] = useState( 
	{ 
	name: "FunWebDev Corp", 
	sector: "Textbooks", 
	comments: "They know things!" 
	} 
	); 
   
    /* add additional functions here */
   const handleSubmit = (e) => { 
	e.preventDefault(); 
	let values = `Current values are 
		${company.name} 
		${company.sector} 
		${company.comments}`; 
	alert(values); 
   }; 

   const handleChange = (e) => { 
	const updatedCompany = { ...company }; 
	// this uses bracket notation to change property
	updatedCompany[e.target.name] = e.target.value; 
	setCompany(updatedCompany); 
   } 
   /*
   const handleCompanyChange = (e) => { 
	const updatedCompany = { ... company }; 
	updatedCompany.name = e.target.value; 
	setCompany(updatedCompany); 
   }; 
   const handleSectorChange = (e) => { 
	const updatedCompany = { ... company }; 
	updatedCompany.sector = e.target.value; 
	setCompany(updatedCompany); 
   }; 
   const handleCommentsChange = (e) => { 
	const updatedCompany = { ... company }; 
	updatedCompany.comments = e.target.value; 
	setCompany(updatedCompany); 
   }; 
*/

    return (
		<form className="container" onSubmit={handleSubmit}>
			<fieldset id="box" className="has-background-white-ter">
				<legend className="is-size-4">Controlled Components (React handles state)</legend>
				<label className="label">Company Name</label>
				<input className="input" type="text" name="name" value={company.name} onChange={ handleChange }/>
				<label className="label">Sector</label>
				<div className="select">
					<select value={company.sector} name="sector" onChange={ handleChange } >
						<option>Select a sector</option>
						<option>Advertising</option>
						<option>Information Technology</option>
						<option>Telecommunications</option>
						<option>Textbooks</option>
					</select>       
				</div>
				<label className="label">Comments</label>
				<textarea className="textarea" name="comments" value={company.comments} onChange={ handleChange } ></textarea>
				<button className="button is-link">Submit</button>
			</fieldset>                                   
		</form>
	);

}

export default ControlledForm;
