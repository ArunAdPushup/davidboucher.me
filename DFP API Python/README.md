#Guide to DFP Line Item Creations

##Setup Work

###Step 1 - Getting Credentials

We first need to collect security credentials. Navigate to:
    https://developers.google.com/doubleclick-publishers/docs/authentication#webapp

The script will be using the Web Application authentication type. On the page, on step 2 make sure to
select 'Web Application', as shown below.

    <img width="894" alt="dfpcredentialstep1" src="https://cloud.githubusercontent.com/assets/17837150/22405589/f78a8e9a-e5f9-11e6-8ff1-826a5af9ac43.png">

Click on 'Open the Google Developers Console Credentials Page' and select 'Create a project'

    <img width="417" alt="dfpcredentialstep2" src="https://cloud.githubusercontent.com/assets/17837150/22405586/f7801fdc-e5f9-11e6-87aa-aeb82072e766.png">

Name your project whatever you like. When that is created, click on 'Create Credentials' and select OAuth client ID.

    <img width="428" alt="dfpcredentialstep3" src="https://cloud.githubusercontent.com/assets/17837150/22405588/f7808fbc-e5f9-11e6-8c11-5595f19b175f.png">

The application type should be 'Web Application.' Enter a name: I Called mine DFP API Python.
Under the 'authorized Redirect URLs' section, enter a random URL.

    <img width="671" alt="dfpcredentialstep4" src="https://cloud.githubusercontent.com/assets/17837150/22405587/f780702c-e5f9-11e6-8561-3be270258697.png">

When we are making a request to this API to generate our tokens, DFP will use direct us to this URL which contains
the information we need.

When you are done, click Create and take note of your Client ID and Client Secret. We will need them in Step 2.


###Step 2 - Running Credentials script

Download the DFP API Python repo from Github and open it in a terminal window. To run the script from a terminal,
type "python generateToken". Messages will be printed asking for:

    `
    Refresh URI
    Client Secret
    Client ID
    `
Copy and paste into the terminal and press enter to continue with script. At the end of the script, you will be
provided with a refresh token. Take this token, the Client ID, and the Client Secret and paste them into the
file named 'googleads.yaml' within the Credentials folder. You will need to open it in a text editor to do this.
Ensure you save the file. You do not need to run the generateToken script again, as the refresh token will stay
the same unless you refresh your client ID & Secret.


###Optional Step 2b - Creating Values to associate with the hb_pb key



###Step 3 - Plan Your Line Items



###Step 4 - Run the main script

