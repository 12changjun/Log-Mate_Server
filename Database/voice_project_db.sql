CREATE TABLE users (
    user_id BIGSERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    full_name VARCHAR(100),
    role VARCHAR(20) NOT NULL DEFAULT 'member',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE meetings (
    meeting_id BIGSERIAL PRIMARY KEY,
    created_by BIGINT NOT NULL,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    meeting_date TIMESTAMP,
    status VARCHAR(20) NOT NULL DEFAULT 'pending',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (created_by) REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE audio_files (
    audio_id BIGSERIAL PRIMARY KEY,
    meeting_id BIGINT NOT NULL,
    original_file_name VARCHAR(255) NOT NULL,
    stored_file_name VARCHAR(255) NOT NULL,
    file_path TEXT NOT NULL,
    file_size BIGINT,
    duration_seconds INTEGER,
    format VARCHAR(20),
    uploaded_by BIGINT NOT NULL,
    uploaded_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (meeting_id) REFERENCES meetings(meeting_id) ON DELETE CASCADE,
    FOREIGN KEY (uploaded_by) REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE speakers (
    speaker_id BIGSERIAL PRIMARY KEY,
    meeting_id BIGINT NOT NULL,
    speaker_label VARCHAR(50) NOT NULL,
    speaker_name VARCHAR(100),
    confidence NUMERIC(5,2),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (meeting_id) REFERENCES meetings(meeting_id) ON DELETE CASCADE
);

CREATE TABLE transcripts (
    transcript_id BIGSERIAL PRIMARY KEY,
    meeting_id BIGINT NOT NULL,
    speaker_id BIGINT,
    segment_index INTEGER NOT NULL,
    start_time NUMERIC(10,2),
    end_time NUMERIC(10,2),
    transcript_text TEXT NOT NULL,
    language_code VARCHAR(20),
    confidence NUMERIC(5,2),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (meeting_id) REFERENCES meetings(meeting_id) ON DELETE CASCADE,
    FOREIGN KEY (speaker_id) REFERENCES speakers(speaker_id) ON DELETE SET NULL
);

CREATE TABLE tasks (
    task_id BIGSERIAL PRIMARY KEY,
    meeting_id BIGINT NOT NULL,
    transcript_id BIGINT,
    task_title VARCHAR(255) NOT NULL,
    task_description TEXT,
    assigned_to BIGINT,
    due_date DATE,
    priority VARCHAR(20) DEFAULT 'medium',
    status VARCHAR(20) DEFAULT 'todo',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (meeting_id) REFERENCES meetings(meeting_id) ON DELETE CASCADE,
    FOREIGN KEY (transcript_id) REFERENCES transcripts(transcript_id) ON DELETE SET NULL,
    FOREIGN KEY (assigned_to) REFERENCES users(user_id) ON DELETE SET NULL
);

ALTER TABLE users
ADD CONSTRAINT chk_users_role
CHECK (role IN ('leader', 'member'));

ALTER TABLE meetings
ADD CONSTRAINT chk_meetings_status
CHECK (status IN ('pending', 'processing', 'completed', 'failed'));

ALTER TABLE tasks
ADD CONSTRAINT chk_tasks_priority
CHECK (priority IN ('low', 'medium', 'high'));

ALTER TABLE tasks
ADD CONSTRAINT chk_tasks_status
CHECK (status IN ('todo', 'in_progress', 'done'));

CREATE INDEX idx_meetings_created_by ON meetings(created_by);
CREATE INDEX idx_audio_files_meeting_id ON audio_files(meeting_id);
CREATE INDEX idx_speakers_meeting_id ON speakers(meeting_id);
CREATE INDEX idx_transcripts_meeting_id ON transcripts(meeting_id);
CREATE INDEX idx_transcripts_speaker_id ON transcripts(speaker_id);
CREATE INDEX idx_tasks_meeting_id ON tasks(meeting_id);
CREATE INDEX idx_tasks_assigned_to ON tasks(assigned_to);

-- TEST DATA

INSERT INTO users (username, email, password_hash)
VALUES ('namdev', 'nam@gmail.com', '123456');

INSERT INTO meetings (created_by, title)
VALUES (1, 'Test Meeting');

INSERT INTO audio_files (meeting_id, original_file_name, stored_file_name, file_path, uploaded_by)
VALUES (1, 'audio1.mp3', 'audio_001.mp3', '/uploads/audio_001.mp3', 1);

SELECT * FROM users;