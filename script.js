'use strict';

console.log('js loaded');

function getRepos(username) {
  fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson));
  console.log('getrepos');
}

function displayResults(repos){
  $('#results-list').empty();
  $('.results').removeClass('hidden');
  for (let i = 0; i < repos.length; i++) {
  $('#results-list').append(`<li> <p>${repos[i].name}</p> <a href="${repos[i].html_url}">${repos[i].html_url}</a><hr></li>`)
  };
}


function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const username = $('#js-search-term').val();
    getRepos(username);
  });
} 

$(watchForm);