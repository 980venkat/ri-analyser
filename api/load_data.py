from decimal import Decimal
import json
import boto3


def load_ri(ri_list, dynamodb=None):
    if not dynamodb:
        dynamodb = boto3.resource('dynamodb', endpoint_url="http://localhost:8000")

    table = dynamodb.Table('ReservedInstancesOfferings')
    for ri in ri_list['ReservedInstancesOfferings']:
        # OfferingClass = ri['OfferingClass']
        # Marketplace = ri['Marketplace']
        # FixedPrice = ri['FixedPrice']
        # CurrencyCode = ri['CurrencyCode']
        # PricingDetails = ri['PricingDetails']
        # UsagePrice= ri['UsagePrice']
        # RecurringChargesAmount = ri['RecurringCharges']['Amount']
        # RecurringChargesFrequency = ri['RecurringCharges']['Frequency']
        # OfferingType = ri['OfferingType']
        # ProductDescription = ri['ProductDescription']
        # Scope = ri['Scope']
        # Duration = ri['Duration']
        # InstanceTenancy = ri['InstanceTenancy']
        # ReservedInstancesOfferingId = ri['ReservedInstancesOfferingId']
        # RecurringChargesFrequency = ri['InstanceType']

        table.put_item(Item=ri)


if __name__ == '__main__':
    with open("r-result.json") as json_file:
        ri_list = json.load(json_file,parse_float=Decimal)
    load_ri(ri_list)
