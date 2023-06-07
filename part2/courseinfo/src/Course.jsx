const Course = ({course})=>{
    return (
      <div>
        <hr></hr>
        <Header data = {course.name}></Header>
        <Content data = {course.parts}></Content>
        <Total data = {course.parts}></Total>
      </div>
    )
  }
  const Header = ({data})=>{
    return <h2>{data}</h2>
  }
  const Part = ({data})=>{
    return <p>{data.name} {data.exercises}</p>
  }
  
  const Content = ({data})=>{
    return <>
      {data.map(part => <Part data={part}></Part>)}
    </>
  }
  const Total = ({data})=>{
    let sum = data.reduce((total, toAdd)=>{return total + toAdd.exercises}, 0)
    return <h3>Number of exercises {sum}</h3>
  }

  export default Course
  