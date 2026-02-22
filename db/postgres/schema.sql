CREATE TABLE users (
  id UUID PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  role TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE theories (
  id UUID PRIMARY KEY,
  name TEXT NOT NULL,
  domain TEXT NOT NULL,
  origin TEXT,
  core_formula TEXT,
  logical_base TEXT,
  mathematical_form TEXT,
  applications TEXT,
  created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE universal_laws (
  id UUID PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT
);

CREATE TABLE comparisons (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  theory_id UUID REFERENCES theories(id),
  comparison_json JSONB NOT NULL,
  created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE simulations (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  input_json JSONB NOT NULL,
  output_json JSONB NOT NULL,
  created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE research_papers (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  citations JSONB,
  created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE scores (
  id UUID PRIMARY KEY,
  theory_id UUID REFERENCES theories(id),
  logical_consistency NUMERIC,
  scientific_alignment NUMERIC,
  mathematical_structure NUMERIC,
  predictive_power NUMERIC,
  practical_applicability NUMERIC,
  created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE user_decisions (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  decision_context TEXT,
  action_selected TEXT,
  expected_outcome TEXT,
  created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE time_tracking_logs (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  event_name TEXT,
  duration_minutes INT,
  created_at TIMESTAMP DEFAULT now()
);
