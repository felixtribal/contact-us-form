import {  useState } from 'react';
import { FormsProps } from './FormsProps';

export const Forms = () => {
  // useState to keep tract of the forms
  const [formData, setFormData] = useState<FormsProps>({
    firstName: '',
    lastName: '',
    emailAddress: '',
    message: '',
    consent: false,
  });

  // handles the forms error
  const [formDataError, setFormDataError] = useState<Record<string, boolean>>({
    firstName: false,
    lastName: false,
    emailAddress: false,
    message: false,
    consent: false,
  });

  // handle on change on values
  const handleOnChangeForms = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => {
      return { ...prevData, [id]: value };
    });

    setFormDataError((prevError) => {
      return { ...prevError, [id]: false };
    });
  };

  //   handle checkbox
  const [QueryCheck, setQueryCheck] = useState<string>('');

  // handles the query check
  const handleQueryChange = (request: string) => {
    setQueryCheck(request);
  };

  //   handle submission
//   const handleFormSubmit = (e:FormEvent) => {}

  return (
    <>
      <div className="formsContainer">
        <div className="heading font-bold">Contact Us</div>
        <form action="">
          <div className="formsGroupContainer">
            {/* full name container */}
            <div className="namesContainer">
              {/* first name container */}
              <div className="firstNameCon">
                <label htmlFor="firstName">
                  First Name *
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleOnChangeForms}
                  />
                </label>
                {formDataError.firstName && (
                  <span className="errorTxt font-normal">
                    This field is required
                  </span>
                )}
              </div>
              {/* last name container */}
              <div className="lastNameCon">
                <label htmlFor="lastName">
                  Last Name *
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleOnChangeForms}
                  />
                </label>
                {formDataError.lastName && (
                  <span className="errorTxt font-normal">
                    This field is required
                  </span>
                )}
              </div>
            </div>

            {/* email address */}
            <div className="emailAddressCon">
              <label htmlFor="emailAddress">
                Last Name *
                <input
                  type="text"
                  id="emailAddress"
                  value={formData.emailAddress}
                  onChange={handleOnChangeForms}
                />
              </label>
              {formDataError.emailAddress && (
                <span className="errorTxt font-normal">
                  This field is required
                </span>
              )}
            </div>

            {/* query check container */}
            <div className="queryContainer">
              <p className="requestChoice font-normal">Query Type *</p>
              <div className="userChoice">
                {/* general con */}
                <div className="generalContainer">
                  <input
                    type="radio"
                    id="generalEnquiry"
                    name="requestChoice"
                    onChange={() => handleQueryChange('generalEnquiry')}
                  />
                  <label htmlFor="generalEnquiry" className="method font-bold">
                    General Enquiry
                  </label>
                </div>
                {/* support Request */}
                <div className="generalContainer">
                  <input
                    type="radio"
                    id="supportRequest"
                    name="requestChoice"
                    onChange={() => handleQueryChange('supportRequest')}
                  />
                  <label htmlFor="supportRequest" className="method font-bold">
                    Support Request
                  </label>
                </div>
              </div>
              {QueryCheck === '' && (
                <span className="errorTxt">Please select a query type</span>
              )}
            </div>

            {/* text area box */}
            <div className="messageCon">
              <label htmlFor="message">
                Message *
                <textarea
                  name="message"
                  id="message"
                  onChange={handleOnChangeForms}
                ></textarea>
              </label>
              {formDataError.message && (
                <span className="errorTxt font-normal">
                  This field is required
                </span>
              )}
            </div>

            {/* consent tick */}
            <div className="consentText">
              <label htmlFor="consent">
                <input
                  type="radio"
                  id="consent"
                  value="consent"
                  onChange={handleOnChangeForms}
                />
                <p>I consent to being contacted by the team *</p>
              </label>
              {formDataError.consent && (
                <span className="errorTxt font-normal">
                  To submit this form, please consent to being contacted
                </span>
              )}
            </div>

            {/* submit button */}
            <input type="submit" value='Submit' name="submit"/>
          </div>
        </form>
      </div>
    </>
  );
};
