!function(){function e(){Excel.run((function(e){var o=e.workbook.worksheets.getActiveWorksheet().tables.add("A1:D1",!0);return o.name="ExpensesTable",o.getHeaderRowRange().values=[["Date","Merchant","Category","Amount"]],o.rows.add(null,[["1/1/2017","The Phone Company","Communications","120"],["1/2/2017","Northwind Electric Cars","Transportation","142.33"],["1/5/2017","Best For You Organics Company","Groceries","27.9"],["1/10/2017","Coho Vineyard","Restaurant","33"],["1/11/2017","Bellows College","Education","350.1"],["1/15/2017","Trey Research","Other","135"],["1/15/2017","Best For You Organics Company","Groceries","97.88"]]),o.columns.getItemAt(3).getRange().numberFormat=[["€#,##0.00"]],o.getRange().format.autofitColumns(),o.getRange().format.autofitRows(),e.sync()})).catch((function(e){console.log("Error: "+e),e instanceof OfficeExtension.Error&&console.log("Debug info: "+JSON.stringify(e.debugInfo))}))}function o(){Excel.run((function(e){return e.workbook.worksheets.getActiveWorksheet().tables.getItem("ExpensesTable").columns.getItem("Category").filter.applyValuesFilter(["Education","Groceries"]),e.sync()})).catch((function(e){console.log("Error: "+e),e instanceof OfficeExtension.Error&&console.log("Debug info: "+JSON.stringify(e.debugInfo))}))}function n(){Excel.run((function(e){return e.workbook.worksheets.getActiveWorksheet().tables.getItem("ExpensesTable").sort.apply([{key:1,ascending:!1}]),e.sync()})).catch((function(e){console.log("Error: "+e),e instanceof OfficeExtension.Error&&console.log("Debug info: "+JSON.stringify(e.debugInfo))}))}Office.onReady((function(t){t.host===Office.HostType.Excel&&(Office.context.requirements.isSetSupported("ExcelApi","1.7")||console.log("Sorry. The tutorial add-in uses Excel.js APIs that are not available in your version of Office."),document.getElementById("create-table").onclick=e,document.getElementById("filter-table").onclick=o,document.getElementById("sort-table").onclick=n,document.getElementById("open-dialog").onclick=r,document.getElementById("sideload-msg").style.display="none",document.getElementById("app-body").style.display="flex")}));var t=null;function r(){Office.context.ui.displayDialogAsync("https://xrq1051.github.io/excelAddin/popup.html",{height:45,width:25},(function(e){(t=e.value).addEventHandler(Office.EventType.DialogMessageReceived,c)}))}function c(e){document.getElementById("user-name").innerHTML=e.message,t.close()}}();
//# sourceMappingURL=taskpane.js.map