#Guide to DFP Line Item Creations

##Setup Work

###Step 1 - Getting Credentials

We first need to collect security credentials. Navigate to:
    https://developers.google.com/doubleclick-publishers/docs/authentication#webapp

The script will be using the Web Application authentication type. On the page, on step 2 make sure to
select 'Web Application', as shown below.
    ![screenshot](https://raw.github.com/Boucher-David/DFP%20API%20Python/master/images/dfpCredentialsStep1.png)

Click on 'Open the Google Developers Console Credentials Page' and select 'Create a project'
    ![Alt Text](/images/dfpCredentialStep2.png?raw=true)
Name your project whatever you like. When that is created, click on 'Create Credentials' and select
OAuth client ID.
    ![Alt Text](https://github.com/Boucher-David/davidboucher.me/tree/master/DFP%20API%20Python/images/dfpCredentialStep3.png?raw=true)

The application type should be 'Web Application.'
Enter a name, I Called mine DFP API Python.
Under the 'authorized Redirect URLs' section, enter a random URL.
    ![Alt Text](https://github.com/Boucher-David/davidboucher.me/tree/master/DFP%20API%20Python/images/dfpCredentialStep4.png?raw=true)
When we are making a request to this API to generate our tokens, DFP will use direct us to this URL which contains
the information we need.

When you are done, click Create and take note of your Client ID and Client Secret. We will need them in Step 2.


###Step 2 - Running Credentials script



###Optional Step 2b - Creating Values to associate with the hb_pb key



###Step 3 - Plan Your Line Items



###Step 4 - Run the main script

