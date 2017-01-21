from googleads import dfp
import json
import os

ORDER_ID = '' # Paste your DFP Order ID Here as a string.
LINE_ITEM_ID = [] # Don't touch this.

def collectIDs():
    if os.path.exists('line_item_ids.json'):
        with open('line_item_ids.json', mode='w', encoding='utf-8') as f:
            json.dump(LINE_ITEM_ID, f)
    else:
        f = open('line_item_ids.json', 'w+')
        with open('line_item_ids.json', mode='w', encoding='utf-8') as f:
            json.dump(LINE_ITEM_ID, f)


def main(client, order_id):
    line_item_service = client.GetService('LineItemService', version='v201605')

    values = {
        'key': 'orderId',
        'value': {
            'xsi_type': 'NumberValue',
            'value': order_id
        }
    }
    query = ('WHERE orderId = :orderId')
    statement = dfp.FilterStatement(query, values)

    while True:
        # Get line items by statement.
        response = line_item_service.getLineItemsByStatement(
            statement.ToStatement())

        if 'results' in response:
            # Display results.
            for line_item in response['results']:
                LINE_ITEM_ID.append(line_item['id'])

            statement.offset += dfp.SUGGESTED_PAGE_LIMIT
            collectIDs()

        else:
            break
    print ('\nNumber of results found: %s' % response['totalResultSetSize'])

dfp_client = dfp.DfpClient.LoadFromStorage('../Credentials/googleads.yaml')

main(dfp_client, order_id=ORDER_ID)