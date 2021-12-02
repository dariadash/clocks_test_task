const addClockAction = _ => ({
  type: 'ADD_CLOCK'
})

const changeZoneAction = newZone => ({
  type: 'CHANGE_ZONE',
  payload: newZone
})

const loadTimezonesAction = timezones => ({
  type: 'LOAD_ZONES',
  payload: timezones
})

export const addClock = () => {
  return dispatch => {
    dispatch(addClockAction())
  }
}

export const changeZone = (newZone) => {
  return dispatch => {
    dispatch(changeZoneAction(newZone))
  }
}

export const loadTimezones = (timezones) => {
  return dispatch => {
    dispatch(loadTimezonesAction(timezones))
  }
}
