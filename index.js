//NFT collection list (or array)
const NFTs = [];

// Minting of NFT
function mintNFT(_name, _skinType, _fabricType, _fabricDesign) {
// NFT metadata taking value from the function parameter
 const NFT = {
    name: _name,
    "Skin Type": _skinType,
    "Fabric Type": _fabricType,
    "Fabric Design": _fabricDesign,
 }
 NFTs.push(NFT);
 console.log("Minted: ", NFT);
}


// List all available minted NFT'S
function listNFTs() {
    // loop for iterating through the NFT array
    for (let j = 0; j < NFTs.length; j++) {
        console.log("ID: \t", j + 1);
        console.log("\nName: \t", NFTs[j].name);
        console.log("\nSkin Type: \t", NFTs[j]["Skin Type"]);
        console.log("\nFabric Type: \t", NFTs[j]["Fabric Type"]);
        console.log("\nFabric Design: \t", NFTs[j]["Fabric Design"], "\n");
    }
}

function getTotalSupply() {
    console.log("Total NFT Supply: \t", NFTs.length);
}

// Calling or invoking of respective function
mintNFT("Yaya", "Chocolate", "Cashime", "Senator");
mintNFT("Mercy", "White", "Crop Top", "Lasca");

listNFTs()
getTotalSupply()