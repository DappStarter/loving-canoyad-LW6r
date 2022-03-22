require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife olympic system index random mad social just arctic army gift'; 
let testAccounts = [
"0x8c7c7c4e3ee9cbb0f24a896c4d2bf74ad683109cfe3cb08cbce25611d7f5b8c1",
"0x74bb78bb59f1cb96cf48a517e7376469e77b5ebb012493bd2571bc4a11f408c4",
"0x7c5d3386a422dc38c72986ea78a3e12e82ebfddcad814af84d4221dd1349fb8a",
"0xbe486d0f4783f00b8bb1cf74bff0bd99d6a4bd40659ec8457cefc7530a06817f",
"0x2096c957aa65e0c478cb7c433a77f0ea130a2a8dfa759b360b789fc2d488fca7",
"0x30735b0ce091512933047a21c471e2f2389f5f3500b747ce7d94849868da7b58",
"0xc0b89cdee0cbe03f5368d7a3d13a3b442b31f4f5f493d8dd450033a833b00120",
"0x6dcc06c9e011e973214d9534ef190118470f89e023fcda120034c001d9d1b3a6",
"0xf4cac8cd1cd9c0e8219117da6f67366c4bcc7fd3b6f59fa4bc021c755f7a8b4b",
"0xed3162785e002de3665da49b036868c3b01e02a3c9b46fb5aa3c39be880d63ba"
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


