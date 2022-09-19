#!/bin/bash

scp -i ~/.ssh/id_rsa_enjoy -r lib index.mjs package.json ice@c1-dev-app02:/jfs/scripts/fe