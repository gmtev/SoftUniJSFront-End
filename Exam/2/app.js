window.addEventListener("load", solve);

function solve() {
    let firstNameInput = document.getElementById('first_name');
    let lastNameInput = document.getElementById('last_name');
    let phoneInput = document.getElementById('phone');
    let addBtn = document.getElementById('add_btn');
    let pendingList = document.getElementById('pending_contact_list');
    let verifiedList = document.getElementById('contact_list');
  
    addBtn.addEventListener('click', (eventche) => {
      eventche.preventDefault();
  
      let firstNameInputTrimmed = firstNameInput.value.trim();
      let lastNameInputTrimmed = lastNameInput.value.trim();
      let phone = phoneInput.value.trim();
  
      if (!firstNameInputTrimmed || !lastNameInputTrimmed || !phone) return;
  
      let li = document.createElement('li');
      li.className = 'contact';
  
      let nameSpan = document.createElement('span');
      nameSpan.className = 'names';
      nameSpan.textContent = `${firstNameInputTrimmed} ${lastNameInputTrimmed}`;
  
      let phoneSpan = document.createElement('span');
      phoneSpan.className = 'phone_number';
      phoneSpan.textContent = phone;
  
      let editBtn = document.createElement('button');
      editBtn.className = 'edit_btn';
      editBtn.textContent = 'Edit';
  
      let verifyBtn = document.createElement('button');
      verifyBtn.className = 'verify_btn';
      verifyBtn.textContent = 'Verify';
  
      li.appendChild(nameSpan);
      li.appendChild(phoneSpan);
      li.appendChild(editBtn);
      li.appendChild(verifyBtn);
  
      pendingList.appendChild(li);
  
      firstNameInput.value = '';
      lastNameInput.value = '';
      phoneInput.value = '';
  
      editBtn.addEventListener('click', () => {
        let [first, last] = nameSpan.textContent.split(' ');
        firstNameInput.value = first;
        lastNameInput.value = last;
        phoneInput.value = phoneSpan.textContent;
        li.remove();
      });
  

      verifyBtn.addEventListener('click', () => {
        li.remove();
  
        let verifiedLi = document.createElement('li');
        verifiedLi.className = 'verified_contact';
  
        let copyOfName = document.createElement('span');
        copyOfName.className = 'names';
        copyOfName.textContent = nameSpan.textContent;
  
        let copyOfNumber = document.createElement('span');
        copyOfNumber.className = 'phone_number';
        copyOfNumber.textContent = phoneSpan.textContent;
  
        let deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete_btn';
        deleteBtn.textContent = 'Delete';
  
        verifiedLi.appendChild(copyOfName);
        verifiedLi.appendChild(copyOfNumber);
        verifiedLi.appendChild(deleteBtn);
        verifiedList.appendChild(verifiedLi);
        deleteBtn.addEventListener('click', () => {
          verifiedLi.remove();
        });
      });
    });
  }
  
