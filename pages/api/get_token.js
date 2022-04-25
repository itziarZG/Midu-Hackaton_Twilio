const AccessToken = require('twilio').jwt.AccessToken;
const VideoGrant = AccessToken.VideoGrant;

const ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
const API_SID = process.env.TWILIO_API_KEY_SID;
const API_KEY = process.env.TWILIO_API_KEY_SECRET;

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { userName } = req.body
    const identity = userName
    const token = new AccessToken(ACCOUNT_SID, API_SID, API_KEY, { identity })

    const grant = new VideoGrant({
      room: 'miduroom'
    })

    token.addGrant(grant)
    console.log(token.toJwt())
    res.status(200).json({ token: token.toJwt() })
  }
}
const twilio = require('twilio')
