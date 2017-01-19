from oauth2client import client
from googleads import dfp
import json

def main(client):
    order_service = client.GetService('OrderService')

    statement = dfp.FilterStatement()

    while True:
        response = order_service.getOrdersByStatement(statement.ToStatement())
        if 'results' in response:
            for order in response['results']:
                print('Order with ID "%d" and name "%s" was found.\n' % (order['id'], order['name']))
        else:
            break

        print ("\nNumber of results found: %s" % response['totalResultSetSize'])

dfp_client = dfp.DfpClient.LoadFromStorage(path="/Users/boucher/GitHub Desktop/davidboucher.me/DFP API Python/Credentials/googleads.yaml")
main(dfp_client)

