# The following is a basic simulation of two rooms with
# 5 data points per roon per measurements

import json as j
import random as r

def generate(num):
    data = dict()
    
    for ii in range(num):
        data['temp'+str(ii)] = list()
        data['humd'+str(ii)] = list()
        for jj in range(5):
            if ii == 0:
                # Generate some random data points as a baseline
                data['temp0'].append(r.randint(60,90))
                data['humd0'].append(r.randint(20,100)/100.0)
            else:
                # The second room should look fairly similar to the first but not the same
                data['temp'+str(ii)].append(data['temp0'][jj] - 3 + r.randint(0,5))
                data['humd'+str(ii)].append(data['humd0'][jj] - 0.15 + r.randint(0,30)/100.0)

    # Retruning json data here so that the clinet can easily parse it
    return j.dumps(data)


# For testing purposes
# print(generate())

