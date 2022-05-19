import React, { useEffect, useState } from 'react'
import { getClassList } from '../../services/api-calls'
// Don't forget this import!
import { Link } from 'react-router-dom'


const ClassList = (props) => {

  const [results, setResults] = useState([])
  
  useEffect(()=> {
    getClassList()
    .then(classData => setResults(classData.results))
  }, [])

  return (
    <>
      <div>
      <h3>Class List</h3>
      <div className="icon-container">
          {results.map((classTitle) => (
            // Wrap the div containing the class 'card' in a <Link>
						// Also, make sure to move the key to the <Link>
            <Link key={classTitle.index} state={{ classTitle }} to='/class'>
              <div id="classDiv" >
                <img
                  style={{ width: "100px", height: "100px" }}
                  src={`/images/${classTitle.name}.svg`} 
                  alt="class-logo"
                />
                {classTitle.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
 
export default ClassList;