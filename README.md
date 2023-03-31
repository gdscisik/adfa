## Official Project Repository for A.D.F.A

To run the project:

1. Run `npm install` to download the required packages to run the project.
2. Go ./v1/backend and run `npm run start`
3. Go ./v1/frontend and run `npm run dev`

You can check backend at `http://localhost:3232/`

You can check frontend at `http://localhost:5173/`

## API Design

- GET: /about-us
- GET: /contact
- GET: /reports/:year/:month/:reportName
- GET: /login
- POST: /login
- GET: /register
- POST: /register
- GET: /categories
- GET: /categories/:categoryName
- POST: /categories/:categoryName
- GET: /campaigns
- GET: /campaigns/:campaignId
- POST: /campaigns/:campaignId
- GET: /donate
- POST: /donate/:campaignId
- GET: /donate/:campaignId
- GET: /account/:userId
- GET: /requests/
- GET: /requests/:requestId
- GET: /requests/new-request
- POST: /requests/new-request

## Database Design

Users
  - *userId
  - (private) email
  - (private) password (hashed)
  - (private) name
  - (private) surname
  - (private) fullAddress
  - (private) tckn_ssn
  - (private) imageSource
  - (public) nickname
  - (public) birthdate
  - (public) gender
  - (public) country
  - (public) age
  - (private) userId

Campaigns
  - campaignId
  - imageSource
  - title
  - description
  - fromDate
  - toDate
  - targetAmount
  - creatorId => userId 
  - createdCountry
  - isActive => active / passive

DonateRequest
  - createdDate => Date
  - creatorId => userId
  - title
  - description
  - attachment
  - imageSource
  - isActive
  - donatorId => userId
  - categoryList

Category
  - brief 
  - categoryBackgroundColor
  - categoryColor 
  - categoryId 
  - description
  - imageSource
  - name  

Order
  - completedDate
  - isCampaign
  - isCompleted
  - isRequest
  - orderId
  - userId
