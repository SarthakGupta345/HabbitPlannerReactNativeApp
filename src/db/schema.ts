import { db } from "./database";
db.execSync(`
CREATE TABLE IF NOT EXISTS tasks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  status TEXT DEFAULT 'PENDING',
  category_id INTEGER NOT NULL,
  due_date TEXT,
  priority INTEGER NOT NULL,
  isRepeating INTEGER DEFAULT 0,
  description TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (category_id) REFERENCES Category(id)
);
`);

db.execSync(`
  CREATE TABLE IF NOT EXISTS Attachments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    task_id INTEGER NOT NULL,
    uri TEXT NOT NULL,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (task_id) REFERENCES tasks(id) ON DELETE CASCADE
  )
  `)

db.execSync(`
CREATE TABLE IF NOT EXISTS reminders (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  task_id INTEGER NOT NULL,

  -- alarm | notification | none
  reminder_type TEXT CHECK(reminder_type IN ('ALARM','NOTIFICATION','NONE')) NOT NULL,

  -- exact date (2025-01-15)
  reminder_date TEXT,

  -- time (09:30)
  reminder_time TEXT,

  -- day(s): MON,TUE,WED (for weekly reminders)
  reminder_days TEXT,

  is_active INTEGER DEFAULT 1,

  created_at TEXT DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (task_id) REFERENCES tasks(id) ON DELETE CASCADE
);
`);

db.execSync(`
CREATE TABLE IF NOT EXISTS RepetitiveSchedule (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  task_id INTEGER NOT NULL,

  -- NONE | DAILY | WEEKLY | MONTHLY | YEARLY | PERIODIC
  repeat_type TEXT NOT NULL,

  -- HH:mm (common for all)
  reminder_time TEXT NOT NULL,

  -- used for ONE_TIME
  reminder_date TEXT,

  -- used for WEEKLY → MON,TUE,WED
  week_days TEXT,

  -- used for MONTHLY → 1–31
  day_of_month INTEGER,

  -- used for YEARLY → MM-DD
  day_of_year TEXT,

  -- used for PERIODIC → every N days
  interval_days INTEGER,

  start_date TEXT NOT NULL,
  end_date TEXT,

  is_active INTEGER DEFAULT 1,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (task_id) REFERENCES tasks(id) ON DELETE CASCADE
);
`);


db.execSync(`
CREATE TABLE IF NOT EXISTS Subtasks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  task_id INTEGER NOT NULL,
  title TEXT NOT NULL,
  status TEXT DEFAULT 'PENDING',
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (task_id) REFERENCES tasks(id) ON DELETE CASCADE
);
`);


db.execSync(`
CREATE TABLE IF NOT EXISTS Category (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  color TEXT NOT NULL,
  icon TEXT
);
`);


db.execSync(`
CREATE TABLE IF NOT EXISTS Habits (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT,
  icon TEXT NOT NULL,

  priority INTEGER NOT NULL,
  categoryId INTEGER NOT NULL,

  -- yes_no | numeric | timer | subtasks
  evaluation_type TEXT NOT NULL 
    CHECK (evaluation_type IN ('YES_NO', 'NUMERIC', 'TIMER', 'SUBTASKS')),

  start_date TEXT NOT NULL,
  end_date TEXT,

  status TEXT DEFAULT 'ACTIVE',
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (categoryId) REFERENCES Category(id)
);
`);


