import { FC, type ReactNode } from "react";

interface CourseGoalProps {
  id: number,
  title: string,
  description: string,
  children?: ReactNode,
  onDelete: (id: number) => void
}

const CourseGoal: FC<CourseGoalProps> = ({title, id, description, children, onDelete}) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        {children ?? ""}
      </div>
      <button onClick={() => onDelete(id)}>delete</button>
    </article>
  )
}
export default CourseGoal;