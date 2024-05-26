import TaskModel from "../database/models/TaskSchema.js";

export const create = async (task) => {
  const response = await TaskModel.create(task);
  return response;
};

export const findTasks = async () => {
  const response = await TaskModel.find({});
  return response;
};

export const update = async (id, data) => {
  const response = await TaskModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return response;
};

export const deleteT = async (id) => {
  const response = await TaskModel.findByIdAndDelete({ _id: id });
  return response;
};
