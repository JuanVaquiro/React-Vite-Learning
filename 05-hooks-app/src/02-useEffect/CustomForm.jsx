import { useForm } from "../hooks/useForm";

const CustomFormHook = () => {
  const { onInputChange, onResetForm, username, email, password } = useForm({
    username: "",
    email: "",
    password: "",
  });

  //  const { username, email, password } = formData

  return (
    <div>
      <h1>Form Custom hook </h1>
      <input
        type="text" 
        name="username"
        placeholder="Username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        name="email"
        placeholder="example@gmail.com"
        value={email}
        onChange={onInputChange}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={password}
        onChange={onInputChange}
      />
      <button onClick={onResetForm}>reset</button>
    </div>
  );
};

export default CustomFormHook;
