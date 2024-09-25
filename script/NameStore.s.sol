// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "../lib/forge-std/src/Script.sol";
import "../src/contracts/NameStore.sol";

contract DeployNameStore is Script {
    function run() external {

        // NameStoreコントラクトのインスタンスをデプロイ
        NameStore nameStore = new NameStore();

        // デプロイされたコントラクトアドレスをログに出力
        console.log("Contract deployed at:", address(nameStore));

        // ブロードキャストを終了
        vm.stopBroadcast();
    }
}

