import { db } from "./database";

/* ------------------------------ CREATE TASK ------------------------------ */
export const addTask = (title: string, dueDate?: string) => {
    db.runSync(
        `INSERT INTO tasks (title, due_date) VALUES (?, ?)`,
        [title, dueDate ?? null]
    );
};

/* ------------------------------- GET TASKS ------------------------------- */
export const getTasks = () => {
    return db.getAllSync(`
    SELECT * FROM tasks
    ORDER BY created_at DESC
  `);
};

/* ----------------------------- UPDATE STATUS ----------------------------- */
export const updateTaskStatus = (id: number, status: string) => {
    db.runSync(
        `UPDATE tasks SET status = ? WHERE id = ?`,
        [status, id]
    );
};

/* ------------------------------ DELETE TASK ------------------------------ */
export const deleteTask = (id: number) => {
    db.runSync(`DELETE FROM tasks WHERE id = ?`, [id]);
};
