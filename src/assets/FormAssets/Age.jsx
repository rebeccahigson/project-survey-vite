export const Age = ({value, updateFormData}) => {
const ageGroups = [
  "16-19",
  "20-39",
  "40-59",
  "60 +"
]

  const ageInput = (e) => updateFormData("age", e.target.value);
  
    return (
      <div>
        <label>Please select your age range:</label>

      {ageGroups.map((group) => (
        <label key={group}>
          {group}
          <input 
            type="radio"
            value={group}
            onChange={(e) => updateFormData("age", e.target.value)}
            checked={value === group}
          />

        </label>
      ))}
      </div>
    )
  }







