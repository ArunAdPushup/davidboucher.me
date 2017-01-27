from googleads import dfp


class creatives:

    def __init__(self, creative_ids, path, line_item_ids):
        self.creative_ids = creative_ids
        self.path = path
        self.line_item_ids = line_item_ids
        self.client = dfp.DfpClient.LoadFromStorage(self.path)


    def main(self):
        lica_service = self.client.GetService('LineItemCreativeAssociationService', version='v201611')

        for line_item in self.line_item_ids:
            licas = []

            for creative_ids in self.creative_ids:
                licas.append({
                    'creativeId': creative_ids,
                    'lineItemId': line_item
                })
            licas = lica_service.createLineItemCreativeAssociations(licas)