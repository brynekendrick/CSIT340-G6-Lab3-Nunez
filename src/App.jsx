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
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
    </div>
  )
}

const Total = (props) => {
  return <p><strong>Total Units:</strong> {props.total}</p>
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

  const part1 = {
    name: 'CSIT340 - Web Development',
    exercises: 3
  }
  const part2 = {
    name: 'CSIT301 - Data Structures and Algorithms',
    exercises: 3
  }
  const part3 = {
    name: 'CSIT320 - Database Systems',
    exercises: 3
  }

  const student = {
    fullName: 'Bryne Kendrick Nunez',
    courseCode: 'CSIT340',
    section: 'G6'
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
      <Footer
        fullName={student.fullName}
        courseCode={student.courseCode}
        section={student.section}
      />
    </div>
  )
}

export default App