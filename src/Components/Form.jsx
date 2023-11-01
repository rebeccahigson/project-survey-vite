import { useState } from "react";
import { Name } from "./Name";
import { Age } from "./Age";
import { Band } from "./Band";
import { Email } from "./Email";
import { ConfirmationPage } from "./ConfirmationPage";
import { Header } from "./FormHeader";


export const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: "",
        favBand: "",
    });



    const [currentStep, setCurrentStep] = useState(1);

    const updateFormData = (field, value) => {
        setFormData((values) => ({...values, [field]: value}));
    };



    // Steps for next/prev buttons
    const nextStep = () => {
        if (currentStep < 4) setCurrentStep(currentStep + 1);
      };
      const prevStep = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
      };


      
      // Updating form submission status from initial false to true when button is clicked
      const [formSubmitted, setFormSubmitted] = useState(false);
      const submitForm = () => {
        setFormSubmitted(true);
      };
      
     

    return (
        <div className="formWrapper">
            <Header formSubmitted={formSubmitted} />
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
                <Email value={formData.email} updateFormData={updateFormData}/>
            )}

            {/*-- STEP 3 ------*/}
            {currentStep === 3 && (
                <Age value={formData.age} updateFormData={updateFormData} />
            )}

            {/*-- STEP 4 ------*/}
            {currentStep === 4 && (
                <Band value={formData.band} updateFormData={updateFormData} />
            )}

            <div className="multi-step-form">
                {currentStep > 1 && <button onClick={prevStep}> « Back</button>}
                {currentStep < 4 ? (
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

