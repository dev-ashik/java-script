// set valu into localStorage
// localStorage.setItem('key', "value")
localStorage.setItem('userId', 230)
const user = localStorage.setItem('user', JSON.stringify({name: 'Ashik', job: 'student'}))

// it's return valu of the key
// const deviceId = localStorage.getItem('key')
const deviceId = localStorage.getItem('userId')


//string to object
const deviceInfo = JSON.parse(deviceId)


// to remove
localStorage.removeItem('userId')
