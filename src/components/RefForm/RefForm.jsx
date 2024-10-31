import React, { useEffect, useRef, useState } from "react";

const RefForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState("");
  const [password, setPassword] = useState(null);

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordRef.current.value.length < 6) {
      setError("Your password should be more than six character");
    } else {
      setError("");
      console.log(nameRef.current.value);
      console.log(emailRef.current.value);
      console.log(passwordRef.current.value);
    }
  };
  return (
    <div className="bg-indigo-400 p-5">
      <h2 className="text-4xl font-bold">Ref Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          ref={nameRef}
          type="text"
          className="p-2 rounded-xl mb-3"
          name="name"
          placeholder="your name"
        />
        <br />
        <input
          ref={emailRef}
          type="email"
          defaultValue={"rojoni@sojoni.com"}
          name="email"
          className="p-2 rounded-xl mb-3"
          placeholder="your email"
        />
        <br />
        <input
          ref={passwordRef}
          type="password"
          name="password"
          className="p-2 rounded-xl mb-3"
          placeholder="your password"
        />
        <br />
        <input
          type="submit"
          value="Submit"
          className="text-white font-bold border py-2 px-5 bg-slate-500 rounded-xl"
        />
        {
            error && <p className="text-red-900">
                {error}
            </p>
        }
      </form>
    </div>
  );
};

export default RefForm;
