import React, { useEffect, useRef, useState } from "react";

const Contact = ({ user }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({ message: "" });

  // track timestamp of last successful submit
  const lastSubmitRef = useRef(0);

  useEffect(() => {
    // clear errors whenever user signs in/out
    setErrorMessage("");
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMessage && formData.message.length >= 20) {
      setErrorMessage("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user) {
      return setErrorMessage("Please sign in");
    }

    const now = Date.now();
    if (now - lastSubmitRef.current < 10_000) {
      return setErrorMessage("Please wait");
    }
    if (formData.message.trim().length < 20) {
      return setErrorMessage("Write something meaningful");
    }

    console.log("Sending message:", formData.message);
    // api call here

    lastSubmitRef.current = now;
    setFormData({ message: "" });
    setErrorMessage("");
  };

  return (
    <div
      id="contact"
      className="select-none min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-6 py-12 text-xl"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <h1 className="mb-4">Contact Me</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-md">
        <textarea
          className="resize-none border-2 p-2"
          rows={5}
          cols={30}
          placeholder="Dear Seth..."
          name="message"
          value={formData.message}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="flex items-center gap-2 border-2 border-black rounded-2xl px-4 py-2 self-center hover:shadow-2xl transition duration-300"
        >
          {user ? (
            "Submit"
          ) : (
            <>
              <span>Submit</span>
              <img src="/lock.svg" alt="locked" width={25} height={25} />
            </>
          )}
        </button>

        {errorMessage && (
          <div className="flex items-center justify-center gap-2 text-red-500">
            <img src="/info.svg" alt="error" width={25} height={25} />
            <span>{errorMessage}</span>
          </div>
        )}
      </form>
    </div>
  );
};

export default Contact;
