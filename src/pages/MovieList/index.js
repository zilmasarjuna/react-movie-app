import * as React from 'react'

const LazyList = React.lazy(() => import('./MovieList'))

export default LazyList