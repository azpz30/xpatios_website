import React, { useState } from 'react';
import styles from "../style";
import Button from "./Button";
import emailjs from 'emailjs-com';

const CTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    address: '',
    description: '',
  });

  const [isFormVisible, setFormVisibility] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs.send('service_fgb2d2k', 'template_w12v8t7', {
      to_name: 'Recipient Name',
      from_name: formData.name,
      phone_number: formData.phoneNumber,
      user_address: formData.address,
      user_description: formData.description,
    }, 'Rl35Y5E3j58NqP-5d')
      .then((response) => {
        console.log('Email sent successfully:', response);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });

    // Optionally, reset the form fields
    setFormData({
      name: '',
      phoneNumber: '',
      address: '',
      description: '',
    });

    // Hide the form after submission
    setFormVisibility(false);
  };

  const handleButtonClick = () => {
    // Toggle the visibility of the form
    setFormVisibility(true);
  };

  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-grey-gradient-2 rounded-[20px] box-shadow`}>
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>Get A Free Quote Now</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Your Dream Project Begins with a Simple Free Quote Request.
        </p>

        {/* Display the form only when isFormVisible is true */}
        {isFormVisible && (
          <form onSubmit={handleFormSubmit} className={`${styles.flexColumn} ${styles.marginTop}`}>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
              Fill out the form and hit submit for your free quote now!
            </p> <br />
            <div className={`${styles.formGroup} mb-4`}>
              <label className={styles.formLabel}>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} className={styles.formInput} required />
              </label>
            </div>
            <div className={`${styles.formGroup} mb-4`}>
              <label className={styles.formLabel}>
                Phone Number:
                <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} className={styles.formInput} required />
              </label>
            </div>
            <div className={`${styles.formGroup} mb-4`}>
              <label className={styles.formLabel}>
                Address:
                <input type="text" name="address" value={formData.address} onChange={handleInputChange} className={styles.formInput} required />
              </label>
            </div>
            <div className={`${styles.formGroup} mb-4`}>
              <label className={styles.formLabel}>
                Description:
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className={`${styles.formInput} w-full`}
                  placeholder='Provide detailed information about the project, including your requirements, preferences, and any specific details you think are important. The more details you provide, the better we can assist you!'
                  required
                />
              </label>
            </div>
            <button type="submit" className={`${styles.button} ${styles.formButton} bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-green active:bg-green-600`}>Send</button>
          </form>
        )}
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button onClick={handleButtonClick} />
      </div>
    </section>
  );
};

export default CTA;