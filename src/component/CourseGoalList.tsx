import { FC } from "react";
import CourseGoal from "./CourseGoal.tsx";
import { CourseGoalProps } from "../App.tsx";

type CourseGoalList = {
  goalList: CourseGoalProps[],
  onDelete: (id: number) => void
}
const CourseGoalList: FC<CourseGoalList> = ({goalList, onDelete}) => {
  return (
    <ul>
      {goalList.map((goal) =>
        <li key={goal.id}>
          <CourseGoal title={goal.title} id={goal.id} onDelete={onDelete} description={goal.description}/>
        </li>
      )}
    </ul>
  )
}

export default CourseGoalList;