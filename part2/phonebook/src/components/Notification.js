const Notification = ({message}) => {
  const notificationStyle = {
      color: 'green',
      background: 'lightgrey',
      fontSize: 20,
      borderStyle: 'solid',
      borderRadius: 5,
      padding: 10,
      borderColor: 'green',
      marginBottom: 20
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