import {FC, memo, useCallback, useMemo, useState} from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ACCESS_KEY = 'b9c5aed4-695a-4cda-9097-885365c9615c';

const ContactForm: FC = memo(() => {
  const defaultData = useMemo(
    () => ({
      name: '',
      email: '',
      message: '',
    }),
    [],
  );

  const [data, setData] = useState<FormData>(defaultData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const {name, value} = event.target;
      const fieldData: Partial<FormData> = {[name]: value};

      setData(prev => ({...prev, ...fieldData}));
    },
    [],
  );

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setIsSubmitting(true);
      setStatus('idle');
      setErrorMessage('');

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          body: JSON.stringify({
            access_key: ACCESS_KEY,
            from_name: 'Portfolio Contact Form',
            subject: `New Message from ${data.name} via Portfolio`,
            ...data,
          }),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          method: 'POST',
        });

        const result = await response.json();

        if (response.ok && result.success) {
          setStatus('success');
          setData(defaultData);
        } else {
          setStatus('error');
          setErrorMessage(result.message || 'Something went wrong. Please try again later.');
        }
      } catch (error) {
        setStatus('error');
        setErrorMessage('Failed to send message. Please check your internet connection or email directly.');
      } finally {
        setIsSubmitting(false);
      }
    },
    [data, defaultData],
  );

  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm disabled:opacity-50';

  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage}>
      <input
        className={inputClasses}
        disabled={isSubmitting}
        name="name"
        onChange={onChange}
        placeholder="Name"
        required
        type="text"
        value={data.name}
      />
      <input
        autoComplete="email"
        className={inputClasses}
        disabled={isSubmitting}
        name="email"
        onChange={onChange}
        placeholder="Email"
        required
        type="email"
        value={data.email}
      />
      <textarea
        className={inputClasses}
        disabled={isSubmitting}
        maxLength={500}
        name="message"
        onChange={onChange}
        placeholder="Message"
        required
        rows={6}
        value={data.message}
      />
      <div className="flex flex-col gap-y-2">
        <button
          aria-label="Submit contact form"
          className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800 disabled:cursor-not-allowed disabled:opacity-50"
          disabled={isSubmitting}
          type="submit">
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        {status === 'success' && (
          <p className="text-sm font-medium text-green-400">
            Thank you! Your message has been sent successfully.
          </p>
        )}

        {status === 'error' && (
          <p className="text-sm font-medium text-red-400">
            {errorMessage || 'Failed to send message. Please try again.'}
          </p>
        )}
      </div>
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
