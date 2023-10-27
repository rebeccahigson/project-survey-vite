export const Band = ({value, updateFormData}) => {

  const favBand = (e) => updateFormData("favBand", e.target.value);

  return (
    <div>
        <label>Band:</label>
        <select 
        value={value} 
        onChange={favBand}>
          
          <option disabled selected value="">- Please select a band -</option>
          <option value="coldplay">Coldplay</option>
          <option value="muse">Muse</option>
          <option value="oasis">Oasis</option>

        </select>
    </div>
  )
}
