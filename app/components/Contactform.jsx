import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles  from '../styles/Contact.module.css'
import { BsSend } from 'react-icons/bs';

const Contactform = ({isDarkMode}) => {
  const { register, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  function sendEmail(data) {
    const apiEndpoint = '/api/email';
    setIsLoading(true);
  
    fetch(apiEndpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        alert(response.message);
      })
      .catch((err) => {
        alert(err);
      }).finally(() => {
        setIsLoading(false);
      });
  }


  function onSubmit(data) {
    sendEmail(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
     
      <div className='mb-5'>
        <label
          htmlFor='email'
          className='mb-3 block text-base font-medium'
        >
          Email Address
        </label>
        <input
          id='email'
          autoComplete={"true"}
          required
          type='email'
          placeholder='example@domain.com'
          className={isDarkMode? styles.formInputDark : styles.formInput}
          {...register('email', { required: true })}
        />
      </div>
      <div className='mb-5'>
        <label
          htmlFor='message'
          className='mb-3 block text-base font-medium'
        >Message
          Message
        </label>
        <textarea
          id='message'
          rows={10}
          placeholder='Type your message'
          className={isDarkMode? styles.formInputDark : styles.formInput}
          required
          {...register('message', { required: true })}
        ></textarea>
      </div>
      <div className='flex justify-end'>
        <button className='hover:scale-105 bg-[#3077ae] py-3 px-8 text-xl transition-transform font-semibold text-white outline-none'>
          Send Message
        </button>
      </div>
    </form>
  );
};

export default Contactform;
