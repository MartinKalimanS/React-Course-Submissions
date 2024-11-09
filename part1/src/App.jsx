
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10
    },
    {
      name: "Using props of React",
      exercises: 7
    },
    {
      name: "State of a component",
      exercises: 14
    }
  ]
  
  return (
    <div>
      <Header course = {course}/>
      <Content parts = {parts}/>
      <Total total = {parts.reduce((sum, part) => sum + part.exercises, 0)} />
    </div>
  )
}

const Header = ({course}) => <h1>{course}</h1>

const Content = ({parts}) => {
  return (
    <div>
      <Part part = {parts[0]}/>
      <Part part = {parts[1]}/>
      <Part part = {parts[2]}/>
    </div>
  )
}

const Part = ({part}) => <p>{part.name} {part.exercises}</p>

const Total = ({total}) => <p>Total exercises: {total}</p>

export default App