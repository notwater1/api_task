import mongoose from "mongoose";

const TaskSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    isDone: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const TaskModel = mongoose.model("tasks", TaskSchema);
export default TaskModel;
