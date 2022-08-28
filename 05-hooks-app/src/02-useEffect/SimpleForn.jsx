import { useEffect, useState } from "react";

const SimpleForn = () => {
  const [formData, setFormData] = useState({
    username: "juan",
    email: "user@gmail.ocm",
  });

  const { username, email } = formData;
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    first
  
    return () => {
      second
    }
  }, [third])
  

  return (
    <div>
      <h1>Form Single</h1>
      <hr />
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
    </div>
  );
};

export default SimpleForn;
