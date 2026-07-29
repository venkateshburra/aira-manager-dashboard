import { Router } from "express";

import {
  getAllTask,
  addTask,
  updateTask,
  deleteTask,
} from "../controller/taskControler.js";

const router = Router();

router.get("/task", getAllTask);

router.post("/task", addTask);

router.put("/task/:id", updateTask);

router.delete("/task/:id", deleteTask);

export default router;