const userNameElement = document.querySelector('.user');
const headerUserNameElement= document.querySelector('#name');

const localUserName = localStorage.getItem('userName');

const schoolNumberElement = document.querySelector('#schoolnum');
const localSchoolNum = document.querySelector('#schoolnum');
const localemail = document.querySelector('#email');
const emailElement = document.querySelector('#email');


const setUserNameInnerHtml = () => {
  headerUserNameElement.innerHTML = '${name} <span>님</span>';
  userNameElement.textContent = name;
};

const setSchoolNumber = () => {
  schoolNumberElement.innerHtml = '${schoolnum}';
};

const setEmail = () => {
  emailElement.innerHtmel = '${email}';
};

if (localUserName) {
  setUserNameInnerHtml(localUserName);
}
userNameElement.onclick = () => {
  const userName = prompt('이름을 입력해 주세요.');

  localStorage.setItem('userName', userName);

  setUserNameInnerHtml(userName);
};

schoolNumberElement.onclick = () => {
  const scNumber = prompt('학번을 입력해 주세요.');
  localStorage.setItem('scNumber', scNumber);
};

if (localSchoolNum) {
  setSchoolNumber(localSchoolNum);
}

if (localemail) {
  setEmail(localemail);
}

emailElement.onclick = () => {
  const myEmail = prompt('학번을 입력해 주세요.');
  localStorage.setItem('myEmail', myEmail);
};
