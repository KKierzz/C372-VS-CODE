# Feature: Prepare payment details
## 1. User goal
As a pet owner, I want to review the selected pet service and amount before payment.
## 2. Scope
Review selected service and amount before payment
Catalogue (ID, name, numeric price):
1, Vaccination, 35
2, Pet Grooming, 50
3, Boarding, 80

Use the server catalogue price. Do not accept a client-supplied payment amount.
If the request includes an `amount` field in the query string or request body,
reject it with HTTP 400 and {"error":"Client-supplied amount is not accepted"}.
This amount-rejection response takes precedence if the serviceId is also unknown.

## 3. Request
GET /payments/prepare/:serviceId

## 4. Service catalogue
id, service name, price
1, Vaccination, 35
2, Pet Grooming, 50
3, Boarding, 80

## 5. Successful response
HTTP 200 with exactly five JSON fields:
serviceId (number), serviceName (string), amount (number),
currency (string, "sgd"), status (string, "READY_FOR_PAYMENT").
The status means the details are ready for review; no payment is initiated.

## 6. Unsuccessful response
Any `serviceId` that does not exactly match a catalogue ID:
HTTP 404 with {"error":"Service not found"}.
Missing `serviceId` at GET /payments/prepare: HTTP 404 with
{"error":"Service not found"}.
Client-supplied amount: HTTP 400 with
{"error":"Client-supplied amount is not accepted"}.

## 7. Acceptance criteria
AC1: GET /payments/prepare/1 -> 200; Vaccination; amount 35; serviceId 1.
AC2: GET /payments/prepare/2 -> 200; Pet Grooming; amount 50; serviceId 2.
AC3: GET /payments/prepare/3 -> 200; Boarding; amount 80; serviceId 3.
AC4: GET /payments/prepare/999 -> 404; the exact unknown-service error object above.
AC5: Each success has exactly the five agreed fields,
correct types, catalogue values, "sgd" and "READY_FOR_PAYMENT".
AC6: A request with an `amount` query parameter returns HTTP 400 and
the exact client-supplied-amount error object above.
AC7: A request with an `amount` field in a JSON or URL-encoded request body
returns HTTP 400 and the exact client-supplied-amount error object above.
AC8: If a request has both an unknown serviceId and a client-supplied amount,
it returns HTTP 400 and the exact client-supplied-amount error object above.
AC9: GET /payments/prepare -> 404 with the exact unknown-service error object above.
Access: No login required for this classroom mock.
Out of scope: charging money, gateway integration, transactions,
new database tables, EJS pages or changes to existing features.


## 8. Open questions
No unresolved questions.
