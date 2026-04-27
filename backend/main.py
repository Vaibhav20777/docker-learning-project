from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import json
from pathlib import Path

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],

)

Tasks_File = Path("tasks.json")
def load_tasks():
    if Tasks_File.exists():
        with open(Tasks_File ,"r") as f:
            return json.load(f)
    return []

def save_tasks(tasks):
    with open(Tasks_File,"w") as f:
        json.dump(tasks,f)

@app.get("/health")
def health():
    return {"status":"ok"}

@app.get("/tasks")
def get_tasks():
    return{"tasks":load_tasks()}

@app.post("/tasks")
def create_task(title:str):
    tasks = load_tasks()
    new_task = {
        "id":len(tasks)+1,
        "title":title,
        "done":False
    }
    tasks.append(new_task)
    save_tasks(tasks)
    return new_task
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

    