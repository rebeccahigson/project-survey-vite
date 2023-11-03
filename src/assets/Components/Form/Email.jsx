export const Email = ({value, updateFormData}) => {

    const userEmail = (e) => updateFormData("email", e.target.value);

    return (
        <div>
            <label>Email address:</label>
            <input 
            type="text" 
            placeholder="Please enter your email address" 
            value={value} onChange={userEmail} />
        </div>
  );
};