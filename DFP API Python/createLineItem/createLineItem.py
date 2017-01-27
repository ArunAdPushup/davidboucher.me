from googleads import dfp
from datetime import date

class createLineItem:

    def __init__(self, path, order_id, placement_id, increment, startingAmount, numberOfLines,key_id):
        self.path = path
        self.client = dfp.DfpClient.LoadFromStorage(self.path)
        self.order_id = order_id
        self.placement_id = placement_id
        self.increment = increment
        self.startingAmount = startingAmount
        self.numberOfLines = numberOfLines
        self.key_id = key_id


    def main(self, targetingValues):
        print(len(targetingValues))
        line_item_service = self.client.GetService('LineItemService', version='v201611')
        line_items = []
        microAmountIncrement = int(1000000 * self.increment)
        microAmountStarting = int(1000000 * self.startingAmount)

        for _ in range(self.numberOfLines):
            name_id = '{0:.2f}'.format(microAmountStarting / 1000000)
            value_id = targetingValues[str(name_id)]
            print(self.order_id)
            print(self.key_id)

            line_item = {
                'name': 'Prebid_%s' % (name_id),
                'orderId': '%s' % (self.order_id),
                'startDateTime': {
                    'date': {
                        'year': '2017',
                        'month': '1',
                        'day': str(date.today().day + 1)
                    },
                    'hour': '0',
                    'minute': '0',
                    'second': '0',
                    'timeZoneID': 'America/New_York'
                },
                'costType': 'CPM',
                'unlimitedEndDateTime': True,
                'creativeRotationType': 'EVEN',
                'lineItemType': 'PRICE_PRIORITY',
                'status': 'PAUSED',
                'allowOverbook': True,
                'skipInventoryCheck': True,
                'primaryGoal': {
                    'goalType': 'NONE'
                },
                'costPerUnit': {
                    'currencyCode': 'USD',
                    'microAmount': '%s' % (microAmountStarting)
                },
                'targeting': {
                    'inventoryTargeting': {
                        'targetedPlacementIds': '%s' % (self.placement_id)
                    },
                    'customTargeting': {
                        'xsi_type': 'CustomCriteriaSet',
                        'logicalOperator': 'OR',
                        'children': {
                            'xsi_type': 'CustomCriteria',
                            'keyId': '%s' % (self.key_id),
                            'valueIds': '%s' % (value_id),
                            'operator': 'IS'
                        }
                    }
                },
                'creativePlaceholders': [
                    {
                        'size': {
                            'width': '1',
                            'height': '1',
                            'isAspectRatio': False
                        }
                    }
                ]
            }
            line_items.append(line_item)
            microAmountStarting += microAmountIncrement
            print('Line item with name: {} and price: {} created. '.format(
                line_item['name'],
                line_item['costPerUnit']['microAmount']))
        print (line_items)
        line_items = line_item_service.createLineItems(line_items)