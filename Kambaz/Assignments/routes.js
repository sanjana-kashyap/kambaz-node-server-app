import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {
  app.get("/api/assignments", (req, res) => {
    const assignments = dao.findAllAssignments();
    res.send(assignments);
  });

  app.get("/api/assignments/:courseId/course", (req, res) => {
    const { courseId } = req.params;
    const assignments = dao.findAssignmentsByCourse(courseId);
    res.send(assignments);
  });

  app.delete("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    const status = dao.deleteAssignment(assignmentId);
    res.send(status);
  });

  app.put("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    const assignmentUpdates = req.body;
    const status = dao.updateAssignment(assignmentId, assignmentUpdates);
    res.send(status);
  });

  app.post("/api/assignments/:assignmentId/modules", (req, res) => {
    const { assignmentId } = req.params;
    const module = {
      ...req.body,
      assignment: assignmentId,
    };
    const newModule = modulesDao.createModule(module);
    res.send(newModule);
  });
}