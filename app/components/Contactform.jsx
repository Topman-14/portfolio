import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles  from '../styles/Contact.module.css'

const Contactform = (isDarkMode) => {
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
          type='email'
          placeholder='example@domain.com'
          className={styles.formInput}
          {...register('email', { required: 'Email is required' })}
        />
      </div>
      <div className='mb-5'>
        <label
          htmlFor='message'
          className='mb-3 block text-base font-medium'
        >
          Message
        </label>
        <textarea
          rows={4}
          placeholder='Type your message'
          className={styles.formInput}
          {...register('message', { required: 'Message is required' })}
        ></textarea>
      </div>
      <div>
        <button className='hover:shadow-form rounded-md bg-purple-500 py-3 px-8 text-base font-semibold text-white outline-none'>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Contactform;
