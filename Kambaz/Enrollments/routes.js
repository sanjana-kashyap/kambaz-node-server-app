import * as dao from "./dao.js";

export default function EnrollmentRoutes(app) {
  app.put("/api/enrollments/:courseId", (req, res) => {
    const currentUser = req.session["currentUser"];
    const { courseId } = req.params;
    const status = dao.enrollUserInCourse(currentUser._id, courseId);
    res.send(status);
  });

  app.delete("/api/enrollments/:courseId", (req, res) => {
    const currentUser = req.session["currentUser"];
    const { courseId } = req.params;
    const status = dao.unenrollUserInCourse(currentUser._id, courseId);
    res.send(status);
  });
}