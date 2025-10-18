import Vault from "node-vault";

const vault = Vault({
  endpoint: process.env.VAULT_ADDR,
  token: process.env.VAULT_TOKEN,
});

const secret = await vault.read("secret/data/pr0thi-hacknova-leak-2d6ee19e");

export const REACT_APP_GOOGLE_MAPS_KEY =
secret.data.data.secret;