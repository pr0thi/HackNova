import vault from 'node-vault';

const client = vault({
    apiVersion: 'v1',
    endpoint: process.env.VAULT_ADDR,
    token: process.env.VAULT_TOKEN
});

export const REACT_APP_GOOGLE_MAPS_KEY =
(await client.read('secret/data/pr0thi-hacknova-src-components-constants-js')).data.data.secret;