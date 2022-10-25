import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Addmoreblog = ({ onAdd }) => {
  const [heading, setheading] = useState('')
  const [content, setcontent] = useState('')
  const [conclusion, setconclusion] = useState('')
  const navigate = useNavigate();

const onSubmit = (e) => {
  e.preventDefault()

  if(!heading){
      alert('Please add a Blog')
      return
  }
  onAdd({ heading , content, conclusion })
  setheading('')
  setcontent('')
  setconclusion('')
  navigate('/showmoreblog');

}

  return (
    <div>
        <form onSubmit={onSubmit}>
        <div className="form-group" >
            <label>Main Heading</label>
            <input type="text" className="form-control"  placeholder="Enter Main Heading" id="heading" value={heading} onChange={(e) => setheading(e.target.value)}/>
          </div>
          <div className="form-group">
            <label >Content</label>
            <textarea type="text" className="form-control" placeholder="Enter Content" id="content"  value={content} onChange={(e) => setcontent(e.target.value)}/>
          </div>
          <div className="form-group">
            <label>Conclusion and Rating</label>
            <input type="text" className="form-control" placeholder="Enter Conclusion and Rate it!" id="conclusion" value={conclusion} onChange={(e) => setconclusion(e.target.value)} />
          </div>
  
          <button type="submit" className="btn btn-primary" id='search'>Submit</button>
        </form>

      
    </div>
  )
}

export default Addmoreblog
