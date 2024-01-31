import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import styles from '../styles/Contact.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';

const Contactform = ({ isDarkMode }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur', // Validate on blur
    defaultValues: {
      email: '',
      message: '',
    },
    resolver: async (data) => {
      const errors = {};

      if (!data.email) {
        errors.email = {
          type: 'required',
          message: 'Email is required',
        };
      } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
        errors.email = {
          type: 'pattern',
          message: 'Invalid email format',
        };
      }

      if (!data.message) {
        errors.message = {
          type: 'required',
          message: 'Message is required',
        };
      }

      return {
        errors,
        values: data,
      };
    },
  });

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
        toast.success(response.message, {
          position: toast.POSITION.TOP_CENTER,
          className: isDarkMode? styles.toast : styles.toastLight
      });
      control._reset({
        email: '',
        message: '',
      });
      })
      .catch((err) => {
        toast.success(err, {
          position: toast.POSITION.TOP_CENTER
      });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function onSubmit(data) {
    sendEmail(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ToastContainer draggable={false}/>
      <div className='mb-5'>
        <label htmlFor='email' className='mb-3 block text-base font-medium'>
          Your Email Address
        </label>
        <Controller
          name='email'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <input
              {...field}
              id='email'
              autoComplete='true'
              type='email'
              placeholder='example@domain.com'
              className={isDarkMode ? styles.formInputDark : styles.formInput}
            />
          )}
        />
        {errors.email && (
          <p className='text-red-500 text-sm text-right'>{errors.email.message}</p>
        )}
      </div>
      <div className='mb-5'>
        <label htmlFor='message' className='mb-3 block text-base font-medium'>
          Message
        </label>
        <Controller
          name='message'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <textarea
              {...field}
              id='message'
              rows={10}
              placeholder='Type your message'
              className={isDarkMode ? styles.formInputDark : styles.formInput}
            />
          )}
        />
        {errors.message && (
          <p className='text-red-500 text-sm text-right'>{errors.message.message}</p>
        )}
      </div>
      <div className={styles.sendBtnArea}>
        <button
          disabled={isLoading}
          style={{ 
            cursor: isLoading ? 'wait' : 'pointer',
            background: isLoading ? "#444" : "#3077ae",
            borderRadius: "10px"
           }}
          className='flex hover:scale-105 bg-[#3077ae] py-2 px-5 text-md transition-transform font-semibold text-white outline-none gap-1 items-center'
        >
          {isLoading && <img src={"/loader.svg"} alt='' />}
          <p>{isLoading? "Loading.." : "Send Message"}</p>
        </button>
      </div>
    </form>
  );
};

export default Contactform;
