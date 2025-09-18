import React from 'react';
import './VerifyEmailPage.css';

const VerifyEmailPage = () => {
  return (
    <div className="verify-container">
      <div className="verify-box">
        <h2>Verify Your Email</h2>
        <p>
          We've sent a <strong>magic link</strong> to your email address.
          <br />
          Please check your inbox and click the link to complete your sign-up.
        </p>
        <p className="note">
          Didn’t receive it? <a href="#">Resend</a>
        </p>
      </div>
    </div>
  );
};

export default VerifyEmailPage;
