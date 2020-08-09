const Twitter = require('twitter-lite');

async function main() {
  const client = new Twitter({
    consumer_key: 'API key',
    consumer_secret: 'API secret key',
    access_token_key: 'Access token',
    access_token_secret: 'Access token secret',
  });

  await client.get('account/verify_credentials');

  const status = 'nodejs rocks';

  await client.post('statuses/update', { status });

  console.log('done :) time to check your twitter');
}

main()
