import {
    AnchorProvider, Program, Wallet, web3
} from '@project-serum/anchor';
import { IDENTIFIER_PREFIX } from "../../constants/constants";
const idl = require("../../../data/nexus.json")


export async function init_identifier(
    anchorWallet: any,
    connection: web3.Connection,
    wallet: any
) {

    const provider = new AnchorProvider(
        connection, anchorWallet, { "preflightCommitment": "processed" },
    );

    const PROGRAM_ID = new web3.PublicKey(idl.metadata.address)
    const program = new Program(idl, idl.metadata.address, provider);

    const [identifier] = web3.PublicKey.findProgramAddressSync(
        [
            Buffer.from(IDENTIFIER_PREFIX),
        ],
        PROGRAM_ID
    );

    const tx = await program.methods.initIdentifier().accounts({
        identifier: identifier,
        payer: anchorWallet.publicKey,
        systemProgram: web3.SystemProgram.programId
    })
        .transaction()
    // .rpc({
    //     commitment: "confirmed",
    // })

    wallet.sendTransaction(tx, connection, {
        preflightCommitment: "confirmed"
    })
    return tx;
}
