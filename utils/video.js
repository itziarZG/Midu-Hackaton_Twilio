export function connectUser(userName) {
    const response = fetch('api/get_token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userName })
    })
    return response
    //   const data = await response.json()
    //   room = await Twilio.Video.connect(data.token)
    //   room.participants.forEach(participantConnected)
    //   room.on('participantConnected', participantConnected)
    //   room.on('participantDisconnected', participantDisconnected)
    //   connected = true
    //   updateParticipantCount()
}
