// Controllers
import Users from "../model/user";

//get: http://localhost:3000/api/users
export async function getUsers(req, res) {
  try {
    const users = await Users.find({});

    if (!users) return res.status(404).json({ error: "Data not found" });
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ error: "Error while fetching data" });
  }
}

//post: http://localhost:3000/api/users
export async function postUser(req, res) {
  try {
  } catch (error) {
    res.status(404).json({ error });
  }
}