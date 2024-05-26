import {
    create,
    findTasks,
    update,
    deleteT
}from "../service/task.js"
import {handleError} from "../utils/error.js";

export const getTasks = async (req, res) => {
  try {
    const response = await findTasks();
    res.status(200).json(response);
  } catch (error) {
    handleError(res, "ERROR_FIND");
  }
};


export const createTask = async (req, res) => {
  try {
    const response = await create(req.body);
    res.status(201).json(response);
  } catch (e) {
    handleError(res, "ERROR_CREATE", e);
  }
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const response = await update(id, data);
    console.log(response);
    res.status(200).json(response);
  } catch (error) {
    handleError(res, "ERROR_UPDATE");
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await deleteT(id);
    res.status(200).json(response);
  } catch (e) {
    handleError(res, "ERROR_DELETE", e);
  }
};
