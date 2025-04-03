import assignments from "../Database/assignments.js";
import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

export function findAllAssignments() {
  return Database.assignments;
}

export function findAssignmentsByCourse(courseId) {
  const { assignments } = Database;
  const assmts = assignments.filter((a) => a.course === courseId);
  return assmts;
}

export function createAssignment(assignment) {
  const newAssignment = { ...assignment, _id: uuidv4() };
  Database.assignments = [...Database.assignments, newAssignment];
  return newAssignment;
}

export function deleteAssignment(assignmentId) {
  const { assignments } = Database.assignments;
  Database.assignments = assignments.filter((a) => a._id !== assignmentId);
}

export function updateAssignment(assignmentId, updates) {
  const { assignments } = Database;
  const assignment = assignments.find((a) => a._id === assignmentId);
  Object.assign(assignment, updates);
  return assignment;
}