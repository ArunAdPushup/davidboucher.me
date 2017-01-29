#Guide to DFP Line Item Creations

##Setup Work

###Step 1 - Getting Credentials

The first step is to head over to: https://developers.google.com/doubleclick-publishers/docs/authentication#webapp
We're going to access using a web application, so click on that tab in step 2 and click where it says
"Open the Google Developers Console Credentials Page".

A menu should appear asking you to select or create a project. Click on Create a Project.

When that is created, click on 'Create Credentials' and select OAuth Client ID from the menu. Choose Web Application.

Name your web application and write down whatever you named it. Under the restrictions section,
you will see a menu called 'Authorized redirect URIs'.
This is a random url that you enter which DFP will attach your access token to.
I chose to make this http://www.localhost.com, but you can make it whatever you want. Just write it down.

Click create. You should be given a Client ID and Client Secret. Write those down too. Or paste them all in a file.

###Step 2 - Running Credentials script

If you downloaded a python IDE (like Pycharm), you will be able to open the root folder, DFP API Python, as a project.
If not, open up a terminal window. Also open up a finder (on Mac) or folder in windows (not sure) and navigate
to the DFP API Python Folder. In your terminal, type 'cd' and then drag the DFP API Python folder into the terminal.

If you can navigate to a folder on your own that's also helpful.

Type in 'ls' to name sure you can see all the files you need. Then type 'python generateToken'.

I've printed a bunch of steps in the file to get you through it. When you are complete, in a text editor open
the 'googleads.yaml' file.

In here, paste your:

application_name (the name you gave your web application)
network_code (navigate to your dfp. The code should be in the URL.)
Client Secret, ID, and refresh token spat out by the generateToken script.
Save it.

###Optional Step 2b - Creating Values to associate with the hb_pb key

If you have been running Prebid for a while, chances are you have a bunch of values already associated
with your hb_pb value. Even if you haven't, you may not have the granularity at for every price bucket you create.
This script will create 1c hb_pb values from 1c all the way up to however many you want. I suggest 15,000 ($150).

If you haven't setup prebid yet, go ahead and navigate to your Inventory tab in DFP.
Create a new key, named hb_pb.
After creating it, the key_id should be in the URL. Take note of that number.

Just like you did with the generateToken script, now is the time to run the createValues script.
It will prompt you to enter your key_id and say how many values you want to create, at 1c intervals.
I chose 1c intervals all the way up so that if you need to create more line items down the line,
they are already created.

###Step 3 - Plan Your Line Items

I'e tried to be as controlling as possible in this script, letting you know what you need to get and
where to get them. Nevertheless, this doesn't absolve you of planning your stuff out.

Figure out how many line items you want to create, what $ increment you want, and how many you want to create.
Also remember that you need to create an Order yourself alongside one prebid line item. So if that one is already
a $10.00 line item, and you want them to go up in 10c increments, the starting value I ask for should be
10.10.

There are maximum 450 lines to an order.
Don't attach creatives to any line item, even the one you created with the Order. I'll do that for you.

I'd highly suggest creating a dummy Order to test the script on.

I specify in each step on the main script how you should enter the information required. A simple
copy and paste job will do, as long as it's in the format shown in the example.

###Step 4 - Run the main script

Exactly the same as before, type in 'python main' and enter the details at each ask. It will run through
getting the targeting values for each key-value, attaching them to and creating every line item,
and attaching your prebid creatives to each. Aside from the printed messages in the terminal asking
you for information the script won't stop.

To cancel at any time, press Control+C on both Mac and Windows.