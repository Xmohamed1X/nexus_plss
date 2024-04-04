import { IDL } from "@/data/IDL";
import { BorshAccountsCoder } from "@coral-xyz/anchor";
import type { Commitment, Connection } from "@solana/web3.js";
import { PublicKey } from "@solana/web3.js";
import { USER_PREFIX } from "../../../constants/constants";
const idl = require("@/data/nexus.json")

export const getPaymentstreamFounder = async (
    connection: Connection,
    anchorWallet: any,
    commitment?: Commitment,
) => {

    const NEXUS_ADDRESS = new PublicKey("xce1Li2q1NYDBKvPbSEj6qA9fsoqEdYN4RHDaF9hBdn");
    const PROGRAM_ID = new PublicKey(idl.metadata.address)

    const [user] = PublicKey.findProgramAddressSync(
        [
            anchorWallet.publicKey.toBuffer(),
            Buffer.from(USER_PREFIX),
        ],
        PROGRAM_ID
    );


    const PAYMENT_STEAM = 17;
    const programAccounts = await connection.getProgramAccounts(
        NEXUS_ADDRESS,
        {
            filters: [{ memcmp: { offset: PAYMENT_STEAM, bytes: user.toBase58() } }],
            commitment,
        }
    );

    console.log(programAccounts.length)
    const InvitationDatas: any[] = [];
    const coder = new BorshAccountsCoder(IDL);
    programAccounts.forEach((account) => {
        try {
            const InvitationData: any = coder.decode(
                "RecuringPayment",
                account.account.data
            );

            InvitationData.pubkey = account.pubkey;
            if (InvitationData) {
                InvitationDatas.push(
                    // ...account,
                    // parsed:
                    InvitationData
                );
            }
        } catch (e) {
            console.log(`Failed to decode token manager data`);
        }
    });
    return InvitationDatas
    // .sort((a, b) =>
    //     a.pubkey.toBase58().localeCompare(b.pubkey.toBase58())
    // );
};



