import { FormEvent } from "react";
import { deleteUser } from "../../api";
import { useNavigate, useParams } from "react-router-dom";

export default function UserDeletePage() {
  const navigate = useNavigate();
  const params = useParams();
  const userId = params.id;

  const handleUserDelete = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (userId) {
      await deleteUser(userId);
    }

    navigeteToUsersList();
  };

  const navigeteToUsersList = () => {
    navigate("/users");
  };

  return (
    <form onSubmit={handleUserDelete}>
      <h1>Delete User {userId}?</h1>
      <button type="submit">Delete</button>
      <button type="button" onClick={navigeteToUsersList}>
        Cancel
      </button>
    </form>
  );
}
