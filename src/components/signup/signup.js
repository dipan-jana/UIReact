import React from 'react';

function SignupPage() {
  return (
    <div>
      <form>
        <div>
          <label> Name: </label><br />
          <input placeholder="Full Name" name="name"/><br />
        </div>
        <div>
          <label> Password: </label><br />
          <input placeholder="Password" type = "password" name="password"/><br />
        </div>
      </form>
    </div>
  );
}

export default SignupPage;
