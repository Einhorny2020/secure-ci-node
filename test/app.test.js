const assert = require("node:assert");
const express = require("express");

assert.strictEqual(
  typeof express,
  "function",
  "Express doit être correctement importable"
);

const expectedApplicationName = "secure-ci-node";

assert.strictEqual(
  expectedApplicationName,
  //"secure-ci-node",
  "mauvais-nom",
  "Le nom de l’application est incorrect"
);

console.log("Tous les tests sont réussis.");
