import React, { useState } from "react";
import "./App.css";
import Container from "./components/Container";
import AddTask from "./components/AddTask"
import "antd/dist/antd.css";

const TASKS = [
  {
    id: 1,
    title: "Task Title 01",
    description:
      "As a user , I can perform multiple task on the platform, Log in , Sign in , submit a new work ,and complete a task !",
    ddl: "28/08/2020",
    tag: "work",
    status: 0,
  },
  {
    id: 2,
    title: "Task Title 02",
    description:
      "As a user , I can perform multiple task on the platform, Log in , Sign in , submit a new work ,and complete a task !",
    ddl: "28/08/2020",
    tag: "hobby",
    status: 0,
  },
  {
    id: 3,
    title: "Task Title 03",
    description:
      "As a user , I can perform multiple task on the platform, Log in , Sign in , submit a new work ,and complete a task !",
    ddl: "28/08/2020",
    tag: "work",
    status: 0,
  },
  {
    id: 4,
    title: "Task Title 04",
    description:
      "As a user , I can perform multiple task on the platform, Log in , Sign in , submit a new work ,and complete a task !",
    ddl: "28/08/2020",
    tag: "study",
    status: 1,
  },
  {
    id: 5,
    title: "Task Title 05",
    description:
      "As a user , I can perform multiple task on the platform, Log in , Sign in , submit a new work ,and complete a task !",
    ddl: "28/08/2020",
    tag: "hobby",
    status: 1,
  },
  {
    id: 6,
    title: "Task Title 06",
    description:
      "As a user , I can perform multiple task on the platform, Log in , Sign in , submit a new work ,and complete a task !",
    ddl: "28/08/2020",
    tag: "study",
    status: 1,
  },
  {
    id: 7,
    title: "Task Title 07",
    description:
      "As a user , I can perform multiple task on the platform, Log in , Sign in , submit a new work ,and complete a task !",
    ddl: "28/08/2020",
    tag: "hobby",
    status: 2,
  },
  {
    id: 8,
    title: "Task Title 08",
    description:
      "As a user , I can perform multiple task on the platform, Log in , Sign in , submit a new work ,and complete a task !",
    ddl: "28/08/2020",
    tag: "hobby",
    status: 2,
  },
  {
    id: 9,
    title: "Task Title 09",
    description:
      "As a user , I can perform multiple task on the platform, Log in , Sign in , submit a new work ,and complete a task !",
    ddl: "28/08/2020",
    tag: "work",
    status: 2,
  },
];

function App() {
  

  const [task, setTask] = useState(TASKS);
  console.log(task);

  const addNewTask = (value) => {
    setTask([...task,{...value, id:task.length+1}])
  }

 

  const nextBtn = (id) => {
    setTask(
      task.map((el) => {
        if (el.id === id) {
          return { ...el, status: el.status + 1 };
        }
        return el;
      })
    );
  };
  const prevBtn = (id) => {
    setTask(
      task.map((el) => {
        if (el.id === id) {
          return { ...el, status: el.status - 1 };
        }
        return el;
      })
    );
  };

  return (
    <div className="App">
      <AddTask addNewTask={addNewTask}/>
      <div className="cnt">
        <Container
          name="To Do"
          status={task.filter((el) => el.status === 0)}
          nextBtn={nextBtn}
          prevBtn={prevBtn}
          
        />
        <Container
          name="Currently Doing"
          status={task.filter((el) => el.status === 1)}
          nextBtn={nextBtn}
          prevBtn={prevBtn}
        />
        <Container
          name="Completed"
          status={task.filter((el) => el.status === 2)}
          nextBtn={nextBtn}
          prevBtn={prevBtn}
        />
      </div>
    </div>
  );
}

export default App;
