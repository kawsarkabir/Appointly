import { useEffect } from 'react';

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact - Appointly';
  }, []);
  return (
    <>
      <h1>Contact</h1>
    </>
  );
}
