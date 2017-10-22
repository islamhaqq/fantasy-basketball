import React from 'react'
import CircularProgress from 'material-ui/CircularProgress'

/**
 * A presentational component with just one task: show the app is loading.
 * Used to indicate promises currently being resolved i.e. AJAX in process.
 * @method Loading
 */
const Loading = () => <CircularProgress size={120} thickness={5} />

export default Loading
