export const Name = ({value, updateFormData}) => {

    const userName = (e) => updateFormData("name", e.target.value);

    return (
        <div>
            <label>Name:</label>
            <input 
            type="text" 
            placeholder="Please enter your name" 
            value={value} onChange={userName} />
        </div>
  );
};