from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import whisper
import shutil
import os

app = FastAPI()

# 1. 프론트엔드 연결 설정 (CORS) - 이거 없으면 윤철이 화면이랑 연결 안 돼요!
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 2. Whisper 모델 로드 (서버 켤 때 한 번만!)
# 처음 실행할 때 모델 파일을 다운로드하느라 시간이 좀 걸릴 수 있어요.
model = whisper.load_model("base")

# --- 기존 기능들 ---

@app.get("/")
def read_root():
    return {"message": "Team-Saver 백엔드 정상 작동 중!"}

@app.get("/api/dashboard")
def get_dashboard():
    return {
        "meetings_this_week": 7,
        "tasks_assigned": 12,
        "team_contribution": 92
    }

@app.get("/api/tasks")
def get_tasks():
    return [
        {"title": "시장 조사 보고서", "assignee": "김팀원", "status": "todo"},
        {"title": "STT 모델 테스트", "assignee": "신윤철", "status": "in_progress"},
    ]

# --- 신규 기능: 음성 파일 업로드 및 텍스트 변환 ---

@app.post("/api/meeting/upload")
async def upload_meeting(file: UploadFile = File(...)):
    temp_filename = f"temp_{file.filename}"
    
    # 1. 파일 저장
    with open(temp_filename, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
    
    try:
        # 2. Whisper로 텍스트 변환 (한국어)
        result = model.transcribe(temp_filename, language="ko")
        
        # 3. 분석 끝난 임시 파일은 삭제 (용량 관리)
        os.remove(temp_filename)
        
        return {
            "filename": file.filename,
            "text": result["text"]
        }
    except Exception as e:
        # 에러 발생 시 파일은 지우고 에러 메시지 보냄
        if os.path.exists(temp_filename):
            os.remove(temp_filename)
        return {"error": str(e)}
