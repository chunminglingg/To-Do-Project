import React from 'react'

interface typoProps {
    children: React.ReactNode,
    className?: string,
    variant?: ""
    colors?: ""
}
const Typography: React.FC<typoProps> = ({
    children,
    className = "",
    variant = "",
    colors = ""
  
}) => {
  return (
    <div>Typography</div>
  )
}

export default Typography