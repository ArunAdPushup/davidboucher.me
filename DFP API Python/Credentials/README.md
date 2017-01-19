#Building a Python API To Access DFP

Most of this code comes from the googleads github account. In my opinion, it is pretty convoluted and doesn't actually
walk you though how to access and connect with DFP. I aim to change that.

##Generating The Correct Credentials

###Step 1:

    Navigate to the following link: [https://developers.google.com/doubleclick-publishers/docs/authentication#webapp]
    In this scenario, we need to make sure that we select "Web Application" in the 'Create OAuth2 Credentials' menu

    While creating these credentials, pay attention to the "Restrictions => Authorized redirect URIs" option.
    You will need to enter a random URL here, In my example I simply used "http://www.localhost.com"
    This doesn't affect anything in regards to DFP; it simply is the URL that google uses to attach the auth code to.
    Use www.localhost.com unless you want to change something in the 'generateToken' file

###Step 2:

    Paste the client ID and Secret into both the 'oAuth2Credentials' & 'googleads.yaml' files in the correct place.

###Step 3:

    Head over to the generateToken file. Providing you have left the redirect URI the same as mine
    (http://www.localhost.com) and pasted the ID & Secret into the credential file, there should be little to change here.

    If you chose to use a different URL: change the following:

        ```
        flow = client.OAuth2WebServerFlow(
            client_id=clientID,
            client_secret=clientSecret,
            scope=scopes,
            user_agent='Ads Python Client Library',
            redirect_uri='http://www.localhost.com',
            prompt='select_account'
        )

         Change redirect_uri= to whatever you decided to use.
         ```

    If you chose not to put the ID & Secret in oAuth, change the variables on lines 9 & 10 to your credentials

###Step 4:

    Run the generateToken.py code.
    Your terminal should print out pretty sensible instructions on what to do but just in case, do the following:

        Open the link that it spits out. It should look like the following:

       ```
       redirect_uri/?code=

       Whatever follows 'code=' is what we need. Copy that and paste it into the terminal
       ```

    The terminal should then spit out a few values that we need. Paste them into the googleads.yaml file.