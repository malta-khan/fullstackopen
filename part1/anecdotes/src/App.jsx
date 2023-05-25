import { useState } from 'react'
const MostVoted = ({anecdotes, votes})=>{
  let mostVotedIndex = 0;
  votes.forEach((number, index) => {
    if(number > votes[mostVotedIndex]){
      mostVotedIndex = index;
    }
  });
return <div>
  <h1>anecdote with most likes</h1>
  <div>{anecdotes[mostVotedIndex]}</div> 
  <div>has {votes[mostVotedIndex]} votes</div> 
</div>
};
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  let upvote = ()=>{
    let newVotes = [...votes];
    newVotes[selected]++;
    setVotes(newVotes);
  }

  let next = ()=>{
    let newSelection = Math.round(Math.random() * ((anecdotes.length-1) - 0) + 0);
    setSelected(newSelection);
  }
  return (
    <div>
      <h1>anecdote of the day</h1>
      <div>{anecdotes[selected]}</div> 
      <div>has {votes[selected]} votes</div> 
      <button onClick={upvote}>vote</button>
      <button onClick={next}>next anecdote</button>
      <MostVoted anecdotes={anecdotes} votes={votes}></MostVoted>
    </div>
  )
}

export default App