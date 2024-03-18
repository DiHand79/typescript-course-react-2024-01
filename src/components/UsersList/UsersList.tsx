import { IUser } from "../../types";

interface IUsersListProps {
  data: IUser[] | undefined;
  onDelete: (id: number) => void;
  onEdit: (user: IUser) => void;
}

function UsersList(props: IUsersListProps) {
  const { data, onDelete, onEdit } = props;
  return (
    <>
      <h1>Users</h1>
      <ul>
        {data?.map((user) => (
          <li key={user.id}>
            <span>
              {user.firstName} {user.lastName} ({user.age})
            </span>
            <button onClick={() => onEdit(user)}>Edit</button>
            <button onClick={() => onDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default UsersList;
