import Twit from "twit";

require("dotenv").config();
const twitterClient = new Twit({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});

twitterClient.tweet = (message) => {
    twitterClient.post(
        "statuses/update",
        { status: message },
        (err, tweet, res) => {
            if (err) console.error(`error: ${err}`);
            else console.log("Success");
        }
    );
};

export default twitterClient;
