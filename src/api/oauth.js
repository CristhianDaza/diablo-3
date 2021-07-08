import { post } from 'axios'

const clientId = process.env.VUE_APP_CLIENTE_ID
const clientSecret = process.env.VUE_APP_CLIENT_SECRET

const region = 'eu'
const API_URL = `https://${region}.battle.net/oauth/token`

function getToken () {
  const body = new FormData()
  body.append('grant_type', 'client_credentials')

  const config = {
    headers: { 'Content-Type': 'multipart/form-data' },
    auth: { username: clientId, password: clientSecret }
  }

  return post(API_URL.replace, body, config)
}

export {
  getToken
}
