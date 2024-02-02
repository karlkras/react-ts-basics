import { FC, FormEvent, useRef } from "react";

type NewGoalProps = {
  onAddGoal: (goal: string, description: string) => void;
};
const NewGoal: FC<NewGoalProps> = ({onAddGoal}) => {
  const goal = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLInputElement>(null);
  const handleOnSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const enteredGoal = goal.current!.value;
    const enteredDescription = description.current!.value;
    if(enteredGoal && enteredDescription) {
      onAddGoal(enteredGoal, enteredDescription);
      // now clear the form.
      goal.current!.value = "";
      description.current!.value = "";
    }
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <p>
      <label>Title:
        <input type="text" id="goal-title" ref={goal} required/>
      </label>
      </p>
      <p>
      <label>Description:
        <input type="text" id="goal-description" ref={description} required/>
      </label>
      </p>
      <p>
        <button>Submit</button>
      </p>
    </form>
  )
}

export default NewGoal;