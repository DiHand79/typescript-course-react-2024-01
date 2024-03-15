import { useEffect, useState } from "react";
import UsersList from "../../components/UsersList/UsersList";
import { IUser } from "../../types";
import { getUsers } from "../../api";
import { Link, useNavigate } from "react-router-dom";

function UsersPage() {
  const [users, setUsers] = useState<IUser[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const data: IUser[] = await getUsers();
    setUsers(data);
  };

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
