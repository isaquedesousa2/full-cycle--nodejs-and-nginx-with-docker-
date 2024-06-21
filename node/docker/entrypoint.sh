#!/bin/bash

dockerize -wait tcp://database:3306 -timeout 20s
npx prisma migrate dev --name init
npm run start