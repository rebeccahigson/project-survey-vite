export const ConfirmationPage = ({ formData }) => {
    
  return (
    <div className="confirmationPage">
        <h2 className="confirmationPage-summary">Summary:</h2>
        <p><b>Name:</b> {formData.name}</p>
        <p><b>Email address:</b> {formData.email}</p>
        <p><b>Age:</b> {formData.age}</p>
        <p><b>Band:</b> {formData.favBand}</p>
    </div>
  );
};