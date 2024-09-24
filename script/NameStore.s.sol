// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "../lib/forge-std/src/Script.sol";
import "../src/contracts/NameStore.sol";

contract DeployNameStore is Script {
    function run() external {
        vm.startBroadcast();
        new NameStore();
        vm.stopBroadcast();
    }
}


