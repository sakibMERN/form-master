import "./App.css";
import Grandpa from "./components/Grandpa/Grandpa";
// import HookForm from './components/HookForm/HookForm'
// import ObjectHookFrom from './components/ObjectHookFrom.jsx/ObjectHookFrom'
// import RefForm from './components/RefForm/RefForm'
import ReuseableForm from "./components/ReuseableForm/ReuseableForm";
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StatefulForm from './components/StatefulForm/StatefulForm'

function App() {
  const handleSingUpSubmit = (data) => {
    console.log("sign up data: ", data);
  };

  const handleUpdateProfile = data => {
    console.log("profile update data: ", data);
  }
  return (
    <>
    <h1>Form Master</h1>
    <Grandpa></Grandpa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ObjectHookFrom></ObjectHookFrom> */}
      {/* <ReuseableForm
        formTitle={"Sign Up"}
        submitBtnText={"Submit"}
        handleSubmit={handleSingUpSubmit}
      >
        
        <div>
          <h1>Sing Up</h1>
          <p>Please, sign up your account</p>
        </div>
      </ReuseableForm>
      <br />
      <ReuseableForm
        formTitle={"Profile Update"}
        submitBtnText="Update"
        handleSubmit={handleUpdateProfile}
      >
        
        <div>
          <h1>Update Profile</h1>
          <p>Please, update your profile.</p>
        </div>

      </ReuseableForm> */}
    </>
  );
}

export default App;
