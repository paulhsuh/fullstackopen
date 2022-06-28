const Notification = ({message, error}) => {
  let notificationStyle = {
      background: 'lightgrey',
      fontSize: 20,
      borderStyle: 'solid',
      borderRadius: 5,
      padding: 10,
      marginBottom: 20,
      borderColor: 'green',
      color: 'green'
  }

  if (error) {
    notificationStyle = { ...notificationStyle, borderColor: 'red', color: 'red' }
  }

  if (message === null) {
    return null
  }
  else {
    return (<div style={notificationStyle}>
      {message}
    </div>)
  }
}

export default Notification