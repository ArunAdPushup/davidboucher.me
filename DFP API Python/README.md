#Please Read the Following Before Proceeding

This program is designed to be run using an IDE of some sort. It pays to have the script files
open in front of you, both to enter some custom criteria, and to get a good grasp of what this API does.

I have tried to leave comments where necessary to explain what is going on, especially when it requires user input.

My IDE of choice is PyCharm Community Edition. You can find it here:
    https://www.jetbrains.com/pycharm/download/

It is free, and both runs your scripts (right click and then run), and displays any output on a terminal.
This will keep you involved in what is going on during each step.

While this has been setup to be as clear as possible, it still requires planning. Go and create a dummy order which
you can test this API on and don't mind fucking up. For example, instead of creating all of your line items
at once just create a few to make sure it's doing what you want it to do.

Plan out what $ increments you want your line items to me, and figure out how many you need to create at those
increments. On our DFP, we have an order split into a bunch of 10c increment lines, 50c lines, and $1 lines.
Plan that out ahead of doing 449 line items at once.

##Script Order

###1. generateToken Script in Credentials Folder
    Generate your refresh token so everything else will work.

###2. createLineItem Script

###(Optional) getLineItems.py Line Item ID Script
    This is completely optional, but highly recommended. It gets all of the current line item IDs within your prebid
    order and sticks them in a big JSON file. We can't attach creatives to the line items on creative, so we need
    to iterate over them and attach your Prebid creatives.

    Either you'll have to pull that list from DFP manually, or run this script and have the API do it for you.

    It also gives you a good look at the increments you have created so far

###3. creative.py Script in 'Attach Creatives to Line Items' folder

    We can't attach creatives when creating line items, so we have to do it here.

###4. keyValues.py Script in Key Values folder

    We also can't stick key values on a line item on creation, so if we want them to be triggered by Prebid
    we have to run this script.