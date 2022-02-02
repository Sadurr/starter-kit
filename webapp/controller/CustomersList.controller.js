sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("stk.StarterKit.controller.CustomersList", {
            onInit: function () {
  
            },
            onCustomerPress: function(oEvent){      
             var oRouter = this.getOwnerComponent().getRouter();
             oRouter.navTo("CustomerDetails", {
             CustomerID: oEvent.getSource().getBindingContext().getObject().CustomerID });
            },

            onCustomerCreate: function() {
             var oRouter = this.getOwnerComponent().getRouter();
             oRouter.navTo("CreateCustomer");
            },

            handleNavButtonPress: function(oEvent) {
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("CustomersList");
            },

            onPerformancePress: function(oEvent) {
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("Performance");
            },

            onCreate: function() {
               
                var sId = this.byId("CustomerID").getValue();
                var sName = this.byId("CustomerName").getValue();

                this.getView().getModel().create("/Customers", {
                    CustomerID: sId,
                    CustomerName: sName                 
                })
            },

            onMotivate: function(oEvent) {
                var oEmployee = oEvent.getSource().getBindingContext().getObject();
                var sEmail = oEmployee.FirstName + " " + oEmployee.LastName + "@gmail.com";
                var sSubject = "Good job!";
                var sBody = "You are doing well, thank you!";
                sap.m.URLHelper.triggerEmail(sEmail, sSubject, sBody);
            },

            onFire: function(oEvent) {
                var oEmployee = oEvent.getSource().getBindingContext().getObject();
                var sEmail = oEmployee.FirstName + " " + oEmployee.LastName + "@gmail.com";
                var sSubject = "We are disappointed!";
                var sBody = "Disappointing";

                // $.ajax({
                //     url: "generate_insult.php",
                //     data: {
                //         lang: "en",
                //         type: "json"
                //     },
                //     success: function(oResponse) {
                //         var sBody = JSON.parse(oResponse).insult;
                        sap.m.URLHelper.triggerEmail(sEmail, sSubject, sBody);
                    // }
                    // success: function(oResponse) {
                    //     alert(JSON.parse(JSON.stringify(oResponse)).insult);
                    // }
                // })
            },
            // onFire2: function() {
            //     var oModel = new sap.ui.model.json.JSONModel();
            //     oModel.loadData("evilinsult/generate_insult.php", {
            //         lang: "en",
            //         type: "json"
            //     }).then(function() {
            //         var sBody = oModel.getData().insult;
            //         sap.m.URLHelper.triggerEmail(sEmail, sSubject, sBody);
            //     })
            // }              
        });

    });
