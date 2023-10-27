export const Email = ({value, updateFormData}) => {

    const userEmail = (e) => updateFormData("email", e.target.value);

    return (
        <div>
            <label>Please enter your email address:</label>
            <input 
            type="text" 
            placeholder="Please enter your email address" 
            value={value} onChange={userEmail} />
        </div>
  );
};