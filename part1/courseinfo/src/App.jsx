const Header = ({courseName})=>{
  return <h1>{courseName}</h1>
}
const Part = ({data})=>{
  return <p>{data.part} {data.exercises}</p>
}

const Content = ({data})=>{
  return <>
    <Part data={{part: data.part1, exercises: data.exercises1}}></Part>
    <Part data={{part: data.part2, exercises: data.exercises2}}></Part>
    <Part data={{part: data.part3, exercises: data.exercises3}}></Part>
  </>
}
const Footer = ({data})=>{
  return <p>Number of exercises {data.exercises1 + data.exercises2 + data.exercises3}</p>
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header courseName = {course}></Header>
      <Content data = {{part1,part2,part3,exercises1,exercises2,exercises3}}></Content>
      <Footer data = {{part1,part2,part3,exercises1,exercises2,exercises3}}></Footer>
    </div>
  )
}

export default App