import axios from "axios";
import User from "../models/User";

export default class UserDataService {
  constructor(public baseUrl: string) {}

  fetchAllUsers = async (): Promise<User[]> => {
    try {
      const response = await axios.get(this.baseUrl);

      if (response.status === 200) return response.data;

      console.log(response);
      return [];
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  addNewUser = async (newUser: User): Promise<boolean> => {
    try {
      const response = await axios.post(this.baseUrl, JSON.stringify(newUser), {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
      });

      if (response.status === 201) return true;

      console.log(response);
      return false;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  updateUser = async (updatedUser: User): Promise<boolean> => {
    try {
      const response = await axios.put(
        `${this.baseUrl}/${updatedUser.id}`,
        JSON.stringify(updatedUser),
        {
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) return true;

      console.log(response);
      return false;
    } catch (err) {
      console.log(err);
      return false;
    }
  };
}
