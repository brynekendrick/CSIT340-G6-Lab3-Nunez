const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <p>{props.part.name} - {props.part.exercises} units</p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  const totalUnits = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises
  return <p><strong>Total Units:</strong> {totalUnits}</p>
}

const Footer = (props) => {
  return (
    <footer>
      <p>{props.fullName} - {props.courseCode} - {props.section}</p>
    </footer>
  )
}

const App = () => {
  const course = 'BS Information Technology'
  const parts = [
    {
      name: 'CSIT340 - Web Development',
      exercises: 3
    },
    {
      name: 'CSIT122 - Data Structures and Algorithms',
      exercises: 3
    },
    {
      name: 'CSIT385 - Information Security and Assurance',
      exercises: 3
    }
  ]

  const student = {
    fullName: 'Bryne Kendrick Nunez',
    courseCode: 'CSIT340',
    section: 'G6'
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
      <Footer
        fullName={student.fullName}
        courseCode={student.courseCode}
        section={student.section}
      />
    </div>
  )
}

export default App