// // console.log('Week10'); // used to test that my Javascript was connected to my HTML index
// // let myInsInventoryForm = document.createElement('form');


// // let myInsTypeLabel = document.createElement('label');
// // let myInsTypeInput = document.createElement('input');

// // let myInsMakeLabel = document.createElement('label');
// // let myInsMakeInput = document.createElement('input');

// // let myInsModelLabel = document.createElement('label');
// // let myInsModelInput = document.createElement('input');

// // let myInsColorLabel = document.createElement('label');
// // let myInsColorInput = document.createElement('input');

// // myInsTypeLabel.innerHTML = 'Type';
// // myInsMakeLabel.innerHTML = 'Make';
// // myInsModelLabel.innerHTML = 'Model';
// // myInsColorLabel.innerHTML = 'Color';


// // myInsInventoryForm.append(myInsTypeLabel);
// // myInsInventoryForm.append(myInsTypeInput);
// // myInsInventoryForm.append(myInsMakeLabel);
// // myInsInventoryForm.append(myInsMakeInput);

// // myInsInventoryForm.append(myInsModelLabel);
// // myInsInventoryForm.append(myInsModelInput);
// // myInsInventoryForm.append(myInsColorLabel);
// // myInsInventoryForm.append(myInsColorInput);
// // document.body.append(myInsInventoryForm);

// // mySubmitButton = document.createElement('button');
// // mySubmitButton.innerHTML = 'Submit';
// // myInsInventoryForm.append(mySubmitButton);

// // let myInventoryTable = document.createElement('table');
// // let myInventoryTr = document.createElement('tr');
// // let myTdType = document.createElement('tr');
// // let myTdMake = document.createElement('tr');
// // let myTdModel = document.createElement('tr');
// // let myTdColor = document.createElement('tr');
// // myTdType.innerHTML = 'Type';
// // myTdMake.innerHTML = 'Make';
// // myTdModel.innerHTML = 'Model';
// // myTdColor.innerHTML = 'Color'

// // myInventoryTable.append(myInventoryTr);
// // myInventoryTr.append(myTdType);
// // myInventoryTr.append(myTdMake);
// // myInventoryTr.append(myTdModel);
// // myInventoryTr.append(myTdColor);

// // document.body.append(myInventoryTable);





// // console.log(myForm);
// // console.log(myNameLabel);
// // console.log(myNameInput);

// // class Instrument {
// //     constructor(type, make, model, color) {
// //         this.type = type;
// //         this.make = make;
// //         this.model = model;
// //         this.color = color;
// //         this.instrument = [];
// //     }
// // }
// // addInstrument(instrument) {
// //     this.instruments.push(instrument);
// // }

// // let instruments = [];
// // let instrumentId = 0;

// // onClick('new-instrument', () => {
// //     instruments.push(new Instrument(instrumentId++, getValue('new-instrument')))
// //     drawDOM();
// // })

// // function onClick(id, action) {
// //     let element = document.getElementById(id);
// //     element.addEventListener('click', action);
// //     return element;
// // }

// // function getValue(id) {
// //     return document.getElementById(id).value;
// // }

// function drawDOM() {
//     let instrumentsDiv = document.getElementById('instruments');
//     clearElement(instrumentsDiv);
//     for (instrument of instruments) {
//         let table = createInsrumentTable(instruments);
//         let title = document.createElement('h2');
//         title.innerHTML = 'My Instrument Inventory';
//         title.appendChild(title);
//         instrumentsDiv.appendChild(title);
//         instrumentsDiv.appendChild(table);
//         createInstrumentRow(table, instrument);
//     }
// }

// // function createInstrumentRow(table, instrument) {
// //     let row = table.insertRow(2);
// //     row.insertCell(0).innerHTML = instrument.type;
// //     row.insertCell(1).innerHTML = instrument.make;
// //     row.insertCell(2).innerHTML = instrument.model;
// //     row.insertCell(3).innerHTML = instrument.color;

// // }

// // function createInstrumentTable(instrument) {
// //     let table = document.createElement('table');

// // }

// // function clearElement(element) {
// //     while(element.firstChild) {
// //         element.removeChild(element.firstChild);
// //     }
// // }

// function createNewInstrument(instrument){
//     let btn = document.createElement('button');
//     btn.className = 'btn btn-primary';
//     btn.innerHTML = 'Add'
//     btn.onclick = () => {
//         instrument.instruments.push(new Instrument(getValue(`type-input`), getValue(`make-input`), getValue(`model-input`), getValue(`color-input`)));
//         drewDom();
//     };
//     return btn;

// };

// function addData(element) {
//     let table = document.createElement('table')
//     table.setAttribute('class', 'table-dark table-striped');
//     let row = table.instertRow(0);
//     let typeColumn = document.createElement('th');
//     let makeColumn = document.createElement('th');
//     let modelColumn = document.createElement('th');
//     let colorColumn = document.createElement('th');
//     typeColumn.innerHTML = 'Type';
//     makeColumn.innerHTML = 'Make';
//     ModelColumn.innerHTML = 'Model';
//     colorColumn.innerHTML = 'Color';
//     row.appendChild(typeColumn);
//     row.appendChild(makeColumn);
//     row.appendChild(modelColumn);
//     row.appendChild(colorColumn);
//     let formRow = table.insertRow(1);
//     let typeTh = document.createElement('th');
//     let makeTh = document.createElement('th');
//     let modelTh = document.createElement('th');
//     let colorTh = document.createElement('th');
//     let createTh = document.createElement('th');
//     let typeInput = document.createElement('input');
//     typeInput.setAttribute('type', 'text');
//     typeInput.setAttribute('class', 'form-control');
//     let makeInput = document.createElement('input');
//     makeInput.setAttribute('type', 'text');
//     makeInput.setAttribute('class', 'form-control');
//     let modelInput = document.createElement('input');
//     modelInput.setAttribute('type', 'text');
//     modelInput.setAttribute('class', 'form-control');
//     let colorInput = document.createElement('input');
//     colorInput.setAttribute('type', 'text');
//     colorInput.setAttribute('class', 'form-control');
//     let newInstrumentButton = createNewInsrumentButton(instrument);
//     typeTh.appendChild(typeInput);
//     makeTh.appendChild(makeInput);
//     modelTh.appendChild(modelInput);
//     colorTh.appendChild(colorInput);
//     createTh.appendChild(newInstrumentButton);
//     formRow.appendChild(typeTh);
//     formRow.appendChild(makeTh);
//     formRow.appendChild(modelTh);
//     formRow.appendChild(colorTh);
//     formRow.appendChild(createTh);
//     return table;

    
// }
// console.log(createInstrumentsTable);




function addData(el) {
    var table = document.getElementById('list');
    var tr = table.insertRow();
    el.form.querySelectorAll('input').forEach(function(el) {
      var cell = tr.appendChild(document.createElement('td'));
      cell.textContent = el.value;
    });

  }
