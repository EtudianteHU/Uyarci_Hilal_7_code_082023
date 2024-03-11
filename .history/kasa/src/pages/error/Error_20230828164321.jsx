import React from 'react'


.error-page{
    color:$color.primary;
}
function Error() {
  return (
    <>
      <div className="error-page">
        <h1>404</h1>
        <h2>ooops!La page que vous demandez n'existe pas</h2>
      </div>
    </>
  )
}

export default Error
