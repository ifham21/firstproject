import React from 'react'

const Footer = ({length}) => {
  const thisYear = new Date();
  return (
    <footer>
        {length} list {length === 1 ? "item" : "items"}
        {/* Copyright &copy; {thisYear.getFullYear()} */}
    </footer>
  )
}

export default Footer