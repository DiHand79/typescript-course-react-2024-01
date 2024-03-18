import { useEffect } from "react";
import UsersList from "../../components/UsersList/UsersList";
import { IUser } from "../../types";
import { Link, useNavigate } from "react-router-dom";
import { FetchUsersAction, UsersSelector } from "../../store/usersSlice";
import { useDispatch, useSelector } from "react-redux";

function UsersPage() {
  const users = useSelector(UsersSelector);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(FetchUsersAction() as any);
  }, []);

  const handleDelete = async (id: number) => {
    navigate(`/users/delete/${id}`);
  };

  const handleEdit = (user: IUser) => {
    navigate(`/users/edit/${user.id}`);
  };

  return (
    <div>
      <UsersList data={users} onDelete={handleDelete} onEdit={handleEdit} />
      <Link to="/users/new">Create User</Link>
    </div>
  );
}

export default UsersPage;
