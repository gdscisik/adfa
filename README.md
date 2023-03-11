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
  - isActive => active / passive
DonateRequest
  - createdAt => Date
  - creatorId => userId
  - requestTitle
  - requestDescription
  - attachment
  - donatorId => userId
  - status => active / passive

/*const newUser1 = await UsersService.add({
    "userId": 1,
    "email": "john.doe@example.com",
    "password": "hashed_password",
    "name": "John",
    "surname": "Doe",
    "fullAddress": "123 Main Street, Anytown USA",
    "tckn_ssn": "1234567890",
    "imageSource": "https://example.com/profile.jpg",
    "nickname": "johndoe",
    "birthdate": new Date(),
    "age": 21,
    "gender": "male",
    "country": "USA"
  });
  const newUser2 = await UsersService.add({
    "userId": 2,
    "email": "jane.smith@example.com",
    "password": "hashed_password",
    "name": "Jane",
    "surname": "Smith",
    "fullAddress": "456 Elm Street, Anycity USA",
    "tckn_ssn": "0987654321",
    "imageSource": "https://example.com/profile.jpg",
    "nickname": "janesmith",
    "birthdate": new Date(),
    "age": 21,
    "gender": "female",
    "country": "USA"
  });
  const newUser3 = await UsersService.add({
    "userId": 3,
    "email": "bob.johnson@example.com",
    "password": "hashed_password",
    "name": "Bob",
    "surname": "Johnson",
    "fullAddress": "789 Oak Street, Anyville USA",
    "tckn_ssn": "5555555555",
    "imageSource": "https://example.com/profile.jpg",
    "nickname": "bobjohnson",
    "birthdate": new Date(),
    "age": 21,
    "gender": "male",
    "country": "USA"
  });
  const newCampaign1 = await CampaignService.add({
    "campaignId": 1,
    "imageSource": "https://example.com/image.jpg",
    "title": "Help the homeless",
    "description": "Donate to help provide shelter and food for the homeless population in our community.",
    "fromDate": new Date(),
    "toDate": new Date(),
    "targetAmount": 10000,
    "creatorId": 3,
    "createdCountry": "USA",
    "isActive": true
  });
  const newCampaign2 = await CampaignService.add({
    "campaignId": 2,
    "imageSource": "https://example.com/imageSource.jpg",
    "title": "Save the whales",
    "description": "Donate to help save endangered whale species.",
    "fromDate": new Date(),
    "toDate": new Date(), 
    "targetAmount": 5000,
    "creatorId": 2,
    "createdCountry": "USA",
    "isActive": true
  });
  const newCampaign3 = await CampaignService.add({
    "campaignId": 3,
    "imageSource": "https://example.com/imageSource.jpg",
    "title": "Clean up the oceans",
    "description": "Donate to help clean up plastic pollution from our oceans.",
    "fromDate": new Date(),
    "toDate": new Date(),
    "targetAmount": 7500,
    "creatorId": 1,
    "createdCountry": "USA",
    "isActive": true
  });

  const newDonate1 = await DonateRequestService.add({
    "donateRequestId": 1,
    "createdAt": new Date(),
    "creatorId": 2,
    "requestTitle": "Help me pay for medical bills",
    "requestDescription": "I was recently diagnosed with a serious illness and need help paying for my medical bills.",
    "attachment": "https://example.com/attachment.pdf",
    "donatorId": 1,
    "isActive": true
  })
  const newDonate2 = await DonateRequestService.add({
    "donateRequestId": 2,
    "createdAt": new Date(),
    "creatorId": 3,
    "requestTitle": "Fundraising for school supplies",
    "requestDescription": "I am a teacher at a low-income school and need help raising funds for school supplies for my students.",
    "attachment": "https://example.com/attachment.pdf",
    "donatorId": 3,
    "isActive": true
  })
  const newDonate3 = await DonateRequestService.add({
    "donateRequestId": 3,
    "createdAt": new Date(),
    "creatorId": 1,
    "requestTitle": "Help fund a community garden",
    "requestDescription": "I am part of a community group that wants to create a community garden, but we need funds to make it happen.",
    "attachment": "https://example.com/attachment.pdf",
    "donatorId": 2,
    "isActive": true
  })*/
  