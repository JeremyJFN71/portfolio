import express from "express";
import { allRepos, singleRepo } from "../controller/projectController.js";

const router = express.Router();

router.get('/', allRepos);

router.get('/:slug', singleRepo);

export default router;