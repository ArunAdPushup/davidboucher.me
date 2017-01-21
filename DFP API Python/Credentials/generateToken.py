from oauth2client import client
import json
from googleads import dfp
from googleads import oauth2

with open('../Credentials/oAuth2Credentials') as data_file:
    data = json.load(data_file)

clientSecret = data['clientSecret']
clientID = data['clientID']
SCOPE = u'https://www.googleapis.com/auth/dfp'

def getTokens(clientID, clientSecret, scopes):

    flow = client.OAuth2WebServerFlow(
        client_id=clientID,
        client_secret=clientSecret,
        scope=scopes,
        user_agent='Ads Python Client Library',
        redirect_uri='http://www.localhost.com',
        approval_prompt='force',
        access_type='offline'
    )

    authorize_url = flow.step1_get_authorize_url()
    print('Click on the following URL and login with your google account: \n%s\n' % (authorize_url))
    print ('After approving the token enter the verification code (if specified).')

    code = input('Code: ').strip()
    credential = flow.step2_exchange(code)

    print("Refresh Token for YAML: ",credential.refresh_token)
    print("Access Token: ", credential.access_token)
    print("Client ID: ", clientID)
    print("Client Secret: ", clientSecret)

    print("Put the ID, Secret, and Refresh Token in the YAML file. Don't run this script again")

getTokens(clientID, clientSecret, SCOPE)