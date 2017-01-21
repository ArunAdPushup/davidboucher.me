#Generating A Refresh Token

##Step 1:

Navigate to the following link:
    [https://developers.google.com/doubleclick-publishers/docs/authentication#webapp]

In this scenario, we need to make sure that we select "Web Application" in the 'Create oAuth2 Credentials' menu.

While creating these credentials, pay attention to the "Restrictions => Authorized Redirect URIs" option.
You will need to enter a random URL here. In my example I simply used "http://www.localhost.com".
This doesn't effect anything in regards to DFP: it simply is the URL that google uses to attach
our auth credentials to.
Use www.localhost.com unless you want to change something in the 'generateToken.py' file.

##Step 2:

Paste the client ID and client secret into both the 'oAuth2Credentials' & 'googleads.yaml' files in the correct place.
Go ahead and paste your dfp network ID into the googleads file while you are there. This can be found
in the url of your dfp, for example:

    https://www.google.com/dfp/**Your number will be here**#delivery

##Step 3:

Head over to the generateToken file. Providing you have left the redirect URI the same as mine, and pasted the ID
& secret into the credential file, there should be little to do here.

If you chose to use a different URL, change the following:

    flow = client.OAuth2WebServerFlow(
        client_id=clientID,
        client_secret=clientSecret,
        scope=scopes,
        user_agent='Ads Python Client Library',
        redirect_uri='http://www.localhost.com',        <<<<<<<======= Change this url
        approval_prompt='force',
        access_type='offline'
    )

If you also chose not to put the ID & secret in oauth2credentials, change the variables on lines 9 & 10 to them.

##Step 4:

Run the generateToken.py code.
Your terminal should print out pretty sensible instructions on what to do but just in case, do the following:

    Open the link that the terminal gives you. You should be prompted to allow access to the API. Allow it.
    It should re-direct you to your redirect_uri, plus "/?code=#########"

    Whatever follows 'code=' is what we need. Copy that and paste it into the terminal

    The terminal should spit out the refresh token. Paste that into googleads.yaml. You only need to run
    this script once. The refresh token stays the same unless you refresh your ID & secret.