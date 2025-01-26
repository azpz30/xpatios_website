import React, { useState } from 'react';
import { features } from '../constants';
import styles, { layout } from '../style';
import Button from './Button';
import emailjs from 'emailjs-com';

const Business = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
      to_name: 'Tanvir HN',
      from_name: formData.name,
      from_email: formData.email,
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
      email: '',
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

  const FeatureCard = ({ icon, title, content, index }) => (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimWhite`}>
        <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-black text-[18px] leading-[23.4px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimBlack text-[16px] leading-[24px]">
          {content}
        </p>
      </div>
    </div>
  );

  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Build Your Dreams, <br className='sm:block hidden'/>We'll Handle the Construction.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            With the right design and a skilled team, you can transform an ordinary space into an outdoor oasis, crafting pergolas and patios that bring comfort and elegance to your home, one project at a time.
        </p>
        {/* Display the form only when isFormVisible is true */}
        {isFormVisible && (
          <form
            onSubmit={handleFormSubmit}
            className={`${styles.flexColumn} ${styles.marginTop}`}
            style={{ backgroundColor: '#d5dee5' }}
          >
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
              Fill out the form and hit submit for your free quote now!
            </p>
            <br />
            <div className={`${styles.formGroup} mb-4`}>
              <label className={styles.formLabel}>
                Name:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={styles.formInput}
                  required
                />
              </label>
            </div>
            <div className={`${styles.formGroup} mb-4`}>
              <label className={styles.formLabel}>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={styles.formInput}
                  required
                />
              </label>
            </div>
            <div className={`${styles.formGroup} mb-4`}>
              <label className={styles.formLabel}>
                Phone Number:
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className={styles.formInput}
                  required
                />
              </label>
            </div>
            <div className={`${styles.formGroup} mb-4`}>
              <label className={styles.formLabel}>
                Address:
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className={styles.formInput}
                  required
                />
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
            <button
              type="submit"
              className={`${styles.button} ${styles.formButton} bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-green active:bg-green-600`}
            >
              Send
            </button>
          </form>
        )}
        <Button styles='mt-10' onClick={handleButtonClick}/>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index}/>
        ))}
      </div>
    </section>
  )
}

export default Business;
