#Get Every Line Item ID

Running this script is completely optional. When we have bulk-created the line items, we still need to target
our Prebid KV's to them, and add our Prebid creatives. This script will grab all of the line item IDs which we just
created and stick them in a JSON file. We can then access this file later on and iterate over each

This also gives good visibility to every line item created in the order, and how many total line items are in the order.

You are more than welcome to run a DFP report for Line Item IDs and stick them in the JSON file, or even stick them
in the line item arrays when running other scrips. This approach just automates this for you.