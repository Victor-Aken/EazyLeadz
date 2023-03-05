

// ......Drop Down Profile ........//
let profile = document.getElementById('profile');
let profileDropdown = document.getElementById('profile-dropdown');

profile.addEventListener( 'click', () => {
    profileDropdown.classList.toggle('show');
})

window.addEventListener( 'mouseup', (event) => {
    if(profileDropdown.classList.contains('show') && event.target !== profileDropdown){
        profileDropdown.classList.remove('show');
    }
})

let help_resource_btn = document.querySelector('.help_dropdown');
let help_resource_dropdown = document.querySelector('.help_dropdown_container')

help_resource_btn.addEventListener( 'click', () => {
    help_resource_dropdown.classList.toggle('show');
})

window.addEventListener( 'mouseup', (e) => {
    if(help_resource_dropdown.classList.contains('show') && e.target !== help_resource_dropdown){
        help_resource_dropdown.classList.remove('show');
    }
})