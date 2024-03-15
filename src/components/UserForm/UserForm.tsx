import { useEffect, useState } from "react";
import { IUser } from "../../types";

import userFormStyles from "./UserForm.module.css";

interface IUserFormProps {
  onSubmit: (user: IUser) => void;
  onCancel?: () => void;
  data?: IUser;
}

const DEFAULT_USER = {
  id: 0,
  firstName: "",
  lastName: "",
  age: 0,
};

export default function UserForm(props: IUserFormProps) {
  const { onSubmit, onCancel, data } = props;
  const [user, setUser] = useState<IUser>(data || DEFAULT_USER);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit(user);

    setUser(DEFAULT_USER);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data]);

  return (
    <form className={userFormStyles.container} onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        placeholder="First name"
        value={user.firstName}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last name"
        value={user.lastName}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={user.age}
        onChange={handleChange}
        required
      />
      <button type="submit">{data ? "Update" : "Create"}</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
}
