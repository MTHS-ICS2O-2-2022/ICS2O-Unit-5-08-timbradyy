// Copyright (c) 2020 Mr Coxall All rights reserved
//
// Created by: Tim Brady
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked() {
  const dividend = parseInt(document.getElementById("dividend").value)
  const divisor = parseInt(document.getElementById("divisor").value)
  let remainder = dividend
  let output = 0

  while (remainder >= divisor) {
    remainder -= divisor
    output++
  }
  if (remainder > 0) {
    document.getElementById("answer").innerHTML =
      dividend +
      " ÷ " +
      divisor +
      " = " +
      output +
      " with a remainder of " +
      remainder +
      "."
  } else {
    document.getElementById("answer").innerHTML =
      dividend + " ÷ " + divisor + " = " + output + "."
  }
}
