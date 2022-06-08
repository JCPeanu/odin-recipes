const container = document.querySelector('body');

const content = document.createElement('p');
content.textContent = 'Hey I\'m red!';
content.style.color = 'red'

const content2 = document.createElement('h3')
content2.textContent = 'I\'m a blue h3!'
content2.style.color = 'blue'

const content3 = document.createElement('div')
content3.style.border = '3px solid black'
content3.style.backgroundColor = 'pink'

const innercontent = document.createElement('h1')
innercontent.textContent = 'I\'m in a div'

const innercontent2 = document.createElement('p')
innercontent2.textContent = 'ME TOO!'

content3.appendChild(innercontent)
content3.appendChild(innercontent2)

container.appendChild(content);
container.appendChild(content2);
container.appendChild(content3);