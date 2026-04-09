from fastapi import FastAPI, UploadFile
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 1. 대시보드 데이터
@app.get("/api/dashboard")
def get_dashboard():
    return {
        "meetings_this_week": 7,
        "tasks_assigned": 12,
        "team_contribution": 92
    }

# 2. 음성파일 업로드
@app.post("/api/meeting/upload")
async def upload_meeting(file: UploadFile):
    return {"filename": file.filename, "status": "업로드 완료"}

# 3. 업무 목록
@app.get("/api/tasks")
def get_tasks():
    return [
        {"title": "시장 조사 보고서", "assignee": "김팀원", "status": "todo"},
        {"title": "STT 모델 테스트", "assignee": "신윤철", "status": "in_progress"},
    ]
