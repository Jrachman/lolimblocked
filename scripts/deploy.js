async function main() {
    const LolImBlocked = await ethers.getContractFactory("LolImBlocked")

    const myNFT = await LolImBlocked.deploy()
    await myNFT.deployed()
    console.log("Contract deployed to address:", myNFT.address)
}

main().then(() => process.exit(0)).catch((error) => {
    console.error(error)
    process.exit(1)
})
