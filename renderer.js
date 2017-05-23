window.addEventListener('load', function () {
  fetch('https://api.travis-ci.org/v3/owner/mozilla')
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        // Find some way to get to execute .catch()
        console.log('some error');
      }
    })
    .then(data => {
      var moz = document.createElement("li");
      moz.className = 'mozilla';
      moz.innerHTML = `<a href="#" data-owner="${data.login}"><img src="${data.avatar_url}"><p>${data.login}</p></a>`;
      document.querySelector('.accounts ul').appendChild(moz);

      document.querySelector('.accounts li.mozilla').addEventListener('click', function (ev) {
        document.querySelector('.repos ul').innerHTML = "";
        document.querySelector('.active ul').innerHTML = "";

        fetch('https://api.travis-ci.org/v3/owner/mozilla/repos?active=true&include=repository.current_build')
          .then(response => {
            if (response.ok) {
              return response.json()
            } else {
              console.log('some error');
            }})
          .then(data => {
            data.repositories.forEach(function (el) {
              let id = el.current_build ? el.current_build.number : '';
              let state = el.current_build ? el.current_build.state : '';
              let event = el.current_build ? el.current_build.event_type : '';
              let li = document.createElement('li');
              li.className = `${state}`;
              li.innerHTML = `
<h3>${el.slug}</h3>
<p>${id}
${state}
${event}
${el.default_branch.name}</p>`;
              document.querySelector('.repos ul').appendChild(li);
            });

          });
        fetch('https://api.travis-ci.org/v3/owner/mozilla/active')
          .then(response => {
            if (response.ok) {
              return response.json()
            } else {
              console.log('some error');
            }})
          .then(data => {
            console.log(data);
            data.builds.forEach(function (el) {
              let li = document.createElement('li');
              li.className = `${el.state}`;
              li.innerHTML = `
<h3>${el.number} ${el.state} ${el.branch.name}</h3>
<p>${el.commit.message}</p>`;
              document.querySelector('.active ul').appendChild(li);
            });

          });
      });
    });



  fetch('https://api.travis-ci.org/v3/owner/travis-ci')
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        // Find some way to get to execute .catch()
        console.log('some error');
      }
    })
    .then(data => {
      var trvs = document.createElement("li");
      trvs.className = 'travis';
      trvs.innerHTML = `<a href="#" data-owner="${data.login}"><img src="${data.avatar_url}"><p>${data.login}</p></a>`;
      document.querySelector('.accounts ul').appendChild(trvs);

      document.querySelector('.accounts li.travis').addEventListener('click', function (ev) {
        document.querySelector('.repos ul').innerHTML = "";
        document.querySelector('.active ul').innerHTML = "";

        fetch('https://api.travis-ci.org/v3/owner/travis-ci/repos?active=true&include=repository.current_build')
          .then(response => {
            if (response.ok) {
              return response.json()
            } else {
              console.log('some error');
            }})
          .then(data => {
            data.repositories.forEach(function (el) {
              let id = el.current_build ? el.current_build.number : '';
              let state = el.current_build ? el.current_build.state : '';
              let event = el.current_build ? el.current_build.event_type : '';
              let li = document.createElement('li');
              li.className = `${state}`;
              li.innerHTML = `
<h3>${el.slug}</h3>
<p>${id}
${state}
${event}
${el.default_branch.name}</p>`;
              document.querySelector('.repos ul').appendChild(li);
            });
          });

        fetch('https://api.travis-ci.org/v3/owner/travis-ci/active')
          .then(response => {
            if (response.ok) {
              return response.json()
            } else {
              console.log('some error');
            }})
          .then(data => {
            console.log(data);
            data.builds.forEach(function (el) {
              let id = el.current_build ? el.current_build.number : '';
              let state = el.current_build ? el.current_build.state : '';
              let event = el.current_build ? el.current_build.event_type : '';
              let li = document.createElement('li');
              li.className = `${el.state}`;
              li.innerHTML = `
<h3>${el.number} ${el.state} ${el.branch.name}</h3>
<p>${el.commit.message}</p>`;;
              document.querySelector('.active ul').appendChild(li);
            });

          });
      });
    });

});
