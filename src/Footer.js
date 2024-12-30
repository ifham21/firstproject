import React from 'react'

const Footer = () => {
  const thisYear = new Date();
  return (
    <footer>
        Copyright &copy; {thisYear.getFullYear()}
    </footer>
  )
}

export default Footer