import './WordRow.css'

function WordRow({ word = '', result}) {
  return (
    <div className='word-row'>
      {Array.from(Array(5)).map((_, i) => (
        <span className={result && result[i]}>
          {word[i] || '_'}
        </span>
      ))}
    </div>
  )
}

export default WordRow;
