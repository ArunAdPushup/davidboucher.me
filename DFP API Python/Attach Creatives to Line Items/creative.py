from googleads import dfp
import logging

LINE_ITEM_ID = ''
CREATIVE_IDS = ['']
logging.basicConfig(level=logging.DEBUG)

def main(client, line_item_id, creative_ids):
    lica_service = client.GetService(
        'LineItemCreativeAssociationService', version='v201611')

    licas = []
    for creative_id in creative_ids:
        licas.append({'creativeId': creative_id,
                      'lineItemId': line_item_id})

    licas = lica_service.createLineItemCreativeAssociations(licas)
    print (licas)

    logging.debug()



dfp_client = dfp.DfpClient.LoadFromStorage('../Credentials/googleads.yaml')
main(dfp_client, line_item_id=LINE_ITEM_ID, creative_ids=CREATIVE_IDS)