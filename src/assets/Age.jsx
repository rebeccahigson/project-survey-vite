export const Age = ({value, updateFormData}) => {
const ageInput = (e) => updateFormData("age", e.target.value);

  return (
    <div>
      <label>Age:</label>
      <span className="radioButtonAgeRange">
        <input 
        type="radio" 
        id="ageRange1" 
        name="fav_language" 
        value="16-19"
        onChange={(e) => updateFormData("age", e.target.value)}
        checked={value === "16-19"}
         />
        <label for="ageRange1">16-19</label>
      </span>

      <span className="radioButtonAgeRange">
        <input 
        type="radio" 
        id="ageRange2" 
        name="fav_language" 
        value="20-39"
        onChange={(e) => updateFormData("age", e.target.value)}
        checked={value === "20-39"}
         />
        
        <label for="ageRange2">20-39</label>
      </span>

      <span className="radioButtonAgeRange">
        <input 
        type="radio" 
        id="ageRange3" 
        name="fav_language" 
        value="40-59" 
        onChange={(e) => updateFormData("age", e.target.value)}
        checked={value === "40-59"}
        />

        <label for="ageRange3">40-59</label>
      </span>

      <span className="radioButtonAgeRange">
        <input 
        type="radio" 
        id="ageRange4" 
        name="fav_language" 
        value="60 +" 
        onChange={(e) => updateFormData("age", e.target.value)}
        checked={value === "60 +"}
        />

        <label for="ageRange4">60 +</label>
      </span>
    </div>
  )
}





/*<div>
        <label>Age:</label>
        <input type="number" value={value} onChange={ageInput} placeholder="Please enter your age" />
    </div>*/

    /*<div>
      <label>Age:</label>
        <label class="radio-container">16-19
            <input type="radio" checked="checked" name="radio" />
            <span class="checkmark"></span>
        </label>

        <label class="radio-container">20-39
          <input type="radio" name="radio" />
          <span class="checkmark"></span>
        </label>

        <label class="radio-container">40-59
          <input type="radio" name="radio" />
          <span class="checkmark"></span>
        </label>

        <label class="radio-container">60+
          <input type="radio" name="radio" />
          <span class="checkmark"></span>
        </label>
    </div>*/