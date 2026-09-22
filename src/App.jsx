const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  return (
    <div>
      <p>{props.part1} - {props.exercises1} units</p>
      <p>{props.part2} - {props.exercises2} units</p>
      <p>{props.part3} - {props.exercises3} units</p>
    </div>
  )
}

const Total = (props) => {
  return <p>Total Units: {props.total}</p>
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
  const part1 = 'CSIT340 - Web Development'
  const exercises1 = 3
  const part2 = 'CSIT122 - Data Structures and Algorithms'
  const exercises2 = 3
  const part3 = 'CSIT385 - Information Security and Assurance'
  const exercises3 = 3

  const student = {
    fullName: 'Bryne Kendrick Nunez', 
    courseCode: 'CSIT340',
    section: 'G6'
  }

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1} exercises1={exercises1}
        part2={part2} exercises2={exercises2}
        part3={part3} exercises3={exercises3}
      />
      <Total total={exercises1 + exercises2 + exercises3} />
      <Footer
        fullName={student.fullName}
        courseCode={student.courseCode}
        section={student.section}
      />
    </div>
  )
}

export default App