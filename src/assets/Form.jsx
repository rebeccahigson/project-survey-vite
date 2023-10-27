import { useState } from "react";
import { Name } from "./Name";
import { Age } from "./Age";
import { Band } from "./Band";
import { ConfirmationPage } from "./ConfirmationPage";

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


      const [formSubmitted, setFormSubmitted] = useState(false);
      const submitForm = () => {
        setFormSubmitted(true);
      };
      

    return (
        <div className="formWrapper">
            {formSubmitted ? (
                <ConfirmationPage formData={formData}/>
            ) : (
            <>
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
                <button className="submitButton" onClick={submitForm}>Submit</button>
                )}
            </div>
            </>
            )}
        </div>
    );
};
