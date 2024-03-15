import { IUser } from "./types";

export const getRequest = (url: string) => {
  return fetch(url).then((response) => response.json());
};

export const deleteRequest = (url: string) => {
  return fetch(url, {
    method: "DELETE",
  });
};

export const postRequest = (url: string, data: unknown) => {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());
};

export const putRequest = (url: string, data: unknown) => {
  return fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());
};

export const getUsers = () => {
  return getRequest("http://localhost:3001/users");
};

export const getUser = (id: number) => {
  return getRequest(`http://localhost:3001/users/${id}`);
};

export const deleteUser = (id: number | string) => {
  return deleteRequest(`http://localhost:3001/users/${id}`);
};

export const createUser = (user: IUser) => {
  return postRequest("http://localhost:3001/users", user);
};

export const updateUser = (user: IUser) => {
  return putRequest(`http://localhost:3001/users/${user.id}`, user);
};
