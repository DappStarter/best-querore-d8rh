require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clog tackle foot blanket razor situate unusual gown light army gasp'; 
let testAccounts = [
"0xc317ebbcca0bac0096ae475f3f5468800845d2812a53a6e8df34daa562910cce",
"0x38dc1d078e28b5ccfa5bb0d8e97843c23c47d360a020631ee3ba7197d1f69386",
"0x7df538ae4c759dad6b2d6e8d0c29cffdea8f6c689a61412f2958abfd9fc798c9",
"0xb89d8984db0d28220869b331a2e65730bf7d00685d4e338ad4cc61ce3f90f620",
"0x38e97ed2a0348484e0f6395cfd00ded5b4fbcbd52fc371fe201dc63b7c84a159",
"0xe258905686a32a5379f93cbb1d1209d95e1cdad4885b876633206868bc82f492",
"0xaaa6730c65af7e43e737bebd01903e1a8281fdc7f67e607ad309fdf70f759514",
"0x53b55f28900b62f1fb70700bca98d1e0263e836c5a1410dc1597bc6a3100fb6f",
"0x9822efc70143c1dcd4f77310a490e4a24e463b2e4963477265810632fa13f9f3",
"0xa49b92b77403bae4143ffdb21eeebee593bb96dfedb6f64745797cd1f700e812"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


