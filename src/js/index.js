/* global $$, session */

/* eslint no-unused-vars:1,one-var:0,space-before-function-paren:0,padded-blocks:0,no-trailing-spaces:0,no-multiple-empty-lines:0 */

if (session.feelings === undefined) {
  session.feelings = {}
}

window.pageOpen = (id) => {
  $$('body main').innerHTML = navbar[id].page()
}

const navbar = [
  {
    title: 'Home',
    name: 'Home',
    icon: 'home',
    page: () => {
      return `<h1>Hi <br /><span><input type="text" oninput="session.name=this.value" value="${session.name || 'Wie heißt du?'}" /></span></h1>
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
      </div>`
    }
  },
  {
    title: 'About me',
    name: 'About me',
    icon: 'address-card',
    page: () => {
      return `
        <div class="bio" oninput="session.bio=this.innerText" contenteditable>${session.bio || 'Schreibe hier etwas über dich.'}</div>
      `
    }
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

        let i = 0
        for (const item of navbar) {
          res += `<span onclick="pageOpen(${i})" class="navitem" title="${item.title}"><i class="fas fa-${item.icon}"></i></span>`
          i++
        }

        return res
      })()}
    </nav>
  `
})
