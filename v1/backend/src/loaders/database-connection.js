const { initializeApp } = require('firebase/app');
const { getFirestore } = require("firebase/firestore");
// const { getDatabase, ref, set } = require("firebase/firestore");
const { connect } = require("firefose");
const firebase = require("firebase/app");

var admin = require("firebase-admin");

var serviceAccount = require("../../serviceaccountkey.json");



/*const firebaseConfig = {
	"type": "service_account",
	"project_id": "adfa-world",
	"private_key_id": "e6d65707d0f9ba17930866c106f4e54516f0c7db",
	"private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC+2qVAKs0rhANM\niIRcqTmiiZY5abc+nLycvFcXevLxnqQl+1+yp2ACnkzQ8XRutdQtN5HQUH369ZAw\nX+0M/hAgkz2Fp2Q+w8Rt9AaAkVOYLglcvOhsB78aM70WGgA54Teal2deSBqe00oz\ngRQNpTarY9SqaEKNyL1R53Zzz41AAMl+dctzjad1RfXVwLAKrR0FOJVkq4AhMq0U\nKDJ4DmwJnDYFuSVMrYo8erPhhJBXD5KstSCcvcHT70jQ7SArwdOW4//hiyS8lReA\nyLWo8FxUptAgdZdvKYL3HXzi3RNYiLHGEq8HS+nBtsDx5inp3ZRxaE/kD+SgjX7k\nk+EHVNgRAgMBAAECggEAN4+hgg+z0RJKf5JSrkMZo0bYs/ghv5mTkzGFTTGe3lZn\nxSLsFi+B1OFOzZktYzmN/mfqDDISqueoRVz3vsuL2F/lDi7QETGe0r+y0OT96BSm\n5xebti9/I9qiFngVTsRRErE3B4yIK2qpdFsEgoBxbO3QMJfPoEUrUFfI9SgcH+BY\n6IpQjJvDA69w8Yg1aa02UB4TE3U1EDC9zyLwpy4zn/hzHUIk6r4dgPNcdTc92MZa\ncO9+XGkJyRH7TMl/kfK+hlEnr2xbMRBR9pZHQQo1pX94T+voEbgt7HG9HUc+0qnX\nv92geyYB/4ORKVtcDYguEmd+NNwitu4N0iebPfLZ7QKBgQD8//BCj0eYwLpG5ZJS\nvt18SbftFQihY/G5GzzTHI/bzPAS/YlDeUZPME6LSqFCdmDAPS43zHF8L5zRzyiK\ndIDqmPEI+1Ua/7a0W+XBJNXssxqJC2gCzXPY+AFoOG6yUb43OWqgfaFFThznvyBZ\nx5YQS5bEj1szeNUY5eELVqhaewKBgQDBHgtBmnwHfmzXMTcxs/PNeggOCdUgYz/F\nshb4VUwZ8Uoogql/493XbqXyge7lfHmymsKkVHxVEi10Dt3RsBWM8cUaIHwEfFk9\nvHqKCm/fO0njcvmyBZo+Hyf5kyVzjtAHNo/tQEAuz1TfE45B59rPSyO4faOkwZKv\nHqCfDvXH4wKBgB6j3HQjKBee17B4YyU0SlygDO9gicAJ+59gZhhnMCD9i+Gw5OvQ\nByzV+90wt6D19zew8ST+1IumtIZQYWeLPoWq6h4dWiw/5d+n9YZTsLjO5BrOz9Tv\nDuWq+3ikxPtBnRjRElHHhT2AfU2vvvpAirMEhIjfl7r/Gke+p2eZIiB7AoGAbWki\nI3bs0ioUbA7cIHK9rCp5Kcr0TrcsSEtPrD5XMVN9Glp8wZJN+2Ia7rwipy3QnRoF\nMKkVD/WOfvR1Q/mpHANWEilZWglBXjLMkiy7mRO0FwLq6Ks36f4o3cM6MrA0uAF3\npYkDVAHvKbugm0JKu6rsf/feoNdyzXhis/r70NUCgYAeq9DWVn1n0ExBv0fTCCeH\n0RuopwqF5gZjEFhHQ+22NU2QH3DNd7MMdq9i6fN49JKmTvoXhPkQ9JS/qscuGtNt\nAM4htURp4vj7eAcSKuCuEYb4lf/q3ws/wqI/oYRlVKnuDuQWQUzHoqCtMjkkpKxa\nG8/W+YwZGoknWnmQJgVo7A==\n-----END PRIVATE KEY-----\n",
	"client_email": "firebase-adminsdk-6qzbg@adfa-world.iam.gserviceaccount.com",
	"client_id": "118082169408736036275",
	"auth_uri": "https://accounts.google.com/o/oauth2/auth",
	"token_uri": "https://oauth2.googleapis.com/token",
	"auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
	"client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-6qzbg%40adfa-world.iam.gserviceaccount.com"
};*/
// const app = initializeApp(firebaseConfig);
// initializeApp(firebaseConfig);
//const database = getDatabase();
const connectDatabase = async () => {
	//await connect(firebaseConfig, "https://adfa-world-default-rtdb.firebaseio.com/");
	await admin.initializeApp({
		credential: admin.credential.cert(serviceAccount),
		databaseURL: "https://adfa-world-default-rtdb.firebaseio.com/"
	});
}
module.exports = {
	connectDatabase,
};
/*const firebaseConfig = {
	apiKey: "AIzaSyBVml7ciNuC3tDZAdACiYuQ2MLKzPUxSiA",
	authDomain: "adfa-world.firebaseapp.com",
	databaseURL: "https://adfa-world-default-rtdb.firebaseio.com",
	projectId: "adfa-world",
	storageBucket: "adfa-world.appspot.com",
	messagingSenderId: "493209296402",
	appId: "1:493209296402:web:3b6ba5d7a0d4d11df9c2cb",
	measurementId: "G-CPSSZQN4T1"
}; */