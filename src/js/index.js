/* global $$, session */

/* eslint no-unused-vars:1,one-var:0,space-before-function-paren:0,padded-blocks:0,no-trailing-spaces:0,no-multiple-empty-lines:0 */

const navbar = [
  {
    title: 'Home',
    name: 'Home',
    icon: 'home'
  }
]

$$(document)(() => {
  $$('body').innerHTML += `
    <main>
      <h1>Hi <br /><span><input type="text" oninput="session.name=this.value" value="${session.name || 'Wie heißt du?'}" /></span></h1>
      <br /><br />
      <div class="feeling">
        <h3>Wie geht es dir gerade?</h3>
      </div>
    </main>
    <nav>
      ${(() => {
        let res = ''
        for (const item of navbar) {
          res += `<span class="navitem" title="${item.title}"><i class="fas fa-${item.icon}"></i></span>`
        }
        return res
      })()}
    </nav>
  `
})
