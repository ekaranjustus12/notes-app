const button = document.querySelector('.btn');
const notesContainer = document.querySelector('.notes-container');
let notes = document.querySelectorAll('.input-box');
function showNotes(argument) {
	// body...
	notesContainer.innerHTML = localStorage.getItem('notes');
}
showNotes();
button.addEventListener('click',() =>{
	let inputBox = document.createElement('p');
	let img = document.createElement('img');
	inputBox.className='input-box';
	inputBox.setAttribute('contentEditable','true');
	img.src = 'icons8-delete-100.png';
	notesContainer.appendChild(inputBox).appendChild(img);
})
notesContainer.addEventListener('click',function (e) {
	// body...
	if(e.target.tagName==='img'){
		e.target.parentElement.remove();
		updateStorage();
	}
})
function updateStorage(){
	localStorage.setItems('notes',notesContainer.innerHTML);
}