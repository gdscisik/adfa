Official Project Repository for A.D.F.A

Örnek Site = gazzedestek.org
Anasayfa
- Aynen kodlanacak İnsani Yardım Hikayeleri yerine - Twitter & Reddit & Ekşisözlük gibi post/yorum sistemi kurulabilir.
- 
//GET: /categories?name=health

GET: /about-us
GET: /contact
GET: /reports/:year/:month/:reportName
<!-- GET: / -->
GET: /login
GET: /register
GET: /categories
GET: /categories/:categoryName
GET: /campaigns
GET: /campaigns/:campaignId
GET: /donate
GET: /donate/:campaignId/
GET: /account/:userId
GET: /forum/
GET: /forum/:donateCategory/:donateRequestTitle


Users
  - *userId
  - (private) email
  - (private) password (hashed)
  - (private) name
  - (private) surname
  - (private) fullAddress
  - (private) tckn_ssn
  - (private) profileImage
  - (public) nickname
  - (public) birthdate
  - (public) gender
  - (public) country
Campaigns
  - campaignId
  - image
  - title
  - description
  - fromDate
  - toDate
  - targetAmount
  - creatorId => userId 
  - createdCountry
  - status => active / passive
DonateRequest
  - createdAt => Date
  - creatorId => userId
  - requestTitle
  - requestDescription
  - attachment
  - donatorId => userId
  - status => active / passive
