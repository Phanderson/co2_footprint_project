  document.addEventListener("DOMContentLoaded", function () {
    let tableBody = document.querySelector("#footprint-table tbody");
    let dataSelector = document.querySelector("#data-selector");
    dataSelector.value = "countries"; 
     loadData("companies");

     dataSelector.addEventListener("change", function () {
         loadData(this.value);
     });

    function loadData(type) {
        if ($.fn.DataTable.isDataTable("#footprint-table")) {
            $('#footprint-table').DataTable().destroy();
            $('#footprint-table').empty(); 
        }
    
        // Neues Tabellen-Layout erstellen
        let tableHead = document.createElement("thead");
        let tableBody = document.createElement("tbody");
        
        // Spalten-Header je nach Auswahl setzen
        if (type === "countries") {
            tableHead.innerHTML = `
                <tr>
                    <th>Rang</th>
                    <th>Land</th>
                    <th>CO₂-Emissionen (Mio. Tonnen)</th>
                    <th>Jahr des Maximums</th>
                </tr>
            `;
    
            DATA.countries.forEach(item => {
                let row = document.createElement("tr");
                row.innerHTML = `
                    <td>${item.rang}</td>
                    <td>${item.land}</td>
                    <td>${item.menge.toLocaleString("de-DE")} Mio. Tonnen</td>
                    <td>${item.jahr}</td>
                `;
                tableBody.appendChild(row);
            });
        } else if (type === "companies") {
            tableHead.innerHTML = `
                <tr>
                    <th>Rang</th>
                    <th>Unternehmen</th>
                    <th>CO₂-Emissionen (Tonnen)</th>
                    <th>Land</th>
                </tr>
            `;
    
            DATA.companies.forEach(item => {
                let row = document.createElement("tr");
                row.innerHTML = `
                    <td>${item.rang}</td>
                    <td>${item.unternehmen}</td>
                    <td>${item.menge.toLocaleString("de-DE")} Tonnen</td>
                    <td>${item.land}</td>
                `;
                tableBody.appendChild(row);
            });
        }
    
        // Neues `thead` und `tbody` an Tabelle anhängen
        let table = document.querySelector("#footprint-table");
        table.appendChild(tableHead);
        table.appendChild(tableBody);
    
        // DataTables neu initialisieren
        $('#footprint-table').DataTable({
            "paging": true,
            "searching": true,
            "ordering": true,
            "info": true,
            "language": {
                "lengthMenu": "Zeige _MENU_ pro Seite",
                "zeroRecords": "Keine passenden Daten gefunden",
                "info": "Zeige _START_ bis _END_ von _TOTAL_ Einträgen",
                "infoEmpty": "Keine Einträge verfügbar",
                "search": "Suchen:",
                "paginate": {
                    "first": "Erste",
                    "last": "Letzte",
                    "next": "Weiter",
                    "previous": "Zurück"
                }
            }
        });
    }
    
    

    // Standardmäßig Länder laden
    loadData("countries");

    // Event Listener für Dropdown-Menü
    dataSelector.addEventListener("change", function () {
        loadData(this.value);
    });
});

//Menü Ein / Ausblenden
document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu-button");
    const menuDropdown = document.querySelector(".menu-dropdown");

    menuButton.addEventListener("click", function (event) {
        event.stopPropagation(); // Verhindert, dass der Klick das Menü sofort schließt
        menuDropdown.classList.toggle("active");
    });

    // Schließt das Menü, wenn man außerhalb klickt
    document.addEventListener("click", function (event) {
        if (!menuButton.contains(event.target) && !menuDropdown.contains(event.target)) {
            menuDropdown.classList.remove("active");
        }
    });
});


  