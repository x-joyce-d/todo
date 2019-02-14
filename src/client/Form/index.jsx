import React from 'react'

export default class Form extends React.Component {
  render () {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" classID="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small classID="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" classID="exampleInputPassword1" placeholder="Password" />
        </div>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" classID="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}
