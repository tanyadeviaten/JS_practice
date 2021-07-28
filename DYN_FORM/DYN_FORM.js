'use strict';

let formDef1=
  [
    {label:'Название сайта:',kind:'longtext',name:'sitename'},
    {label:'URL сайта:',kind:'longtext',name:'siteurl'},
    {label:'Посетителей в сутки:',kind:'number',name:'visitors'},
    {label:'E-mail для связи:',kind:'shorttext',name:'email'},
    {label:'Рубрика каталога:',kind:'combo',name:'division',
      variants:[{text:'здоровье',value:1},{text:'домашний уют',value:2},{text:'бытовая техника',value:3}]},
    {label:'Размещение:',kind:'radio',name:'payment',
      variants:[{text:'бесплатное',value:1},{text:'платное',value:2},{text:'VIP',value:3}]},
    {label:'Разрешить отзывы:',kind:'check',name:'votes'},
    {label:'Описание сайта:',kind:'memo',name:'description'},
    {label:'Опубликовать:',kind:'submit'},
  ];

let formDef2=
  [
    {label:'Фамилия:',kind:'longtext',name:'lastname'},
    {label:'Имя:',kind:'longtext',name:'firstname'},
    {label:'Отчество:',kind:'longtext',name:'secondname'},
    {label:'Возраст:',kind:'number',name:'age'},
    {label:'Зарегистрироваться:',kind:'submit'},
  ];
function createForm(tag, arr) {
  let tagForm = document.createElement(tag);
  let body = document.querySelector('body');
  for (let elem of arr){
    let div = document.createElement('div');
    let span = document.createElement('span');
    let input = document.createElement('input');
      span.innerHTML = elem.label;
      tagForm.appendChild(div);
      div.appendChild(span);
      switch (elem.kind) {
        case 'longtext':
        case 'shorttext':
          input.type = 'text';
          div.appendChild(input);
          break;
        case 'number':
          input.type = 'number';
          div.appendChild(input);
          break;
        case 'combo':
          let select = document.createElement('select');
          for (let selectElem of elem.variants){
            let option = document.createElement('option');
            option.innerHTML = selectElem.text;
            option.value = selectElem.value;
            select.appendChild(option);
          }
          div.appendChild(select);
          break;
        case 'check':
          input.type = 'checkbox';
          input.checked = true;
          div.appendChild(input);
          break;
        case 'radio':
          for (let radioElem of elem.variants){
            let inputRadio = document.createElement('input');
            inputRadio.type = 'radio';
            inputRadio.name = elem.name;
            inputRadio.value = radioElem.value;
            div.appendChild(inputRadio);
            let label = document.createElement('label');
            label.innerHTML = radioElem.text;
            div.appendChild(label);
          }
          break;
        case 'memo':
          let textarea = document.createElement('textarea');
          div.appendChild(textarea);
          break;
        case 'submit':
          input.type = 'submit';
          input.value = elem.label.slice(0, -1);
          span.innerHTML = '';
          div.appendChild(input);
          break;
      }
      input.name = elem.name;
  }
  tagForm.action = 'http://fe.it-academy.by/TestForm.php';

  body.appendChild(tagForm);
  body.appendChild(document.createElement('hr'));
}
createForm('form', formDef1);
createForm('form', formDef2);