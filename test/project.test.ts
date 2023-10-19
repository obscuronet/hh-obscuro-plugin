// tslint:disable-next-line no-implicit-dependencies
import { assert } from "chai";
import path from "path";

import { ObscuroGatewayClient } from "./ObscuroGatewayClient";

import { useEnvironment } from "./helpers";

describe("Integration tests examples", function () {
  describe("Hardhat Runtime Environment extension", function () {
    useEnvironment("hardhat-project");

    it("Should add the example field", function () {
      assert.instanceOf(
        this.hre.gateway,
        ObscuroGatewayClient
      );
    });
  });
  
});
