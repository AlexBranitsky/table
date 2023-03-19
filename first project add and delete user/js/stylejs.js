'use strict';
void function () {
    const table = document.querySelector('.provaiders');
    const btnAdd = document.querySelector('.btnadd');
    btnAdd.addEventListener('click', addNewRow(table));
    const btnDel = document.querySelector('.btndelete');
    btnDel.addEventListener('click', deleteRows(table));
}()


function addNewRow (table) {
    const tbody = table.querySelector('.body');
    return (e) => {
        const templateNewRow = tbody.querySelector('.new_row');
        const newRowHtml = templateNewRow.content.cloneNode(true).querySelector('tr');

        const btnSave = newRowHtml.querySelector('.save');
        btnSave.addEventListener('click', saveNewRow(table, newRowHtml));

        const btnCancel = newRowHtml.querySelector('.cancel');
        btnCancel.addEventListener('click', cancel(table, newRowHtml));
        
        tbody.appendChild(newRowHtml);
    }
}
function cancel (table, newRowHtml) {
    return (e) => {
        table.querySelector('.body').removeChild(newRowHtml);
    }
}

function saveNewRow (table, newRowHtml) {
    return (e) => {
        const nameInput = newRowHtml.querySelector('.name');
        const emailInput = newRowHtml.querySelector('.email');
        const cityInput = newRowHtml.querySelector('.city');
        const telephoneInput = newRowHtml.querySelector('.telephone');

        const nameValue = nameInput.value;
        const emailValue = emailInput.value;
        const cityValue = cityInput.value;
        const telephoneValue = telephoneInput.value;

        table.querySelector('.body').removeChild(newRowHtml);

        createRowInTable (table, {
            name:nameValue,
            email:emailValue,
            city:cityValue,
            telephone:telephoneValue,
        })
    }
}
function createRowInTable (table, row) {
    const templateShowRow = table.querySelector('.show_row');
    const showRowInTable = templateShowRow.content.cloneNode(true).querySelector('tr');

    const nameTd = showRowInTable.querySelector('.name');
    const emailTd = showRowInTable.querySelector('.email');
    const cityTd = showRowInTable.querySelector('.city');
    const telephoneTd = showRowInTable.querySelector('.telephone');

    nameTd.innerText = row.name;
    emailTd.innerText = row.email;
    cityTd.innerText = row.city;
    telephoneTd.innerText = row.telephone;

    const btnDelete = showRowInTable.querySelector('.delete');
    btnDelete.addEventListener('click', delRow(table, showRowInTable));
    
    const btnEdit = showRowInTable.querySelector('.edit');
    btnEdit.addEventListener('click', editRow(table, showRowInTable));

    table.querySelector('.body').appendChild(showRowInTable);
}
function delRow (table, row) {
    return (e) => {
        table.querySelector('.body').removeChild(row);
    };
}

function editRow (table, row) {
    return (e) => {
        const templateEditRow = table.querySelector('.edit_row');
        const editRowHTML = templateEditRow.content.cloneNode(true).querySelector('tr');

        const inputName = editRowHTML.querySelector('.name');
        const inputEmail = editRowHTML.querySelector('.email');
        const inputCity = editRowHTML.querySelector('.city');
        const inputTelephone = editRowHTML.querySelector('.telephone');

        inputName.value = row.querySelector('.name').innerText;
        inputEmail.value = row.querySelector('.email').innerText;
        inputCity.value = row.querySelector('.city').innerText;
        inputTelephone.value = row.querySelector('.telephone').innerText;

        const btnSave = editRowHTML.querySelector('.btn_save');
        btnSave.addEventListener('click', saveNewRow(table, editRowHTML));

        const btnCancel = editRowHTML.querySelector('.btn_cancel');
        btnCancel.addEventListener('click', cancel(table, editRowHTML));

        table.querySelector('.body').replaceChild(editRowHTML, row);
        }
};
function deleteRows (table, ) {
    return (e) => {
        const rows = table.querySelectorAll('tr');
        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            const chBox = row.querySelector('input[type=checkbox]');
            if (chBox.checked) {
                delRow(table,row)();
            };
        };
    };
}; 
