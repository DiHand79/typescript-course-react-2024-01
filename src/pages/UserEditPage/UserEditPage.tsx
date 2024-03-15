import React, { useEffect, useState } from "react";
import UserForm from "../../components/UserForm/UserForm";
import { getUser, updateUser } from "../../api";
import { useNavigate, useParams } from "react-router-dom";
import { IUser } from "../../types";

export default function UserEditPage() {
  const [userToEdit, setUserToEdit] = useState<IUser | null>(null);
  const navigate = useNavigate();
  const params = useParams();
  const userId = Number(params.id);

  useEffect(() => {
    fetchUserToEdit(userId);
  }, [userId]);

  const fetchUserToEdit = async (userId: number) => {
    const userToEdit = await getUser(userId);
    setUserToEdit(userToEdit);
  };

  const handleUserUpdate = async (user: IUser) => {
    await updateUser(user);

    navigeteToUsersList();
  };

  const navigeteToUsersList = () => {
    navigate("/users");
  };

  return userToEdit ? (
    <UserForm
      onSubmit={handleUserUpdate}
      data={userToEdit}
      onCancel={navigeteToUsersList}
    />
  ) : (
    <div>Loading...</div>
  );
}
