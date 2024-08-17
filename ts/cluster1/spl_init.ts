import { Keypair, Connection, Commitment } from "@solana/web3.js";
import { createMint } from '@solana/spl-token';
import wallet from "../wba-wallet.json"

// Import our keypair from the wallet file
const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

//Create a Solana devnet connection
const commitment: Commitment = "confirmed"; //66%
const connection = new Connection("https://api.devnet.solana.com", commitment);

(async () => {
    try {
        // Start here
        const mint = await createMint(connection, keypair,keypair.publicKey, null, 8  );
        console.log(mint.toBase58()); 
        //3KYXGRohRBRdjUG9o6YRWjcwqZJ7cdpL8i2hM8XuRJZg
    } catch(error) {
        console.log(`Oops, something went wrong: ${error}`)
    }
})()
