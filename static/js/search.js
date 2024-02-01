document.addEventListener('DOMContentLoaded', function() {
    
    fetch('../js/goods.json')
        .then(response => response.json())
        .then(data => {
            console.log('Loaded data:', data);
            populateTable(data);

            function populateTable(data) {
                var tbody = document.getElementById('goodsTableBody');
                data.forEach(item => {
                    var tr = document.createElement('tr');
                    tr.innerHTML = `
                        <td>${item.goodsNum}</td>
                        <td><img src="${item.goodsImg}" alt="상품 이미지"></td>
                        <td>${item.brandName}</td>
                        <td>${item.goodsName}</td>
                        <td>${item.goodsPrice}</td>
                        <td>${item.goodsSaleDate}</td>
                        <td>${item.goodsTradePlace}</td>
                        <input type="hidden" value="${item.brandImg}" name="brandImg">
                    `;
                    tbody.appendChild(tr);
                });
            }

            let currentWindowName = window.name;

            switch(currentWindowName){
                case "goods-searching window":
                    console.log("상품찾기창");
                    break;
            }

            let popupTableRows = document.querySelectorAll('.popup-wrap table.table tbody tr');
            popupTableRows.forEach(function(row) {
                row.addEventListener('click', function(e) {

                    let productId = getProductIdFromRow(this);
                    // getProductIdFromRow()에서 추출, send

                    window.opener.postMessage({
                        value: productId
                    });
                    window.close();
                    
                });
            });

            function getProductIdFromRow(row) {
                let tdElements = row.querySelectorAll('td');
                let goodsData = {};
                    goodsData.goodsNum = tdElements[0].textContent.trim();
                    goodsData.goodsImg = tdElements[1].children[0].src.trim();
                    goodsData.brandName = tdElements[2].textContent.trim();
                    goodsData.goodsName = tdElements[3].textContent.trim();
                    goodsData.goodsPrice = tdElements[4].textContent.trim();
                    goodsData.goodsSaleDate = tdElements[5].textContent.trim();
                    goodsData.goodsTradePlace = tdElements[6].textContent.trim();
                    goodsData.bramdImg = row.querySelector('input[name="brandImg"]').value;
                return goodsData;
            }
        })
        .catch(error => console.log("Error fetching data: ", error));
});