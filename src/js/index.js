/* global $$, session */

/* eslint no-unused-vars:1,one-var:0,space-before-function-paren:0,padded-blocks:0,no-trailing-spaces:0,no-multiple-empty-lines:0 */

if (session.feelings === undefined) {
  session.feelings = {}
}

const navbar = [
  {
    title: 'Home',
    name: 'Home',
    icon: 'home'
  }
]

const feelings = [
  {
    icon: '<i class="fas fa-grin"></i>'
  },
  {
    icon: '<i class="fas fa-smile"></i>'
  },
  {
    icon: '<i class="fas fa-grimace"></i>'
  },
  {
    icon: '<i class="fas fa-frown"></i>'
  },
  {
    icon: '<i class="fas fa-angry"></i>'
  }
]

$$(document)(() => {
  $$('body').innerHTML += `
    <main>
      <h1>Hi <br /><span><input type="text" oninput="session.name=this.value" value="${session.name || 'Wie heißt du?'}" /></span></h1>
      <br /><br />
      <div class="feeling">
        <h3>Wie geht es dir gerade?</h3>
        <div>
          ${(() => {
            let res = ''

            for (const item of feelings) {
              const choosed = session.feelings[new Date().toString().substr(0, 15)] || ''
              // console.log(item, choosed, `<span onclick="$$('.feeling span i').removeClass('active');this.classList.add('active');session.feelings[new Date().toString().substr(0, 15)]='${item.icon.replace(/"/g, '\\"')}'" class="${choosed === item.icon ? 'active' : ''}">${item.icon}</span>`)
              // res += `<span onclick="$$('.feeling span i').removeClass('active');this.classList.add('active');session.feelings[new Date().toString().substr(0, 15)]='${item.icon.replace(/"/g, '\\"')}'" class="${choosed === item.icon ? 'active' : ''}">${item.icon}</span>`

              res += `<span onclick="for(const elem of $$('.feeling span')){elem.classList.remove('active')}this.classList.add('active');session.feelings[new Date().toString().substr(0, 15)]=this.innerHTML" class="${item.icon === choosed ? 'active' : ''}">${item.icon}</span>`
            }

            return res
          })()}
        </div>
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
