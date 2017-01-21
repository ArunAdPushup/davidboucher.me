from googleads import dfp

ORDER_ID = '' # Paste Order ID you want to create line items in, in format: ['12345678']
PLACEMENT_IDs = [''] # Paste your Ad Unit IDs here in the format: ['1234','2345','3456','4567']

def main(client, order_id, placement_ids):
    line_item_service = client.GetService('LineItemService', version='v201611')

    line_items = []

    for i in range(1):
        line_item = {
            'name': 'David_1.00',
            'orderId': order_id,
            'targeting': {
                'inventoryTargeting': {
                    'targetedPlacementIds': placement_ids
                },
            },
            'creativePlaceholders': [
                {
                    'size': {
                        'width': '728',
                        'height': '90'
                    }
                },
                {
                    'size': {
                        'width': '160',
                        'height': '600'
                    }
                },
                {
                    'size': {
                        'width': '300',
                        'height': '250'
                    }
                },
                {
                    'size': {
                        'width': '1',
                        'height': '1'
                    }
                }
            ],
            'startDateTimeType': 'IMMEDIATELY',
            'lineItemType': 'PRICE_PRIORITY',
            'unlimitedEndDateTime': 'true',
            'costType': 'CPM',
            'costPerUnit': '1.00',
            'status': 'PAUSED',
            'primaryGoal': {
                'goalType': 'NONE'
            }

        }
        line_items.append(line_item)
    line_items = line_item_service.createLineItems(line_items)


dfp_client = dfp.DfpClient.LoadFromStorage('../Credentials/googleads.yaml')

main(dfp_client, ORDER_ID, PLACEMENT_IDs)