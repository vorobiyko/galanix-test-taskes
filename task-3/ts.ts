const inputEl = document.querySelector('#input') as HTMLInputElement;
const btnSendEl = document.querySelector('.body-container-form-btns-send');
const btnResetEl = document.querySelector('.body-container-form-btns-reset');

interface DataType {
    alpha_two_code: string;
    country: string;
    domains: string[];
    name: string;
    state_province: null;
    web_pages: string[];
}

let responseData: DataType = null;

const getValue = () => {
    return inputEl.value;
}


// @ts-ignore
const makeReq = async() => {
        let country = getValue();
        const response =  await fetch(`http://universities.hipolabs.com/search?country=${country}`);
            responseData =  await response.json();
            const table = buildTable(responseData);
            container.appendChild(table);
}

btnSendEl.addEventListener('click', makeReq);

const buildTable = (data) => {
    const table = document.createElement('table');
    console.log(data)
    for (const key in data) {
        console.log(key)
        if (data[key] !== null && data[key] !== undefined) {
            const row = table.insertRow();
            const cellId = row.insertCell(0);
            const cellName = row.insertCell(1);
            const cellCountry = row.insertCell(2);
            const cellAlphaTwoCode = row.insertCell(3);
            const cellDomains = row.insertCell(4);
            const cellWebPages = row.insertCell(5);
            const cellStateProvince = row.insertCell(6);

            const webPagesContainer = document.createElement('div');
            data[key].web_pages.forEach((webPage) => {
                const webPageLink = document.createElement('a');
                webPageLink.href = webPage;
                webPageLink.textContent = webPage;
                webPagesContainer.appendChild(webPageLink);
            });


            cellId.textContent = key;
            cellName.textContent = data[key].name
            cellCountry.textContent = data[key].country
            cellAlphaTwoCode.textContent = data[key].alpha_two_code
            cellDomains.textContent = data[key].domains
            cellWebPages.appendChild(webPagesContainer)

            cellStateProvince.textContent = data[key].state_province
        }
    }
    return table;
}


const container = document.getElementById('table-container');

btnResetEl.addEventListener('click', () => {
    inputEl.value = '';
    container.innerHTML = '';
});