/* global $$, session */

/* eslint no-unused-vars:1,one-var:0,space-before-function-paren:0,padded-blocks:0,no-trailing-spaces:0,no-multiple-empty-lines:0 */

$$(document)(() => {
  $$('body').innerHTML += `<h1>Hi <span><input type="text" oninput="session.name=this.value" value="${session.name || 'Wie heißt du?'}" /></span></h1>`
})
