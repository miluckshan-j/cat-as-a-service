#!/usr/bin/env node
import minimist from "minimist";
import { FetchCatImagesQueries } from "api.types";
import { compositeImage } from "./utils/compositeImage";

const argv = minimist(process.argv.slice(1));

const {
  greeting = "Hello",
  who = "You",
  width = 400,
  height = 500,
  color = "Pink",
  size = 100,
} = argv;

const imageParameters: FetchCatImagesQueries = {
  height,
  width,
  color,
  size,
};

compositeImage(greeting, who, imageParameters);
