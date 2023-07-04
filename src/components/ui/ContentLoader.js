import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={400}
    height={150}
    viewBox="0 0 400 150"
    backgroundColor="#f3f3f3"
    foregroundColor="#d1d1d1"
    {...props}
  >
    <circle cx="45" cy="73" r="41" /> 
    <rect x="93" y="20" rx="5" ry="5" width="372" height="17" /> 
    <rect x="93" y="71" rx="5" ry="5" width="372" height="17" /> 
    <rect x="91" y="121" rx="5" ry="5" width="372" height="17" />
  </ContentLoader>
)

export default MyLoader