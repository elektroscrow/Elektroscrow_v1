const {run} = require("hardhat")

async function verify(contractAddress, args) {
    console.log("Trying to Verify contract")
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        })
        console.log("verified")
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("already verified")
        } else {
            console.log(e)
        }
    }
}

module.exports = {verify}