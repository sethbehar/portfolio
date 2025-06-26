import { loadStripe } from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';
import { useCallback } from 'react';
import { useAuth } from '@clerk/clerk-react';
import BackButton from '../components/BackButton'

const stripePromise = loadStripe(
  import.meta.env.VITE_STRIPE_PROD_PUBLISHABLE_KEY
);

  // const stripe = await stripePromise;
  // const response = await fetch('/create-checkout-session', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ priceId: 'price_ABC', customerEmail: user.email })
  // });
  // const { sessionId } = await response.json();
  // const { error } = await stripe.redirectToCheckout({ sessionId });
  // if (error) console.error('Stripe checkout error:', error);

export default function Payment() {
  const { getToken } = useAuth();

  const fetchClientSecret = useCallback(async () => {
    // 1) get a Clerk JWT for your backend
    const token = await getToken();
    // 2) call your endpoint with the header
    const res = await fetch(
      `http://localhost:8000/create-checkout-session`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!res.ok) throw new Error('Failed to fetch client secret');
    const { clientSecret } = await res.json();
    return clientSecret;
  }, [getToken]);

  const options = { fetchClientSecret };

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
        <EmbeddedCheckout className='mt-10'/>
        <BackButton />
      </EmbeddedCheckoutProvider>
    </div>
  );
}
