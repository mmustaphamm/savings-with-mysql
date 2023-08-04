import axios, { AxiosResponse } from 'axios';

 export async function makePostRequest() {
    const url = '/journalentries?command=acc-gl';

    // Headers to be included in the request
    const headers = {
        'Authorization': '72he89je',
        'Fineract-Platform-TenantId': 'erudhj',
        'Content-Type': 'application/json',
        'User-Agent': 'api'
    };

    // Data to be sent in the POST request
    const data = {
        "officeId": 1,
        "transactionDate": "2 August 2023",
        "comments": "product purchase",
        "locale": "en",
        "currencyCode": "NGN",
        "dateFormat": "dd MMMM yyyy",
        "credits": [],
        "debits": [
            {
                "glAccountId": 123,
                "amount": 3000
            }
        ],
        "operationType": "Credit",
        "referenceNumber": 'Wr45838',
        "customerAccounts": [
            {
                "customerAccountId": 112345678,
                "amount": 3000
            }
        ]
    };

    try {
        const response: AxiosResponse = await axios.post(url, data, {
            headers: headers,
        });

        console.log('POST request successful!');
        console.log('Response:', response.data);
        return response.data
    } catch (error) {
        console.error('POST request failed.');
        if (error.response) {
            console.error('Response:', error.response.data);
        } else {
            console.error('Error:', error.message);
        }
    }
}
