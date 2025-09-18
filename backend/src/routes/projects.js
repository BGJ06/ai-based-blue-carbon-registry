import express from 'express';
import { authenticate } from '../middleware/auth.js';
import { getDatabaseStatus } from '../config/database.js';
import { getAllProjects, getProjectsByDeveloper } from '../utils/mockData.js';

const router = express.Router();

// Get all projects (public)
router.get('/', async (req, res) => {
  try {
    let projects;
    
    if (getDatabaseStatus()) {
      // Use MongoDB (when available)
      const Project = (await import('../models/Project.js')).default;
      projects = await Project.find().populate('developer', 'name organization');
    } else {
      // Use mock data
      projects = getAllProjects();
    }

    res.json({
      success: true,
      data: {
        projects,
        total: projects.length
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching projects'
    });
  }
});

// Get user's projects (protected)
router.get('/my-projects', authenticate, async (req, res) => {
  try {
    let projects;
    
    if (getDatabaseStatus()) {
      // Use MongoDB
      const Project = (await import('../models/Project.js')).default;
      projects = await Project.find({ developer: req.user._id });
    } else {
      // Use mock data
      projects = getProjectsByDeveloper(req.user._id);
    }

    res.json({
      success: true,
      data: {
        projects
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching user projects'
    });
  }
});

export default router;
