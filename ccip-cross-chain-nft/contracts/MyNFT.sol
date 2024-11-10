// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * THIS IS AN EXAMPLE CONTRACT THAT USES HARDCODED VALUES FOR CLARITY.
 * THIS IS AN EXAMPLE CONTRACT THAT USES UN-AUDITED CODE.
 * DO NOT USE THIS CODE IN PRODUCTION.
 */
contract MyNFT is ERC721URIStorage, Ownable {
    string constant TOKEN_URI =
        "https://ipfs.io/ipfs/QmTKNJyrRpzbnB4XUyKKRDxtTaLhvc5sXbcdWz5tSg9sEM/qn_ccip_nft.json";
    uint256 internal tokenId;

    constructor() ERC721("MyNFT", "MNFT") Ownable(msg.sender) {}

    function mint(address to) public onlyOwner {
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, TOKEN_URI);
        unchecked {
            tokenId++;
        }
    }
}
