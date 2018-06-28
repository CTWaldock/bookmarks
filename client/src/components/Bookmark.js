import React from 'react';

function Bookmarks (props) {
  const { bookmarkId, title, url, remove } = props
  return (
    <li>
      {title} (<a href={url} target="_blank">Visit</a>)
      <button onClick={ () => remove(bookmarkId) }>Delete</button>
    </li>
  )
}

export default Bookmarks
