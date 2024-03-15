import { IUser } from "../../types";
import UserForm from "../../components/UserForm/UserForm";
import { createUser } from "../../api";
import { useNavigate } from "react-router-dom";

function UserCreatePage() {
  const navigate = useNavigate();

  const handleCreate = async (user: IUser) => {
    await createUser(user);

    navigeteToUsersList();
  };

  const navigeteToUsersList = () => {
    navigate("/users");
  };

  return <UserForm onSubmit={handleCreate} onCancel={navigeteToUsersList} />;
}

export default UserCreatePage;
