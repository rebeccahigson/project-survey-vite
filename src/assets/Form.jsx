import { useState } from "react";
import { Name } from "./Name";
import { Age } from "./Age";
import { Band } from "./Band";

export const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        favBand: "",
    });



    const [currentStep, setCurrentStep] = useState(1);

    const updateFormData = (field, value) => {
        setFormData((values) => ({...values, [field]: value}));
    };



    const nextStep = () => {
        if (currentStep < 3) setCurrentStep(currentStep + 1);
      };
    
      const prevStep = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
      };


      const submitForm = () => {
        console.log(formData);
        const formattedData = `
        Name: ${formData.name}
        Age: ${formData.age}
        Favorite Band: ${formData.favBand}
      `;
    
        alert(formattedData);
      };


    return (
        <div className="formWrapper">
            {/*--- STEP 1 ------*/}
            {currentStep === 1 && (
                <Name value={formData.name} updateFormData={updateFormData} />
            )}

            {/*-- STEP 2 ------*/}
            {currentStep === 2 && (
                <Age value={formData.age} updateFormData={updateFormData} />
            )}

            {/*-- STEP 3 ------*/}
            {currentStep === 3 && (
                <Band value={formData.band} updateFormData={updateFormData} />
            )}

            <div className="multi-step-form">
                {currentStep > 1 && <button onClick={prevStep}> « Back</button>}
                {currentStep < 3 ? (
                <button onClick={nextStep}>Next »</button>
                ) : (
                <button class="submitButton" onClick={submitForm}>Submit</button>
                )}
            </div>
        </div>
    );
};
