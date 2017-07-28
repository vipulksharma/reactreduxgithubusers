

import React from 'react'
import UsersListing from '../containers/usersListing'
import Loader from './loader'

const App = () => (
    <div>
        <UsersListing />
        <Loader />
    </div>
)

export default App