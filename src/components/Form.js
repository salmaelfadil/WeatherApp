import React from 'react'

export const Form = ({ handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" name="city" placeholder="City"></input>
        <input type="text" name="country" placeholder="Country"></input>
        <button type="submit">Get Weather</button>
    </form>
  )
}
