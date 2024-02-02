import Header from "./component/Header.tsx";
import goalsImg from "./assets/goals.jpg";
import { useState } from "react";
import CourseGoalList from "./component/CourseGoalList.tsx";
import NewGoal from "./component/NewGoal.tsx";

export interface CourseGoalProps {
  title: string,
  description: string,
  id: number
}

export default function App() {
  const [goals, setGoals] = useState<CourseGoalProps[]>([]);

  const handleAddGoal = (title: string, description: string) => {
    setGoals(prevGoals => {
      const newGoal: CourseGoalProps = {
        id: Math.random(),
        title,
        description
      };
      return [...prevGoals, newGoal]
    })
  }

  const handleDeleteGoal = (id: number) => {
    setGoals(prevGoals => prevGoals.filter(goal => goal.id !== id))

  }

  return (
    <main>
      <Header image={{src: goalsImg, alt: "goals img"}}>
        <h1>Set Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal}/>
      <ul>
        <CourseGoalList goalList={goals} onDelete={handleDeleteGoal}/>
      </ul>
    </main>
  )
}
