import './WordRow.css'

function WordRow({ word = ''}) {
  return (
    <div className='word-row'>
      {Array.from(Array(5)).map((_, i) => (
        <span>
          {word[i] || '_'}
        </span>
      ))}
    </div>
  )
}

export default WordRow;
