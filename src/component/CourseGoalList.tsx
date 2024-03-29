import { FC } from "react";
import CourseGoal from "./CourseGoal.tsx";
import { CourseGoalProps } from "../App.tsx";
import InfoBox from "./InfoBox.tsx";
import { InfoBoxMode, WarningSeverity } from "../assets/utils/enums.ts";

type CourseGoalList = {
  goalList: CourseGoalProps[],
  onDelete: (id: number) => void
}
const CourseGoalList: FC<CourseGoalList> = ({goalList, onDelete}) => {

  if(goalList.length === 0) {
    return <InfoBox mode={InfoBoxMode.Hint}>
      You have no course goals yet, start adding some!
    </InfoBox>
  }

  const getToManyGoalsInfo = () => {
    return goalList.length > 3 ?
      (<InfoBox severity={WarningSeverity.High}
                mode={InfoBoxMode.Warning}>You have too many goals!</InfoBox>) : null
  }

  return (
    <>
      {getToManyGoalsInfo()}
      <ul>
        {goalList.map((goal) =>
          <li key={goal.id}>
            <CourseGoal title={goal.title} id={goal.id} onDelete={onDelete} description={goal.description}/>
          </li>
        )}
      </ul>
    </>
  )
}

export default CourseGoalList;