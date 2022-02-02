sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "stk/starterkit/model/formatter"
    // "stk/starterkit/view/ContactInfoDialog"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Formatter) {
        "use strict";

        return Controller.extend("stk.StarterKit.controller.CustomerDetails", {
            formatter: Formatter,
            onInit: function () {
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.getRoute("CustomerDetails").attachPatternMatched(this._onPatternMatched, this);
            },
            _onPatternMatched: function (oEvent) {
                this.getView().bindElement({
                    path: "/Customers('" + oEvent.getParameter("arguments").CustomerID + "')",
                    parameters: {
                        expand: "Orders"
                    }
                }); 
            },
            handleNavButtonPress: function(oEvent) {
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("CustomersList");
            },

            onPress: function() {
                var oView = this.getView();

                if(!this.byId("contactDialog")) {
                    Fragment.load({
                        id: oView.getId(),
                        name: "stk.StarterKit.view.ContactInfoDialog"

                    }).then(function(oDialog) {
                        oView.addDependent(oDialog);
                        oDialog.open();
                    });
                } else {
                    this.byId("contactDialog").open();                    
                }
            },
                // not working
            onExit: function(event) {
                var oView = this.getView();

                if(!this.byId("contactDialog")) {
                    Fragment.load({
                        id: oView.getId(),
                        name: "stk.StarterKit.view.ContactInfoDialog"

                    }).then(function(oDialog) {
                        oView.addDependent(oDialog);
                        oDialog.close();
                    });
                } else {
                    this.byId("contactDialog").close();                    
                }
             
            }
        });
    });
