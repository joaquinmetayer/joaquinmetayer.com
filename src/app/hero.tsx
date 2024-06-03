'use client'
import { useState } from 'react';

export default function Hero() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [showMessage, setShowMessage] = useState(true);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  const handleSubscribe = async () => {
    if (!validateEmail(email)) {
      setEmailError('Ingrese un email válido.');
      return;
    }
    setEmailError('');
    setIsSubmitting(true);
    const endpoint = 'https://api.airtable.com/v0/appkDZ1qKdT88DP08/tblZZ9fBFbqqV7hHL';
    const apiKey = 'patK4YglNP5g4NbnY.ec4a9b069b3de04e27cbcaa4a237eb292f396bf3b269fafdcc2444be10dc7f66';

    const body = {
      records: [
        {
          fields: {
            Email: email
          }
        }
      ]
    };
    setEmail('');

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify(body)
      });
      
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const result = await response.json();
      setMessage('Subscripción exitosa!');
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 2500);
    } catch (error) {
      setMessage('Error en la subscripción.');
      setShowMessage(true); 
      setTimeout(() => setShowMessage(false), 2500);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyDown = (event: { key: string; }) => {
    if (event.key === 'Enter') {
      handleSubscribe();
    }
  };

  return (
    <div>
      <img src="/favicon.ico" alt="duck" className="duck" />
      <h1>
        <a href="/" className='black'>joaquinmetayer</a>
      </h1>
      <p className='subtitle'>Diario formato texto.</p>
      <p>
        <a href="https://www.linkedin.com/in/joaquinmetayer/" className='black' target='_blank'>LinkedIn</a>
        {' '}
        <a href="https://github.com/joaquinmetayer" className='black' target='_blank'>GitHub</a>
        {' '}
        <a href="mailto:joaquinmetayer@gmail.com" className='black' target='_blank'>Email</a>
      </p>
      <input
        type="email"
        required
        placeholder='tuemail@email.com'
        value={email}
        onChange={(e: { target: { value: any; }; }) => setEmail(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSubscribe} disabled={isSubmitting}>
        {isSubmitting ? 'Subscribiendo...' : 'Subscribirme'}
      </button>
      {(emailError && showMessage) && <p>{emailError}</p>}
      {(message && showMessage) && <p>{message}</p>}
      <hr />
    </div>
  );
}