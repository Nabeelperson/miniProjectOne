# The following is a basic simulation of two rooms with
# 5 data points per roon per measurements

import json as j
import random as r

def generate():
    data = dict()
    data['temp1'] = list()
    data['humd1'] = list()
    data['temp2'] = list()
    data['humd2'] = list()

    for ii in range(5):
        # Generate some random data points as a baseline
        data['temp1'].append(r.randint(60,90))
        data['humd1'].append(r.randint(20,100)/100.0)

        # The second room should look fairly similar to the first but not the same
        data['temp2'].append(data['temp1'][ii] - 3 + r.randint(0,5))
        data['humd2'].append(data['humd1'][ii] - 0.15 + r.randint(0,30)/100.0)

    # Retruning json data here so that the clinet can easily parse it
    return j.dumps(data)


# For testing purposes
# print(generate())

