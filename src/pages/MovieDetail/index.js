import * as React from 'react'

const LazyDetail = React.lazy(() => import('./MovieDetail'))

export default LazyDetail