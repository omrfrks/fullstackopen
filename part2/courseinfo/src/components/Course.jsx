const Header = (props) => {
    return <h1>{props.course}</h1>;
  };
  
  const Part = (props) => {
    return (
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    );
  };
  
  const Course = (props) => {
    return (
      <>
        <Header course={props.course.name} />
        <Content parts={props.course.parts} />
        <Total
          total={props.course.parts
            .map((part) => part.exercises)
            .reduce((a, b) => a + b, 0)}
        />
      </>
    );
  };
  
  const Content = (props) => {
    return (
      <>
        {props.parts.map((part) => (
          <Part part={part} key={part.name} />
        ))}
      </>
    );
  };
  
  const Total = (props) => {
    return <b>Total of {props.total} exercises</b>;
  };

  export default Course