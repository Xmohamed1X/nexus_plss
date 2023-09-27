import {
    AnchorProvider,
    BN,
    Program, web3
} from '@project-serum/anchor';
import { USER_PREFIX } from "../../constants/constants";
const idl = require("../../../data/staking.json")

export async function update_user(
    anchorWallet: any,
    connection: web3.Connection,
) {

    const provider = new AnchorProvider(
        connection, anchorWallet, {"preflightCommitment": "processed"},
        );

    const PROGRAM_ID = new web3.PublicKey(idl.metadata.address)
    const program = new Program(idl, idl.metadata.address, provider);

    const [user] = web3.PublicKey.findProgramAddressSync(
        [
            anchorWallet.publicKey.toBuffer(),
            Buffer.from(USER_PREFIX),
        ],
        PROGRAM_ID
    );

        const tx = await program.methods.closeUser().accounts({
                user: user,
                authority: anchorWallet.publicKey,
                systemProgram: web3.SystemProgram.programId
        })
        // .transaction()
        .rpc({
            commitment: "confirmed",
        })

    return tx;
    }