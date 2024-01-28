document.title = "Dutivul";

// const DivSearchTools = document.getElementById('SearchTools');
// const InputSearchTools = document.getElementById('inputSearch');
// InputSearchTools.classList.add('inputSearchTools');

// !! Lainnya tap
const LainnyaTools = document.getElementById('Lainnya-tools');
const ButtonLainnya = document.querySelector('.lainnya-type-1');
let isLainnyaToolsVisible = false; // Variabel untuk melacak keadaan tampilan LainnyaTools

ButtonLainnya.innerHTML = `<i class="fa-solid fa-chevron-up fa-lg"></i>Lebih sedikit`;
let baliknama = ButtonLainnya.innerHTML = `<i class="fa-solid fa-chevron-down" id="icon-Lainnya"></i><p id="Lainnya">Lainnya</p>`;

LainnyaTools.setAttribute("Id", "LainnyaNight");

ButtonLainnya.addEventListener('click', () => {
  if (isLainnyaToolsVisible) {
    LainnyaTools.style.display = "inline";
    isLainnyaToolsVisible = false;
    ButtonLainnya.innerHTML = `<i class="fa-solid fa-chevron-up fa-lg"></i> Lebih sedikit`;
  } else {
    LainnyaTools.style.display = "none";
    isLainnyaToolsVisible = true;
    ButtonLainnya.innerHTML = baliknama;
  }
});

const popupType1 = document.getElementById('popup-type1');
const closeType1 = document.getElementById('close-popup');

// window.onload = () => {
//   if (!localStorage.getItem('popupShown')) {
//     setTimeout(() => {
//       popupType1.style.display = "flex";
//       localStorage.setItem('popupShown', 'true');
//     }, 2000);
//   }
// };

// closeType1.addEventListener('click', () => {
//   popupType1.style.display = "none";
// });

// Variabel
const Main = document.getElementById('main')
const MainSection = document.getElementById('mainSection');
const Nav = document.getElementById('nav');
const CloseNav = document.getElementById('close-nav');
const IconClose = document.getElementById('icon-close');

// Style
MainSection.style.transition = "0.3s";
Nav.style.transition = "0.3s";
IconClose.style.transition = "0.4s ease";

let mobileClose = window.matchMedia('(max-width: 900px)');

let KondisiCloseNav = false;
let kondisiClosenavMobile = false;

// Condition / funciton
CloseNav.addEventListener('click', () => {
  if (KondisiCloseNav) {
    fungsidekstop();
  } else if (kondisiClosenavMobile) {
    fungsimobile(mobileClose);

  } else {
    kondisidesktop();
    kondisimobile();
  };
});

let kondisiClosenavMobileOpened = true;

if (mobileClose.matches === kondisiClosenavMobileOpened) {
  MainSection.addEventListener("click", () => {
    Nav.classList.add("closeNav")
    Nav.classList.remove('openNav')
    MainSection.style.marginLeft = "0px";
  })
}

// Fungsi nav desktop (open close aside nav)
function fungsidekstop() {
  Nav.classList.add('closeNav')
  Nav.classList.remove('openNav')
  MainSection.style.marginLeft = "0px";

  KondisiCloseNav = false;
}

function kondisidesktop() {
  Nav.classList.add('openNav')
  Nav.classList.remove('closeNav')
  MainSection.style.marginLeft = "260px";

  KondisiCloseNav = true;
}
// Fungsi nav Mobile (open close aside nav)
function fungsimobile() {
  // Nav.classList.add('closeNav')
  Nav.classList.add('openNav')

  KondisiCloseNav = false;
}

function kondisimobile() {
  Nav.classList.add('closeNav')
  KondisiCloseNav = true;
}

IconClose.addEventListener('click', () => {
  IconClose.classList.toggle('ActiveRotate')
})

// Close nav modify
let mobileCloseV2 = window.matchMedia('(max-width: 900px)');
let isNavOpen = false; // Menandakan apakah navigasi terbuka atau tidak


function toggleNav() {
  if (isNavOpen) {
    MainSection.style.marginLeft = "0px";
    isNavOpen = false;
  } else {
    MainSection.style.marginLeft = "240px";
    MainSection.classList.add("MobileOpenNavAside");
    Nav.classList.add('MobileOpenNavAside');
    isNavOpen = true;

  }
}

// Tambahkan event listener ke elemen CloseNav
if (mobileCloseV2.matches) {
  CloseNav.addEventListener('click', toggleNav);
}

// Popup name new user
const PopupNameUser = document.getElementById('popup-nameUser');

addEventListener('load', () => {
  if (!localStorage.getItem('indikatorSudah')) {
    setTimeout(() => {
      PopupNameUser.style.display = "flex";
      document.body.style.overflowY = "hidden"
      localStorage.setItem('indikatorSudah', "true")
    }, 1500);
  }
});

const nameUser = document.getElementById('nameUser');
const userInput = document.getElementById('InputNameuser');
const buttonUser = document.getElementById('button-user');

// window.addEventListener('load', () => {
//   const dataLocalNameUser = localStorage.getItem("nameUser");
//   if (dataLocalNameUser) {
//     const NamaUserNode = document.createElement('h1');
//     NamaUserNode.innerHTML = dataLocalNameUser;

//     nameUser.append(NamaUserNode);
//     PopupNameUser.style.display = "none";
//     document.body.style.overflow = "auto";
//   }
// });


// buttonUser.addEventListener('click', () => {
//   let ValueNameUser = userInput.value;
//   localStorage.setItem("nameUser", ValueNameUser);

//   if (PopupNameUser) {
//     const NamaUserNode = document.createElement('h1');
//     NamaUserNode.innerHTML = localStorage.getItem('nameUser');

//     nameUser.append(NamaUserNode);
//     PopupNameUser.style.display = "none";
//   } else {
//     userInput.style.border = "1px solid red"
//   }


// });

window.addEventListener('load', () => {
  const dataLocalNameUser = localStorage.getItem("nameUser");
  if (dataLocalNameUser) {
    const spanNameUser = document.createElement('span');
    spanNameUser.textContent = localStorage.getItem('nameUser');

    const existingNameUser = document.querySelector('.nameUser');
    existingNameUser.textContent = ''; // Clear existing content
    existingNameUser.appendChild(document.createTextNode(' ')); // Add space
    existingNameUser.appendChild(spanNameUser);

    PopupNameUser.style.display = "none";
  }
});

buttonUser.addEventListener('click', () => {
  let ValueNameUser = userInput.value;
  localStorage.setItem("nameUser", ValueNameUser);

  const alertNoNameUser = document.getElementById("NoNameUserError");
  let MasukkanNama = "Masukkan nama";

  if (!ValueNameUser) {
    alertNoNameUser.innerHTML = `${MasukkanNama}`;
    alertNoNameUser.style.marginTop = "-8px";
    alertNoNameUser.style.display = "flex";
    userInput.style.border = "1px solid red";

  } else if (ValueNameUser) {
    const spanNameUser = document.createElement('span');
    spanNameUser.textContent = localStorage.getItem('nameUser');

    const existingNameUser = document.querySelector('.nameUser');
    existingNameUser.textContent = ''; // Clear existing content
    existingNameUser.appendChild(document.createTextNode(' ')); // Add space
    existingNameUser.appendChild(spanNameUser);
    document.body.style.overflow = "auto";

    PopupNameUser.style.display = "none";
  }

  userInput.addEventListener('input', () => {
    userInput.style.border = "none";
    alertNoNameUser.style.display = "none";
  });
});

// Dark Mode

addEventListener('load', () => {
  if (!localStorage.getItem('indikatorSudah')) {
    setTimeout(() => {
      PopupNameUser.style.display = "flex";
      document.body.style.overflowY = "hidden"
      localStorage.setItem('indikatorSudah', "true")
    }, 1500);
  }
});


let content = document.getElementsByTagName('body')[0];
let DarkMode = document.getElementById('dark-change');
// let inputSearchAside = document.getElementById('inputSearchNight');
let aside = document.getElementsByTagName('aside');
let NavSticky = document.getElementById('Nav-Sticky');
let DarkBannerBackground = document.getElementById('dark-background');
let HeadingMain = document.getElementById('Heading-main');
let Logo = document.getElementById("logo");

// List Aside
let ListAside1 = document.getElementById('ListToolsNight1');
let ListAside2 = document.getElementById('ListToolsNight2');
let ListAside3 = document.getElementById('ListToolsNight3');

// Card Tools
let focusArea = document.getElementById('focusArea');
let HeadClockNight = document.getElementById('HeadClockNight');
let ParagClockNight = document.getElementById('ParagClockNight');

// Budgetiv
let wrapperBudgetiv = document.getElementById('wrapper-budgetiv');
let titleBudgetiv = document.getElementById('title-Budgetiv');
let paragBudgetiv = document.getElementById('paragBudgetiv');
let buttonBudgetiv = document.getElementById('buttonBudgetiv');
let AnchorBudgetiv = document.getElementById('a-budgetiv')

// Todo
let todoList = document.getElementById('todoList');
let HeadTodoNight = document.getElementById('HeadTodoNight');
let ParagTodoNight = document.getElementById('ParagTodoNight');

let catatan = document.getElementById('catatan');
let HeadNoteNight = document.getElementById('HeadNoteNight');
let ParagNoteNight = document.getElementById('ParagNoteNight');

let masukanNight = document.getElementById('masukanNight');
let versionNight = document.getElementById('versionNight');
let SettingMenu = document.getElementById('Setting-List');

let Lainnya = document.getElementById('Lainnya');
let IconLainnya = document.getElementById('icon-Lainnya');

let ListToolsActiveNight = document.getElementById('ListToolsActiveNight')

// (Lihat semua, Featured tools)
let focusAreaDisplay = document.getElementById('focusAreaDisplay');
let HeadClockNightDisplay = document.getElementById('HeadClockNightDisplay');
let ParagClockNightDisplay = document.getElementById('ParagClockNightDisplay');

let todoListDisplay = document.getElementById('todoListDisplay');
let HeadTodoNightDisplay = document.getElementById('HeadTodoNightDisplay');
let ParagTodoNightDisplay = document.getElementById('ParagTodoNightDisplay');

let catatanDisplay = document.getElementById('catatanDisplay');
let HeadNoteNightDisplay = document.getElementById('HeadNoteNightDisplay');
let ParagNoteNightDisplay = document.getElementById('ParagNoteNightDisplay');

let catatanPengeluaran = document.getElementById("catatanPengeluaran");

// Search Engine
let BoxSearchSE = document.getElementById('Box-searchEng');
let ButtonSE = document.getElementById('button-SE');
let InputSE = document.getElementById('InputSe');

let judulSection3 = document.getElementById('judul-Section-3');

// remove Heading card
const cardTodoMobile = window.matchMedia(' (max-width: 500px) ');
if (cardTodoMobile.matches) {
  // HeadTodoNight.style.display="none";
  // HeadNoteNight.style.display="none";
  // HeadClockNight.style.display="none";
}

// Dark mode btn
DarkMode.addEventListener('click', () => {
  DarkMode.classList.toggle('active'); content.classList.toggle('night');
  Nav.classList.toggle('ActiveNight');
  NavSticky.classList.toggle('ActiveNight'); DarkBannerBackground.classList.toggle('ActiveNight'); HeadingMain.classList.toggle('ActiveNight');
  CloseNav.classList.toggle('ActiveNight'); Logo.classList.toggle('ActiveNight');
  ListAside1.classList.toggle('ActiveNight'); ListAside2.classList.toggle('ActiveNight');
  ListAside3.classList.toggle('ActiveNight'); LainnyaTools.classList.toggle('ActiveNight');
  focusArea.classList.toggle('ActiveNight'); todoList.classList.toggle('ActiveNight');
  catatan.classList.toggle('ActiveNight'); HeadClockNight.classList.toggle('ActiveNight'); ParagClockNight.classList.toggle('ActiveNight');
  HeadTodoNight.classList.toggle('ActiveNight'); ParagTodoNight.classList.toggle('ActiveNight'); HeadNoteNight.classList.toggle('ActiveNight'); ParagNoteNight.classList.toggle('ActiveNight'); masukanNight.classList.toggle('ActiveNight');
  versionNight.classList.toggle('ActiveNight'); Lainnya.classList.toggle('ActiveNight');
  IconLainnya.classList.toggle('ActiveNight'); SettingMenu.classList.toggle("ActiveNight");
  focusAreaDisplay.classList.toggle('ActiveNight'); HeadClockNightDisplay.classList.toggle('ActiveNight'); ParagClockNightDisplay.classList.toggle('ActiveNight'); todoListDisplay.classList.toggle("ActiveNight"); HeadTodoNightDisplay.classList.toggle('ActiveNight'); ParagTodoNightDisplay.classList.toggle("ActiveNight"); catatanDisplay.classList.toggle("ActiveNight"); HeadNoteNightDisplay.classList.toggle('ActiveNight'); ParagNoteNightDisplay.classList.toggle("ActiveNight"); judulSection3.classList.toggle('ActiveNight'); BoxSearchSE.classList.toggle("ActiveNight"); ButtonSE.classList.toggle('ActiveNight'); InputSE.classList.toggle('ActiveNight'); wrapperBudgetiv.classList.toggle('ActiveNight'); titleBudgetiv.classList.toggle('ActiveNight'); paragBudgetiv.classList.toggle('ActiveNight'); buttonBudgetiv.classList.toggle("ActiveNight"); AnchorBudgetiv.classList.toggle("ActiveNight"); catatanPengeluaran.classList.toggle('ActiveNight');
});

let darkModeAbsolute = matchMedia(' (min-width: 900px) ');

if (darkModeAbsolute.matches) {
  // Dark mode btn
  window.addEventListener('pageshow', () => {
    DarkMode.classList.toggle('active'); content.classList.toggle('night');
    Nav.classList.toggle('ActiveNight');
    NavSticky.classList.toggle('ActiveNight'); DarkBannerBackground.classList.toggle('ActiveNight'); HeadingMain.classList.toggle('ActiveNight');
    CloseNav.classList.toggle('ActiveNight'); Logo.classList.toggle('ActiveNight');
    ListAside1.classList.toggle('ActiveNight'); ListAside2.classList.toggle('ActiveNight');
    ListAside3.classList.toggle('ActiveNight'); LainnyaTools.classList.toggle('ActiveNight');
    focusArea.classList.toggle('ActiveNight'); todoList.classList.toggle('ActiveNight');
    catatan.classList.toggle('ActiveNight'); HeadClockNight.classList.toggle('ActiveNight'); ParagClockNight.classList.toggle('ActiveNight');
    HeadTodoNight.classList.toggle('ActiveNight'); ParagTodoNight.classList.toggle('ActiveNight'); HeadNoteNight.classList.toggle('ActiveNight'); ParagNoteNight.classList.toggle('ActiveNight'); masukanNight.classList.toggle('ActiveNight');
    versionNight.classList.toggle('ActiveNight'); Lainnya.classList.toggle('ActiveNight');
    IconLainnya.classList.toggle('ActiveNight'); SettingMenu.classList.toggle("ActiveNight");
    focusAreaDisplay.classList.toggle('ActiveNight'); HeadClockNightDisplay.classList.toggle('ActiveNight'); ParagClockNightDisplay.classList.toggle('ActiveNight'); todoListDisplay.classList.toggle("ActiveNight"); HeadTodoNightDisplay.classList.toggle('ActiveNight'); ParagTodoNightDisplay.classList.toggle("ActiveNight"); catatanDisplay.classList.toggle("ActiveNight"); HeadNoteNightDisplay.classList.toggle('ActiveNight'); ParagNoteNightDisplay.classList.toggle("ActiveNight"); judulSection3.classList.toggle('ActiveNight'); BoxSearchSE.classList.toggle("ActiveNight"); ButtonSE.classList.toggle('ActiveNight'); InputSE.classList.toggle('ActiveNight'); wrapperBudgetiv.classList.toggle('ActiveNight'); titleBudgetiv.classList.toggle('ActiveNight'); paragBudgetiv.classList.toggle('ActiveNight');
  });
}

// Lihat semua featured
let LihatSemua = document.getElementById('Lihat-semua-FT-1');
let Display_LihatSemua = document.getElementById('Display-lihatSemua')
let IconBackLS = document.getElementById('backArrow-DisplayLS');
const LihatSemuaFT1 = matchMedia(" (max-width: 500px) ");

function LihatSemuaClick() {
  MainSection.style.display = "none";
  NavSticky.style.display = "none";

  Display_LihatSemua.style.display = "flex";
}

if (LihatSemuaFT1.matches) {
  LihatSemua.addEventListener('click', LihatSemuaClick);
}

IconBackLS.addEventListener('click', () => {
  Display_LihatSemua.style.display = "none";
  MainSection.style.display = "flex";
  NavSticky.style.display = "flex";
})


// Search engine google modify
let errorMessageInputNullSearch = document.createElement('p');
errorMessageInputNullSearch.innerHTML = "Type value first";

let GoogleSearchQuery = "https://www.google.com/search?q=";
let ErrorMessageSE = document.getElementById('ErrorMessageSE');

// Button function
ButtonSE.addEventListener('click', () => {
  let ValueInputSearch = InputSE.value;
  if (!ValueInputSearch) {
    errorMessageInputNullSearch.classList.add('errorMessageInputNullSearch')
    BoxSearchSE.classList.add('BoxSearchSE-error-search')
    ErrorMessageSE.append(errorMessageInputNullSearch);
  } else {
    window.open(GoogleSearchQuery + ValueInputSearch, "_blank")
    InputSE.value = "";
  }
})

// Enter function
InputSE.addEventListener('keyup', (e) => {
  let ValueInputSearchEnter = InputSE.value;
  if (!ValueInputSearchEnter) {
    errorMessageInputNullSearch.classList.add('errorMessageInputNullSearch')
    BoxSearchSE.classList.add('BoxSearchSE-error-search')

    ErrorMessageSE.append(errorMessageInputNullSearch);
  } else if (e.key === "Enter") {
    window.open(GoogleSearchQuery + ValueInputSearchEnter, "_blank")
    InputSE.value = "";
  }
})

// Typing function
function TypingFuncSE() {
  errorMessageInputNullSearch.remove();
  BoxSearchSE.classList.remove("BoxSearchSE-error-search");
}

InputSE.addEventListener('input', TypingFuncSE);

// Button card tools link
function functionbtntodo() {
  window.open('http://zavado.rf.gd/?i=1', "_blank");
};

function functionNote() {
  window.open('http://zavado.rf.gd/index6not/note.html', "_blank");
};

// let tesProm = prompt("Tuliskan nama sekolah");
// tesProm = tesProm.toLowerCase();

// switch(tesProm){
//   case "man 1 kota tangerang":
//     alert("Lokasi: Cimone");
//     break;
//   case "sman 8 kota tangerang":
//     alert("lokasi: Jl. besi raya");
//     break;
//   default: 
//     alert("invalid data");
//     break;
// }