const activity = document.getElementById('activity');
const table = document.getElementById('table');
const date = document.getElementById('date');
let no = 0;

const deleteTable = (id) => {
    console.log('a' + id)
    const row = document.getElementById('row' + id)
    row.innerHTML = '';
}


const submit = () => {
    no++;
    const value = activity.value;
    const datevalue = date.value
    // table.innerHTML +=  '<tr>'+
    //                         '<td> + do </td>'+
    //                         '<td> + activity </td>'+
    //                         '<td>Delete</td>'+
    //                     '</tr>';

    table.innerHTML +=  '<tr id="row'+no+'">'+
                            '<td>'+ no + '</td>'+
                            '<td>' + value + '</td>'+
                            '<td>' + datevalue + '</td>'+
                            '<td onclick="deleteTable('+no+')">Delete</td>'+
                        '</tr>';
    activity.value = '';  
    date.value = '';  
}


