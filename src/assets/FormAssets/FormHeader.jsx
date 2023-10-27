

export const Header = ({formSubmitted}) => {
  return (
    <header>
        {formSubmitted === true && (
            <>
                <h1>Survey completed</h1>
                <p>Thank you for your participation!</p>
            </>
        )}
        {formSubmitted === false && (
            <>
                <h1>Survey</h1>
                <p>Please answer a few questions about yourself.</p>
            </>
        )}
    </header>
  );
};




