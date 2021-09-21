async function main() {
  // We get the contract to deploy
  const Seed = await ethers.getContractFactory("SeedToken");
  const seed = await Seed.deploy();

  console.log("seed deployed to:", seed.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });