import { useState } from 'react'
import PropTypes from 'prop-types';

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

StatisticLine.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

const Statistics = ({good, neutral, bad}) => {
  
  return(
    <>
    <h1>statistics</h1>
    { good || bad || neutral ?
    <table>
      <tbody>
      <StatisticLine text="good" value={good}/>
      <StatisticLine text="neutral" value={neutral}/>
      <StatisticLine text="bad" value={bad}/>
      <StatisticLine text="all" value={good + neutral + bad}/>
      <StatisticLine text="average" value={(good - bad) / (good + neutral + bad)}/>
      <StatisticLine text="positive" value={good / (good + neutral + bad) * 100}/>
    </tbody>
    </table>
    : <p>No feedback given</p>
}
    </>
  )
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>

      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>

    <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App