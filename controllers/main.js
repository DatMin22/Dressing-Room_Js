
const getElement = (selector) => document.querySelector(selector);
const listtopclothes = [];
const listbotclothes = [];
const listshoes = [];
const listhandbags = [];
const listnecklaces = [];
const listhairstyle = [];
const listbackground = [];

const getClothesList = () => {
    const promise = axios({
        method: 'GET',
        url: 'https://65152a4fdc3282a6a3cdf18c.mockapi.io/api/datmin/DressRoom'
    })





    // get data thành công
    promise
        .then((result) => {

            console.log(result.data);
            // nếu type của sản phẩm =là 'topclothes' thì hiện bên tab áo,
            // tương tự với các type còn lại
            result.data.forEach(element => {
                if (element.type === 'topclothes') {
                    listtopclothes.push(element);
                }
                if (element.type === 'botclothes') {
                    listbotclothes.push(element);
                }
                if (element.type === 'shoes') {
                    listshoes.push(element);
                }
                if (element.type === 'handbags') {
                    listhandbags.push(element);
                }
                if (element.type === 'necklaces') {
                    listnecklaces.push(element);
                }
                if (element.type === 'hairstyle') {
                    listhairstyle.push(element);
                }
                if (element.type === 'background') {
                    listbackground.push(element);
                }


            });

            // show dữ liệu lên giao diện
            rendeTable(listtopclothes, '#topclothes');
            rendeTable(listbotclothes, '#botclothes');
            rendeTable(listshoes, '#shoes');
            rendeTable(listhandbags, '#handbags');
            rendeTable(listnecklaces, '#necklaces');
            rendeTable(listhairstyle, '#hairstyle');
            rendeTable(listbackground, '#background');
           


        })

        // get data thất bại
        .catch((error) => {
            console.log('error: ', error);

        })

        // luôn chạy dù thành công hay thất bại
        .finally(() => {

        })
}
getClothesList();


// hiện(show) dữ liệu từ API lên giao diện(UI)
const rendeTable = (clothesList, idPlaceShow) => {
    let htmlContent = ''
    clothesList.forEach((cloth) => {
        htmlContent += `
        <div class="card col-md-4 text-center">
            <img class="card-img-top" src="${cloth.imgSrc_jpg}" alt="">
            <div class="card-body">
                <h4 class="card-title ">${cloth.name}</h4>
                <button class="btn btn-info" onclick="thuDo('${cloth.imgSrc_png}','${cloth.type}')">Thử đồ</button>
            </div>
        </div>

        `;

      
    });

    getElement(idPlaceShow).innerHTML = htmlContent;
}

const thuDo = (imageUrl, type) => {
    // ====================
    // thay áo
    if (type === 'topclothes') {
        let bikinitop = document.querySelector('.bikinitop');
        bikinitop.style.background = `url(../${imageUrl}`;
        bikinitop.style.backgroundSize = 'cover';
        bikinitop.style.zIndex = '2';
        bikinitop.style.backgroundRepeat = "no-repeat";
    }
    // thay quần
    if (type === 'botclothes') {
        let bikinibottom = document.querySelector('.bikinibottom');
        bikinibottom.style.background = `url(../${imageUrl}`;
        bikinibottom.style.backgroundSize = 'cover';
        bikinibottom.style.zIndex = '2';
        bikinibottom.style.backgroundRepeat = "no-repeat";
    }
    // thay giày
    if (type === 'shoes') {
        let shoes = document.querySelector('.feet');
        shoes.style.background = `url(../${imageUrl}`;
        shoes.style.backgroundSize = 'cover';
        shoes.style.zIndex = '2';
        shoes.style.backgroundRepeat = "no-repeat";
    }
    // thay tuis xasch
    if (type === 'handbags') {
        let handbags = document.querySelector('.handbag');
        handbags.style.background = `url(../${imageUrl}`;
        handbags.style.backgroundSize = 'cover';
        handbags.style.zIndex = '2';
        handbags.style.backgroundRepeat = "no-repeat";
    }
    // thay vòng cổ
    if (type === 'necklaces') {
        let necklaces = document.querySelector('.necklace');
        necklaces.style.background = `url(../${imageUrl}`;
        necklaces.style.backgroundSize = 'cover';
        necklaces.style.zIndex = '3';
        necklaces.style.backgroundRepeat = "no-repeat";
    }
    // thay tóc
    if (type === 'hairstyle') {
        let hairstyle = document.querySelector('.hairstyle');
        hairstyle.style.background = `url(../${imageUrl}`;
        hairstyle.style.backgroundSize = 'cover';
        hairstyle.style.zIndex = '5';
        hairstyle.style.backgroundRepeat = "no-repeat";
    }
    

    // thay background
    if (type === 'background') {
        let bg = document.querySelector('.background');
    bg.style.backgroundImage = `url(../${imageUrl})`;
    }
    console.log('imageUrl: ', imageUrl);
    



}