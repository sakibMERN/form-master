import PropsTypes from "prop-types";

const ReuseableForm = ({
  formTitle,
  handleSubmit,
  submitBtnText = "Submit",
  children
}) => {

  const handleLocalSubmit = e => {
    e.preventDefault();
    
    const data = {
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value,
    }
    handleSubmit(data);
  }

  return (
    <div className="bg-indigo-400 p-5">
      {children}
      <form onSubmit={handleLocalSubmit}>
        <input
          type="text"
          name="name"
          className="p-2 rounded-xl mb-3"
          placeholder="your name"
        />
        <br />
        <input
          type="email"
          name="email"
          className="p-2 rounded-xl mb-3"
          placeholder="your email"
        />
        <br />
        <input
          type="password"
          name="password"
          className="p-2 rounded-xl mb-3"
          placeholder="your password"
        />
        <br />
        <input
          type="submit"
          value={submitBtnText}
          className="text-white font-bold border py-2 px-5 bg-slate-500 rounded-xl"
        />
      </form>
    </div>
  );
};

ReuseableForm.propTypes = {
  formTitle: PropsTypes.string,
  submitBtnText: PropsTypes.string,
  handleSubmit: PropsTypes.func,
  children: PropsTypes.any
};

export default ReuseableForm;
