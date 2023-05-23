const Header = ({data})=>{
  return <h1>{data}</h1>
}
const Part = ({data})=>{
  return <p>{data.name} {data.exercises}</p>
}

const Content = ({data})=>{
  return <>
    <Part data={data[0]}></Part>
    <Part data={data[1]}></Part>
    <Part data={data[2]}></Part>
  </>
}
const Total = ({data})=>{
  return <p>Number of exercises {data[0].exercises + data[1].exercises + data[2].exercises}</p>
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header data = {course.name}></Header>
      <Content data = {course.parts}></Content>
      <Total data = {course.parts}></Total>
    </div>
  )
}

export default App