export const Band = ({value, updateFormData}) => {

  const favBand = (e) => updateFormData("favBand", e.target.value);

  return (
    <div>
        <label>What is your favorite band?</label>
        <select 
        value={value} 
        onChange={favBand}>
          
          <option className="placeholder" disabled selected value="">- Please select a band -</option>
          <option value="Coldplay">Coldplay</option>
          <option value="Muse">Muse</option>
          <option value="Oasis">Oasis</option>

        </select>
    </div>
  );
};