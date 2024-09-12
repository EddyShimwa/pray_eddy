import { createClient } from 'contentful';

const client = createClient({
  space: 'zw0k579w2lxq',
  accessToken: 'h3c4euwJh1USepSnrnl0b8gE3j72F0sumO4wSGgW64E',
  environment: 'your_environment_id', // defaults to 'master' if not set
});

export const fetchEntries = async () => {
  const entries = await client.getEntries();
  return entries.items;
};
