from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Log-Mate 서버 정상 작동 중!"}