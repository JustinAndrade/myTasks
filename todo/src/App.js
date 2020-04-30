import React, { useState } from "react";
import { connect } from "react-redux";
import "./App.css";

function App(props) {
  const [goals, setGoals] = useState([]);
  const [goal, setGoal] = useState({
    name: "",
    type: "",
    requirement: "",
    plan: "",
    completed: false,
  });

  const submitHandler = (e) => {
    e.preventDefault();
    setGoals([...goals, goal]);
  };

  const changeHandler = (e) => {
    e.preventDefault();
    setGoal({ ...goal, [e.target.name]: e.target.value });
  };

  console.log(props);
  console.log(goals);
  return (
    <div className="App">
      <header>
        <h1>Caroline's Goals App</h1>
      </header>
      <form onSubmit={submitHandler}>
        <input
          name="name"
          value={goal.name}
          onChange={changeHandler}
          placeholder="name"
        />
        <input name="type" onChange={changeHandler} placeholder="name" />
        <input
          name="requirement"
          onChange={changeHandler}
          placeholder="requirements"
        />
        <input
          name="plan"
          onChange={changeHandler}
          placeholder="plan for success"
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        {goals.map((goal) => {
          return (
            <div>
              <h2>{goal.name}</h2>
              <span>{goal.type}</span>
              <p>{goal.requirement}</p>
              <p>{goal.plan}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    goals: state.goals,
  };
};

export default connect(mapStateToProps)(App);
